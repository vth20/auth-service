import { password } from './../validations/common/index';
import path from "path";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { validateEnv } from "../validations/common";
import { EnumEnvironment } from "../constants/enums";

// Load .env file
const expand = dotenv.config({ path: path.join(__dirname, "../../.env") });
dotenvExpand.expand(expand);
const env = validateEnv();

interface IDatabase {
  host: string,
  port: number,
  user: string,
  password: string,
  name: string,
}

interface IJwt {
  secret: string,
  accessExpirationMinutes: number,
  refreshExpirationDays: number,
  resetPasswordExpirationMinutes: number,
}
interface IConfig {
  database: IDatabase;
  env: EnumEnvironment;
  port: number;
  jwt: IJwt;
}

const config: IConfig = {
  database: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    name: env.DB_NAME,
    password: env.DB_PASSWORD,
  },
  env: env.ENV || EnumEnvironment.DEVELOPMENT,
  port: env.PORT || 3000,
  jwt: {
    secret: env.JWT_SECRET,
    accessExpirationMinutes: 0,
    refreshExpirationDays: 0,
    resetPasswordExpirationMinutes: 0
  }
};

export default config;
