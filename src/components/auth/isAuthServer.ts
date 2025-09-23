import { cookies } from "next/headers";

const isAuthServer = Boolean(cookies().get("refreshToken"));