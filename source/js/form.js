var form = document.querySelector(".form");
var fieldName = form.querySelector("[name=name]");
var fieldWeight = form.querySelector("[name=weight]");
var fieldEmail = form.querySelector("[name=email]");
var fieldPhone = form.querySelector("[name=phone]");
var buttonForm = form.querySelector("form__button");

var fields = [fieldName, fieldWeight, fieldEmail, fieldPhone];

form.addEventListener("submit", function (evt) {
  fields.forEach( function(item) {
    if (!item.value) {
      evt.preventDefault();
      item.classList.add("form--required");
      if (!fieldName.value) {
        fieldName.focus();
      } else if (!fieldWeight.value) {
        fieldWeight.focus();
      } else if (!fieldEmail.value) {
        fieldEmail.focus();
      } else if (!fieldPhone.value) {
        fieldPhone.focus();
      };
      item.addEventListener("keydown", function() {
        item.classList.remove("form--required");
      });
    } else {
      item.classList.remove("form--required");
    }
  });
});
