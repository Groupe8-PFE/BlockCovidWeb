Bienvenue sur le Read_Me , ici nous allons vous guider afin de pouvoir lancer et utiliser l'application Web et Mobile de BlockCovid.

Contexte: 
    Nous avons codé l'application coté front-end et mobile sur VisualStudioCode,
    le back-end sur RubyMines. Nous vous recommandons de regarder le code dans ces IDE. 

Lancement :
    Nous vous conseillons de creer un nouveau dossier. Afin de lancer l'application, il faut tout d'abord avoir accès au code. 
    Ceci est fait via les lignes de commandes suivantes :
        BlockCovidWeb: git clone https://github.com/Groupe8-PFE/BlockCovidWeb.git
        BlockCovidAPI: git clone https://github.com/Groupe8-PFE/BlockCovidAPI.git
        BlockCovidMobile: git clone https://github.com/Groupe8-PFE/BlockCovidMobile.git

    ATTENTION : Pour les utilisateur de Windows, la "gem 'exponent-server-sdk'" risque de poser des problèmes de compatibilité. 
    Désactivez-la si nécéssaire mais les notifications seront désactivées.

    Une fois les 3 commandes entrées, vous aurez 3 dossiers. 
    Vuus allez devoir  ensuite mettre à jour vos packages dans chaque dossier. Chaque application à sa propre ligne de commande à executer.
    Ouvrer dans un terminal le dossier de l'application en question et lancer ces commandes:
        BlockCovidWeb: npm install
        BlockCovidAPI: bundle install 
        BlockCovidMobile:expo install * (ne pas oublier d'installer le client expo cli sur votre ordinateur avant tout chose : npm install --global expo-cli )


	Sur l'application blockCovidMobile, nous avons utilisé le client expo pour tester l'application sur mobile,
	nous vous conseillons d'installer l'application "Expo" sur le Playstore si vous désirez l'utiliser de cette façon
    
    Maintenant que vos applications fonctionnent, il suffit de les lancer, encore une fois, chaque application à sa propre commande de lancement.
    Ouvrer dans un terminal le dossier de l'application en question et lancer ces commandes:
        BlockCovidWeb: npm start
        BlockCovidAPI: rails server -p 8000 
        BlockCovidMobile: expo start 
    
Voilà, maintenant tout devrait fonctionner, vous pouvez utiliser votre navigateur préféré.
(nous n'avons pas testé sur tous les navigateurs mais Chrome et Mozilla fonctionnent avec l'application)
Il ne vous reste plus qu'à taper dans l'url du navigateur: "localhost:3000" et vous êtes partis. 


*Si expo install ne marche pas voici le lien complet des installations à effectuer :

expo install @react-navigation/native
expo install react-native-gesture-handler
expo install react-native-reanimated
expo install react-native-screens
expo install react-native-safe-area-context
expo install @react-native-community/masked-view

expo install @react-navigation/stack 
