"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    await prisma.user.create({
        data: {
            name,
            email,
        },
    });

    revalidatePath("/users");
    redirect("/users");
}