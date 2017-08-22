import axios from "axios";

const myApi = axios.create({
  baseURL: "http://localhost:3000/api/"
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

function getItem(tripID) {
  return myApi.get("/trips/" + tripID + "/items/" + itemID).then(response => {
    return response.data;
  });
};

//???????? fix this 8/22/17
function deleteItem(itemID) {
  return myApi.delete("/items/" + itemID).then(response => {
    if (err) {
      return next(err)
    }
    response.json({ success: true });
  });
};

export default {
  myApi,
  getTrip,
  getItem,
  getItems,
  deleteItem
}
