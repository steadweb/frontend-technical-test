/**
 * Created by brett.hadley on 10/10/2016.
 */
const expect = require('chai').expect;
const getData = require('../src/api').getData;
const server = require('../server');

describe("getData example test", () => {
    beforeEach(() => {
        server.listen(9988);
    });

    it('should respond with an array of vehicles', done => {
        getData("/api/vehicle", data => {
            expect(Array.isArray(data.vehicles)).to.equal(true);
            done();
        })
    })
});
