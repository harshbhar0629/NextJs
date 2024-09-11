/** @format */

import Link from "next/link";
import React from "react";

const Student = () => {
	return (
		<div className="h-[100vh]  mx-auto text-center my-auto bg-slate-600 text-white">
			<h2 className="font-semibold text-2xl pt-20">This is a Student Page.</h2>
			<br></br>
			<ul className="flex mt-4 mb-10 justify-center items-center text-xl font-semibold gap-6">
				<li>
					<Link href={"/about/student/harsh"}>Harsh</Link>
				</li>
				<li>
					<Link href={"/about/student/naman"}>Naman</Link>
				</li>
				<li>
					<Link href={"/about/student/aman"}>Aman</Link>
				</li>
			</ul>
			<Link
				href="/about"
				className="mt-4 py-4 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black">
				Go to About page
			</Link>
		</div>
	);
};

export default Student;
