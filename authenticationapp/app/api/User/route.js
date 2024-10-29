import User from "../../[models]/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password } = body; // Destructurer les données directement depuis le corps de la requête

        // Vérifier si tous les champs sont présents
        if (!name || !email || !password) {
            return NextResponse.json(
                {
                    message: "All fields are required."
                },
                { status: 400 }
            );
        }

        // Vérifier les doublons d'email
        const duplicate = await User.findOne({ email: email }).lean().exec();

        if (duplicate) {
            return NextResponse.json(
                {
                    message: "Email already exists"
                },
                { status: 409 }
            );
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const newUser = { name, email, password: hashedPassword };
        await User.create(newUser);

        return NextResponse.json(
            { message: "User created successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            { message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
