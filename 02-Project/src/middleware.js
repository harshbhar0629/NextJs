/** @format */
import { NextResponse } from "next/server";

const Common = (req) => {
	// if (
	// 	req.nextUrl.pathname.includes("/about") &&
	// 	req.nextUrl.pathname !== "/login"
	// ) {
	// 	console.log("Middleware Called!");
	// 	return NextResponse.redirect(new URL("/login", req.url));
	// }
	console.log(req);
	return NextResponse.redirect(new URL("/login", req.url));
};

export const config = {
	matcher: ["/about", "/details/:path*"],
};

export default Common;
