prompt()
let firstname = "Beyonce";

function sayHello (firstname , hour){
    
    message = "Bonjour " + firstname + " !";
    if (hour >= 18 ){
        console.log("Bonsoir Beyonce !")
    }
    else{ 
        document.querySelector('h1').innerText = message;
    }
 
}

 sayHello("Beyonce" , 11);
 sayHello("Beyonce" , 18);
 sayHello("Beyonce" , 17);

