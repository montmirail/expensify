import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBRpEmKo9fQS_SpXaQvzCJXMZSSenVujAk",
    authDomain: "expensify-cec07.firebaseapp.com",
    databaseURL: "https://expensify-cec07.firebaseio.com",
    projectId: "expensify-cec07",
    storageBucket: "expensify-cec07.appspot.com",
    messagingSenderId: "608540678179"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Messire de Montmirail'
});

firebase.database().ref('attributes').set({
    height: 185,
    weight: 70
});