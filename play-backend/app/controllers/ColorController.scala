package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._
import models.{DbModel, _}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class ColorController @Inject() (
  db: DbModel,
  val cc: ControllerComponents
) extends AbstractController(cc) {

  /**
   * Create an Action to render an HTML page.
   *
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def version() = Action { implicit request: Request[AnyContent] =>
    val json = Json.toJson(Version.version)
    Ok(json)
  }

  def randomColor() = Action { implicit request: Request[AnyContent] =>
    val json = Json.toJson(db.randomColor())
    Ok(json)
  }

  def getColor(color: String) = Action { implicit request: Request[AnyContent] =>
    val json = Json.toJson(Color.example.copy(hex = color))
    Ok(json)
  }

  def ranking(limit: Int) = Action { implicit request: Request[AnyContent] =>
    val json = Json.toJson(Color.exampleSet.take(limit))
    Ok(json)
  }

  def allColors() = Action { implicit request: Request[AnyContent] =>
    val json = Json.toJson(Seq("#ffffff", "#ffffab", "#101010"))
    Ok(json)
  }
}
