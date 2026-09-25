import { getAuth } from '@react-native-firebase/auth';

export const registerUser = async (email, password) => {
  try {
    const normalizedEmail = email.trim().toLowerCase();

    const userCredential = await getAuth().createUserWithEmailAndPassword(
      normalizedEmail,
      password,
    );

    const user = userCredential.user;
    await user.sendEmailVerification();

    return user;
  } catch (error) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        throw new Error(
          'This email is already registered. Please use a different email.',
        );

      case 'auth/invalid-email':
        throw new Error('Please enter a valid email address.');

      case 'auth/weak-password':
        throw new Error('Please use a stronger password.');

      case 'auth/operation-not-allowed':
        throw new Error(
          'Email/password authentication is not enabled in Firebase.',
        );

      case 'auth/network-request-failed':
        throw new Error(
          'Network error. Please check your internet connection.',
        );

      case 'auth/too-many-requests':
        throw new Error('Too many attempts. Please try again later.');

      default:
        throw new Error('Registration failed1. Please try again.');
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const normalizedEmail = email.trim().toLowerCase();

    const userCredential = await getAuth().signInWithEmailAndPassword(
      normalizedEmail,
      password,
    );

    const user = userCredential.user;
    return {
      user,
      emailVerified: user.emailVerified,
    };
  } catch (error) {
    console.log('🔥 Firebase Login Error');
    console.log('Code:', error.code);
    console.log('Message:', error.message);

    switch (error.code) {
      case 'auth/user-not-found':
        throw new Error('You are not registered. Please register first.');

      case 'auth/wrong-password':
        throw new Error('Incorrect email or password.');

      case 'auth/invalid-credential':
        throw new Error('Incorrect email or password.');

      case 'auth/invalid-email':
        throw new Error('Please enter a valid email address.');

      case 'auth/user-disabled':
        throw new Error(
          'This account has been disabled. Please contact support.',
        );

      case 'auth/operation-not-allowed':
        throw new Error(
          'Email/password authentication is not enabled in Firebase.',
        );

      case 'auth/network-request-failed':
        throw new Error(
          'Network error. Please check your internet connection.',
        );

      case 'auth/too-many-requests':
        throw new Error('Too many attempts. Please try again later.');

      default:
        throw new Error(`Login failed: ${error.code || error.message}`);
    }
  }
};

export const forgotPassword = async email => {
  try {
    const normalizedEmail = email.trim().toLowerCase();

    await getAuth().sendPasswordResetEmail(normalizedEmail);

    return {
      success: true,
      email: normalizedEmail,
    };
  } catch (error) {
    console.log('🔥 Firebase Forgot Password Error');
    console.log('Code:', error.code);
    console.log('Message:', error.message);

    switch (error.code) {
      case 'auth/user-not-found':
        throw new Error('No account found with this email address.');

      case 'auth/invalid-email':
        throw new Error('Please enter a valid email address.');

      case 'auth/user-disabled':
        throw new Error(
          'This account has been disabled. Please contact support.',
        );

      case 'auth/operation-not-allowed':
        throw new Error('Password reset is not enabled in Firebase.');

      case 'auth/network-request-failed':
        throw new Error(
          'Network error. Please check your internet connection.',
        );

      case 'auth/too-many-requests':
        throw new Error('Too many attempts. Please try again later.');

      default:
        throw new Error(
          `Password reset failed1: ${error.code || error.message}`,
        );
    }
  }
};
