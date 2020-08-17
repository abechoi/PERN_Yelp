// GET    | Retrieve all restaurants  | /api/v1/restaurants
// GET    | Retrieve one resturant    | /api/v1/restaurants/:id
// POST   | Create restaurant         | /api/v1/restaurants
// PUT    | Update restaurant         | /api/v1/restaurants/:id
// DELETE | Delete one restaurant     | /api/v1/restaurants/:id 
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

// app.use(morgan("dev"));
app.use(express.json());

// Drop request
// app.use((req, res, next) => {
//   res.status(404).json({
//     status: "Error: 404"
//   });
// });
// Middleware
// app.use((req, res, next) => {
//   console.log("Middlware: executing next()...");
//   next();
// });

// GET    | Retrieve all restaurants  | /api/v1/restaurants
// http://localhost:4000/getRestaurants
app.get("/api/v1/restaurants", (req, res) => {
  //console.log('Route handler');
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"]
    }
  });
});
// GET    | Retrieve one restaurant    | /api/v1/restaurants/:id
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "raising canes"
    }
  });
});
// POST   | Create restaurant         | /api/v1/restaurants
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "raising canes"
    }
  });
});
// PUT    | Update restaurant         | /api/v1/restaurants/:id
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "raising canes"
    }
  });
});
// DELETE | Delete one restaurant     | /api/v1/restaurants/:id
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success"
  });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}...`);
});