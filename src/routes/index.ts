import { Router } from "express";

import { router as users } from "./users";

export const router = Router();

router.use("/users", users);
