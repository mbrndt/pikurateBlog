"use client";

import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "src/app/firebase.js";
import { useRouter } from "next/navigation";

export default function Login() {
	const router = useRouter();
	//Sign in with google
	const googleProvider = new GoogleAuthProvider();
	const GoogleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			console.log(result.user);
			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="shadow-xl mx-5 mt-32 md:mt-5 md:mb-20 p-10 text-gray-700 rounded-lg md:flex md:flex-col md:items-center ">
			<h2 className="text-2xl font-sans font-medium">Join Today</h2>
			<div className="py-4">
				<h3 className="py-4">Sign in with one of the providers</h3>
				<button
					onClick={GoogleLogin}
					className="text-gray-700 bg-blue-300 font-sans w-fit font-medium rounded-lg flex align-middle p-4 gap-2"
				>
					<FcGoogle className="text-2xl" />
					Sign in with Google
				</button>
			</div>
		</div>
	);
}
