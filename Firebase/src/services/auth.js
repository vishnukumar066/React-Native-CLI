import auth from '@react-native-firebase/auth';

export const registerUser = async (email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await userCredential.user.sendEmailVerification();
    return userCredential.user;
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage =
          'This email is already in use, please use diffferent email.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Please use strong password.';
        break;
      default:
        errorMessage = 'An unknown error occured.';
    }
  }
};
