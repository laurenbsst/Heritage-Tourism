const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

describe('Home routes', () => {
    it('Should render home screen', (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
});
describe('Gallery routes', () => {
    it('Should render gallery screen', (done) => {
        chai.request(server)
        .get('/gallery')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        })
    })
    it('Should render the chosen site screen', (done) => {
        chai.request(server)
        .get('/gallery/1')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
});
describe('Heritage map routes', () => {
    it('Should render the heritage map screen', (done) => {
        chai.request(server)
        .get('/map')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
});
describe('Tour routes', () => {
    it('Should render the tour home screen', (done) => {
        chai.request(server)
        .get('/tours')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
    it('Should render the churches tour screen', (done) => {
        chai.request(server)
        .get('/tours/churches')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
    it('Should render the public buildings tour screen', (done) => {
        chai.request(server)
        .get('/tours/public-buildings')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
    it('Should render the tour rating screen from the churches screen', (done) => {
        chai.request(server)
        .get('/tours/churches/rating')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
    it('Should render the tour rating screen from the public buildings screen', (done) => {
        chai.request(server)
        .get('/tours/public-buildings/rating')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });
    // POST request
    it('Should save new feedback in the database and redirect to the home screen', (done) => {

        let rating = {
            tourType: "Churches",
            enjoyment: "I enjoyed it",
            interactive: "It made it easier",
            directions: "The directions given were sufficient",
            additional_feedback: "The information provided was really interesting!"
        }

        chai.request(server)
        .post('/tours')
        .send(rating)
        .end((err, res) => {
            res.should.have.status(200);
            expect(res).to.have.header('content-type', 'text/html; charset=utf-8');
            res.body.should.be.a('object');
        done();
        });
    });

});
