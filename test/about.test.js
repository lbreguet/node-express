const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe('About Page', () => {
    it ('should return a message about me', async () => {
        const res = await request(app)
            .get('/about')
        expect(res.statusCode).equals(200)
        expect(res).to.equal("I'm from the moon!!")
    })
})
