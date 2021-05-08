import { knex } from "../data/knex";

export interface NewUser {
  name: string;
}

export class UserNameError extends Error {}

/**
 * Validates a New User
 *
 * @param name name of the user
 *
 * @throws UserNameError
 */
export function validateNewUser(nu: NewUser) {
  if (nu.name.length > 10) {
    throw new UserNameError("name too long");
  }
}

/**
 * Inserts user in database
 *
 * @param name name of the user
 * @returns DBUser
 *
 * @throws UserNameError
 */
export async function createUser(nu: NewUser): Promise<DBUser> {
  validateNewUser(nu);

  const [u] = await knex("users")
    .insert({
      name: nu.name,
    })
    .returning("*");

  return u;
}
