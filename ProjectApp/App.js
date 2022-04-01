var express = require('express')
var bp = require('body-parser')
var app = express()
var _ = require('underscore')
//app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

var project=[]
uid = 1
app.get("/",(req,res)=>{
    res.render('index.ejs',{udata:project});
})
app.get("/loadproject", (req, res) => {
    res.send(project)
    
});
app.post('/addproject',(req,res)=>{
    var data = req.body;
    data.id = uid++;
    project.push(data)
    console.log(project);
    res.render('index.ejs',{udata:project})
})
app.get("/login",(req,res)=>{
    res.render('login.ejs')
})
app.post("/login",(req,res)=>{

    var username= req.body.username
    var password= req.body.password


    if(username == _.findWhere(project,username).username){
        res.render('welcome.ejs')
    }else{
        res.render('login.ejs')
    }
})

app.get('/loadproject/:id',(req,res)=>{
    var lid = parseInt(req.params.id)
    //console.log(lid);
    /* var mtd;
    project.forEach(function(td){
        if(lid==td.id){
            mtd=td;
        }
    }) */
    var mtd =_.findWhere(users,{id:lid})
    if(mtd){
        res.json(mtd)
    }else{
        res.status(404).send()
    }
})

app.delete("/deleteproject/:id",(req,res)=>{
    var lid = parseInt(req.params.id)
    var mtd =_.findWhere(project,{id:lid})
    if(mtd){
        project=_.without(project,mtd)
        res.json(mtd)
    }else{
        res.status(404).send()
    }
})

app.listen(7000,()=>{
    console.log('server is ready...');
})