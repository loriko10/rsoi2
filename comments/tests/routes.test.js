const request = require('supertest');
const app = require('../server/app');

describe('api comments', () => {
    it('should create new comments', async () => {
        await request(app)
            .post('/comments/create')
            .send({
                text: 'test-text',
                uid: 1,
                qid: 1,
                date: new Date()
            })
            .expect(201)
    });

    it('should delete by id', async () => {
        await request(app)
            .post('/comments/get')
            .expect(200)
    });

    it('should get by id', async () => {
        await request(app)
            .post('/comments/all/question/1')
            .expect(404)
    });

    it('should delete by id', async () => {
        await request(app)
            .post('/comments/delete/1')
            .expect(200)
    });

    it('should delete by id', async () => {
        await request(app)
            .post('/comments/delete/user/1')
            .expect(200)
    });

    it('should delete by id', async () => {
        await request(app)
            .post('/comments/delete/question/1')
            .expect(200)
    });

    afterAll(async done => {
        done();
        setTimeout(() => process.exit(), 1000);
    });
});
