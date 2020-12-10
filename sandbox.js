// Declaration de variables avec la porte let
let declarationVariable = 'declaration variable';
let chat = 'Nombre de chats ? ';
let nombreDeChat = 4;
// Declaration d'une constante
const nombreDeCouleurPrimaires = 3;
// Reaffectation des valeurs
declarationVariable = 'variable reaffecte';
nombreDeChat = 2;
// modification des valeurs de variable par operations
declarationVariable = 'variable ' + 'concatenee avec + ';
console.log('Declaration variable ' + declarationVariable);
// retourne"Declaration variable variable concatenee avec + "
console.log('Nombre de couleur primaires ' + nombreDeCouleurPrimaires);
// retourne "Nombre de couleur primaires 3"
console.log(chat.substring(0, chat.length - 2) + ' initiale ' + nombreDeChat);
// retourne "Nombre de chats  initiale 2"
// Exemple sur les operations
nombreDeChat += 10;
console.log(chat + 'Apres operation nombreDeChat += 10 = ' + nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat += 10 = 12"
nombreDeChat -= 2;
console.log(chat + 'Apres operation nombreDeChat -= 2 = ' + nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat -= 2 = 10"
nombreDeChat *= 2;
console.log(chat + 'Apres operation nombreDeChat *= 2 = ' + nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat *= 2 = 20"
nombreDeChat /= 4;
console.log(chat + 'Apres operation nombreDeChat /=4 = ' + nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat /=4 = 5"
nombreDeChat %= 2;
console.log(chat + 'Apres operation nombreDeChat %=2 = ' + nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat %=2 = 1"
nombreDeChat++;
console.log(chat + 'Apres operation nombreDeChat ++ = ' + nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat ++ = 2"
nombreDeChat--;
console.log(chat + 'Apres operation nombreDeChat -- = ' + nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat -- = 1"

function testLet() {
    if (1 === 1) {
        let maVar = true;
        console.log(maVar);
        // Retourne true
    }
    // console.log(maVar);
    // Retourne une erreur, let n'existe pas hors du bloc "if"
}
function testVar() {
    if (1 === 1) {
        var maVar = true;
        console.log(maVar);
        // Retourne true
    }
    console.log(maVar);
    // Retourne true
}
testLet();
testVar();

let positiveNumber = 5;
console.log('Entier positif est de type : ' + typeof positiveNumber);
let negativeNumber = -5;
console.log('Entier négatif est de type : ' + typeof positiveNumber);
let decimalNumber = 42.5612;
console.log('Entier négatif est de type : ' + typeof decimalNumber);

let userIsSignedIn = true;
console.log('userIsSignedIn est de type : ' + typeof userIsSignedIn);
let userIsAdmin = false;
console.log('userIsAdmin est de type : ' + typeof userIsAdmin);