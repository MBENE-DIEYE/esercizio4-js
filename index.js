// ------------------------------------funczioni di base con callback-----------------------------------
function operation(num1,num2,callback){
    callback(num1 + num2)
}

operation(4,6,function(result){
     console.log("la somme è:", result);
    
})