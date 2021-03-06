name := """color-controversy"""
organization := "leo"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SwaggerPlugin)

scalaVersion := "2.13.3"

libraryDependencies += guice
libraryDependencies += jdbc
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test
libraryDependencies += "org.webjars" % "swagger-ui" % "2.2.0"
libraryDependencies += "org.postgresql" % "postgresql" % "42.2.16"

// SwaggerPlugin (https://github.com/iheartradio/play-swagger)
swaggerPrettyJson := true
swaggerDomainNameSpaces := Seq("models")
