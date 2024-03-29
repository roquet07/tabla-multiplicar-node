//Siempre van adelante los require

const fs = require('fs');
const colors = require('colors/safe');
 
let listarTabla = ( base, limite ) => {
  
      
       console.log('======================'.green);
       console.log('======================'.green);
       console.log('======================'.green);
        for( let i = 1; i<=limite; i++ ){
            console.log(`${base} x ${i} = ${base*i}\n `);
        }
       
       


}
 

let crearArchivo = ( base, limite ) => {

     return new Promise( ( resolve, reject ) => {

        if( !Number(base) ){
            reject(`El valor introducido ${base} no es numero`);
            return;
        }
        if( !Number(limite) ){
            reject(`El valor introducido ${limite} no es numero`);
            return;
        }
        
        let data = '';

        for( let i = 1; i<=limite; i++ ){
            data+= (`${base} x ${i} = ${base*i}\n `);
        }
        fs.writeFile(`tablas/tabla-de-${base}-al-${limite}.txt`,data, (err) => {

            if(err) reject(err) 
            else 
             resolve(colors.green(`tabla-${ base }-al-${limite}.txt`));
        });
     
     });
}

module.exports = {
    crearArchivo,
    listarTabla
    
}

