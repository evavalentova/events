$(".btn1").on("click", () => {
  console.log("Yeah, you clicked me.");
});

$(".btn2").on("click", () => {
  $(".btn1").text("Sumbit too");
});

//Get
let hodnota = $("#color").val();

$(".btn3").on("click", () => {
  $(".btn1").css("background", hodnota);
  $(".btn2").css("background", hodnota);
  $(".btn3").css("background", hodnota);
});
