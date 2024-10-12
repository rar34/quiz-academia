import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = await db.collection("users");
        const exits = await userCollection.findOne({ email: newUser.email });
        if (exits) {
            return Response.json({ message: "User already exists" }, { status: 304 });
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollection.insertOne({ ...newUser, password: hashedPassword });
        return Response.json({ message: "User created successfully" }, { status: 200 })

    } catch (error) {
        return Response.json({ message: "Something went wrong" }, { status: 400 })
    }
}