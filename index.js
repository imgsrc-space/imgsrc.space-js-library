document.addEventListener("DOMContentLoaded", change);

function change(params) {
  image();
  video();
  videosource();
}
function image(params) {
  const element = document.getElementsByTagName("img");
  for (var i = 0, length1 = element.length; i < length1; i++) {
    console.log(decodeURI(element[i].src.split("/").at(-1)));
    let filename = decodeURI(element[i].src.split("/").at(-1)).split(" ");
    console.log(filename);
    if (filename[0] == ".") {
      filename.shift();
      let resultString = filename.join(" ");
      resultString = resultString.trim();
      console.log(resultString);
      let originalname = "https://imgsrc.space/" + resultString;
      element[i].src = originalname;
    }
  }
}

function video(params) {
  const element = document.getElementsByTagName("video");
  for (var i = 0, length1 = element.length; i < length1; i++) {
    console.log(decodeURI(element[i].src.split("/").at(-1)));
    let filename = decodeURI(element[i].src.split("/").at(-1)).split(" ");
    console.log(filename);
    if (filename[0] == ".") {
      filename.shift();
      let resultString = filename.join(" ");
      resultString = resultString.trim();
      console.log(resultString);
      let originalname = "https://imgsrc.space/" + resultString;
      element[i].src = originalname;
    }
  }
}



function videosource(params) {
  const element = document.getElementsByTagName("source");
  for (var i = 0, length1 = element.length; i < length1; i++) {
    console.log(decodeURI(element[i].src.split("/").at(-1)));
    let filename = decodeURI(element[i].src.split("/").at(-1)).split(" ");
    console.log(filename);
    if (filename[0] == ".") {
      filename.shift();
      let resultString = filename.join(" ");
      resultString = resultString.trim();
      console.log(resultString);
      let originalname = "https://imgsrc.space/" + resultString;
      element[i].src = originalname;
    }
  }
}
