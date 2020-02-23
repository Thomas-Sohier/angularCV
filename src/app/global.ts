import { CV } from './component/cv/cv';
import { Information } from './component/infos/information';
import { Formation } from './component/formation/formation';
import { Experience } from './component/experience/experience';
import { KeyValueDiffer, KeyValueDiffers } from '@angular/core';

//
// ===== File globals.ts
//
export let selectPersonne = 0;
export class GlobalVars {
  public static information: Information = new Information(
    0,
    '',
    '',
    '',
    [],
    [],
    [],
    []
  );
  public static formations: Formation[] = new Array<Formation>();
  public static experiences: Experience[] = new Array<Experience>();
}

// const dbconfig = {
//   username: "postgres",
//   password: "postgres",
//   database: "cv",
//   host: "51.158.104.209",
//   dialect: "postgres",
//   port: 5432
// };

// export const sequelize = new Sequelize({
//   database: dbconfig.database,
//   dialect: dbconfig.dialect,
//   username: dbconfig.username,
//   password: dbconfig.password,
//   host: dbconfig.host,
//   port: dbconfig.port
// });
