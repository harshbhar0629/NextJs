/** @format */
"use client";
import Event from "./components/Event";
import Route from "./components/Route";
import Linking from "./components/Linking";
import ButtonNavigations from "./components/ButtonNavigations";

export default function Home() {
	return (
		<main className=" min-h-[100vh]  text-center bg-slate-700 text-white pt-[10px]">
			<div>
				<div className="text-center mx-auto text-[20px] font-semibold">
					Welcome to NextJs Duniya!!
				</div>
				{/* <User name="Harsh Bhardwaj!"></User>
				<User name="RCB!"></User>
				<User name="Yuvraj Singh!"></User>
				<User name="Virate Kohli!"></User> */}
			</div>

			{/* Learning about events */}
			<div className="-mb-2 mt-4">Event:</div>
			<Event></Event>

			<div className="mt-5 -mb-5">Routing:</div>
			<Route></Route>
			
			<div className="mt-12 -mb-8">Linking:</div>
			<Linking></Linking>

			<div className="mt-5 -mb-2">Navigation</div>
			<ButtonNavigations></ButtonNavigations>
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
