/** @format */
"use client";
import { useEffect, useState } from "react";

const Products = () => {
	const [d, setD] = useState(false);
	useEffect(async () => {
		let data = await fetch("https://dummyjson.com/products");
		data = await data.json();
		console.log(data);
	}, [d]);

	return <div onClick={()=> setD(!d)} className="text-center">hey</div>;
};

export default Products;
