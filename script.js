//create function that works on mouse enter and mouse leave events
//mouseenter: move our div to right
//mouseleave: move our div back
$("#container").hover(
  function () {
    $(this).animate({ left: "0px" });
  },
  function () {
    $(this).animate({ left: "-100px" });
  }
);

//All <ul> elements have display property set to none (setted in css sheet).
//Firstly we show our first <ul> and set its display to block.
$("ul:eq(0)").css("display", "block");

//Add event listener (click) to menu name (span element),
//which has callbackfunction that shows the next element(ul element).
$("span").on("click", function () {
  $("ul").css("display", "none");
  $(this).next().slideDown();
});
