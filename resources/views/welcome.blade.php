<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{asset('manifest.json')}}" rel="manifest">
        <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
        <!-- Styles -->

    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
            </div>
        </div>
    </body>
</html>
<script>
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
    Notification.requestPermission().then((permission)=>{
        if(permission=='granted'){
            console.log('notification granted !')
            return messaging.getToken()
        }else{
            console.log('unable to get permission to notify!')
        }
    }).then(function(token){
        console.log('getToken')
        console.log(token)
    }).catch((err)=>{
        console.log(err)
    })
    messaging.onMessage((payload) => {
        if(payload){
            console.log('Message received. ', payload);
        }else{
            console.log('listen.... ');
        }

      });

</script>