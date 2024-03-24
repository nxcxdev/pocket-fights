"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import Cookies from "js-cookie";

export default function LoginPage() {
	const router = useRouter();

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const username = formData.get("username");
		const password = formData.get("password");

		const response = await fetch("http://localhost:3000/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username: username, password: password }),
		});

		if (response.ok) {
			const responseContent = await response.json();
			Cookies.set("accessToken", responseContent.accessToken);
			router.push("/collection");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="username"
				name="username"
				placeholder="Username"
				required
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				required
			/>
			<button type="submit">Login</button>
		</form>
	);
}
