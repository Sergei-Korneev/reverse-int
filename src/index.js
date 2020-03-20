module.exports = function reverse (n) {
    var nn="";
    var str=n.toString(10).replace("-","");
    var ln=str.length;
    
    for (i=ln-1; i>=0; i--){
        nn += str[i];

    }
    return parseInt(nn,10);
}
