var date = document.querySelector("#bdate");
var luckyNum = document.querySelector("#luckyn");
var btn = document.querySelector("#submit");

function show() {
  document.getElementById("output").innerHTML = `
    <h1>Hello Vanilla!</h1>
    <div>
      We use the same configuration as 
      <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
    </div>
    `;
}

function check() {
  let birthdate = new Date(date);
  if (birthdate == "Invalid Date") {
    alert("Please Enter A Valid Date");
  } else {
    console.log(date);
  }
}

document.addEventListener(btn, check);
