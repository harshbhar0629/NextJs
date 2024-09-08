/** @format */

import { useState } from "react";

const Event = () => {
	// learning about state
	const [value, setValue] = useState(false);

	const fun = (item) => {
		// alert("function called");
		// alert(item)
		alert(`Say ${value? "Hey": "Hello"} to me:)`);
		setValue(!value);
	};

	return (
		<main>
			<button
				className="mt-4 py-4 px-5 rounded-md border-[2px] border-sky-300 hover:bg-sky-200 hover:text-black"
				// onClick={fun}
				// onClick={()=>fun("Say hello to event")}
				onClick={fun}>
				{value ? "Hey" : "Hello"}
			</button>
		</main>
	);
};

export default Event;
