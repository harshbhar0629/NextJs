/** @format */
"use client";
import { Router, Route } from "next/router";
import Event from "./components/Event";

export default function Home() {
	return (
		<main className=" min-h-[100vh]  text-center bg-slate-700 text-white pt-[100px]">
			<div>
				<div className="text-center mx-auto text-[20px] font-semibold">
					Hey Duniya!!
				</div>
				<User name="Harsh Bhardwaj!"></User>
				<User name="RCB!"></User>
				<User name="Yuvraj Singh!"></User>
				<User name="Virate Kohli!"></User>
			</div>

			{/* Learning about events */}
			<Event></Event>
			<div className="flex  gap-2 justify-center items-center mt-10">
				<button>
					<a
						href="/details"
						className=" cursor-pointer px-5 py-4 border-[2px] hover:bg-slate-500 hover:text-white border-slate-300">
						Details
					</a>
				</button>
				<button>
					<a
						href="/about"
						className=" cursor-pointer px-5 py-4 border-[2px] border-slate-300 hover:bg-slate-500 hover:text-white">
						About
					</a>
				</button>
			</div>
		</main>
	);
}

const User = (props) => {
	return (
		<div className="font-semibold text-lg px-3 py-3 border rounded-md flex justify-center w-[30%] items-center mx-auto">
			User Name is: {props.name}
		</div>
	);
};
