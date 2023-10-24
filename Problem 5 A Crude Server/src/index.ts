import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import UserRoutes from "./router/UserRouter";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.plugin();
        this.routes();
    }

    protected plugin(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    protected routes(): void {
        this.app.use("/api/v1/user", UserRoutes)
    }

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
    }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Server started successfully!!!")
})