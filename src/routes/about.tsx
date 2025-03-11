import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return (
		<div className="text-center">
			<p>Hello from About!</p>
			<a href={"/"}>
				<button className="bg-[#fbf0df] text-[#1a1a1a] border-0 px-5 py-1.5 rounded-lg font-bold transition-all duration-100 hover:bg-[#f3d5a3] hover:-translate-y-px cursor-pointer whitespace-nowrap mt-10">
					Go back home
				</button>
			</a>
		</div>
	);
}
