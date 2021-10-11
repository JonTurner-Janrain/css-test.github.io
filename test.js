janrain.settings.capture = janrain.settings.capture || {}
janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad = janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad || []
janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad.push(function() {
  // console.log('Testing');
  // alert("This is test alert box");
  janrain.events.onProviderLoginStart.addHandler(function(result) {
    alert("onProviderLoginStart");
    console.log("*** onProviderLoginStart...");
    console.log(result.provider);
  });
  janrain.events.onProviderLoginSuccess.addHandler(function(result) {
    alert("onProviderLoginSuccess");
    console.log("*** onProviderLoginSuccess...");
    console.log(event);
  });
  janrain.events.onCaptureSaveSuccess.addHandler(function(result) {
    alert("onCaptureSaveSuccess");
    console.log("*** onCaptureSaveSuccess...");
    console.log(result.status); // result.authProvider);
  });
});

// janrain.debug.enable();
/*
function janrainCaptureWidgetOnLoad() {
    janrain.events.onProviderLoginSuccess.addHandler(function(result) {
        alert("onProviderLoginSuccess");
        console.log('before');
        console.log(event);
        console.log('after');
    });
};
*/
