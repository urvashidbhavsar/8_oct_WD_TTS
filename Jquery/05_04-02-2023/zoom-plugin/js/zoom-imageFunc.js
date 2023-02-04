var $ = jQuery.noConflict();

$(document).ready(function () {
  // Image zoom plugin code
  var zoomImage = $("#imageZoom");
  // var zoomImage = $("#imageZoom1");

  var zoomImageExtra = $("#imageZoomExtra");
  var zoomImagePlus = $("#imageZoomExtraPlus");
  var zoomImages = $(".zoom-images");

  zoomImage.imageZoom();
  zoomImageExtra.imageZoom({ zoom: 200 });
  zoomImagePlus.imageZoom({ zoom: 300 });

  zoomImages.each(function () {
    $(this).imageZoom();
  });
});
