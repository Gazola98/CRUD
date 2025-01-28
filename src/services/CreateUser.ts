import prismaClient from '../prisma';


interface UserRequest {
    name: string;
    email: string;
    age: number;
    cpf: number;
}

class CreateUserService{
    async execute({name, email, age, cpf}: UserRequest) {

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                age: age,
                cpf: cpf,
            },
            select: {
                name: true,
                email: true,
                age: true,
                cpf: true,
            }
        })

        return user;
    }
}

export { CreateUserService }