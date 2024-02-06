const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
    const targetPath = './src/environments/environment.ts';
  // Load node modules
    const appVersion = require('../../package.json').version;
    require('dotenv').config({
      path: 'src/environments/.env'
    });
  // `environment.ts` file structure
  const envConfigFile = `export const firebaseConfig = {
    apiKey: '${process.env["API_KEY"]}',
    authDomain: '${process.env["AUTH_DOMAIN"]}',
    projectId: '${process.env["PROJECT_ID"]}',
    storageBucket: '${process.env["STORAGE_BUCKET"]}',
    messagingSenderId: '${process.env["MESSAGING_SENDER_ID"]}',
    appId: '${process.env["APP_ID"]}',
    measurementId: '${process.env["MEASUREMENT_ID"]}',
  };`;

    console.log('The file `environment.ts` will be written with the following content: \n');
    writeFile(targetPath, envConfigFile, (err: any) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
      }
    });
  };
  
  setEnv();