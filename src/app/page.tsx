import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8">Homepage</h1>
      <Link href="/posts" className="text-blue-600">Voir tous les posts <br /></Link>
      <Link href="/posts/new" className="text-blue-600">Créer un Post</Link>
      <Link href="/users" className="text-blue-600">Voir tous les utilisateurs</Link>
      <Link href="/users/new" className="text-blue-600">Créer un Utilisateur</Link>
    </div >
  );
}
