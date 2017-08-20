/* Initialization */
var edit = new editor();

/* Buttonmania */
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

blob = document.createElement('button');
blob.textContent = "blob";
blob.addEventListener('click', () => {console.log(edit)});
document.getElementById("button_area_right").appendChild(blob);

//Testfunktionen
function doGetCaretPosition (oField) {
  var iCaretPos = 0;

  if (oField.selectionStart || oField.selectionStart == '0')
    iCaretPos = oField.selectionStart;

  return iCaretPos;
}

// Testbuttons
rangebutton = document.createElement('button');
rangebutton.textContent = "rangebutton";
rangebutton.addEventListener('click', () => {
    document.getElementById('input').value = '123456789';
    document.getElementById('input').focus();
    document.getElementById('input').select();
    document.getElementById('input').setSelectionRange(5,5); // "backward" / "forward" - [optional]

    console.log('here');
    
});
document.getElementById("button_area_right").appendChild(rangebutton);

positionbutton = document.createElement('button');
positionbutton.textContent = "positionbutton";
positionbutton.addEventListener('click', () => {
console.log(doGetCaretPosition(document.getElementById('input'))); 
});
document.getElementById("button_area_right").appendChild(positionbutton);