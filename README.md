# JS-Projet


Travail de groupe :  Tao/Elouan/Kévin/Mathis

Le lien du github de notre projet : https://github.com/taobourmaud/JS-Projet


1) [Le projet](#projet)
2) [Son intérêt](#interet)
3) [Son utilisation](#utilisation)
4) [Les détails de notre code](#detail)
5) [La répartition du travail entre nous](#reparti)
4) [Ce qu'on aurait pu améliorer](#ameliorer)


## Le projet : <a id="projet"></a>


C'est un travail de groupe dans lequel nous avons dû coder en JavaScript, en HTML et en CSS. Le but était de créer un site web permettant à nous, ou n'importe quel méchants, de rechercher des informations sur le héros de notre choix. La liste des héros avec leurs attributs est stocké dans un fichier JSON qu'il fallait parcourir afin de réutiliser les informations. Nous avions 11 jours pour réaliser le maximum de fonction demandé parmis celle-ci :

- ***Fetching the Data***   
    - L'utilisation d'un API pour le site web.
- ***Display***
    - Affichage des informations avec le choix du nombre de résultats afficher sur la page et un système de navigation entre les pages.
- ***Search***
    - Recherche interactives des héros via leurs noms.
- ***Sort***
    - Un tri dans l'ordre croissant ou décroissant des héros par rapport à la caractéristique choisi.
- ***Speed*** 
    - Enfin, le site ne doit pas être trop charger et lent. Nous sommes des vilains et nous agissons rapidement.


## Son intérêt : <a id="interet"></a>


Lorsqu'on a des plans à comploter en tant que vilain, on ne peut pas se permettre de perdre son temps à espionner son ennemie juré, à guêter pour ses faiblesses! Ce site permet de remédier à cette entrave, et fait gagner beaucoup de temps à nous autres, vilains. Il nous permet de connaitre plein de choses sur les héros et vilains de ce monde: leur force, leur intelligence, leur photo, leur réelle identité, leur race, leur gabarit, et même leur lieu de naissance !
Cependant, il est possible que vous ne vous intéressiez pas à une personne en particulier. Dans ce cas, vous pourrez chercher par ordre croissant ou décroissant, en fonction de la statistique voulue: si vous voulez savoir qui est le plus intelligent, on encore qui est le plus faible?
De plus, si vous souhaitez vous préparer au combat, mais que vous avez besoin d'alliés adaptés à la situation, et bien vous pouvez faire exactement la même chose, mais en recherchant des méchants, pour ainsi travailler avec les plus efficaces d'entre eux qui ont un intérêt commun avec vous !


## Son utilisation : <a id="utilisation"></a>


Notre site est créé de manière ergonomique et simple à prendre en main.

Une fois arrivé sur le site, vous pouvez comme bon vous semble monter et descendre dans la liste des super héros et vilains et connaitre leurs caractéristiques.
![image](https://media.discordapp.net/attachments/408320873876160522/829390676121616384/unknown.png?width=1366&height=670)

En revanche, si vous souhaitez faire des recherches plus ciblés, cliquez sur le bouton à droite de "Choisir le nombre de résultats sur la page :"; et sélectionnez le nombre de résultats voulus:

![Page Size](static/Images/unknown.png)

Ensuite, taper les premières lettres (ou le nom complet) du personnage sur lequel vous souhaitez en apprendre plus:
![image](https://media.discordapp.net/attachments/408320873876160522/829392050461868042/image0.png)

Et voila, vous avez maintenant toute les informations que vous désirez !

![image](https://media.discordapp.net/attachments/408320873876160522/829392426833412126/unknown.png?width=1440&height=140)

 (sauf apparement la race de Chuck Norris, que personne connait à ce jour)


## Les détails de notre code : <a id="detail"></a>

Notre code se compose en 3 parties: la partie html, la partie css, et la partie js. Les voici expliquées avec plus de détails:

index.html: Ce fichier permet de donner l'apparence voulue au site 


style.css:


main.js: c'est le fichier qui fait fonctionner le site, et qui lui donne ses fonctionnalités, voici l'explication des fonctions qui s'y trouvent:

function rand

function getRandomLetter

function getRandomWord

function init

function SizePage

function SizeDefault

function item

function sort


## La répartition du travail entre nous : <a id="reparti"></a>

Sort: Mathis et Kevin

Fetch: Mathis et Kevin

Search: Tao et Elouan

Display: Tao et Elouan



README: Mathis

## Ce qu'on aurait pu améliorer : <a id="ameliorer"></a>


Avec plus de temps, on aurait pu améliorer

-notre fonction sort

-la pagination (la créer pour le coup)

-rajouter des personnages

-les dessins de Tao