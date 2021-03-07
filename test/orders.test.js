import { expect, server, BASE_URL } from './setup';
describe('Orders', () => {
  it('get orders page', (done) => {
    server
      .get(`${BASE_URL}/orders`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach((o) => {
          expect(o).to.have.property('id');
          expect(o).to.have.property('users');
        });
        done();
      });
  });
  it('posts order', (done) => {
    const data = { id: 2, users: 'new user' };
    server
      .post(`${BASE_URL}/orders`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach((m) => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('users', data.users);
        });
        done();
      });
  });
  it('get orders by id', (done) => {
    server
      .get(`${BASE_URL}/orders:1`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach((o) => {
          expect(o).to.have.property('id');
          expect(o).to.have.property('users');
        });
        done();
      });
  });
});
