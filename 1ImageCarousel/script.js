const images = [
  {
    img: "1.jpg",
  },
  {
    img: "2.jpg",
  },
  {
    img: "3.jpg",
  },
  {
    img: "4.jpg",
  },
  {
    img: "5.jpg",
  },
];
var image = document.querySelector(".carousel img");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var current = 0;
var interval;
function forward() {
  interval = setInterval(function () {
    current = (current + 1) % images.length;
    image.setAttribute("src", `${images[`${current}`].img}`);
    console.log(current);
  }, 4000);
}
forward();
left.addEventListener("click", function () {
  current = (current - 1 + images.length) % images.length;
  console.log("clicked");
  clearInterval(interval);
  image.setAttribute("src", `${images[`${current}`].img}`);
  forward();
});
right.addEventListener("click",function(){
    current = (current + 1)%images.length;
    console.log("clicked");
    clearInterval(interval);
    image.setAttribute("src",`${images[`${current}`].img}`);
    forward();
});
