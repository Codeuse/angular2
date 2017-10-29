Projet Epouse kouakou
========================


Comment demarrer?
--------------

il faut [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)).
ensuite

1.	tape `npm install` pour installer les dependances.

2.	tape `npm run build` pour demarrer.

3.  ensuite ouvre `public/index.html` avec ton navigateur.

Que ce passe t'il dedans?
-------------------------------

-	Affiche un marquer sur la carte quand on clic sur l'utilisateur a droite

- Affiche les postes et leurs commentaires si tu clic sur chaue

- Affiche les albums et les images contenus quand on clic dessus

Comment modifier?
-------------------------------

* Tout est est base Json, faudra juste dupliquer et replacer par le contenu qui te conviendra dans toolbar.component.html, .less pour le css , .js pour la logique et les actions

* Le server json que tu m'avais donner est limiter mais si ce projet doit etre pousser, il te faudra un serveur pour faire les action de parse dynamiquement.