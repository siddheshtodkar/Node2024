// import fs from 'fs'

// callback
// fs.readFile('./notes.txt','utf-8',(err, data)=>{
//     if(err) throw err
//     console.log(data)
// })

//synchronous version
// console.log(fs.readFileSync('./notes.txt', 'utf-8'))

import fs from 'fs/promises'

// then()
fs.readFile('./notes.txt', 'utf-8').then(data => console.log(data)).catch(err => console.log(err))

// async await
try {
    const data = await fs.readFile('./notes.txt', 'utf-8')
    console.log(data)
}
catch (err) {
    console.log(err)
}

// write file 
try{
    //overwrite
    fs.writeFile('./notes.txt', 'new line', 'utf-8')

    //append
    fs.appendFile('./notes.txt', '\nnew line', 'utf-8')
}
catch(err){
    console.log(err)
}

