import { PrismaClient, Prisma } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Alice",
        email: "alice@mail.com",
        posts: {
            create: [
                {
                    title: "Ceci est un post",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id est lectus. Morbi ac ex id elit aliquam maximus. Sed sollicitudin rutrum nisl, eu tincidunt diam sollicitudin at. Morbi fermentum justo at est tincidunt, at tincidunt mi placerat. Nulla ipsum neque, faucibus vel mauris a, rhoncus interdum enim. Vivamus lacinia, odio sit amet maximus dignissim, nibh dui rutrum neque, quis eleifend neque felis id odio. Maecenas sed tincidunt metus, ut pharetra urna.",
                    published: true,
                },
                {
                    title: "Lorem ipsum",
                    content: "Nunc laoreet, neque vitae posuere hendrerit, nibh mauris elementum ipsum, tincidunt tempor massa ante vitae metus. Pellentesque pulvinar rhoncus tortor, posuere luctus est convallis sed. Proin pretium suscipit ligula eget laoreet. Donec quis eros ut diam pretium malesuada nec vitae leo.",
                },
            ],
        },
    },
    {
        name: "Bob",
        email: "bob@mail.com",
        posts: {
            create: [
                {
                    title: "Aenean feugiat",
                    content: "Nunc nec dui id magna suscipit feugiat. Donec aliquet mattis turpis nec bibendum. Nunc dictum tincidunt felis quis ornare.",
                    published: true,
                },
            ],
        },
    },
];

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }
}

main();