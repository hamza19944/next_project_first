import { User } from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    const {username, email, password} = await req.json()

    await connect()
    const hashedPass = await bcrypt.hash(password, 5)
    
    const newUser = new User({
        username, email, password: hashedPass,
    })
    try {
        await newUser.save()
        return new NextResponse("User has been created", {
            status: 201,
        })
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        })
    }
}