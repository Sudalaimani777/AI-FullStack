import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        const post = await prisma.post.findMany({
            where: {
                status: "PUBLISHED"
            }
        });

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong while getting the post", error },
            { status: 500 }
        )
    }


}