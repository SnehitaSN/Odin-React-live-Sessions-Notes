// whenever we try to use express inside Node.js to reduce the
// length of the code, we need to install express.js first

// npm install express.js

// Express --> contains (Variables, methods, classes)

// -gc(global)
// nodemon --> npm install -g nodemon

const Express = require("express")
const myPath = require("path")
const app = Express()

const FileSystem = require("fs")

app.use(Express.urlencoded())


app.get("/add/student", function(req, res)
{
    res.sendFile(myPath.join( __dirname , "\studentform.html"))
})

app.post("/collect/data", function(req, res)
{
    //Collect the details
    // If req variable has to really store the data(rollno, name, age)
    // then we need to use urlencoded()   
    const rollNo = req.body.myrollno
    const name = req.body.myname
    const age = req.body.myage    

    const studentObject = {
        studentRollNo: rollNo,
        studentName: name, 
        studentAge: age
    }


    let studentArray = []
    studentArray.push(studentObject)

    // [ { studentRollNo: '1', studentName: 'Steve', studentAge: '12' } ]

    // studentArray=[ { studentRollNo: '1', studentName: 'Steve', studentAge: '12' } ]

    FileSystem.appendFile("studentdata.txt", JSON.stringify(studentArray), function(error)
    {
        console.log(error)
    })
    // { studentRollNo: '1', studentName: 'Steve', studentAge: '12' }
})

app.listen(3000)



