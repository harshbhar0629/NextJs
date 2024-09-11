/** @format */
import Link from "next/link";

const Details = () => {
	return (
		<div className="h-[100vh]  mx-auto text-center my-auto text-white bg-slate-600">
			<h2 className="font-semibold text-2xl pt-20">This is a Details Page.</h2>
			<br></br>
			<Link href="/" className="mt-4 py-4 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black">Go to Home</Link>
		</div>
	);
};

export default Details;
