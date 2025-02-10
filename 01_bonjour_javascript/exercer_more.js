// Etape 2: 1.Créer une variable message dans lequel on va stocker le message : Bonjour !
let message = "Bonjour !";
// 2. Affiche le message dans ta console. Tu devrais avoir le message “Bonjour !” qui apparaît.

// 3.Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
let firstname = "Beyonce";
// 4. Utilise la variable firstname dans message pour obtenir l’affichage du message : Bonjour Beyonce !
// Attention, ici il s’agit bien de modifier la variable messageet non le console.log()

// Etape 3: 1.Encapsule ton code précédent dans une fonction nommée sayHello()
// 2.Appelle la fonction sayHello() dans ton code pour t’assurer que tout continue de fonctionner.
// Tu devrais toujours avoir le message Bonjour Beyonce ! qui s’affiche dans la console.
//3. Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
// Exécute ton code. Tu devrais obtenir dans ta console Bonjour undefined ! 🤔
// Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !
// Etape 4: 1. Ajoute un second paramètre hour à la fonction sayHello()
// 2.Ajoute une condition dans ta fonction pour que lorsque hour est supérieur ou égal à 18H, 
// on dit Bonsoir plutôt que Bonjour dans le message


function sayHello(firstname, hour) {
    message = "Bonjour " + firstname + " ! "


    if (hour >= 18) {
        document.querySelector('h1').innerText = message;
    } else {

        document.querySelector('h1').innerText = message;
    }
}


//sayHello("Beyonce" , 11)
//sayHello("Beyonce" , 18)
sayHello("Beyonce", 17)



