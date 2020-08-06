# SuperTest-API-Boilerplate

This is a Javascript boilerplate project that uses Supertest, dotenv, Chai and Mocha for automated API testing. It includes an example file for a GET, POST, PUT, PATCH, DELETE request to a REST api endpoint.

## Getting Started

```code
git clone git@github.com:drg407/supertest-boilerplate.git
cd supertest-api-boilerplate
npm install
```

## dotenv

An example dotenv file is included and should be renamed to `.env` and include valid credentials before running tests.

### `/example/apps-service/od360_test.js`

```javascript
require('dotenv').config();

const request = require('supertest');
const chai = require('chai');

const expect = chai.expect;

const baseUrl = process.env.BASE_URL;

const resource = {
    api: '/api'
};

let auth = {};

describe('REST api tests', () => {

    it('GET should LIST USERS', async () => {
        const response = await request(baseUrl)

            .get(resource.api + '/users?page=2')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    });
});
```

## Test example

The test in this project uses [supertest](https://github.com/visionmedia/supertest) to demonstrate how to send and receive requests and responses. 

Run example test with the following command:

```code
npm run test:example
```

## Reporters

[Mochawesome](https://github.com/adamgruber/mochawesome) and [mochawesome-report-generator](https://github.com/adamgruber/mochawesome-report-generator) are used in conjunction to generate an html report of your tests. This can be found in /mochawesome-report/assets/mochawesome.html. Reporter settings have been configured in the npm run script in package.json.

## CI/CD

//TODO
