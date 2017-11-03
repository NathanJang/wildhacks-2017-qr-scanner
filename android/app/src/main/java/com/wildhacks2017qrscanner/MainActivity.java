package com.wildhacks2017qrscanner;

import com.reactnativenavigation.controllers.SplashActivity;

import android.graphics.Color;
import android.view.View;

public class MainActivity extends SplashActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    // @Override
    // protected String getMainComponentName() {
    //     return "Wildhacks2017QRScanner";
    // }

    public View createSplashLayout() {
        View view = new View(this);
        view.setBackgroundColor(Color.rgb(0x24, 0x24, 0x24));
        return view;
    }
}
