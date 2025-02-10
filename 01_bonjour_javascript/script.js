
let firstname = prompt();

function sayHello (firstname , hour){
    
    message = "Bonjour " + firstname + " !";
    if (hour >= 18 ){
        console.log("Bonsoir Beyonce !")
    }
    else{ 
        document.querySelector('h1').innerText = message;
    }
 
}

 sayHello(firstname , 11);
 

