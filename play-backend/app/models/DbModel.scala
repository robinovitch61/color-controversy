package models

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
      Color(
        hex = rs.getString("hex"),
        firstOption = rs.getString("first_option"),
        secondOption = rs.getString("second_option"),
        nFirst = rs.getInt("n_first"),
        nSecond = rs.getInt("n_second")
      )
    }
  }

  def persistChoice(hexColor: String, choice: ColorChoice): Unit = {
    db.withConnection { conn =>
      val stmt = conn.createStatement
      println(s"hexColor: ${hexColor}, choice: $choice")
      stmt.executeUpdate(
        s"""
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
}
