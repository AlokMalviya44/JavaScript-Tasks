var input = document.querySelector(".input");
var form = document.querySelector("form");
var timer = document.querySelector(".timer");
var rh = document.querySelector(".timer .hours .rh");
var rm = document.querySelector(".timer .min .rm");
var rs = document.querySelector(".timer .sec .rs");
var interval;
var timeup = document.querySelector(".timeup");
var over = document.querySelector(".over");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var hours = Number(document.querySelector("#hours").value) || 0;
  var min = Number(document.querySelector("#min").value) || 0;
  var sec = Number(document.querySelector("#sec").value) || 0;
  rh.innerHTML = hours;
  rm.innerHTML = min;
  rs.innerHTML = sec;
  var totaltime = hours * 3600 + min * 60 + sec;
  var tmp = totaltime;
  console.log(totaltime);
  timer.classList.remove("hidden");
  interval = setInterval(function () {
    totaltime -= 1;
    var hh = Math.floor(totaltime / 3600);
    var mm = Math.floor((totaltime % 3600) / 60);
    var ss = totaltime % 60;

    rh.innerHTML = hh;
    rm.innerHTML = mm;
    rs.innerHTML = ss;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    over.classList.remove("hidden");
    timeup.classList.remove("hidden");
    setTimeout(() => {
      over.classList.add("hidden");
      timeup.classList.add("hidden");
      timer.classList.add("hidden");
      form.submit();
    }, 5000);
  }, tmp * 1000 + 1);
});
