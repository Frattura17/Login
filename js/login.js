let username = document.getElementById('mail').value;
let password = document.getElementById('password').value;
let homeUser = [username,password]
let acceso = false;
function loginUser () {
    
let data = JSON.parse(localStorage.getItem('users'));

for(let i=0;i < data; i++){
    if(homeUser[0] == data [i,0]  && homeUser[1] == data[i,1]){
        acceso = true;
    }else{
           acceso = false;
           alert('Usuario o contraseña incorrectos')
        }
    }
    
}
if(acceso = true){
    console.log('iniciaste')
    alert('INICIASTE SESION')
}else{
    alert('usuario o contraseña incorrectos')
}