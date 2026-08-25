import { ratelimit } from "@/utils/rateLimit";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    // Get the ip of the user :-
    // const ip = request.headers.get("X-Forwarded-For") ?? "unknown"; // One way

    // Suggested Way :-
    const forwarderFor = request.headers.get("x-forwarded-for");
    const ip = forwarderFor?.split(",")[0].trim() ?? request.headers.get("x-real-ip") ?? "unknown";

    console.log("IP -> ", ip);

    const { limit, remaining } = await ratelimit.limit(ip);

    if (remaining === 0) return NextResponse.json({ message: "Too many request" }, { status: 429 })

    console.log("Limit ->", limit);
    console.log("Remaining -> ", remaining);
    return NextResponse.json({ message: "Success" }, { status: 200 });
}