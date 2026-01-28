/** @format */

import Link from "next/link.js";
import Products from "./products/page.js";

export default function Home() {
	return (
		<div className="w-[100vw] h-[100vh] flex flex-col gap-8 bg-slate-500">
			<div className="text-center pt-4 font-extrabold text-4xl">
				All Products Lists!
			</div>
			<Link
				href={"/products"}
				element={<Products />}>
				Go to products
			</Link>
		</div>
	);
}
