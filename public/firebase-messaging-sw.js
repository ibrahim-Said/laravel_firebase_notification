importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyAck03I02Qghdu-EYduZlhEzA8W-_hW1W4",
    authDomain: "testproject-5f7c5.firebaseapp.com",
    databaseURL: "https://testproject-5f7c5.firebaseio.com",
    projectId: "testproject-5f7c5",
    storageBucket: "testproject-5f7c5.appspot.com",
    messagingSenderId: "509135872627",
    appId: "1:509135872627:web:72490c567ea3d15e7c4006",
    measurementId: "G-S0X40GKTP4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BKQaDeL0U6v4MkxLejxuHc4jnGybhAmVrM9ONrtE7f8LeMyDepjLaxPRAGxNkhYBkgEIfh-_qRmrJ7yuGtOsXtU");
messaging.onMessage((payload) => {
    if (payload) {
        console.log('Message received. ', payload);
    } else {
        console.log('listen.... ');
    }

});
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Title';
    const notificationOptions = {
        body: 'body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});