var chalk= require('chalk')
var yargs= require('yargs')
var operations= require('./operations')

// console.log(yargs.argv);


yargs.command({
  command: 'add',
  description: 'Adding notes',
  builder: {
    title: {
      type: 'string',
      demandOption: true
    },
    body: {
      type: 'string',
      demandOption: true
    }
  },
  handler(argv) {
    operations.add(argv.title, argv.body);
  }
});
yargs.command({
  command: 'remove',
  builder: {
    title: {
      type: 'string',
      demandOption: true
    }
  },
  handler(argv) {
    operations.remove(argv.title, argv.body);
  }
});

yargs.command({
  command: 'list',
  handler(argv) {
    operations.list();
  }
});

yargs.command({
  command: 'read',
  builder: {
    title: {
      type: 'string',
      demandOption: true
    }
  },
  handler(argv) {
    operations.read(argv.title);
  }
});

yargs.parse();



//
// var operation= yargs.argv._[0]
// var title= yargs.argv.title
// var body= yargs.argv.body

// if(operation==="add"){
//   if(title&&body){
//     operations.add(title,body)
//   }
// }
// else if(operation==="remove"){
//   if(title){
//     operations.remove(title)
//   }
// }
// else if(operation==="list"){
//   operations.list()
// }
// else if(operation==="read"){
//   if(title){
//     operations.read(title)
//   }
// }