
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup ,signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";



interface UserData {
  sub: string;
  fullName: string;
  email: string;
  email_verified: boolean;
  picture: string;
  subscription_status: string;
  user_created_at: Date;
}

class Firebase {
  app: ReturnType<typeof initializeApp>;
  auth: ReturnType<typeof getAuth>;
  db: ReturnType<typeof getFirestore>;
  googleProvider = new GoogleAuthProvider();

  firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };
  

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
  }

  // create document
  async createUserDocument(userData: UserData) {
    try {
      // Create a reference to the document in the "users" collection with the ID as userData.sub
      const userRef = doc(this.db, "users", userData.sub);
      // Check if the document already exists
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        // Document doesn’t exist, so create it
        await setDoc(userRef, userData);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error creating user document:", error);
      throw error; // Re-throw the error for handling by the caller
    }
  }

  async createUserAccount() {
    try {
      const result = await signInWithPopup(this.auth, this.googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const idToken = credential?.idToken;
      const user = result.user;
      const userData = {
        sub: user.uid, // Firebase UID used as the document ID
        fullName: user.displayName || "",
        email: user.email || "",
        email_verified: user.emailVerified,
        picture: user.photoURL || "",
        subscription_status: "Free",
        user_created_at: new Date(),
      };
      await this.createUserDocument(userData);
      if(idToken){
        const encodedToken = btoa(idToken);
        console.log("encoded Token :", encodedToken);
        if (window !== undefined) {
          window.location.href = "pingprospect://" + encodedToken;
        }
        return idToken;
      }
      
    } catch (error) {
      console.error("Sign-in error:", error);
      throw error;
    }
  }

  async SiginOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }
}

export const service = new Firebase();
