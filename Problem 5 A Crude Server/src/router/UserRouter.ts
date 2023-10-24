import BaseRoutes from "./base/BaseRouter";
import UserController from "../controller/UserController";
import validate from "../helper/validate";
import { createUserSchema, updateUserSchema } from "../schema/UserSchema";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createUserSchema), new UserController().create);
    this.router.patch(
      "/:id",
      validate(updateUserSchema),
      new UserController().update
    );
    this.router.delete("/:id", new UserController().delete);
    this.router.get("/:id", new UserController().findById);
  }
}

export default new UserRoutes().router;