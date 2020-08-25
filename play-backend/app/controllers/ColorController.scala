package controllers

import javax.inject._
import play.api._
import play.api.libs.functional.syntax.{toFunctionalBuilderOps, unlift}
import play.api.libs.json.JsPath
import play.api.mvc._
import play.api.libs.json._
import models.{Color, Version}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class ColorController @Inject()(val cc: ControllerComponents) extends AbstractController(cc) {


  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index() = Action { implicit request: Request[AnyContent] =>
    val json = Json.toJson(Color.example)
    Ok(json)
  }

  def version() = Action { implicit request: Request[AnyContent] =>
    val json = Json.toJson(Version.version)
    Ok(json)
  }
}
