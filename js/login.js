let username = document.getElementById('mail').value;
let password = document.getElementById('password').value;
let homeUser = [username,password]
let acceso = false;
function loginUser () {
    
let data = JSON.parse(localStorage.getItem('users'));

for(let i=0;i < data; i++){
    if(homeUser.includes(data[i][0,1])){
        acceso = true;
        alert('Iniciaste')
    }else{
           acceso = false;
           alert('Usuario o contraseña incorrectos')
        }
    }
    
}
