package models

import play.api.libs.json.{Json, Reads, Writes}

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

case class ColorJudgement(color: String, choice: String)
object ColorJudgement {
  val example = ColorJudgement("#ff00ff", "Red")

  implicit val format = Json.format[ColorJudgement]
}

object ColorChoice extends Enumeration {
  type ColorChoice = Value

  val Red = Value("Red")
  val Orange = Value("Orange")
  val Yellow = Value("Yellow")
  val Green = Value("Green")
  val Blue = Value("Blue")
  val Pink = Value("Pink")
  val Purple = Value("Purple")

  implicit val reads = Reads.enumNameReads(ColorChoice)
  implicit val writes = Writes.enumNameWrites
}
