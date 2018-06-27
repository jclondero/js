var express = require('express');
var app = express();
var firebase = require('firebase-admin');
var serviceAccount = require("./testejs.json");
var users = [];

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://react-native-3c95d.firebaseio.com/"
});
 
// Definir a route principal
app.get('/', function(req, res) {
  res.send('API React Native');
});
 
// Lista de Utilizadores
firebase.database().ref('/usuarios').once('value').then(function(snapshot) {
  snapshot.forEach(element => {
    users.push({
      id: element.key,
      nome: element.val().nome,
      idade: element.val().idade
    });
    //users.push("id : "+element.key+", nome : "+element.val().nome);
    //console.log(element.val().nome);
  });
});

// Definir um endpoint da API
app.get('/api/listaUsers', function(req, res, next) {
  res.send(users);
})
 
// Aplicação disponível em http://127.0.0.1:3000/
app.listen(3000);