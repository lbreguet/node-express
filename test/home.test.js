const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe('Home Page', () => {
    it ('should return an HTML welcome message', async () => {
        const res = await request(app)
            .get('/home')
        expect(res.statusCode).equals(200)
        expect(res.text).to.equal('<html><body><p>Welcome</p></body></html>')
    })
})
