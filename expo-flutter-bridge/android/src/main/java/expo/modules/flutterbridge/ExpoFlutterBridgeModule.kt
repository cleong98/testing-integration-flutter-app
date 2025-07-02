package expo.modules.flutterbridge

import android.app.Activity
import android.content.Context
import android.content.Intent
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import io.flutter.embedding.android.FlutterActivity

class ExpoFlutterBridgeModule : Module() {

  private val reactCtx get() = appContext.reactContext
    ?: throw Exceptions.ReactContextLost()

  private val activity: Activity get() =
    appContext.activityProvider?.currentActivity
      ?: throw IllegalStateException("No foreground Activity available")

  override fun definition() = ModuleDefinition {
    Name("ExpoFlutterBridge")

    Function("openCounter") {
      // 1) Use the real Activity if you can
      val ctx = try { activity } catch (e: Exception) {
        // fallback to application context
        reactCtx
      }

      // 2) Build your FlutterActivity intent
      val intent = FlutterActivity
        .withNewEngine()
        .initialRoute("/")
        .build(ctx)

      // 3) If ctx isn’t an Activity, you must add NEW_TASK
      if (ctx !is Activity) {
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      }

      // 4) Launch
      ctx.startActivity(intent)
      null
    }
  }
}