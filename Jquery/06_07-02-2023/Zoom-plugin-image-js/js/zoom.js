var options1 = {
  width: 400,
  zoomWidth: 500,
  offset: { vertical: 0, horizontal: 10 },
};

// If the width and height of the image are not known or to adjust the image to the container of it
var options2 = {
  fillContainer: true,
  offset: { vertical: 0, horizontal: 10 },
};
new ImageZoom(document.getElementById("img-container"), options2);
new ImageZoom(document.getElementById("img-container1"), options2);
new ImageZoom(document.getElementById("img-container2"), options2);
