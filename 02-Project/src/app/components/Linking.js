import React from 'react'
import Link from "next/link";

const Linking = () => {
  return (
		<div className="mt-10 flex gap-4 justify-center items-center">
			<Link
				className="border-[2px] px-5 py-4 hover:text-black hover:bg-slate-200 font-semibold rounded-md"
				href={"/login"}>
				Go to Login Page
			</Link>
			<Link
				className="border-[2px] px-5 py-4 hover:text-black hover:bg-slate-200 font-semibold rounded-md"
				href={"/signup"}>
				Go to Signup Page
			</Link>
		</div>
	);
}

export default Linking