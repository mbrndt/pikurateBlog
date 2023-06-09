"use client";

import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "src/app/firebase.js";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
	const router = useRouter();
	const [user, loading] = useAuthState(auth);

	//Sign in with google
	const googleProvider = new GoogleAuthProvider();

	const GoogleLogin = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			router.push("/dashboard");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user) {
			router.push("/");
		} else {
			console.log("no user loged in");
		}
	}, [user]);

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
