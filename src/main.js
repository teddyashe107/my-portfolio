import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDCRZUJWnz2i004SnudLXseXPCbDlhNtUM',
	authDomain: 'my-portfolio-d102a.firebaseapp.com',
	projectId: 'my-portfolio-d102a',
	storageBucket: 'my-portfolio-d102a.appspot.com',
	messagingSenderId: '196499507488',
	appId: '1:196499507488:web:7da82ebf312055313daf45',
	measurementId: 'G-9T10GF7EG3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = createApp(App);
app.use(router);
app.mount('#app');
