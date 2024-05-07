function fg() {

    var x = document.getElementById('fo');
    var text="";
    for(var i=0 ; i<x.length;i++){
        text+= x.element[i].value;
    }

    document.getElementById('p').innerHTML=text;

}