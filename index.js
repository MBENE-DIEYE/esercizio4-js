// ------------------------------------funczione di base con callback-----------------------------------
function operation(num1,num2,callback){
    const result =(num1 + num2)
    console.log("la somma è :",result)



if(typeof callback ==='function'){
    callback();
}
else{
    console.log('non è una foctiona')
}

}

 function uncallback(){
    console.log("fonction seguito")
 }

operation(4,6, uncallback())

// -----------------------------------------functione con callback e passaggio di parametro--------------------------

function somma(val1,val2,callback){
    callback(val1 - val2)
}

somma(10,3,function(result){
    console.log("il resultato  è :",result)
})

// -----------------------------callback annidati --------------------------------------------

function callbackAnnidati1(parm1,parm2,callback){
    callback(parm1*parm2)

     function callbackAnnidati2(parm3,parm4,callback){
        callback(parm3 + parm4)
    }
}
 