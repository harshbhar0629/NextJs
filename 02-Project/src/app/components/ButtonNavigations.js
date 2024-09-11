/** @format */

"use client";
import { useRouter } from "next/navigation";

const ButtonNavigations = () => {
	const router = useRouter();

	return (
		<div className="flex justify-center items-center gap-5">
			<button
				className="mt-4 py-3 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black"
				onClick={() => router.push("/details")}>
				Go to Details Page
			</button>
			<button
				className="mt-4 py-3 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black"
				onClick={() => router.push("/login")}>
				Go to Login Page
			</button>
			<button
				className="mt-4 py-3 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black"
				onClick={() => router.push("/signup")}>
				Go to Signup Page
			</button>
			<button
				className="mt-4 py-3 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black"
				onClick={() => router.push("/about")}>
				Go to About Page
			</button>
		</div>
	);
};

export default ButtonNavigations;
