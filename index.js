testbutton = document.createElement('button');
testbutton.textContent = "Testbutton";
var currentFile = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).split('.',1);
var jsFile = currentFile+'.js';
var name = [];
var bla = jsFile;
testbutton.addEventListener('click', () => {
    //console.log(typeof(name));
    document.getElementById('code').innerHTML = location.pathname + "\n"  + bla;
    edit.writeLinesToCode();
});
document.getElementById("button_area_left").appendChild(testbutton);


