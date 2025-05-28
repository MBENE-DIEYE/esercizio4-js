// ------------------------------------funczione di base con callback-----------------------------------
// function operation(num1,num2,callback){
//     const result =(num1 + num2)
//     console.log("la somma è :",result)



// if(typeof callback ==='function'){
//     callback();
// }
// else{
//     console.log('non è una foctiona')
// }

// }

//  function uncallback(){
//     console.log("fonction seguito")
//  }

// operation(4,6, uncallback())

// // -----------------------------------------functione con callback e passaggio di parametro--------------------------

// function somma(val1,val2,callback){
//     callback(val1 - val2)
// }

// somma(10,3,function(result){
//     console.log("il resultato  è :",result)
// })

// // -----------------------------callback annidati --------------------------------------------

// function callbackAnnidati1(parm1,parm2,callback){
//     callback(parm1*parm2)

// }
//   function callbackAnnidati2(parm3,parm4,callback){
//         callback(parm3 + parm4)
//     }

//     callbackAnnidati1(4,5,function(result){
//         callbackAnnidati2(3,result,function(resultato){
//             console.log('il resultato è :',resultato )
//         })
//     })

//     // --------------------------------creare una promessa simplice------------------------
//     function promessaSimplice(){
//         return new Promise ((resolve) =>{
//         setTimeout(() =>{
//             resolve("promessa risolvato")
//         },2000)
//     })
//     }
    
//     promessaSimplice().then(messaggio =>{
//             console.log(messaggio)
//         })

//         // -------------------------------------------gestione di una promessa con catch-------------------------

//          let promessaSimplic =  new Promise (function(resolve,reject){
//             let ok=true
            
//            setTimeout(()=>{
//              if(ok){ 
//                 resolve("promessa risolvato")
//             }
//             else{
//                return reject("promessa refuitato")
//             }
//            },2000);
//            })
   
//   promessaSimplic.catch(
//         function(error){
//         console.log(error)
//     })
    
//     // ------------------------------------------promessa con finally----------------------

//     function  promessaConFinally(item){
//         return new Promise((resolve,reject)=>{
//            setTimeout(()=>{
//              if(item){
//                 resolve("promesso acceta")
//             }else{
//                 reject("promessa refiuta")
//             }
//            },2000)
//         }).catch((error)=>{
//             console.log(error)
//         })
//         .finally(()=>{
//             console.log("messaggio nel blocco finally")
//         })

//     }
//     promessaConFinally("ciao")

    // -------------------------catena di promessa simplice-------------------------------

    // function catenaDiPromessa(numero){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             resolve("il numero è :", numero)
    //         },1000)
    //     }).then((result)=>{
    //         result = (numero*2) + 3
    //         console.log(result)
    //     })
    // }
    // catenaDiPromessa(4)

    // // ----------------------------------------catena di promessa con condizioni-------------------------------------

    // function promessaConCondizioni(numero){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             resolve("il numero è:",numero)
    //         },1000)
    //     }).then(()=>{
    //       if(numero % 2===0){
    //         console.log("il numero è pari")
    //       }else{
    //         console.log("il numero è dispari")
    //       }
    //     })
    // }

    // promessaConCondizioni(6)

    // // --------------------------------catena di promessa con gestioni degli errori------------------

    // function gestioniDegliErrori(item){
    //     return new Promise((resolve,reject)=>{
    //         if(item){
    //             resolve("valore reisolvato")
    //         }else{
    //             reject("valore rifiutato")
    //         }
    //     }).then((resultato)=>{
    //         console.log(resultato)
    //     }),(error)=>{
    //         console.error(error)
    //     }
    // }
    // gestioniDegliErrori("ciao")

    // // -----------------------------------------------gestioni degli errori con catch-----------------

    // function gestioniDegliErroriConCatch(){
    //     return new Promise((reject)=>{
    //         reject("promessa refiutata")
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.error(error)
    //     })
    // }

    // gestioniDegliErroriConCatch()

    // // ----------------------------------gestioni degli errori con then e catch-------------------------------------

    // function gestioniDegliErroriConThenCatch(num){
    //     return new Promise((resolve,reject)=>{
    //         if(num == true){
    //             resolve("promessa resolvata")
    //         }else{
    //             reject("promessa refuitato")
    //         }
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((errore)=>{
    //         console.error(errore)
    //     })
    // }
    // gestioniDegliErroriConThenCatch("ciao")

    // // ----------------------------gestioni degli errori con una catena di promessa---------------------

    // function gestioniDegliErroriConCatenaDiPromessa(){
    //     return new Promise((resolve,reject)=>{
    //         resolve("valore resolvata")
    //         reject("valore refuitata")
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.error(error)
    //     })
    // }
    // gestioniDegliErroriConCatenaDiPromessa()

    // // ------------------utiliasare promise all--------------------------------

    // function promessa1(){
    //     return new Promise((resolve)=>{
    //       setTimeout(()=>{
    //           resolve("promessa1 risolvata")
    //       },2000)
    //     })
    // }

    //  function promessa2(){
    //     return new Promise((resolve)=>{
    //       setTimeout(()=>{
    //           resolve("promessa2 risolvata")
    //       },4000)
    //     })
    // }

    // Promise.all([promessa1(),promessa2()])
    // .then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.error(error)
    // })

    // // ----------------------------utilisare promise race------------------

    // function promessarace1(){
    //     return new Promise((resolve)=>{
    //       setTimeout(()=>{
    //           resolve("resultao1 risolvata")
    //       },3000)
    //     })
    // }

    //  function promessarace2(){
    //     return new Promise((resolve)=>{
    //       setTimeout(()=>{
    //           resolve("resultao2 risolvata")
    //       },1000)
    //     })
    // }

    // Promise.race([promessarace1(),promessarace2()])
    // .then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.error(error)
    // })

    // -------------------------------------------------utilisare promise.allsettled----------------

//     function promiseAllSettledUno(){
//         return new Promise((resolve)=>{
//             resolve("promessa uno reisolvata")
//         })
//     }
//     function promiseAllSettledDue(){
//         return new Promise((resolve)=>{
//             resolve("promessa due risolvata")
//         })
//     }
//     function promiseAllSettledTre(){
//         return new Promise((reject)=>{
//             reject("promessa tre refiutata")
//         })
//     }

//     Promise.allSettled([promiseAllSettledUno(),promiseAllSettledDue(),promiseAllSettledTre()])
//     .then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.error(error)
//     })

//     // -----------------------------------------funziona asincrona simplice-----------------------------

//     async function asincronaSimplice(resultato) {
//     //    let  resultat = resultato*2
//         return new Promise((resolve)=>{
//              setTimeout(()=>{
//                 resolve(" il resultato è :",resultato)
//             },2000)
//         }).then((result)=>{
//             console.log(result)
//         })
           
//     }
//     asincronaSimplice(4)

//     async function init() {
//         let res = await asincronaSimplice()
//         console.log(res)
//     }
// init()

// ----------------------------------------gestione degli errori con try e catch-----------------------

async function erroriTryCatch() {
    try {
        // ho utilisato la functione -gestioni degli errori con then e catch-
        let resultat = await gestioniDegliErroriConThenCatch()
        console.log(resultat)
    } catch (error) {
        console.log(error)
    }
    
}
erroriTryCatch()