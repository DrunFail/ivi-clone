"use client";

import useAuth from "../../../hooks/auth/useAuth";

export default function CheckIsAuthUser({ isTrue, isFalse }: {isTrue: React.ReactNode, isFalse: React.ReactNode}) {
	const auth = useAuth().auth;

	return (
		<>
			{auth.token ? isTrue : isFalse }
		</>
	);
}