let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let position = monTexte.indexOf("i");

let myPosition = document.getElementById("position");
myPosition.innerHtml = "position";

let news = monTexte.toUpperCase();

let maChaine = document.getElementById("chaineMaj");
maChaine.innerHTML = "news";


for (let i = 0; i < monTexte.length; i++){
    if (monTexte[i] === "a"){
        alert("lettre a trouvé");
    }
}

