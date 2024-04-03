import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {firebaseCollection} from './docCollection/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleUserSignupAuth = async (email, password) => {
  try {
    console.log(email, password);

    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log('Login Successfull', res);
    return res;
  } catch (error) {
    console.log('Error during registration:', error);
    if (error.code === 'auth/email-already-in-use') {
      throw 'email already in use. Please try again.';
    } else if (error.code === 'auth/invalid-email') {
      throw 'That email address is invalid!';
    }
    throw error;
  }
};

export const handleSignInAuth = async (email, password) => {
  try {
    console.log(email, password);
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const collectionRef = firestore().collection(
      firebaseCollection.userCollection,
    );
    console.log(collectionRef);
    const userDoc = collectionRef.doc(res.user.uid);
    await userDoc.set({
      uid: res.user.uid,
      email: res.user.email,
      displayName: res.user.displayName,
    });
    console.log('userDoc', userDoc);
    return res;
  } catch (error) {
    console.log(error);
    console.log('Error during Login:', error);
    if (error.code === 'auth/invalid-credential') {
      throw ('Invalid Credentials', 'The email or password is incorrect.');
    } else {
      throw error;
    }
  }
};

export const signOutAuth = () => {
  const userSignOut = auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  return userSignOut;
};
