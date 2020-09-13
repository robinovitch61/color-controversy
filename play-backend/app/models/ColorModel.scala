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
  val example = Color("#4632a8", "blue", "green", 45, 55)
  implicit val format = Json.format[Color]
}

case class ColorJudgement(color: String, choice: String)
object ColorJudgement {
  implicit val format = Json.format[ColorJudgement]
}

object ColorChoice extends Enumeration {
  type ColorChoice = Value

  val Red = Value("red")
  val Orange = Value("orange")
  val Yellow = Value("yellow")
  val Green = Value("green")
  val Blue = Value("blue")
  val Pink = Value("pink")
  val Purple = Value("purple")

  implicit val reads = Reads.enumNameReads(ColorChoice)
  implicit val writes = Writes.enumNameWrites
}
