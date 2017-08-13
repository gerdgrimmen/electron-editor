var fs = require('fs');

var editor = function(){
    this.lines = {};
    this.tempcontent = {content: 'asdtemp'};
    this.currentLine = 0;

    this.saveLine = function(Line){
        this.lines[Line] = this.tempcontent;
        console.log(this.lines);
    };

    this.writeLinesToCode = function(){
        var stringToWrite = ''; 
        for (key in this.lines){
            stringToWrite += edit.lines[key].content + '\n';
        };
        document.getElementById('code').innerHTML = stringToWrite;
        this.createTempContent();
        this.saveLine(this.currentLine);
    };

    this.currentLineControl = function(mod){
        switch (mod) {
            case '+':
                this.currentLine += 1;
                break;
            case '-':
                this.currentLine -= 1;
                
                break;
        
            default:
                break;
        }
        this.refreshLine();
    };

    this.refreshLine = function() {
        document.getElementById('currentLine').innerHTML = this.currentLine;
    };

    this.createTempContent = function(){
        this.tempcontent = {content: document.getElementById('input').value};
        console.log(this.tempcontent);
    };
};

function myrequire(){
        var currentFile = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).split('.',1);
        var jsFile = './'+currentFile+'.js';
    if(fs.existsSync(jsFile)){
        require(jsFile);
        console.log('Loaded: '+ jsFile);
    }
    else{
        console.log(jsFile+' does not exist! This can usually be ignored.')
    }
};
//*
var edit = new editor();
edit.lines[0]={content:'asd0'};
edit.lines[1]={content:'asd1'};
edit.lines[4]={content:'asd4'};
edit.lines[5]={content:'asd5'};
edit.saveLine(9);
//*/
//*
console.log(typeof(edit.lines));
console.log(typeof(edit.saveLine));
console.log(edit.lines);
console.log(edit.lines[0].content);

//*/