var express = require('express');
var app = express();
var firebase = require('firebase-admin');

var serviceAccount = require("./testejs.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://react-native-3c95d.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("usuarios/1/nome");
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
});

/*
var usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});
*/

// Aplicação disponível em http://127.0.0.1:3000/
app.listen(3000);