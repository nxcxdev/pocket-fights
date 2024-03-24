import { cookies } from "next/headers";

export async function createAuthHeader(): Promise<string> {
	const getCookie = async (name: string) => {
		return cookies().get(name)?.value ?? "";
	};

	const token = await getCookie("accessToken");
	const authHeader = `Bearer ${token}`;
	return authHeader;
}
