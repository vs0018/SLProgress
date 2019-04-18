import axios from "axios";

export default {
  // Gets all clients
  getAllClients: function() {
    return axios.get("/api/clients");
  },
  // Gets a client with the given id
  getOneClient: function(id) {
    return axios.get("/api/clients/" + id);
  },
  // Gets all clients for session with the given id
  getSessionClients: function(id) {
    return axios.get("/api/sessionclients/" + id);
  },
  // Deletes a client with the given id
  deleteClient: function(id) {
    return axios.delete("/api/clients/" + id);
  },
  // Updates a client with the given id
  updateClient: function(id) {
    return axios.put("/api/clients/" + id);
  },
  // Saves a client to the database
  saveClient: function(clientData) {
    return axios.post("/api/clients", clientData);
  }
};
