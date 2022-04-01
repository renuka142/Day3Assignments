var express = require('express')
var bp = require('body-parser')
var app = express()
app.use(bp.json())
var project=[
    {"projectId":"1",
    "projectName":"Cloud Innovation",
    "ManagerName":"Rachel",
    "budget":"$79,000",
    "location":"Texas"},{
        "projectId":"2",
    "projectName":"Full stack Dev",
    "ManagerName":"Jonathan",
    "budget":"$78,000",
    "location":"Chicago"
    }
]


app.use(express.static('public'))

app.get('/loadproject',(req,res)=>{
    res.json(project)
})

app.post('/addproject',(req,res)=>{
    var data = req.body;
    project.push(data)
    res.send('project is added'+data)
})

app.listen(9000,()=>{
    console.log('server is ready...');
})