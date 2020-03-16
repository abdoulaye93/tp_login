let comptesUtilisateur = [
    {email: 'honore@example.com', password: 'cool'},
    {email: 'raby@example.com', password: 'pascool'},
    {email: 'abdoulaye@example.com', password: 'ddd'},
    {email: 'fallou@example.com', password: 'ddd'},
]

$( "#submit" ).click(function() {
    email =  $('#email').val();
    password = $('#password').val();
    if(email.length == 0 || password.length==0){
        alert('Email/Password required')
       
    }else{
        element= comptesUtilisateur.find(function(element)  {
            return element.email == email && element.password == password ;
            
        });
        if(element == undefined){
            alert('credentials not valid')
        }else{
            alert("you're log in")
        }
    }
   
  });
