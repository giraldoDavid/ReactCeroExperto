

const promesa = new Promise( ( resolve, reject )=> {

    setTimeout(() => {
        resolve();
        console.log("2 segundos después")
    }, 2000);
} );

promesa.then( ()=>{
    console.log("then de la promesa")
} )