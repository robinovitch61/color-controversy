package models

import play.api.libs.json.{Json, Writes}

case class Color(hex: String)
object Color {
  val example = Color("#fffff")

  implicit val colorWrites = new Writes[Color] {
    def writes(color: Color) = Json.obj(
      "hex"  -> color.hex
    )
  }
}

case class Version(playVersion: String)
object Version {
  val version = Version(play.core.PlayVersion.current)

  implicit val versionWrites = new Writes[Version] {
    def writes(version: Version) = Json.obj(
      "playVersion"  -> version.playVersion
    )
  }
}
