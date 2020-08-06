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

    it('GET should LIST SINGLE USER', async () => {
        const response = await request(baseUrl)

            .get(resource.api + '/users/2')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    });

    it('GET should NOT LIST SINGLE USER', async () => {
        const response = await request(baseUrl)

            .get(resource.api + '/users/23')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(404);
    });

    it('GET should LIST <RESOURCE>', async () => {
        const response = await request(baseUrl)

            .get(resource.api + '/unknown')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    });

    it('GET should SINGLE <RESOURCE>', async () => {
        const response = await request(baseUrl)

            .get(resource.api + '/unknown/2')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    });

    it('GET should SINGLE <RESOURCE> NOT FOUND', async () => {
        const response = await request(baseUrl)

            .get(resource.api + '/unknown/23')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(404);
    });

    it('POST should CREATE', async () => {
        const response = await request(baseUrl)

            .post(resource.api + '/users')

            .send({
                job: "leader",
                name: "morpheus"
            })

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(201);
    });

    it('PUT should UPDATE', async () => {
        const response = await request(baseUrl)

            .put(resource.api + '/users/2')

            .send({
                job: "zion resident",
                name: "morpheus"
            })

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    });

    it('PATCH should UPDATE', async () => {
        const response = await request(baseUrl)

            .patch(resource.api + '/users/2')

            .send({
                job: "zion resident",
                name: "morpheus"
            })

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    });

    it('DELETE should DELETE', async () => {
        const response = await request(baseUrl)

            .del(resource.api + '/users/2')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(204);
    });

    it('POST should REGISTER - SUCCESSFUL', async () => {
        const response = await request(baseUrl)

            .post(resource.api + '/register')

            .send({
                email: "eve.holt@reqres.in",
                password: "pistol"
            })

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    });

    it('POST should REGISTER - UNSUCCESSFUL', async () => {
        const response = await request(baseUrl)

            .post(resource.api + '/register')

            .send({
                email: "sydney@fife",
            })

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(400);
    });


    it('POST should LOGIN - SUCCESSFUL', async () => {
        const response = await request(baseUrl)

            .post(resource.api + '/login')

            .send({
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            })

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
        auth.token = response.body.token;
        console.log(auth.token);
    });

    it('POST should LOGIN - UNSUCCESSFUL', async () => {
        const response = await request(baseUrl)

            .post(resource.api + '/login')

            .send({
                email: "peter@klaven"
            })

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(400);

    });

    it('GET should DELAYED RESPONSE', async () => {

        const response = await request(baseUrl)
            .get(resource.api + '/users?delay=3')

            .then(response => {
                return response;
            })
        console.log(response.body);
        expect(response.status).to.equal(200);
    }).timeout(5000);
});