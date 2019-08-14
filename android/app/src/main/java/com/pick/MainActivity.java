package com.pick;

import android.view.KeyEvent;

import androidx.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "pick";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {
        @Override
        protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
        }
      };
    }

    // private void sendEvent(ReactContext reactContext, String eventName,
    //                        @Nullable WritableMap params){
    //     reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
    //             .emit(eventName,params);
    // }
    //
    // @Override
    // public boolean dispatchKeyEvent(KeyEvent event){
    //     ReactContext reactContext=getReactInstanceManager().getCurrentReactContext();
    //     WritableMap params= Arguments.createMap();
    //     int keycode=event.getKeyCode();
    //     params.putInt("which",event.getKeyCode());
    //     if(event.getAction()==KeyEvent.ACTION_UP){
    //         sendEvent(reactContext,"keyUp",params);
    //     }
    //     return false;
    // }
}
