# Widget Météo 

Tu viens de découvrir une solution plug and play pour commencer un projet React ?  
Tu veux montrer au monde entier ce dont tu es capable ?

Allez !

1. On se code un truc sympa
2. On fait le build
3. On le met en ligne

## 1. On va coder un widget de Météo

Un widget est un mini-outil, qui pourra s'intégrer facilement dans des outils plus complets. Nous on va faire une mini-interface pour voir le temps qu'il fait dans une ville donnée. On va faire un composant quoi !

- On démarre un projet avec [Create React App](https://create-react-app.dev/docs/getting-started/)
- On applique notre savoir-faire pour créer l'interface de notre widget météo, on va commencer par indiquer la température actuelle pour une ville
- Le but est de montrer ce qu'on sait faire, on va y mettre les formes avec des styles propres, ~[avec sass tant qu'à faire](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)~ ([sass à jour](https://www.npmjs.com/package/sass))
- On alimente notre composant avec des données, on va piocher dans l'api https://openweathermap.org/api
  - Commence par te [créer un compte](https://home.openweathermap.org/users/sign_up), t'en auras besoin pour la clé API
  - Puis explore la documentation pour voir comment récupérer la température pour une ville
  - Pour avoir le résultat en degré celsius [tout est prévu](https://openweathermap.org/current#data)

> Une seconde ! Les variables d'environnement ça te parle ? On va regarder [comment ça marche](https://create-react-app.dev/docs/adding-custom-environment-variables/) avec Create-React-App pour mémoriser notre clé API ainsi

## 2. On fait le build

Le build est une étape cruciale. Il s'agit de lancer l'analyse de nos fichiers contenant l'ensemble du code de notre application. Notre code de développement ne sera pas utilisé tel quel en production. Il faut lui appliquer plusieurs traitements. Par exemple le scss doit être transformé en css pour être compris par le navigateur. L'ES6 doit être transpilé en ES5 pour plus de compatibilité. Le code doit être minifié, réduit en supprimant les espaces ou les caractères inutiles et ainsi rendu plus léger. Heureusement on a un outil qui dirige les opérations, le bundler webpack. Encore plus heureux, on utilise Create-React-App qui inclu toute la configuration de cet outil.

Donc dans les faits  ¯\\\_(ツ)\_/¯
```
yarn build
```


## 3. Mise en ligne

Il existe des tas de solutions d'hébergement pour nos applications. Aujourd'hui nous allons en voir une des plus complexes. Il s'agit de [Surge](https://surge.sh/).

Surge propose une solution gratuite pour héberger du contenu statique (HTML/CSS/JS). Ça tombe bien c'est précisement ce qu'on a réalisé ! Y a plus qu'à tester 😁

---

_Quand t'auras fini de jouer pourquoi pas recommencer ? Tiens cadeau https://github.com/public-apis/public-apis_
