'use strict';

const { app } =  require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll( async () => {
  sequelizeDatabase.sync();
});

afterAll( async () => {
  await sequelizeDatabase.drop();
});

describe('game route', () => {
//   it('should handle invalid route', async () => {
//     const response = await request.get('/invalid');
//     expect(response.status).toEqual(404);

  //   });

  //   it('should handle invalid method', async () => {
  //     const response = await request.get('/game');
  //     expect(response.status).toEqual(200);

  //   });

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

    let responseTwo = await request.post('/game').send({
      name: 'valorant',
      year: 2074,
      category: 'fps',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('league');
    expect(response.body.year).toEqual(2077);
    expect(response.body.category).toEqual('moba');
    expect(response.body.id).toBeTruthy();
    expect(responseTwo.body.name).toEqual('valorant');
    expect(responseTwo.body.year).toEqual(2074);
    expect(responseTwo.body.category).toEqual('fps');
  });

  it('gets all game', async () => {
    let response = await request.get('/game');

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(1);
    expect(response.body[0].name).toEqual('valorant');

  });

  it('gets a single game by id', async () => {
    let response = await request.get('/game/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('valorant');
    expect(response.body.year).toEqual(2074);
    expect(response.body.category).toEqual('fps');
    expect(response.body.id).toBeTruthy();
  });

  it('updates as expected', async () => {
    let response = await request.put('/game/1').send({
      name: 'dota',
      year: 2077,
      category: 'moba',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('dota');
    expect(response.body.year).toEqual(2077);
    expect(response.body.category).toEqual('moba');
    expect(response.body.id).toBeTruthy();
  });

  it('deletes as expected', async () => {
    let response = await request.delete('/game/1').
      expect(response.status).toEqual(200);
  });
  //   it('gets a game with correct status and correct info', async () => {
  //     let response = await request.get('/game');

  //     expect(response.status).toEqual(200);
  //     expect(response.body[0].name).toEqual('league');
  //     expect(response.body[0].year).toEqual(2077);
  //     expect(response.body[0].moba).toEqual('moba');
  //     expect(response.body[0].id).toBeTruthy();
  //   });

  //   it('should return correct status code upon delete', async () => {
  //     const response = await request.destroy('/game/:id');
  //     expect(response.status).toEqual(200);
  //     expect(response.body[0].name)(!'league');
  //   });
  
  //   it('should return correct status code upon update', async () => {
  //     const response = await request.put('/game/:id');
  //     expect(response.status).toEqual(200);
  //   });
    
    
});
