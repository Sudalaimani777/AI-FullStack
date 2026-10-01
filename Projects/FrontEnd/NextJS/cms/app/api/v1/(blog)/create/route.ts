import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// API  -> /api/v1/create 
// @Method -> POST

export const POST = async (request: NextRequest) => {
    const session = await getAuthSession();

    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();
    const { title, slug, ogImage, content, excerpt, metaDescription, category, keywords, status } = body;

    // console.log(title, slug, ogImage, content, excerpt, metaDescription, category, keywords, status);

    if (!title || !slug || !content || !category || !session.user.id) {
        return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Check the POST Status :-
    const checkPostStatus = status || "DRAFT";

    try {
        let categoryCheck = await prisma.category.findUnique({
            where: { slug: category }
        })

        if (!categoryCheck) {
            categoryCheck = await prisma.category.create({
                data: {
                    title: category.charAt(0).toUpperCase() + category.slice(1),
                    slug: category
                }
            })
        }

        const post = await prisma.post.create({
            data: {
                title,
                content,
                slug,
                thumbnail: ogImage || null,
                desc: metaDescription || null,
                keywords: keywords || null,
                excerpt: excerpt || null,
                authorId: session.user.id,
                status: checkPostStatus,
                categorySlug: categoryCheck.slug
            }
        })
        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "Something went wrong while posting", error },
            { status: 500 }
        )
    }
}