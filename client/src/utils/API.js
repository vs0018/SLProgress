// import React from 'react';
import axios from 'axios';

 export default {

  // Gets all clients
  getAllClients: function() {
      return axios.get("/api/clients", { headers: {
        Authorization: 'Bearer ' + this.props.auth.getAccessToken()
      }
    });
  },

  // Gets a client with the given id
  getOneClient: function(id) {
    return axios.get("/api/clients" + id, { headers: {
      Authorization: 'Bearer ' + this.props.auth.getAccessToken()
    }
  });
  },

  // Gets all clients for session with the given id
  getSessionClients: function(id) {
    // return this.execute("get", "/api/sessionclients/" + id);
    return axios.get("/api/sessionclients" + id, { headers: {
      Authorization: 'Bearer ' + this.props.auth.getAccessToken()
    }
  });
  },

  // Deletes a client with the given id
  deleteClient: function(id) {
    return axios.delete("/api/clients" + id, { headers: {
      Authorization: 'Bearer ' + this.props.auth.getAccessToken()
    }
  });
  },

  // Updates a client with the given id
  updateClient: function(id) {
    return axios.put("/api/clients" + id, { headers: {
      Authorization: 'Bearer ' + this.props.auth.getAccessToken()
    }
  });
  },

  // Saves a client to the database
  saveClient: function(clientData) {
    return axios.post("/api/clients", clientData, { headers: {
      Authorization: 'Bearer ' + this.props.auth.getAccessToken()
    }
  });
  }
 };