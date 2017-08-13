testbutton = document.createElement('button');
testbutton.textContent = "Testbutton";
testbutton.addEventListener('click', () => {edit.writeLinesToCode()});
document.getElementById("button_area_left").appendChild(testbutton);


plusbutton = document.createElement('button');
plusbutton.textContent = "+";
plusbutton.addEventListener('click', () => {edit.currentLineControl('+')});
document.getElementById("button_area_right").appendChild(plusbutton);


minusbutton = document.createElement('button');
minusbutton.textContent = "-";
minusbutton.addEventListener('click', () => {edit.currentLineControl('-')});
document.getElementById("button_area_right").appendChild(minusbutton);


