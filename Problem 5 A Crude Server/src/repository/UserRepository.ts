import { User } from "../model/User";

interface IUserRepository {
    save(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(id: number): Promise<void>;
    get(id: number): Promise<User>;
}

export class UserRepository implements IUserRepository {
    async save(user: User): Promise<void> {
        try {
            await User.create({
                name: user.name,
                age: user.age,
                address: user.address
            })
        } catch (error) {
            throw new Error("Faild to create user")
        }
    }
    async update(user: User): Promise<void> {
        try {
            const newUser = await User.findOne({
                where: {
                    id: user.id
                }
            });

            if (!newUser) {
                throw new Error("User not found!");
            }

            newUser.name = user.name;
            newUser.age = user.age;
            newUser.address = user.address;
            newUser.save();
        } catch (error) {
            throw new Error("Faild to update user")
        }
    }
    async delete(id: number): Promise<void> {
        try {
            const user = await User.findOne({
                where: {
                    id: id
                }
            });

            if (!user) {
                throw new Error("User not found!");
            }

            user.destroy();
        } catch (error) {
            throw new Error("Faild to delete user")
        }
    }
    async get(id: number): Promise<User> {
        try {
            const findUser = await User.findOne({
                where: {
                    id: id
                }
            })

            if (!findUser) {
                throw new Error("User not found!");
            }

            return findUser;

        } catch (error) {
            throw new Error("Faild to get user")
        }
    }

}