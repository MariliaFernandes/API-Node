const request = require('supertest');
const app = require('../index'); 

describe('POST /api/users', () => {
  it('responds with 201 created', (done) => {
    request(app)
      .post('/api/users')
      .send({ nome: 'Teste', email: 'gaveatest@example.com', idade: 30 })
      .expect(201, done);
  });
});
