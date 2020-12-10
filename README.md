# JAVASCRIPT

Pour executer votre programme javascript dans vscode il suffit de tapper dans votre terminal

```cmd
cd [projet]
./projet>node [projet].js
```

# Utiliser les donnees et les types de donnees dans JavaScript

## Declarez des variables et modifiez leurs valeurs

Creation de variable en la declarant et en l'initialisant

Exemples:

```js
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
declarationVariable = 'variable '+'concatenee avec + ';
console.log('Declaration variable ' + declarationVariable);
// retourne"Declaration variable variable concatenee avec + "
console.log('Nombre de couleur primaires '+nombreDeCouleurPrimaires);
// retourne "Nombre de couleur primaires 3"
console.log(chat.substring(0,chat.length -2) +' initiale '+ nombreDeChat);
// retourne "Nombre de chats  initiale 2"
// Exemple sur les operations
nombreDeChat += 10;
console.log(chat +'Apres operation nombreDeChat += 10 = '+ nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat += 10 = 12"
nombreDeChat -= 2;
console.log(chat +'Apres operation nombreDeChat -= 2 = '+ nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat -= 2 = 10"
nombreDeChat *= 2;
console.log(chat +'Apres operation nombreDeChat *= 2 = '+ nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat *= 2 = 20"
nombreDeChat /=4;
console.log(chat +'Apres operation nombreDeChat /=4 = '+ nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat /=4 = 5"
nombreDeChat %=2;
console.log(chat +'Apres operation nombreDeChat %=2 = '+ nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat %=2 = 1"
nombreDeChat ++;
console.log(chat +'Apres operation nombreDeChat ++ = '+ nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat ++ = 2"
nombreDeChat --;
console.log(chat +'Apres operation nombreDeChat -- = '+ nombreDeChat);
// retourne "Nombre de chats ? Apres operation nombreDeChat -- = 1"
```

La difference entre var et let est leur portee. **let n'est pas visible hors de son bloc (ex:if) a la difference de var.**

Demonstration:

```js
function testLet(){
    if( 1 === 1 ){
        let maVar = true;
        console.log(maVar);
        // Retourne true
    }
    console.log(maVar);
  // Retourne une erreur, let n'existe pas hors du bloc "if"
}
function testVar(){
    if( 1 === 1 ){
        var maVar = true;
        console.log(maVar);
        // Retourne true
    }
    console.log(maVar);
    // Retourne true
}
```

## Enregistrez vos donnees avec des types de donnees

La methode typeof permet de retourner le type de la valeur de la variable.

Les types primitifs des variables en javascript sont:

* number
* string
* boolean

Exemple: nombre

```js
let positiveNumber = 5;
console.log('Entier positif est de type : ' + typeof positiveNumber);
let negativeNumber = -5;
console.log('Entier negatif est de type : ' + typeof positiveNumber);
let decimalNumber = 42.5612;
console.log('Entier negatif est de type : ' + typeof decimalNumber);
```

Exemple: boolean
```js
let userIsSignedIn = true;
console.log('userIsSignedIn est de type : ' + typeof userIsSignedIn);
let userIsAdmin = false;
console.log('userIsAdmin est de type : ' + typeof userIsAdmin);
```

## Definissez des objets et leurs attributs avec des classes

Les objets JavaScript sont ecrits en JSON (JavaScript Object Notation). Ce sont des series de paires cles/valeurs separees par des virgules, entre des accolades. Les objets peuvent etre enregistres dans une variable :

```js
let episode = {
    title: 'Game Of Trone',
    duration: 90,
    hasBeenWatched: true
};
```

Affectectation des propriees de l'objet, puis utilisation.
Exemples:

```js
let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;

console.log('Ma serie prefere est : ' + episodeTitle);
console.log('Chaque episode de  : ' + episodeTitle + ' a une duree de : ' + episodeDuration+' minutes');
console.log('La saison 1 a ete vu  : ' + episodeHasBeenWatched);
```

## Creation de classes

Les classes sont utiles lorsque nous souhaitons creer des objets volumineux et surtout si vous desirez les reutiliser.

Structure d'une classe:

* class suivi de son nom (1er lettre en Majuscule) est {}
* un constructeur permettant plus tard de l'instancier
* declarations des attributs de l'objet

Puis nous pouvons utiliser cette classe.

Exemple de classe et utilisation:

```js
class Episode {
    constructor(titleEpisode, durationEpisode, hasBeenWatchedEpisode) {
        this.titleEpisode = titleEpisode;
        this.durationEpisode = durationEpisode;
        this.hasBeenWatchedEpisode = hasBeenWatchedEpisode;
    }
}
let firstEpisode = new Episode('Premiere episode', 95, true);
let secondEpisode = new Episode('Seconde episode', 120, false);
let thirdEpisode = new Episode('Troisieme episode', 94, true);
console.log('Objet Episode 1 : ' + afficherProps(firstEpisode));
console.log('Objet Episode 2 : ' + afficherProps(secondEpisode));
console.log('Objet Episode 3 : ' + afficherProps(thirdEpisode));
```

