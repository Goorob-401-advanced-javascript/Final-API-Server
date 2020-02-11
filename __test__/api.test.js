'use strict' ;
const {server,} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);
describe('Categories API' ,()=>{
  it('get a categorie item', () => {
    return mockRequest.get('/api/v1/categories')
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
  it ('get ()' ,() =>{
    let newCategory = {name:'shoes' , type: 'clothes',};
    return mockRequest.get('/api/v1/categories')
      .send(newCategory)
      .then(data=>{
        return mockRequest.get(`api/categories/${data.body._id}`)
          .then(data =>{
            expect(data.status).toBe(200);
            expect(data.body[0].name).toEqual('shoes');
          });
      });
  });
  it('post () ' , ()=> {
    let newCategory = {name:'shoes' , type: 'clothes',};
    return mockRequest.post('/api/v1/categories')
      .send(newCategory)
      .then(data => {
        Object.keys(newCategory).forEach(val => {
          expect(data.body[val]).toEqual(newCategory[val]);
        });
      });
  });

});
describe('Products API' ,()=>{
  it('get a product item', () => {

    return mockRequest.get('/api/v1/categories')
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
  it ('get ()' , () =>{
    let newProduct = {name:'nike' , price: 78,};
    return mockRequest.get('/api/v1/products')
      .send(newProduct)
      .then(data=>{
        return mockRequest.get(`api/products/${data.body._id}`)
          .then(data =>{
            expect(data.status).toBe(200);
            expect(data.body[0].name).toEqual('nike');
          });
      });
  });
  it('post () ' , ()=> {
    let newProduct = {name:'nike' , price: 78,};

    return mockRequest.post('/api/v1/products')
      .send(newProduct)
      .then(data => {
        Object.keys(newProduct).forEach(val => {
          expect(data.status).toBe(201);
          expect(data.body[val]).toEqual(newProduct[val]);
        });
      });
  });

}) ;
