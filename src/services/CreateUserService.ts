import prismaClient from '../prisma';


interface UserRequest {
    name: string;
    email: string;
    age: string;
    cpf: string;
}

class CreateUserService{
    async execute({name, email, age, cpf}: UserRequest) {

        if(!email) {
            throw new Error("O email está incorreto")
        }

        const userAlreadyExistis = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExistis) {
            throw new Error ('User already exists')
        }

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