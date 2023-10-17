import dotenv from 'dotenv';
import minimist from 'minimist';
import config from "../config";
import newman from 'newman'; // require Newman in your project


//conveting folders env var into array
var folders = config.FOLDERS.split(", ");

dotenv.config();
// Parse command line arguments
const args = minimist(process.argv.slice(2));

// Check if the -FOLDERS option was provided in CLI and update the FOLDERS environment variable
if (args.FOLDERS) {
    folders = args.FOLDERS.split(", ");
}

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: `https://api.postman.com/collections/${config.POSTMAN_COLLECTION_ID}?access_key=${config.POSTMAN_ACCESS_KEY}`,
    //The environment name provided in the .env file must have the same name that the .json file stored in /src/environments/
    //this due to I found difficulties trying to retrieve the environment using the postman api, or that feature is not supported yet by
    //POSTMAN
    environment: require(`./environments/${config.POSTMAN_ENVIRONMENT}`),
    folder: folders,
    reporters: ['htmlextra', 'junit', 'cli']
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});