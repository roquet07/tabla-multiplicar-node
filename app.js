const argv = require('./config/config').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } =multiplicar = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch( comando ){
  case 'listar':
      listarTabla( argv.base, argv.limite );
  break;
  case 'crear':
       crearArchivo( argv.base, argv.limite )
            .then( archivo => console.log(`archivo creado: ${archivo}`))
            .catch((e)=> console.log(e));
  break;
  default:
    console.log('Comando no reconocido');
  break;

}

// let argv2 = process.argv;

// // let parametro = argv[2];
// // let base = parametro.split('=')[1];
// console.log('Limite',argv.limite);




