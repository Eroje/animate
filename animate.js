


 function simpleMessage () {
    alert("This is a simple alert box")
}

setTimeout (simpleMessage, 5000); 

var myImage = document.getElementById("batman");

var imageArray = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg"];

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage, 5000);