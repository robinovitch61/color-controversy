package models

import java.sql.ResultSet

import javax.inject._
import models.ColorChoice.ColorChoice
import play.api.db._

class DbModel @Inject() (db: Database) {
  def test() = {
    var outString = "Number is "
    db.withConnection { conn =>
      val stmt = conn.createStatement
      val rs = stmt.executeQuery("SELECT 9 as testkey ")

      while (rs.next()) {
        outString += rs.getString("testkey")
      }
    }

    println(s"\n\n$outString\n\n")
  }

  def randomColor(): Color = {
    db.withConnection { conn =>
      val stmt = conn.createStatement
      val rs = stmt.executeQuery(
        """
          |SELECT *
          |FROM color
          |OFFSET FLOOR(RANDOM() * (SELECT COUNT(*) FROM color))
          |LIMIT 1;""".stripMargin
      )
      rs.next()
      getNextColor(rs)
    }
  }

  def persistChoice(hexColor: String, choice: ColorChoice): Unit = {
    db.withConnection { conn =>
      val stmt = conn.createStatement
      println(s"hexColor: ${hexColor}, choice: $choice")
      stmt.executeUpdate(
        s"""
          | -- this could maybe be simplified if the frontend just passed something like "choseFirst" boolean
          | -- instead of the actual choice. Might change if performance degrades.
          |UPDATE color
          |SET    n_first = CASE WHEN (color.hex = '${hexColor}' AND color.first_option = '${choice}') THEN n_first + 1 ELSE n_first END
          |     , n_second = CASE WHEN (color.hex = '${hexColor}' AND color.second_option = '${choice}') THEN n_second + 1 ELSE n_second END
          |;""".stripMargin
      )
    }
  }

  def getAllColors(): Seq[String] = {
    db.withConnection { conn =>
      val stmt = conn.createStatement
      val rs = stmt.executeQuery(
        """
          |SELECT hex
          |FROM color;""".stripMargin
      )
      new Iterator[String] {
        def hasNext = rs.next()
        def next() = rs.getString("hex")
      }.to(LazyList)
    }
  }

  def getRankings(limit: Int): Seq[Color] = {
    db.withConnection { conn =>
      val stmt = conn.createStatement
      val rs = stmt.executeQuery(
        s"""
          |SELECT *
          |FROM color
          |WHERE (n_first > 10) OR (n_second > 10) -- exclude unvoted-on colors
          |ORDER BY
          |   ABS(CAST(n_first AS DECIMAL) / (n_first + n_second) - 0.5) ASC,
          |   (n_first + n_second) DESC
          |LIMIT ${limit};""".stripMargin
      )
      new Iterator[Color] {
        def hasNext = rs.next()
        def next() = getNextColor(rs)
      }.to(LazyList)
    }
  }

  private def getNextColor(rs: ResultSet): Color = {
    Color(
      hex = rs.getString("hex"),
      firstOption = rs.getString("first_option"),
      secondOption = rs.getString("second_option"),
      nFirst = rs.getInt("n_first"),
      nSecond = rs.getInt("n_second")
    )
  }
}
