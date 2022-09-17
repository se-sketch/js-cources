 "use strict";

 let group = {
    title : 'this is title ',
    students : ['John', 'Alice', 'Pete', 'Dafni'],

    showlist(){
        this.students.forEach(student => console.log(this.title + ' '+student));
    }
 }

 group.showlist();

 //-----------

 function defer(func, ms){
    return function(){
        setTimeout(() => func.apply(this, arguments), ms);
    }
 }

 function show(...args){
    console.log('show: '+args);
 }

 let def_show = defer(show, 1000);

 //def_show(1, 2, 3, 4, 5);

//-----------------