## Gerez la complexite avec la bonne collection (array, set, map)

### Les tableaux

* **Les tableaux**

    * Declaration (`let monTableau = [];`)
    * Ou Declaration et initilisation (`let monTableauInitialise = [1,5,9,45,726];`)


* **Acces a un element du tableau**

    * A l'aide de l'index (`console.log(monTableauInitialise[2]);`)

```js
let myTableau=[firstEpisode,secondEpisode,thirdEpisode];
console.log('Valeur a l\'index 1 du tableau : '+ afficherProps(myTableau[1]));
```

* **Compter le nombre d'element d'un tableau**

    * A l'aide de la propriete `length`

```js
console.log('Nombre d\'element dans le tableau ? : '+ myTableau.length);
```

* **Ajouter un element a la fin d'un tableau**

    * A l'aide de la propriete `push`

```js
myTableau.push(2);
console.log('Nombre d\'element dans le tableau ? : '+ myTableau.length);
```
* **Ajouter un element au debut d'un tableau**

    * A l'aide de la propriete `unshift`
```js
myTableau.unshift(new Episode('Terminator', 157, true));
console.log('Nombre d\'element dans le tableau ? : '+ myTableau.length);
console.log('Valeur a l\'index 0 du tableau : '+ afficherProps(myTableau[0]));
```
* **Supprimer le derniere element d'un tableau**

    * A l'aide de la propriete `pop`
```js
myTableau.pop();
console.log('Nombre d\'element dans le tableau ? : '+ myTableau.length);
console.log('Valeur au derniere index du tableau : '+ afficherProps(myTableau[myTableau.length]));
```


**Remarques :**
* Le tableau peux contenir des types differents pour chaque index.
* La valeur retourne par length correspondant au nombre d'index, mais les index d'un tableau commence toujours par 0, cad, que pour une longueur (length) de 3 notre tableaux aura des valeurs dans les index 0,1 et 2 (soit 3 valeurs === length).


### Les sets (ensembles) et maps (cartes)

* **Les Sets**
En JavaScript, un set, ou ensemble, est une liste non ordonnee. Cela signifie que vous ne pouvez pas recuperer de facon fiable les elements de liste, car ils n'ont pas d'indice fixe. Vous pouvez par contre ajouter et supprimer des elements (les doublons ne sont pas autorises) et verifier si un ensemble contient ou non un element particulier. Les ensembles peuvent être pratiques pour enregistrer les utilisateurs en ligne a un instant donne, pour verifier s'ils le sont ou non.

En revanche, une map est une liste ordonnee de paires cles/valeurs. Bien qu'elle ressemble a un objet, il y a des differences importantes. Par exemple, les cles peuvent avoir n'importe quelle valeur (et pas seulement des chaines) dans les cartes. Vous pouvez facilement trouver combien d'elements une  map  contient, et il est possible de filtrer ou modifier dans certains cas les paires cles/valeurs.

```js
const nbreDeFeuTricolors = new Set(['vert', 'orange', 'rouge']);
console.log('Le set nbreDeFeuTricolors contient-il la couleur vert ? '+ nbreDeFeuTricolors.has('vert'));
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));
console.log('Le set nbreDeFeuTricolors contient-il la couleur rouge ? '+ nbreDeFeuTricolors.has('rouge'));
```
* **Compter le nombre d'element d'un set**

    * A l'aide de la propriete `size`

```js
console.log('Nombre d\'element dans le set nbreDeFeuTricolors ? : '+ nbreDeFeuTricolors.size);
```
* **Ajouter un element au set**

    * A l'aide de la propriete `add`

```js
nbreDeFeuTricolors.add('bleu');
console.log('Nombre d\'element dans le set nbreDeFeuTricolors apres ajout? '+ nbreDeFeuTricolors.size);
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));
```

* **Supprimer tous les elements d'un set**

    * A l'aide de la propriete `clear`
```js

console.log('Nombre d\'element dans le set nbreDeFeuTricolors apres suppression de bleu ? '+ nbreDeFeuTricolors.size);
```

* **Supprimer un element d'un set**

    * A l'aide de la propriete `delete`

```js
nbreDeFeuTricolors.add('vert');
nbreDeFeuTricolors.add('orange');
nbreDeFeuTricolors.add('rouge');
nbreDeFeuTricolors.add('bleu');
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));
nbreDeFeuTricolors.delete('bleu');
console.log('Le set nbreDeFeuTricolors contient-il la couleur bleu ? '+ nbreDeFeuTricolors.has('bleu'));
```

Plus d'information sur les Sets [Sets MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set)

Plus d'information sur les Maps [Maps MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Map)

