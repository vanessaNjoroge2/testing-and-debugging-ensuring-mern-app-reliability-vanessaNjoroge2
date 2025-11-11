// backend/tests/integration/bugs.test.js

const request = require('supertest');
const mongoose = require('mongoose');

// Update the path to go up two levels to reach models/
const Bug = require('../../models/Bug');

// server.js exports `app`
const app = require('../../server');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Bugs API', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test Bug', description: 'Bug description' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
