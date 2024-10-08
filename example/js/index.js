const pathElems = document.querySelectorAll("svg path");

anime({
  targets: pathElems,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  loop: true,
  delay: function (el, i) {
    console.log("i är:", i);
    return i * 300;
  },
  direction: "alternate",
});
