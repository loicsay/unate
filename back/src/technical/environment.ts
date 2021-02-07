require("dotenv").config();

function checkEnvironmentVariable(variable: string) {
  if (!process.env[variable]) {
    throw new Error(`[ENV] ${variable} is not defined in .env`);
  }
}

["PORT"].forEach((variable) => checkEnvironmentVariable(variable));

const env = {
  port: process.env.PORT!,
};

export default env;
