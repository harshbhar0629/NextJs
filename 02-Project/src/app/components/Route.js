import React from 'react'

const Route = () => {
  return (
		<div className="flex  gap-2 justify-center items-center mt-10">
			<button>
				<a
					href="/details"
					className=" cursor-pointer px-5 py-4 border-[2px] hover:bg-slate-500 hover:text-white border-slate-300 rounded-md">
					Details
				</a>
			</button>
			<button>
				<a
					href="/about"
					className=" rounded-md cursor-pointer px-5 py-4 border-[2px] border-slate-300 hover:bg-slate-500 hover:text-white">
					About
				</a>
			</button>
		</div>
	);
}

export default Route