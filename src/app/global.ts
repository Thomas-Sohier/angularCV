//
// ===== File globals.ts
//
"use strict";

export let selectPersonne = 4;
export function changeSelectPersonne(id) {
  selectPersonne = id;
}

const dbconfig = {
  username: "postgres",
  password: "postgres",
  database: "cv",
  host: "51.158.104.209",
  dialect: "postgres",
  port: 5432
};

// export const sequelize = new Sequelize({
//   database: dbconfig.database,
//   dialect: dbconfig.dialect,
//   username: dbconfig.username,
//   password: dbconfig.password,
//   host: dbconfig.host,
//   port: dbconfig.port
// });
