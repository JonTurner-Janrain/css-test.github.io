janrain.settings.capture = janrain.settings.capture || {}
janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad = janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad || []
janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad.push(function() {
  // console.log('Testing');
  // alert("This is test alert box");
  janrain.events.onProviderLoginSuccess.addHandler(function(result) {
    alert("onProviderLoginSuccess");
    console.log('before');
    console.log(event);
    console.log('after');
  });
  janrain.events.onCaptureSaveSuccess.addHandler(function(result) {
    alert("onCaptureSaveSuccess");
    console.log(result.status); // result.authProvider);
    console.log(event);
    console.log('cool');
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
