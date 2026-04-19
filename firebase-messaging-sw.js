importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Use as mesmas configurações que você postou
firebase.initializeApp({
  apiKey: "AIzaSyA0dsLtR2gnW6IkghjLyjRnH_hatgqLeoA",
  authDomain: "meu-gui-axe.firebaseapp.com",
  projectId: "meu-gui-axe",
  storageBucket: "meu-gui-axe.firebasestorage.app",
  messagingSenderId: "589824726080",
  appId: "1:589824726080:web:1b7e366e5099da96c43ba5"
});

const messaging = firebase.messaging();

// Esta função exibe a notificação quando o site está fechado
messaging.onBackgroundMessage((payload) => {
  console.log('Mensagem recebida em segundo plano: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});