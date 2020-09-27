/* function set() {
    var sunTxt = document.getElementById("sun");
    sunTxt.addEventListener("mouseover", showSunTxt);
}

function showSunTxt() {
}

setTimeout(set, 1000); */

// js is too obtuse :(  used jquery

$(document).ready(function () {
  $("#sun").mouseenter(function () {
    // $("#explanationbox");
    $("#suntxt").fadeIn(4000);
  });
  $("#sun").mouseleave(function () {
    // $("#explanationbox");
    $("#suntxt").fadeOut(2000);
  });
  $("#mercury").mouseenter(function () {
    // $("#explanationbox");
    $("#mertxt").fadeIn(4000);
  });
  $("#mercury").mouseleave(function () {
    // $("#explanationbox");
    $("#mertxt").fadeOut(2000);
  });
  $("#venus").mouseenter(function () {
    // $("#explanationbox");
    $("#ventxt").fadeIn(4000);
  });
  $("#venus").mouseleave(function () {
    // $("#explanationbox");
    $("#ventxt").fadeOut(2000);
  });
  $("#earth").mouseenter(function () {
    // $("#explanationbox");
    $("#eartxt").fadeIn(4000);
  });
  $("#earth").mouseleave(function () {
    // $("#explanationbox");
    $("#eartxt").fadeOut(2000);
  });
  //   mars
  $("#mars").mouseenter(function () {
    // $("#explanationbox");
    $("#marstxt").fadeIn(4000);
  });
  $("#mars").mouseleave(function () {
    // $("#explanationbox");
    $("#marstxt").fadeOut(2000);
  });
  //   jupiter
  $("#jupiter").mouseenter(function () {
    // $("#explanationbox");
    $("#jupitertxt").fadeIn(4000);
  });
  $("#jupiter").mouseleave(function () {
    // $("#explanationbox");
    $("#jupitertxt").fadeOut(2000);
  });
  //   saturn
  $("#saturn").mouseenter(function () {
    // $("#explanationbox");
    $("#saturntxt").fadeIn(4000);
  });
  $("#saturn").mouseleave(function () {
    // $("#explanationbox");
    $("#saturntxt").fadeOut(2000);
  });

  //   uranus
  $("#uranus").mouseenter(function () {
    // $("#explanationbox");
    $("#uranustxt").fadeIn(4000);
  });
  $("#uranus").mouseleave(function () {
    // $("#explanationbox");
    $("#uranustxt").fadeOut(2000);
  });
});
