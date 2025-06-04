'use client'

import { useQuery } from "@tanstack/react-query"

export default function Posts() {
    const { data: posts, isPending, error } = useQuery({
        queryKey: ['posts'],
        queryFn: () => Promise.resolve([]),
        staleTime: Infinity,
    })

    if (isPending) return 'Chargement...'

    if (error) return 'Une erreur s\'est produite: ' + error.message

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
            <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
                Liste de tous les Posts
            </h1>
            <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
                {posts.map((post) => (
                    <li key={post.id}>
                        <span className="font-semibold">{post.title}<br /></span>
                        <span className="text-m">{post.content}</span>
                        <span className="text-sm text-gray-600 ml-2">
                            by {post.author.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}