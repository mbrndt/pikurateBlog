import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "src/app/firebase.js";
export default function Login() {
	//Sign in with google
	const googleProvider = new GoogleAuthProvider();
	const googleSignIn = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="shadow-xl mt-32 p-10 text-gray-7">
			<h1 className="text-2xl font-medium">Join Today</h1>
			<div className="py-4">
				<h3 className="py-4">Sign in with one of the providers</h3>
				<button className="text-white bg-blue-500 w-full font-medium rounded-lg flex align-middle p-4">
					<FcGoogle className="mr-2" size={30} />
					Sign in with Google
				</button>
			</div>
		</div>
	);
}
