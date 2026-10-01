import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import type { PageProps } from "../../../../../../types/slug.types";


export const GET = async (request: NextRequest, { params }: PageProps) => {
    const { slug } = await params;

    const post = await prisma.post.findUnique({
        where: {
            slug: slug,
            status: "PUBLISHED"
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })

    if (!post) {
        return NextResponse.json(
            { message: "Post not found" },
            { status: 404 }
        )
    }

    return NextResponse.json(
        post,
        { status: 200 },
    )
}