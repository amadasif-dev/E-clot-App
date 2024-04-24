import {firebase} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {firebaseCollection} from './docCollection/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppStorage} from './storage/AppStorage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

// Sign Up Auth Handle
export const handleUserSignupAuth = async (email, password,displayName) => {
  try {
    console.log(email, password,displayName);
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
      firebase.auth().currentUser.updateProfile({
        displayName:displayName
      })
      await AsyncStorage.setItem(AppStorage.user, JSON.stringify(res));
      console.log('signUp Successfull', res);
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

// Sign In Auth Handle
export const handleSignInAuth = async (email, password,displayName) => {
  try {
    console.log(email, password,displayName);
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
      displayName:res.user.displayName,
    });
    await AsyncStorage.setItem(AppStorage.user, JSON.stringify(res));
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

// Sign Out Auth Handle
export const signOutAuth = () => {
  try {
    const userSignOut = auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    return userSignOut;
  } catch (error) {
    console.log('Error during Sign Out:', error);
    if (error.code === 'Log Out') {
      throw 'Goto Login.';
    } else throw error;
  }
};
// Google Sign In Auth Handle
export const googleSignInAuth = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userInfo = await auth().signInWithCredential(googleCredential);
    const collectionRef = firestore().collection(
      firebaseCollection.userCollection,
    );
    const userDocRef = collectionRef.doc(userInfo.user.uid);
    await userDocRef.set({
      uid: userInfo.user.uid,
      email: userInfo.user.email,
      displayName: userInfo.user.displayName,
    });
    await AsyncStorage.setItem(AppStorage.user, JSON.stringify(userInfo));
    // console.log('Google sign-in successful', userInfo);
    return userInfo;
  } catch (error) {
    console.log('Error during Google SignIn:', error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      throw 'Google sign in was canceled';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      throw 'Google sign in is already in progress';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      throw 'Google Play Services are not available';
    }
    throw error;
  }
};

// Facebook Sign In Auth Handle
export const facebookSignInAuth = async () => {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    console.log(result);
    if (result.isCancelled) {
      throw new Error('User cancelled the login process');
    }

    // Once signed in, get the user's AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('Something went wrong obtaining access token');
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    const userFacbookAccount = await auth().signInWithCredential(
      facebookCredential,
    );
    const collectionRef = firestore().collection(
      firebaseCollection.userCollection,
    );
    const userDocRef = collectionRef.doc(userFacbookAccount.user.uid);
    await userDocRef.set({
      uid: userFacbookAccount.user.uid,
      email: userFacbookAccount.user.email,
      displayName: userFacbookAccount.user.displayName,
    });
    await AsyncStorage.setItem(
      AppStorage.user,
      JSON.stringify(userFacbookAccount),
    );
    console.log('Facebook', userFacbookAccount);
    return userFacbookAccount;
  } catch (error) {
    // Handle and log any errors that occur during the process
    if (error.code === 'auth/account-exists-with-different-credential') {
      throw new Error(
        'An account already exists with the same email address but different sign-in credentials',
      );
    } else if (error.code === 'auth/auth-domain-config-required') {
      throw new Error(
        'Your app needs additional configuration to allow Facebook authentication',
      );
    } else if (error.code === 'auth/cancelled-popup-request') {
      throw new Error(
        'The Facebook sign-in popup was closed before completing the operation',
      );
    } else if (error.code === 'auth/operation-not-allowed') {
      throw new Error(
        'Facebook sign-in is currently disabled. Please contact support.',
      );
    } else if (error.code === 'auth/popup-blocked') {
      throw new Error(
        'Popup blocked. Please enable popups in your browser settings.',
      );
    } else {
      throw new Error('An unexpected error occurred during Facebook sign-in');
    }
  }
};
