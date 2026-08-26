import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || "NEXT_Title";



    return new ImageResponse(
        (
            <div style={{ display: "flex" }}>
                <h1>{title}</h1>
            </div>
        ),
        {
            width: 1280,
            height: 720,
        }
    );
}