import prisma from "../../lib/prisma"
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import Users from "./Users";

export default async function Page() {
    const users = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: () => Promise.resolve(users),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Users />
        </HydrationBoundary>
    )
}