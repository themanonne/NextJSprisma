import Form from "next/form";
import prisma from "@/lib/prisma";
import { createUser } from "../actions";

export default function NewUser() {

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Créer un nouvel utilisateur</h1>
            <Form action={createUser} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg mb-2">
                        Nom d'utilisateur
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Entrez le nom d'utilisateur"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg mb-2">
                        Email
                    </label>
                    <textarea
                        id="email"
                        name="email"
                        placeholder="Entrez l'email d'utilisateur"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                >
                    Créer l'Utilisateur
                </button>
            </Form>
        </div>
    );
}