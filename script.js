let rowNumbers = 10;
let colNumbers = 10;

for (let i = 0; i <= rowNumbers; i++) {
  for (let j = 0; j <= colNumbers; j++) {
    if (i === 0 && j === 0) {
      result = 0;
    } else if (i === 0 || j === 0) {
      result = i === 0 ? j : i;
    } else {
      result = i * j;
    }
    let div = document.createElement("div");

    div.className = "cell";
    div.innerHTML = result;
    document.body.append(div);
  }
  document.write("<br>");
}
