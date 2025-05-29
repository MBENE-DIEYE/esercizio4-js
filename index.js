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

    // function primacatenaDiPromessa(numero){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             resolve(numero * 2)
    //         },1000)
    //     })
    // }
    // function secondacatenaDiPromessa(numero){
    //     return new Promise((resolve)=>{
    //         setTimeout(()=>{
    //             resolve(numero + 3)
    //         },1000)
    //     }) 
    // }
    
    // primacatenaDiPromessa(5)
    // .then(res => secondacatenaDiPromessa(res))
    // .then(data => console.log(data))
    // .catch(error => console.error(error))

    // ----------------------------------------catena di promessa con condizioni-------------------------------------

    // function primaPromessaConCondizioni(numero){
    //     return new Promise((resolve)=>{
          
    //         setTimeout(()=>{
    //             resolve("il numero è pari è:",numero)
    //         },1000)
    //     })
        
    // }
    // function secondaPromessaConCondizioni(numero){
    //     return new Promise((resolve,reject)=>{
          
    //         setTimeout(()=>{
    //               if(numero % 2 === 0){
    //             resolve("il numero è pari")
    //               }
    //               else{
    //                 reject("il numero è dispari")
    //               }
    //         },1000)
    //     })
        
    // }


    // primaPromessaConCondizioni(7)
    // .then(res =>secondaPromessaConCondizioni(res)) 
    // .then(data => console.log(data))
    // .catch(error => console.error(error))

   

    // // --------------------------------catena di promessa con gestioni degli errori------------------

    function primaPromessaGestioniDegliErrori(item){
        return new Promise((resolve)=>{
            item = item*2
                resolve( item)
           
        })
    }
  
    function secondaPromessaGestioniDegliErrori(item){
        return new Promise((resolve)=>{
           const resultato =item + 10
            resolve(resultato)
        })
    }
    primaPromessaGestioniDegliErrori(9)
    .then(res => secondaPromessaGestioniDegliErrori(res))
    .then(data => console.log(data))
    .catch(error => console.error(error))

    // // -----------------------------------------------gestioni degli errori con catch-----------------

    // // function gestioniDegliErroriConCatch(){
    // //     return new Promise((reject)=>{
    // //         reject("promessa refiutata")
    // //     }).then((result)=>{
    // //         console.log(result)
    // //     }).catch((error)=>{
    // //         console.error(error)
    // //     })
    // // }

    // // gestioniDegliErroriConCatch()

    // // // ----------------------------------gestioni degli errori con then e catch-------------------------------------

    // // function gestioniDegliErroriConThenCatch(num){
    // //     return new Promise((resolve,reject)=>{
    // //         if(num == true){
    // //             resolve("promessa resolvata")
    // //         }else{
    // //             reject("promessa refuitato")
    // //         }
    // //     }).then((result)=>{
    // //         console.log(result)
    // //     }).catch((errore)=>{
    // //         console.error(errore)
    // //     })
    // // }
    // // gestioniDegliErroriConThenCatch("ciao")

    // // ----------------------------gestioni degli errori con una catena di promessa---------------------

    function gestioniDegliErroriConCatenaDiPromessa(num){
        return new Promise((resolve,reject)=>{
            if(num > 10){
                resolve("valore resolvata")
            }
            else{
                  reject("valore refuitata")
            }
        }) 
    }

    function gestioniDegliErroriConCatenaDiPromessaDue(num){
        return new Promise((resolve)=>{
        if(num < 20){
            resolve(num)
        }
        }) 
    }
    gestioniDegliErroriConCatenaDiPromessa(8)
    .then(res => gestioniDegliErroriConCatenaDiPromessaDue(res))
    .then(data => console.log(data))
    .catch(error => console.error(error))

    // ------------------utiliasare promise all--------------------------------

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

    // // -------------------------------------------------utilisare promise.allsettled----------------

    // function promiseAllSettledUno(){
    //     return new Promise((resolve)=>{
    //         resolve("promessa uno reisolvata")
    //     })
    // }
    // function promiseAllSettledDue(){
    //     return new Promise((resolve)=>{
    //         resolve("promessa due risolvata")
    //     })
    // }
    // function promiseAllSettledTre(){
    //     return new Promise((reject)=>{
    //         reject("promessa tre refiutata")
    //     })
    // }

    // Promise.allSettled([promiseAllSettledUno(),promiseAllSettledDue(),promiseAllSettledTre()])
    // .then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.error(error)
    // })

    // -----------------------------------------funziona asincrona simplice-----------------------------

//      function asincronaSimplice(resultato) {
//        try {
//              return new Promise((resolve)=>{
//              setTimeout(()=>{
//                 resolve(resultato)
//             },2000)
//         }) 
//        } catch (error) {
//             console.log(error)
//        }
//     }

//     async function init() {
//         let res = await asincronaSimplice("buonasera")
//         console.log(" il resultato è :"+res)
//     }
// init()

// // ----------------------------------------gestione degli errori con try e catch-----------------------

// // async function erroriTryCatch() {
//     try {
//         // ho utilisato la functione -gestioni degli errori con then e catch-
//         let resultat = await gestioniDegliErroriConThenCatch()
//         console.log(resultat)
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// erroriTryCatch()

// --------------------------------funzione asincrone in serie--------------------

// async function asincroneInSerieUno() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("asincroneInSerieUno risolvata")
//         },2000)
//     }).then((result)=>{
//         console.log(result)
//     })
// }
// asincroneInSerieUno()

// async function asincroneInSerieDue() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("asincroneInSerieDue risolvata")
//         },3000)
//     }).then((result)=>{
//         console.log(result)
//     })
// }
// asincroneInSerieDue()

// async function asincroneInSerieTre() {
//     let result1 = await asincroneInSerieUno()
//     console.log(result1)
//     let result2 = await asincroneInSerieDue()
//     console.log(result2)
// }
// asincroneInSerieTre()

// ---------------------------eseguire una richiesta get simplice----------------

// async function reichiestaGet() {
//     try {
//         const res = await fetch('https://dummyjson.com/posts/1')
//         const data= await res.json()
//         console.log("data recevuto:", data)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// reichiestaGet()

// // -------------------------eseguire una richiesta POST---------------

// async function richiestaPost() {
//     const data = {
//         titile: "fffew",
//         id:1,
//         name:"fdwd"
//     }
//     try {
//         const res = await fetch("https://dummyjson.com/posts/1",{
//             method:"POST",
//             headers:{
//                 'content-type': 'applicatio/json'
//             },
//             body: JSON.stringify(data)
//         })
//         const newdata = await res.json()
//         console.log(newdata)
//     } catch (error) {
//         console.log(error)
//     }
// }

// richiestaPost()

// // ----------------------------------------------gestione degli errori con fecth e await-------------------

// async function erroriFetchAwait() {
//     try {
//         const res = await fetch("https://dummyjson.com/posts/1")
//         const result = await res.json()
//         console.log(result)
//     } catch (error) {
//         console.error(error)
//     }
// }
// erroriFetchAwait()
// // ----------------------comprerendere un errore CORS-----------------


//  fetch(" http://example.com")
//     .then(response =>response.text())
//     .then(data =>console.log(data))
//     .catch(error => console.log(error))