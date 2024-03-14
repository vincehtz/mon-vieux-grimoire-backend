ACCES A LA BASE DE DONNEES MONGODB :

Ce projet utilise une base de données MongoDB pour stocker les données. Pour accéder à la base de données, suivez les étapes ci-dessous :

1. Cloner le projet :

Ouvrir un Terminal et passer la commande suivante:

git clone https://github.com/vincehtz/mon-vieux-grimoire-backend.git

2. Installer les dépendances :

Dans le Terminal, se placer dans le repertoire /backend et passer les commandes suivantes :

npm install
npm install -g nodemon
npm install --save bcrypt dotenv express jsonwebtoken mongoose mongoose-unique-validator multer sharp

3. Configurer les variables d'environnement :

Créez un fichier .env à la racine du projet.
Copiez le contenu du fichier .env.example fourni dans ce projet.
Remplissez les champs vides avec les informations fournies de manière sécurisée par le détenteur.

4. Exécutez le serveur :

Dans le Terminal, passer la commande suivante :

nodemon server

5. Accéder à l'application :

Cloner le projet Frontend (ouvrir un nouveau Terminal et passer la commande suivante) :

git clone https://github.com/OpenClassrooms-Student-Center/P7-Dev-Web-livres.git

Faites la commande "npm install" pour installer les dépendances puis "npm start" pour lancer le projet.
