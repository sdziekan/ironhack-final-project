import axios from "axios";


const myApi = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
});

function getTrip(tripID) {
  return myApi.get("/trips/" + tripID).then(response => {
    return response.data;
  });
};

function getItems(tripID) {
  return myApi.get("/trips/" + tripID + "/items/").then(response => {
    return response.data;
  });
};

function getItem(itemID) {
  return myApi.get("/items/" + itemID).then(response => {
    return response.data;
  });
};

function deleteItem(itemID) {
  return myApi.delete("/items/" + itemID).then(response => {
    return response.data
  }).catch(function (err) {
    return (err)
  });
};

function createItem(fields) {
  return myApi.post("/items/", fields).then(response => {
    return response.data
  }).catch(function (err) {
    return (err)
  });
};

function createTrip(fields) {
  return myApi.post("/trips/", fields).then(response => {
    return response.data
  }).catch(function (err) {
    return (err)
  });
};

function editItem(fields) {
  return myApi.post("/items/" + fields.itemID, fields).then(response => {
    return response.data
  }).catch(function (err) {
    return (err)
  });
};

export default {
  getTrip,
  getItem,
  getItems,
  deleteItem,
  createItem,
  createTrip,
  editItem
}
