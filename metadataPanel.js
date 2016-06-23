(function(M) {

  M.metadataPlugin = function(){
    console.log("metadataPlugin1");
    var that = this;

    $(document).ready(function(){

      $windowTitle = $(window.mirador.viewer.element).has('.window-manifest-title');
      console.log($windowTitle);
      console.log($windowTitle.html());


      var $sidePanel = $('.content-container .sidePanel');
      console.log(window.mirador.viewer);
      console.log($(window.mirador.viewer.element).find('.window-manifest-title'));


      // get the data
      var manifestUri = window.mirador.viewer.data[0].manifestUri;
      var datas = [];
      $.getJSON(manifestUri, function(data) {
        //console.log(data);
        // an array of data
        //console.log(data.sequences[0].canvases);
        datas = data.sequences[0].canvases;

      });

      // on an event, populate the sidePanel
      // what's the event?
      //var imageView = $('.image-view')[0];
      var viewContainer = $('.content-container');
      console.log(viewContainer);

      var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
          console.log(mutation.type);
        });
      });

      observer.observe(viewContainer, {attributes: true, childList: true, characterData: true});


      // get the id of the current image...

      console.log(window.mirador);
      var ee = window.mirador.eventEmitter;
      window.mirador.eventEmitter.subscribe(('currentCanvasIDUpdated.' + window.mirador.windowId), function(event) {
        console.log("changed...");
      });



      /*
      var mirador = window.mirador;
      console.log(mirador);
      console.log(mirador.viewer.element);
      $windowTitle = jQuery(mirador.viewer.element).find('.window-manifest-title');
      console.log($windowTitle);
      console.log($windowTitle.html());
      */
      //jQuery('.window-manifest-title').html("asdf");

    });


  };

})(Mirador);
