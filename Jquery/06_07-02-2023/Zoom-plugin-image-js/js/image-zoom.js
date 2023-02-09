var currentImage = 1;
var defaultOptions = {
  width: 400,
  height: 250,
  zoomWidth: 500,
  img: "1.jpg",
  offset: { vertical: 0, horizontal: 10 },
};
var options;
resetOptions();

var container = document.getElementById("container");
var optionsHeader = document.getElementById("zoomOptions");
var killButton = document.getElementById("kill");
var setupButton = document.getElementById("setup");
var resetButton = document.getElementById("reset");
optionsHeader.innerHTML = "Options: " + JSON.stringify(options);
window.imageZoom = new ImageZoom(container, options);

function resetOptions() {
  options = JSON.parse(JSON.stringify(defaultOptions)); // widely supported deep copy
}

function updateButtonStatus() {
  if (window.imageZoom) {
    killButton.disabled = false;
    resetButton.disabled = false;
    setupButton.disabled = true;
  } else {
    killButton.disabled = true;
    resetButton.disabled = true;
    setupButton.disabled = false;
  }
}

function killImageZoom(imageZoom) {
  window[imageZoom].kill();
  delete window[imageZoom];
  updateButtonStatus();
}

function setupImageZoom(imageZoom) {
  window[imageZoom] = new ImageZoom(container, options);
  updateButtonStatus();
}

function resetImageZoom(imageZoom) {
  window[imageZoom].kill();
  window[imageZoom] = new ImageZoom(container, options);
}

function changeScale() {
  var scale = document.querySelector('input[name = "Scale"]:checked').value;
  if (scale > 0) {
    options.scale = scale;
  } else {
    delete options.scale;
  }
  optionsHeader.innerHTML = "Options: " + JSON.stringify(options);
  killImageZoom("imageZoom");
  window.imageZoom = new ImageZoom(container, options);
  updateButtonStatus();
}

function changeZoomPosition() {
  var zoomPosition = document.querySelector(
    'input[name = "ZoomPosition"]:checked'
  ).value;
  if (zoomPosition !== "default") {
    options.zoomPosition = zoomPosition;
  } else {
    delete options.zoomPosition;
  }
  optionsHeader.innerHTML = "Options: " + JSON.stringify(options);
  killImageZoom("imageZoom");
  window.imageZoom = new ImageZoom(container, options);
  updateButtonStatus();
}

function changeFillContainerSetting() {
  var fillContainer = document.querySelector(
    'input[name="FillContainer"]'
  ).checked;
  if (fillContainer === true) {
    document.getElementById("container").classList.add("onehundredpercent");
    delete options.width;
    delete options.height;
    delete options.zoomWidth;
  } else {
    document.getElementById("container").classList.remove("onehundredpercent");
    resetOptions();
  }
  optionsHeader.innerHTML = "Options: " + JSON.stringify(options);
  resetImageZoom("imageZoom");
}

function changeImage(imageZoom) {
  currentImage = currentImage === 1 ? 2 : 1;
  options.img = currentImage + ".jpg";
  resetImageZoom(imageZoom);
}
