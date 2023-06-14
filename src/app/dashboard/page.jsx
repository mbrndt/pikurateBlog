"use client";

import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "src/app/firebase.js";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Dashboard() {
	const router = useRouter();
	const [user, loading] = useAuthState(auth);

	const getData = async () => {
		if (loading) return <h1 className=" m-5">loading your Dashboard...</h1>;
		if (!user) return router.push("/auth/login");
	};

	useEffect(() => {
		getData();
	}, [user, loading]);

	return (
		<div>
			<h1>Dashboard</h1>

			<p>Your Comments</p>
			<div>comments</div>

			<button onClick={() => auth.signOut()}>Sign out</button>
		</div>
	);
}
