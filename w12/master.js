function nightDayHandler(self) {
  let target = document.querySelector("body");
  if (self.value == "day") {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    self.value = "night";
    document.querySelector("#night_day_2").value = "night";
    let alist = document.querySelectorAll("a");
    for (let i = 0; i < alist.length; i++) {
      alist[i].style.color = "blue";
    }
  } else {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    self.value = "day";
    document.querySelector("#night_day_2").value = "day";
    alist = document.querySelectorAll("a");
    for (i = 0; i < alist.length; i++) {
      alist[i].style.color = "powderblue";
    }
  }
}
