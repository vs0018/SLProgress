import axios from "axios";

export default {
  // Gets all clients
  getClients: function() {
    return axios.get("/api/clients");
  },
  // Gets a client with the given id
  getOneClient: function(id) {
    return axios.get("/api/clients/" + id);
  },
  // Deletes a client with the given id
  deleteClient: function(id) {
    return axios.delete("/api/clients/" + id);
  },
  // Saves a client to the database
  saveClient: function(clientData) {
    return axios.post("/api/clients", clientData);
  }
};
