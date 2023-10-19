# api-testing
# Newman Runner to execute API Tests

This project is about a custom newman runner using Node.js with ts to execute Postman Collections.

## Requirements

- Node.js (v19.8.1)

## Installation

Follow the steps to install the dependencies, and to configure the environment variables to execute the collection:

1. Clone the repo:

   ```bash
   git clone https://github.com/asvaldivia/postman-newman.git

2. Go to the project folder:

   ```bash
      cd api-testing

3. Install the dependencies:

   ```bash
      npm install

4. Configure the environment variables using a '.env' file in the project root, follow the '.env.template' to configure the variables, for example:
   - Having the following collection URL (the URL can be retrieved sharing the collection via API):
      https://api.postman.com/collections/1112513-cf978b00-6e57-4fb2-b139-774791e824b3?access_key=PMAT-0000Z2W4TM896KDYGKE2ZHXXXX
   - The '.env' file would be:
   ```bash
      POSTMAN_ACCESS_KEY=PMAT-0000Z2W4TM896KDYGKE2ZHXXXX
      POSTMAN_COLLECTION_ID=1112513-cf978b00-6e57-4fb2-b139-774791e824b3
      POSTMAN_ENVIRONMENT=Staging.postman_environment.json 
      FOLDERS=

## Usage

To execute the test using the Newman runner, follow the steps below:

1. Run the following in the CLI:
  
   ```bash
      npm test

2. Also, you can use the env. variable 'FOLDERS' to execute an specific folder in the collection:

   ```bash
      npm test -- --FOLDERS='FOLDER_NAME'
      npm test -- --FOLDERS='FOLDER_NAME_A, FOLDER_NAME_B'

That script just will execute the specified folders.
For example, having the following collection:

## Additional information

1. The environment variables values are get from the Postman API, in the collection that you want to excute:
   - In Options, Share, via API
   - The URL has the collection ID and the Postman Access Key
   - POSTMAN_ENVIRONMENT is a reference to the .json file in the repository, the repo has the: Staging.postman_environment.json

2. No env. variable can be blank, except FOLDERS. If FOLDERS var is blank, all the requests and tests will be executed.

3. You can specify more than 1 folder in the FOLDERS variable, for example: 
   - For just 1 folder: FOLDERS = 'FOLDER_NAME'
   - For 2 or more folders: FOLDERS = 'FOLDER_NAME_A, FOLDER_NAME_B, FOLDER_NAME_C'

4. If there are many folders which have the same name, the runner will execute all folders which name is shared. If you need to execute just 1 specific folder but there are other folders with the same name, then you need to identify the folder with a unique name.

5. You can specify the folders to execute in the CLI using the flag " -- --FOLDERS='Something, Other' " after the "npm test", example in the "Usage" section.

6. Reports post execution are store in the repository, in the 'newman' folder, in both XML and HTML.
