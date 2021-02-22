import Vue from 'vue'
import firebase from 'firebase/app'
import firebaseConfig from '../../firebase/firebaseConfig'

// import 'firebase/auth'
import 'firebase/firebase-database'
// import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
Vue.prototype.$test = 'test'
