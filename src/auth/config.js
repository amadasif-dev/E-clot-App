import {GoogleSignin} from '@react-native-google-signin/google-signin';
const googleConfig = () => {
  GoogleSignin.configure({
    webClientId:
      '274819137897-7icgporru6nnglvn35dpng95cdic8bhr.apps.googleusercontent.com',
    offlineAccess: false,
  });
};

export default googleConfig;
