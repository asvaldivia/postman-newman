import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "./.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  POSTMAN_ACCESS_KEY: string | undefined;
  POSTMAN_COLLECTION_ID: string | undefined;
  POSTMAN_ENVIRONMENT: string | undefined;
  FOLDERS: string | undefined;
}
  

interface Config {
  POSTMAN_ACCESS_KEY: string;
  POSTMAN_COLLECTION_ID: string;
  POSTMAN_ENVIRONMENT: string;
  FOLDERS: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    POSTMAN_ACCESS_KEY: process.env.POSTMAN_ACCESS_KEY,
    POSTMAN_COLLECTION_ID: process.env.POSTMAN_COLLECTION_ID,
    POSTMAN_ENVIRONMENT: process.env.POSTMAN_ENVIRONMENT,
    FOLDERS: process.env.FOLDERS
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (key === 'FOLDERS'){
      continue;
    }
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
    if (value.trim() === "") {
      throw new Error(`Variable is empty ${key} in .env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
