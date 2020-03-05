let comptesUtilisateur = [
    {email: 'honore@example.com', password: 'cool'},
    {email: 'raby@example.com', password: 'pascool'},
    {email: 'abdoulaye@example.com', password: 'ddd'},
    {email: 'fallou@example.com', password: 'ddd'},
]

document.getElementById('submit').onclick = function() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    isTrue = false
    comptesUtilisateur.forEach(element => {

        if ( element.email == email && element.password == password ) {
            isTrue = true
        }
    });
    if (isTrue) {
        alert("you're log in")
    } else {
        alert("credentials not valid")
    }
}