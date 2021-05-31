var fs= require('fs')
var chalk= require('chalk')
var note= function(){
  return fs.readFileSync('note.json')
}

var add=(title,body)=>{
  var notes=JSON.parse(note())
  var index=notes.findIndex((x)=>x.title===title)
  if(index!=-1){
    console.log(chalk.black.bgRed('Title already taken!'))
  }
  else{
    notes.push({
      title,
      body
    })
    fs.writeFileSync('note.json',JSON.stringify(notes))
    console.log(chalk.black.bgGreen('New note created!'))
  }
}

var remove= (title)=>{
  var notes=JSON.parse(note())
  var newnotes= notes.filter((x)=>x.title!=title)
  fs.writeFileSync('note.json',JSON.stringify(newnotes))
  if(newnotes.length==notes.length){
    console.log(chalk.black.bgRed('Note not found!'))
  }
  else console.log(chalk.black.bgGreen('Note removed!'))
}

var list= ()=>{
  var notes=JSON.parse(note());
  console.log(chalk.black.bgBlue('Your Notes:'));
  notes.forEach(point=>{
    console.log(point.title)
  })
}

var read=(title)=>{
  var notes=JSON.parse(note())
  var index=notes.findIndex((x)=>x.title===title)
  console.log(chalk.black.bgYellow(notes[index].title));
  console.log(notes[index].body);
}

module.exports={
  add,
  remove,
  list,
  read
}