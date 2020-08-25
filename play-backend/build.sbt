name := """color-controversy"""
organization := "leo"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SwaggerPlugin)

scalaVersion := "2.13.3"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test
libraryDependencies += "org.webjars" % "swagger-ui" % "2.2.0"

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "leo.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "leo.binders._"

// SwaggerPlugin (https://github.com/iheartradio/play-swagger)
swaggerPrettyJson := true
swaggerDomainNameSpaces := Seq("models")
