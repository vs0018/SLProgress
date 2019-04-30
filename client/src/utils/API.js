// import React from 'react';
import axios from 'axios';

 export default {

  // Gets all clients
  getAllClients: function(token) {
      return axios.get("/api/clients", { headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  // Gets all goals of current client
  getAllGoals: function(token, id) {
      return axios.get("/api/goals/" + id, { headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },

  // Gets a client with the given id
  getOneClient: function(token, id) {
    return axios.get("/api/clients/" + id, { headers: {
      Authorization: `Bearer ${token}`
    }
  });
  },

  // Gets all clients for session with the given id
  getSessionClients: function(token, id) {
    return axios.get("/api/session" + id, { headers: {
      Authorization: `Bearer ${token}`
    }
  });
  },

  // Deletes a client with the given id
  deleteClient: function(token, id) {
    return axios.delete("/api/clients/" + id, { headers: {
      Authorization: `Bearer ${token}`
    }
  });
  },

  // Updates a client with the given id
  updateClient: function(token, id) {
    return axios.put("/api/clients" + id, { headers: {
      Authorization: `Bearer ${token}`
    }
  });
  },

  // Saves a client to the database
  saveClient: function(token, clientData) {
    return axios.post("/api/clients", clientData, { headers: {
      Authorization: `Bearer ${token}`
    }
  });
  },

  // Saves a new Goal to the database
  saveGoal: function(token, goalData) {
    return axios.post("/api/goals", goalData, { headers: {
      Authorization: `Bearer ${token}`
    }
  });
  },

  // Adds a client to a session
  addToSession: function(token, clientData) {
    return axios.post("/api/session", clientData, { headers: {
      Authorization: `Bearer ${token}`
    }
  });
  }
 };