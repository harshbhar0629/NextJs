/** @format */
"use client";
import Link from "next/link";
import {useRouter} from "next/navigation"

const About = () => {
	const router = useRouter();
	return (
		<div className="h-[100vh]  mx-auto text-center my-auto">
			<h2 className="font-semibold text-2xl pt-20">This is a About Page.</h2>
			<br></br>
			<Link
				href="/"
				className="mt-4 py-4 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black">
				Go to Home
			</Link>

			<p className="mt-8 -mb-7">Using link</p>
			<div className="flex gap-4 justify-center items-center mt-4">
				<Link
					href="/about/student"
					className="mt-4 py-4 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black">
					Go to Student page
				</Link>
				<Link
					href="/about/college"
					className="mt-4 py-4 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black">
					Go to College page
				</Link>
			</div>

			<p className="mt-8 -mb-7">Using navigation</p>
			<div className="flex gap-4 justify-center items-center mt-4">
				<button
					className="mt-4 py-3 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black"
					onClick={() => router.push("/about/student")}>
					Go to Student Page
				</button>
				<button
					className="mt-4 py-3 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black"
					onClick={() => router.push("/about/college")}>
					Go to College Page
				</button>
			</div>
		</div>
	);
};

export default About;
