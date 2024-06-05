import { cookies } from "next/headers";

export default function CheckIsAuthUser({ isTrue, isFalse }: {isTrue: React.ReactNode, isFalse: React.ReactNode}) {
	const session = cookies().get("refreshToken")

	return (
		<>
			{session ? isTrue : isFalse }
		</>
	);
}