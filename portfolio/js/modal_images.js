// Get the button that open the modal
function myBtnFunction(numA) {
  var x, i;
  x = document.querySelectorAll(".ason-modal");
  for (i = 0; i < x.length; i++) {
    return x[numA].style.display = "flex";
  }
}

// Get the button that close the modal
function myCloseFunction() {
  var x, i;
  x = document.querySelectorAll(".ason-modal");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}