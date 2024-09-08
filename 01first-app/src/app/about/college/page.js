/** @format */

import React from "react";
import Link from "next/link";

const College = () => {
	return (
		<div className="h-[100vh]  mx-auto text-center my-auto">
			<h2 className="font-semibold text-2xl pt-20">This is a College Page.</h2>
			<br></br>
			<Link
				href="/about"
				className="mt-4 py-4 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black">
				Go to About Page
			</Link>
		</div>
	);
};

export default College;
