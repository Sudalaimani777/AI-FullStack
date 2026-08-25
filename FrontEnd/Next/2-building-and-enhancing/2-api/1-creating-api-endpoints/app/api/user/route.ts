import { NextRequest, NextResponse } from "next/server";


const user = [
    { id: "1", name: "Tharun" },
    { id: "2", name: "Bala" },
    { id: "3", name: "Sudalaimani" },
]

export async function POST(request:NextRequest) {
    try {
        const { id } = await request.json()
        const userName = user.find(userId => userId.id === id)

        if (!userName) throw new Error("User not found");

        return NextResponse.json(userName);
    } catch (error: unknown) {
        return NextResponse.json({ error }, { status: 500 })
    }
}