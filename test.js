janrain.settings.capture = janrain.settings.capture || {}
janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad = janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad || []
janrain.settings.capture.beforeJanrainCaptureWidgetOnLoad.push(function() {
  console.log('Testing');
  alert("This is test alert box");
});

function janrainCaptureWidgetOnLoad() {
    janrain.events.onProviderLoginSuccess.addHandler(function(result) {
        console.log('before');
        // console.log(event);
        console.log('after');
    });
};
