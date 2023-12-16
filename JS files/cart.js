var btnSub = document.getElementById("btn-sub");
var btnAdd = document.getElementById("btn-add");
var clearItem = document.getElementById("delete-item");
var mentionedPrice = document.getElementById("item-price");
var finalPrice = document.getElementById("final-price");
var shipPrice = document.getElementById("ship-price");
var itemName = document.getElementById("item-name");
var mainItem = document.getElementById("main-item");
var val = document.getElementById("no-of-items");
var totalPrice = document.getElementById("total-price");
var price = 15;
var sPrice = 5;
val.value = 1;
mentionedPrice.innerHTML = `$` + price;
itemName.innerHTML = mainItem.innerHTML + ` x ` + val.value;
finalPrice.innerHTML = mentionedPrice.innerHTML;
totalPrice.innerHTML = `$` + ((price * val.value) + sPrice) ;
shipPrice.innerHTML = `$` + sPrice;


btnSub.addEventListener("click", () => {
  if (val.value > 1) {
    val.value = val.value - 1;
    mentionedPrice.innerHTML = `$` + price * val.value;
    itemName.innerHTML = mainItem.innerHTML + ` x ` + val.value;
    finalPrice.innerHTML = mentionedPrice.innerHTML;
    totalPrice.innerHTML = `$` + ((price * val.value) + sPrice) ;
  } else {
    val.value == 1;
    mentionedPrice.innerHTML = `$` + 15;
  }
});

btnAdd.addEventListener("click", () => {
  val.value++;
  mentionedPrice.innerHTML = `$` + price * val.value;
  finalPrice.innerHTML = mentionedPrice.innerHTML;
  itemName.innerHTML = mainItem.innerHTML + ` x ` + val.value;
  totalPrice.innerHTML = `$` + ((price * val.value) + sPrice) ;

});

clearItem.addEventListener("click", () => {
  val.value = 0;
  mentionedPrice.innerHTML = `-`;
  finalPrice.innerHTML = mentionedPrice.innerHTML;
  itemName.innerHTML = mainItem.innerHTML + ` x ` + val.value;
  totalPrice.innerHTML = finalPrice.innerHTML;
});
