'use client'

import { useQuery } from "@tanstack/react-query"

export default function Users() {
    const { data: users, isPending, error } = useQuery({
        queryKey: ['users'],
        queryFn: () => Promise.resolve([]),
        staleTime: Infinity,
    })

    if (isPending) return 'Chargement...'

    if (error) return 'Une erreur s\'est produite: ' + error.message

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
            <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
                Liste de tous les Utilisateurs
            </h1>
            <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
                {users.map((user) => (
                    <li key={user.id}>
                        <span className="font-semibold">{user.name}<br /></span>
                        <span className="text-m">{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}