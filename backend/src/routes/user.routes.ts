import { Router } from "express";
import { getUsers, createUser } from "@/controllers/user.controller";

const userRoutes: Router = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);

export default userRoutes;