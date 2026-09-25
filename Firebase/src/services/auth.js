import auth from '@react-native-firebase/auth';

export const registerUser = async (email, password) => {
  try {
    const normalizedEmail = email.trim().toLowerCase();

    const userCredential = await auth().createUserWithEmailAndPassword(
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
        throw new Error('Registration failed. Please try again.');
    }
  }
};
