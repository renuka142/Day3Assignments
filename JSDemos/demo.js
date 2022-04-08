var users=[]
var allusers='<hr/>'
function addUser(){
    var data= document.getElementById('uname').value
   if(data==null || data ==''){
       document.getElementById('unerror').innerHTML='name can not be blank'
   }
   
   var userobj= JSON.stringify({
       uname: document.getElementById('uname').value,
       email:document.getElementById('email').value
   })
    users.push(userobj)
    console.log(userobj);
     
    document.getElementById('show').innerHTML=userobj
}
