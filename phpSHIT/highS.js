radioBtnHigh = document.querySelector("#high");
radioBtnLow = document.querySelector("#low");
tableDesc = document.querySelector(".tableDesc");
tableAsc = document.querySelector(".tableAsc");

radioBtnHigh.addEventListener("click", function () {
  if (radioBtnHigh.value == "on") {
    //console.log("KOM IGEN");
    tableDesc.classList.remove("hide");
    tableAsc.classList.add("hide");
  }
});

radioBtnLow.addEventListener("click", function () {
  if (radioBtnLow.value == "on") {
    // console.log("KOM low");
    tableDesc.classList.add("hide");
    tableAsc.classList.remove("hide");
  }
});
