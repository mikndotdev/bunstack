import { createFileRoute, Link } from "@tanstack/react-router";

import logo from "@/assets/logo.svg";
import reactLogo from "@/assets/react.svg";
import tanstackLogo from "@/assets/tanstack.png";

export const Route = createFileRoute("/")({
	component: Index,
});

export function Index() {
	return (
		<div className="max-w-7xl mx-auto p-8 text-center relative z-10">
			<div className="flex justify-center items-center gap-8 mb-8">
				<img
					src={logo}
					alt="Bun Logo"
					className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
				/>
				<img
					src={reactLogo}
					alt="React Logo"
					className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
				/>
				<img
					src={tanstackLogo}
					alt="TanStack Logo"
					className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#00b31b]"
				/>
			</div>

			<h1 className="text-5xl font-bold my-4 leading-tight">
				Bun + React + TanStack Router
			</h1>
			<p>
				Edit{" "}
				<code className="bg-[#1a1a1a] px-2 py-1 rounded font-mono">
					src/routes/App.tsx
				</code>{" "}
				and save to test HMR
			</p>
			<Link to={"/about"}>
				<button className="bg-[#fbf0df] text-[#1a1a1a] border-0 px-5 py-1.5 rounded-lg font-bold transition-all duration-100 hover:bg-[#f3d5a3] hover:-translate-y-px cursor-pointer whitespace-nowrap mt-10">
					Go to About
				</button>
			</Link>
		</div>
	);
}
