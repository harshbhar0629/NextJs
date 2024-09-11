/** @format */
"use client"
import { usePathname } from "next/navigation";

const Name = () => {
	const pathname = usePathname();
	return (
		<div className="bg-slate-600 h-[92vh]">
			<h1 className="text-bold text-white text-2xl text-center pt-2 ">Hey! {pathname.split("/").at(-1)}, welcome to student Dahsboard</h1>
		</div>
	);
};

export default Name;
