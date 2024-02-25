import { getAuth, signInAnonymously } from 'firebase/auth';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const authenticateFirebase = (callback: (url: string) => void) => {
  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log({ errorCode, errorMessage });
    });

  auth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      getfileFromstorage(callback);
    } else {
      // User is signed out.
    }
  });
};

const getfileFromstorage = (callback: (url: string) => void) => {
  const storage = getStorage();
  const storageRef = ref(storage);

  // Create a reference to the file we want to download
  const resumeRef = ref(storageRef, "Roe'e Chaimowicz_Frontend developer.pdf");

  // Get the download URL
  getDownloadURL(resumeRef)
    .then(function (url) {
      callback(url);
    })
    .catch(function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors

      console.log(error.errorMessage);
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
};

export { authenticateFirebase, getfileFromstorage };
