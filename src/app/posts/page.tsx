import prisma from "@/lib/prisma";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import Posts from "./Posts";

export default async function Page() {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        },
    });

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: () => Promise.resolve(posts),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Posts />
        </HydrationBoundary>
    )
}