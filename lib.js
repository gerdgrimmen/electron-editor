var fs = require('fs');

var editor = function(){
    this.lines = {};
    this.tempcontent = {content: ''};
    this.currentLine = 0;

    this.saveLine = function(Line){
        this.lines[Line] = this.tempcontent;
        console.log(this.lines);
    };

    this.writeLinesToCode = function(){
        //  document.getElementById('code').value = '';
        var stringToWrite = ''; 
        for (key in this.lines){
            stringToWrite += this.lines[key].content + '\n';
        };
        document.getElementById('code').value = stringToWrite;
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


/* Common Library Functions */
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

