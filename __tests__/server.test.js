'use strict';

const { app } =  require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server', () => {
  it('should handle invalid route', async () => {
    const response = await request.get('/invalid');
    expect(response.status).toEqual(404);

  });

  it('should handle invalid method', async () => {
    const response = await request.get('/game');
    expect(response.status).toEqual(200);

  });

  //   it('should return correct status for each route', async () => {
  //     const response = await request.post('/game');
  //     expect(response.status).toEqual(200);
  //   });

  it('creates a game with correct status and inputted info', async () => {
    let response = await request.post('/game').send({
      name: 'league',
      year: 2077,
      category: 'moba',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('league');
    expect(response.body.year).toEqual(2077);
    expect(response.body.category).toEqual('moba');
    expect(response.body.id).toBeTruthy();
  });

  it('gets a game with correct status and correct info', async () => {
    let response = await request.get('/game');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('league');
    expect(response.body[0].year).toEqual(2077);
    expect(response.body[0].moba).toEqual('moba');
    expect(response.body[0].id).toBeTruthy();
  });

  it('should return correct status code upon delete', async () => {
    const response = await request.destroy('/game/:id');
    expect(response.status).toEqual(200);
    expect(response.body[0].name)(!'league');
  });
  
  it('should return correct status code upon update', async () => {
    const response = await request.put('/game/:id');
    expect(response.status).toEqual(200);
  });
  
});

