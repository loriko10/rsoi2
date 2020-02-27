const request = require('supertest');
const app = require('../server/app');

describe('api users', () => {
    it('create new user', async () => {
        await request(app)
            .post('/users/create')
            .send({
                name: '123',
                mail: '123@123.ru',
                password: '123'
            })
            .expect(500)
    });

    it('get test user', async () => {
        await request(app)
            .get('/users/all')
            .expect(200)
    });

    it('get test user', async () => {
        await request(app)
            .get(`/users/all/from/${0}/to/${1}`)
            .expect(200)
    });

    it('get test user', async () => {
        await request(app)
            .get(`/users/all/from/${-1}/to/${100500}`)
            .expect(200)
    });


    it('should get 500', async () => {
        await request(app)
            .post('/users/get')
            .send({id: 100500})
            .expect(500)
    });

    it('should delete user', async () => {
        await request(app)
            .post('/users/delete/1')
            .send({})
            .expect(200)
    });

    afterAll(async done => {
        done();
        setTimeout(() => process.exit(), 1000);
    });
});
