function conditionCheck() {
    let temp = +document.querySelector("#temp").value;

    if (temp > 30) {
      document.querySelector("#result").innerHTML = "Its Too Hot";
    } else if (temp > 25) {
      document.querySelector("#result").innerHTML = "Its Hot";
    } else if (temp > 20) {
      document.querySelector("#result").innerHTML = " Its Plesent Outside";
    } else if (temp > 15) {
      document.querySelector("#result").innerHTML =
        " You Need A Jaket On Ride";
    } else if (temp > 10) {
      document.querySelector("#result").innerHTML = "Its Cold OutSide";
    } else if (temp < 10) {
      document.querySelector("#result").innerHTML = "Its freezing";
    }
  }