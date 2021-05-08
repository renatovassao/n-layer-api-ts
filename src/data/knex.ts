import knx from "knex";

import { config } from "./knexfile";

declare module "knex/types/tables" {
  interface Tables {
    users: DBUser;
  }
}

export const knex = knx(config);
