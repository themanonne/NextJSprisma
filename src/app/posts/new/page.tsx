import Form from "next/form";
import prisma from "@/lib/prisma";
import { createPost } from "../actions";

export default function NewPost() {

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Publier un nouveau Post</h1>
            <Form action={createPost} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg mb-2">
                        Titre
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Entrez le titre de votre Post"
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-lg mb-2">
                        Contenu
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Ecrivez le contenu de votre post ici..."
                        rows={6}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
                >
                    Publier le Post
                </button>
            </Form>
        </div>
    );
}