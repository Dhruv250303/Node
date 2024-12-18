const express = require('express');

const morgan = require('morgan');

const myMiddle = require('./middlewares/middle');
const myMiddle2 = require('./middlewares/middle2');

const app = express()

//get , post , put ,delete


app.use(express.json())

app.use(myMiddle)
app.use(myMiddle2)

app.use(morgan('short'))

let courses =[
    {id:1, name:'JavaScript'},
    {id:2, name:'Python'},
    {id:3, name:'Java'},
]


app.get('/',(req,res)=>{
    res.send('Hello from Dhruv')
})


app.get('/about',(req,res)=>{
    res.send('Dhruv Gahlot is the developer of this page.')
})
app.get('/contact',(req,res)=>{
    res.send('Not available')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})


app.post('/courses',(req,res)=>{
    const course ={
        id: courses.length+1,
        name: req.body.name 
    }
    courses.push(course)
    res.send(course)

})


//put method

app.put('/courses/:name',(req,res)=>{
    // console.log(req.params.name); 
    
   let course = courses.find(course=> course.name === req.params.name)
if(!course) res.status(404).send('This course does not exist!!!')
    res.send(course)

course.name = req.body.name
res.send(course)

})


//Route Parameters
app.get('/courses/:name',(req,res)=>{
    // console.log(req.params.name); 
    
   let course = courses.find(course=> course.name === req.params.name)
if(!course) res.status(404).send('This course does not exist!!!')
    res.send(course)
})


//Delete method


// app.delete('/courses/:name',(req,res)=>{
//     let UpdateCourse =  courses.filter(course => course.name !== req.params.name)

//     courses =UpdateCourse

//     res.send(courses)
// })


app.delete('/courses/:id',(req,res)=>{
    let course = courses.find(course=> course.id === parseInt(req.params.id))
    if(!course) res.status(404).send('This course does not exist!!!')


    const index = courses.indexOf(course)

    courses.splice(index,1)

    res.send(course)
})

const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`Port is running on ${port}`));