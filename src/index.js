var date = document.querySelector("#bdate");
var luckyNum = document.querySelector("#luckyn");
var btn = document.querySelector("#submit");

function show(res) {
  console.log(res);
  if (res > 0) {
    document.getElementById("output").innerHTML = `
      <h1>Ohh!</h1>
      <div>
        Your Birthday is not Lucky.
      </div>
      `;
  } else {
    document.getElementById("output").innerHTML = `
      <h1>Wow!</h1>
      <div>
        Your Birthday is Lucky.
      </div>`;
  }
}

function check() {
  let res = "";
  let birthdate = new Date(date.value);
  if (birthdate == "Invalid Date") {
    alert("Please Enter A Valid Date");
  } else {
    let num = luckyNum.value;
    console.log(num);
    if (num == "") {
      alert("Please Enter A Valid Number");
    } else if (num == 0) {
      res =
        (birthdate.getDate() + birthdate.getMonth() + birthdate.getFullYear()) %
        5;
    } else {
      res =
        (birthdate.getDate() + birthdate.getMonth() + birthdate.getFullYear()) %
        num;
    }
    if (res !== "") {
      show(res);
    }
  }
}

btn.addEventListener("click", check);
