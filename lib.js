var fs = require('fs');

var editor = function(){
    this.lines = {};
    this.saveLine = function(Line){
        
    };
    this.writeLinesToCode = function(){
        var stringToWrite = ''; 
        for (key in this.lines){
            stringToWrite += edit.lines[key].content + '\n';
        };
        document.getElementById('code').innerHTML = stringToWrite;
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

var edit = new editor();
edit.lines[0]={content:'asd0'};
edit.lines[1]={content:'asd1'};
edit.lines[4]={content:'asd4'};
edit.lines[5]={content:'asd5'};
//*
console.log(typeof(edit.lines));
console.log(typeof(edit.saveLine));
console.log(edit.lines);
console.log(edit.lines[0].content);

//*/