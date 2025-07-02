package com.anonymous.testingintegrationflutterapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import io.flutter.embedding.android.FlutterActivity

class FlutterBridgeModule(reactContext: ReactApplicationContext)
    : ReactContextBaseJavaModule(reactContext) {

    @ReactMethod
    fun openFlutter() {
//        val intent = FlutterActivity
//            .withCachedEngine("flutter_counter")
//            .build(currentActivity!!)
//        currentActivity!!.startActivity(intent)

        val intent = FlutterActivity.withNewEngine().build(currentActivity!!)

        currentActivity!!.startActivity(intent)

    }

    override fun getName() = "FlutterBridge"
}