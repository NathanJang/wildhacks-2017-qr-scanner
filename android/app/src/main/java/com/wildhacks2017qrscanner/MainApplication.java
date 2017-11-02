package com.wildhacks2017qrscanner;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication implements ReactApplication {
  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

   private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
     @Override
     public boolean getUseDeveloperSupport() {
       return BuildConfig.DEBUG;
     }

     @Override
     protected List<ReactPackage> getPackages() {
       return Arrays.<ReactPackage>asList(
           new RCTCameraPackage()
       );
     }
   };

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
            new RCTCameraPackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
