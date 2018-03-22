## Setup
1. Clone this repository
2. go to www.bikeindex.org and login or create an account to access you API Key
3. Once you have obtained you API key, open the project in an editor of your choosing
4. Create a .env file in the root of the project with API_KEY=[`Your API key goes here`] then save
5. you can now close your editor and type npm install in your terminal
6. after npm install is finished, type npm run start in your terminal and the application will launch
7. If your API request is not successful and receive an "Origin is not allowed by Access-Control-Allow-Origin" error in your console, try installing the Allow-Control-Allow-Origin: * Chrome extension.
8. once installed repeat step 6

## Specifications
1. take in location inputted by user
2. take in time frame selected by user
3. take in color of bike selected user
4. take in make of bike selected from user
5. return statistics on which make of bike is most frequently stolen in the selected area
6. return statistics on which color bike is most frequently stolen in the selected area
7. add google maps
8. if no results print "nothing matches search criteria"
