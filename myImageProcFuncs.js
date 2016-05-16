var imgFileName = "";
var img;

function setup() {
  createNewImage("myCanvas", 100, 100);
}

function reset() {
  if (imgFileName != "") {
    // load the picture again
    loadImage("myCanvas", imgFileName);
  }
  else{
    // no image previously loaded: load the empty image again
    setup();
  }
}

function loadMyImage() {
  imgFileName = prompt("File name or URL of image:");
  loadImage("myCanvas", imgFileName);
}

function loadBear() {
  imgFileName = "bear.jpg";
  loadImage("myCanvas", imgFileName);
}

function drawRedLine() {
  img = getLoadedImage(imgFileName);
  var h = getHeight(img);
  for (var x = 0; x < getWidth(img); x++) {
    setRGB(img, x, h/2, 255, 0, 0);
  }
  repaint(img, "myCanvas");
}
