/* eslint-disable @next/next/no-sync-scripts */
import React from "react";

const Firebase: React.FC = () => (
  <>
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js" />
    <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-analytics.js" />
    <script
      async
      dangerouslySetInnerHTML={{
        __html: `
          var firebaseConfig = {
            apiKey: "AIzaSyBPD9rAs1lbdeTt_gBco0Rh2YPHFG9JUyI",
            authDomain: "dreammeister-litemera.firebaseapp.com",
            projectId: "dreammeister-litemera",
            storageBucket: "dreammeister-litemera.appspot.com",
            messagingSenderId: "666182904715",
            appId: "1:666182904715:web:d59fc2b9e3970694525d8e",
            measurementId: "G-8MWB8N55PH"
          };
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();
        `,
      }}
    />
  </>
);

export default Firebase;
