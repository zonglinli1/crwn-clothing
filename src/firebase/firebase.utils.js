import firebase from'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDgLs3PF5eIBjl9D5TQcsoIAFj8kOHmRYw",
    authDomain: "crwn-db-c43f1.firebaseapp.com",
    projectId: "crwn-db-c43f1",
    storageBucket: "crwn-db-c43f1.appspot.com",
    messagingSenderId: "87967106046",
    appId: "1:87967106046:web:6e30e004b38569c5b8f6af",
    measurementId: "G-RLEPVE0V32"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;