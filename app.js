$(".btn1").on("click", () => {
  console.log("Yeah, you clicked me.");
});

$(".btn2").on("click", () => {
  $(".btn1").text("Sumbit too");
});

$(".btn3").on("click", () => {
  $(".btn1").css("background", "purple");
  $(".btn2").css("background", "salmon");
  $(".btn3").css("background", "pink");
});
