//<!-- The core Firebase JS SDK is always required and must be listed first -->
//<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>

//<!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
//<script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-analytics.js"></script>
// Your web app's Firebase configuration
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
messaging.getToken().then((currentToken) => {
    if (currentToken) {
        sendTokenToServer(currentToken);
        updateUIForPushEnabled(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
});