function registrado (e) {
    let oldUser = JSON.parse(localStorage.getItem('users')) || []
    let useradress = document.getElementById('mailR').value;
    let password = document.getElementById('passwordR').value;
    console.log(useradress,password);

    let user = {
        user: useradress,
        password
    }
    oldUser.push(user)
    localStorage.setItem('users', JSON.stringify(oldUser));
}