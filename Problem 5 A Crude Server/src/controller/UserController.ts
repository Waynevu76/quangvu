import { Request, Response } from "express"
import { User } from "../model/User";
import { UserRepository } from "../repository/UserRepository";

class UserController {
    async create(req: Request, res: Response) {
        try {
            const newUser = new User();
            newUser.name = req.body.name;
            newUser.age = req.body.age;
            newUser.address = req.body.address;

            await new UserRepository().save(newUser);

            res.status(200).json({
                status: "Created!",
                message: "Successfully created user!"
            })

        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            await new UserRepository().delete(id);

            res.status(200).json({
                status: "Deleted!",
                message: "Successfully deleted user!"
            })

        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const user = await new UserRepository().get(id);

            res.status(200).json({
                status: "Get!",
                message: "Successfully get user!",
                result: user
            })

        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = new User();

            user.id = id;
            user.name = req.body.name;
            user.age = req.body.age;
            user.address = req.body.address;
            await new UserRepository().update(user);

            res.status(200).json({
                status: "Updated!",
                message: "Successfully updated user!"
            })

        } catch (error) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }
}

export default UserController;