import { Router } from "express";

import { mailer } from "../../services/mailer";
import type { NewUser } from "../../services/users";
import { createUser, UserNameError } from "../../services/users";
import { joiNewUser } from "./joi";

export const router = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post("/", async (req, res) => {
  const v = joiNewUser.validate(req.body);

  if (v.error) {
    return res.status(400).json({ error: v.error.message });
  }

  const nu = v.value as NewUser;

  try {
    const u = await createUser(nu);

    await mailer(`user ${u.name} created`);

    return res.json(u);
  } catch (err: unknown) {
    console.error(err);

    if (err instanceof UserNameError) {
      return res.status(400).json({ error: err.message });
    }

    const message = err instanceof Error ? err.message : "Erro interno";

    return res.json(500).json({ error: message });
  }
});
