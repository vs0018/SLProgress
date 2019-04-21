// import React from 'react';
import axios from 'axios';

// const client = axios.create({
//   baseURL: 'http://localhost:3001/',
//   json: true
// })

 export default {
  // async execute (method, resource, data) {
  //   // inject the accessToken for each request
  //   let accessToken = React.prototype.$auth.getAccessToken()
  //   return client({
  //     method,
  //     url: resource,
  //     data,
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`
  //     }
  //   }).then(req => {
  //     return req.data
  //   })
  // },

  // Gets all clients
  getAllClients: function(accesstoken) {
    // return this.execute("get", "/api/clients");
    return axios.get("/api/clients", { headers: { Authorization: "Bearer" + " " + accesstoken} });
  },

  // Gets a client with the given id
  getOneClient: function(id) {
    // return this.execute("get", "/api/clients/" + id);
    return axios.get("/api/clients" + id);
  },

  // Gets all clients for session with the given id
  getSessionClients: function(id) {
    // return this.execute("get", "/api/sessionclients/" + id);
    return axios.get("/api/sessionclients" + id);
  },

  // Deletes a client with the given id
  deleteClient: function(id) {
    // return this.execute("delete", "/api/clients/" + id);
    return axios.delete("/api/clients" + id);
  },

  // Updates a client with the given id
  updateClient: function(id) {
    // return this.execute("put", "/api/clients/" + id);
    return axios.put("/api/clients" + id);
  },

  // Saves a client to the database
  saveClient: function(clientData) {
    // return this.execute("post", "/api/clients", clientData);
    return axios.post("/api/clients", clientData);
  }
 };