const request = require('supertest');
const app = require('../server/app');

describe('api questions', () => {
    it('should create new question', async () => {
        await request(app)
            .post('/questions/create')
            .send({
                title: 'test-title',
                text: 'test-text',
                uid: 1,
                date: new Date(),
                tag: "some tag"
            })
            .expect(201)
    });

    it('get question', async () => {
        await request(app)
            .get('/questions/all')
            .expect(200)
    });

    it('should delete by id', async () => {
        await request(app)
            .post('/questions/delete/1')
            .expect(200)
    });

    it('should delete by id', async () => {
        await request(app)
            .post('/questions/delete/user/1')
            .expect(200)
    });

    it('should delete by id', async () => {
        await request(app)
            .post('/questions/get')
            .expect(200)
    });

    afterAll(async done => {
        done();
        setTimeout(() => process.exit(), 1000);
    });
});
