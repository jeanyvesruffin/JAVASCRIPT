console.log(`=============================== TP 1 : Les variables ================================`);

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


console.log(`=============================== TP 2 : Le typage ================================`);
let positiveNumber = 5;
console.log('Entier positif est de type : ' + typeof positiveNumber);
let negativeNumber = -5;
console.log('Entier négatif est de type : ' + typeof positiveNumber);
let decimalNumber = 42.5612;
console.log('Entier avec decimal est de type : ' + typeof decimalNumber);

let userIsSignedIn = true;
console.log('userIsSignedIn est de type : ' + typeof userIsSignedIn);
let userIsAdmin = false;
console.log('userIsAdmin est de type : ' + typeof userIsAdmin);


console.log(`=============================== TP 3 : Les objets ================================`);
let episode = {
    title: 'Game Of Trone',
    duration: 90,
    hasBeenWatched: true
};

let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;

console.log('Ma serie prefere est : ' + episodeTitle);
console.log('Chaque episode de  : ' + episodeTitle + ' à une durée de : ' + episodeDuration + ' minutes');
console.log('La saison 1 a été vu  : ' + episodeHasBeenWatched);

console.log(`=============================== TP 4 : Les classes ================================`);
// Fonction lecture propriete d'un Objet
function afficherProps(obj) {
    var resultat = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            resultat += i + " = " + obj[i] + "\n";
        }
    }
    return resultat;
}
class Episode {
    constructor(titleEpisode, durationEpisode, hasBeenWatchedEpisode) {
        this.titleEpisode = titleEpisode;
        this.durationEpisode = durationEpisode;
        this.hasBeenWatchedEpisode = hasBeenWatchedEpisode;
    }
}

let firstEpisode = new Episode('Premiere episode', 95, true);
let secondEpisode = new Episode('Seconde episode', 120, false);
let thirdEpisode = new Episode('Troisième episode', 94, true);


console.log('Objet Episode 1 : ' + afficherProps(firstEpisode));
console.log('Objet Episode 2 : ' + afficherProps(secondEpisode));
console.log('Objet Episode 3 : ' + afficherProps(thirdEpisode));

console.log(`=============================== TP 4 : Les tableaux ================================`);

let myTableau=[firstEpisode,secondEpisode,thirdEpisode];
console.log('Valeur a l\'index 1 du tableau : '+ afficherProps(myTableau[1]));
console.log('Nombre d\'element dans le tableau ? : '+ myTableau.length);
myTableau.push(2);
console.log('Nombre d\'element dans le tableau ? : '+ myTableau.length);

myTableau.unshift(new Episode('Terminator', 157, true));
console.log('Nombre d\'element dans le tableau ? : '+ myTableau.length);
console.log('Valeur a l\'index 0 du tableau : '+ afficherProps(myTableau[0]));

console.log('Nombre d\'element dans le tableau avant pop() ? : '+ myTableau.length);
myTableau.pop();
console.log('Nombre d\'element dans le tableau  apres pop ? : '+ myTableau.length);
console.log('Valeur au derniere index du tableau : '+ afficherProps(myTableau[myTableau.length -1]));

console.log(`=============================== TP 5 : Les collections Sets et Maps ================================`);

const nbreDeFeuTricolors = new Set(['vert', 'orange', 'rouge']);
console.log('Le set nbreDeFeuTricolors contient-il la couleur vert ? '+ nbreDeFeuTricolors.has('vert'));
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));
console.log('Le set nbreDeFeuTricolors contient-il la couleur rouge ? '+ nbreDeFeuTricolors.has('rouge'));
console.log('Nombre d\'element dans le set nbreDeFeuTricolors ? : '+ nbreDeFeuTricolors.size);

nbreDeFeuTricolors.add('bleu');
console.log('Nombre d\'element dans le set nbreDeFeuTricolors apres ajout? '+ nbreDeFeuTricolors.size);
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));

nbreDeFeuTricolors.clear();
console.log('Nombre d\'element dans le set nbreDeFeuTricolors apres ajout? '+ nbreDeFeuTricolors.size);

nbreDeFeuTricolors.add('vert');
nbreDeFeuTricolors.add('orange');
nbreDeFeuTricolors.add('rouge');
nbreDeFeuTricolors.add('bleu');
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));
nbreDeFeuTricolors.delete('bleu');
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));


let numberOfCats = 10;

numberOfCats += 5;
numberOfCats /= 3;
numberOfCats++;
console.log(numberOfCats);