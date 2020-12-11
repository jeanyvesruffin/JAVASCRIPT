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

let myTableau = [firstEpisode, secondEpisode, thirdEpisode];
console.log('Valeur a l\'index 1 du tableau : ' + afficherProps(myTableau[1]));
console.log('Nombre d\'element dans le tableau ? : ' + myTableau.length);
myTableau.push(2);
console.log('Nombre d\'element dans le tableau ? : ' + myTableau.length);

myTableau.unshift(new Episode('Terminator', 157, true));
console.log('Nombre d\'element dans le tableau ? : ' + myTableau.length);
console.log('Valeur a l\'index 0 du tableau : ' + afficherProps(myTableau[0]));

console.log('Nombre d\'element dans le tableau avant pop() ? : ' + myTableau.length);
myTableau.pop();
console.log('Nombre d\'element dans le tableau  apres pop ? : ' + myTableau.length);
console.log('Valeur au derniere index du tableau : ' + afficherProps(myTableau[myTableau.length - 1]));

console.log(`=============================== TP 5 : Les collections Sets et Maps ================================`);

const nbreDeFeuTricolors = new Set(['vert', 'orange', 'rouge']);
console.log('Le set nbreDeFeuTricolors contient-il la couleur vert ? ' + nbreDeFeuTricolors.has('vert'));
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? ' + nbreDeFeuTricolors.has('bleu'));
console.log('Le set nbreDeFeuTricolors contient-il la couleur rouge ? ' + nbreDeFeuTricolors.has('rouge'));
console.log('Nombre d\'element dans le set nbreDeFeuTricolors ? : ' + nbreDeFeuTricolors.size);

nbreDeFeuTricolors.add('bleu');
console.log('Nombre d\'element dans le set nbreDeFeuTricolors apres ajout? ' + nbreDeFeuTricolors.size);
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? ' + nbreDeFeuTricolors.has('bleu'));

nbreDeFeuTricolors.clear();
console.log('Nombre d\'element dans le set nbreDeFeuTricolors apres ajout? ' + nbreDeFeuTricolors.size);

nbreDeFeuTricolors.add('vert');
nbreDeFeuTricolors.add('orange');
nbreDeFeuTricolors.add('rouge');
nbreDeFeuTricolors.add('bleu');
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? ' + nbreDeFeuTricolors.has('bleu'));
nbreDeFeuTricolors.delete('bleu');
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? ' + nbreDeFeuTricolors.has('bleu'));

console.log(`=============================== TP 6 : Les conditions if... else , while et boucles ================================`);
let numberOfCats = 10;

numberOfCats += 5;
numberOfCats /= 3;
numberOfCats++;
console.log(numberOfCats);

let online = true;
let message = "";

if (online) {
    message = "Utilisateur en ligne !";
} else {
    message = "Utilisateur hors ligne !";
}
console.log(message);

let passengersBoarded = 0;

if (passengersBoarded <= 10) {
    passengersBoarded += 10;
} else {
    passengersBoarded -= (passengersBoarded - 10);
}
console.log(passengersBoarded);

const user = {
    name: "Will Alexander",
    nationality: "Scottish",
    accountLevel: "premium"
};

let welcomeMessage = "";

switch (user.accountLevel) {
    case "Will Alexander":
        welcomeMessage = "Hi Will!";
        break;
    case "Scottish":
        welcomeMessage = "Och aye the noo!";
        break;
    case "normal":
        welcomeMessage = "Welcome back!";
        break;
    case "premium":
        welcomeMessage = "Welcome power user!";
        break;
    default:
        welcomeMessage = "Hello there!";
}

console.log(welcomeMessage);


let vipStatus = "";

let guest = {
    name: "Sarah Kate",
    age: 21,
    ticket: true,
    guestType: "artist"
};

switch (guest.guestType) {
    case "artist":
        vipStatus = "Normal";
    case "star":
        vipStatus = "Important";
        break;
    case "presidential":
        vipStatus = "Mega-important";
        break;
    default:
        vipStatus = "None";
}

console.log(vipStatus);
for (let i = 0; i < 5; i++) {
    console.log('Oh hey!');
};

const passengers = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
];

passengersBoarded = 10;

for (let i in passengers) {
    passengersBoarded++;
}

console.log(passengersBoarded);



const guests = [
    {
        name: "Will Alexander",
        vip: false
    },
    {
        name: "Sarah Kate",
        vip: true
    },
    {
        name: "Audrey Simon",
        vip: true
    },
    {
        name: "Tao Perkington",
        vip: false
    }
];

let vips = 0;
let normies = 0;

for (let guest of guests) {
    if (guest.vip) {
        vips++;
    }
}

console.log(vips);

let guestsSeated = 5;

let seatsRemaining = 10;
let guestsRemaining = 7;

while (seatsRemaining > 0 && guestsRemaining > 0) {
    guestsSeated++;
    seatsRemaining--;
    guestsRemaining--;
}
console.log(guestsSeated);

console.log(`=============================== TP 7 : Les fonctions ================================`);

const ajouter = (firstNbre, secondNbr) => {
    return firstNbre + secondNbr;
}
console.log(ajouter(54, 146));

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }
}
const newAccount = new BankAccount("Will Alexander", 500);
newAccount.showBalance();

console.log(`=============================== TP 8 : Les tests ================================`);
console.log(`==== TP 8 : Les tests unitaire : taper ./node_modules/.bin/mocha dans un terminal bash a la raicne de votre projet pour executer les tests ====`);



/*
const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
}

const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
    }
    return totalLetters;
}


// test unitaire Mocha sidebar (plugin vscode)
// describe == decris, it == cela ('resultat attendu'), expect == attendue
describe('getWordCount()', function () {
    it('Devrait trouver 4 mots', function () {
        expect(getWordCount('J ai quatres mots!').to.equal(4));
    });
    it('Devrait ne pas trouver de mot', function () {
        expect(getWordCount(' ').to.equal(0));
    });
})*/



console.log(`=============================== TP 9 : Les tests ================================`);

export class Book {
    constructor(title, author, description,pages,currentPage,read) {
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = read;
    }
  readBook(page){
    console.log('page :' +page);
    const pages = 3;
    if(page<1 || page > pages){
      return 0;
    }else if(page>=1 && page <pages){
      this.currentPage = page;
      console.log('current page :'+this.currentPage);
      return 1;
    } else if(page == pages) {
      this.currentPage = page;
      this.read = true;
      console.log('current page :' + this.currentPage );
      console.log('read page :' + this.read );
      return 1;
    }
  }
  
  
  }
  
  let firstBook = new Book('book 1', 'author 1', 'description 1',3,1,false);
  let secondBook = new Book('book 2', 'author 2', 'description 2',3,2,false);
  let thirstBook = new Book('book 3', 'author 3', 'description 3',3,3,false);
  export const books = [firstBook,secondBook,thirstBook];
  