package models

import javax.inject._
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
      val rs = stmt.executeQuery("" +
        "SELECT * FROM color OFFSET FLOOR(RANDOM() * (SELECT COUNT(*) FROM color)) LIMIT 1;"
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
}
