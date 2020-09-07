package models

import play.api.libs.json.{Json, Writes}

case class Version(playVersion: String)
object Version {
  val version = Version(play.core.PlayVersion.current)

  implicit val format = Json.format[Version]
}

case class Color(
  hex: String,
  firstOption: String,
  secondOption: String,
  nFirst: Int,
  nSecond: Int
)
object Color {
  val example = Color("#ffffff", "blue", "green", 102, 97)
  val exampleSet = Seq(
    Color("#ffffff", "blue", "green", 102, 97),
    Color("#00000", "blue", "green", 32, 78)
  )

  implicit val format = Json.format[Color]
}