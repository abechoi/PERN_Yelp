// GET    | Retrieve all restaurants  | /api/v1/restaurants
// GET    | Retrieve one resturant    | /api/v1/restaurants/:id
// POST   | Create restaurant         | /api/v1/restaurants
// PUT    | Update restaurant         | /api/v1/restaurants/:id
// DELETE | Delete one restaurant     | /api/v1/restaurants/:id 
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const cors = require("cors");

const app = express();

// app.use(morgan("dev"));
app.use(cors());
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
app.get("/api/v1/restaurants", async (req, res) => {

  //console.log('Route handler');
  try{
    const results = await db.query("SELECT * FROM restaurants"); // use await since db.query is a promise, then add async at the top.
    //console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows
      }
    });
  }catch(err){console.log(err)}

});
// GET    | Retrieve one restaurant    | /api/v1/restaurants/:id
app.get("/api/v1/restaurants/:id", async (req, res) => {

  //console.log(req.params.id);
  try{
    //const results = await db.query(`SELECT * FROM restaurants WHERE id=${req.params.id}`); // BAD for sqlinjections
    // parameterized query, $1 = arg2
    const restaurant = await db.query("SELECT * FROM restaurants WHERE id=$1", [req.params.id]);

    const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id=$1", [req.params.id]);
    console.log(reviews);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows
      }
    });
  }catch(err){console.log(err)}

});
// POST   | Create restaurant         | /api/v1/restaurants
app.post("/api/v1/restaurants", async (req, res) => {

  try{
    // add returning * for an output
    const results = await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", [
      req.body.name,
      req.body.location,
      req.body.price_range
    ]);
    //console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    });
  }catch(err){console.log(err)}

});
// PUT    | Update restaurant         | /api/v1/restaurants/:id
app.put("/api/v1/restaurants/:id", async (req, res) => {

  try{
    const results = await db.query("UPDATE restaurants SET name = $1, location=$2,price_range=$3 WHERE id=$4 returning *", [
      req.body.name,
      req.body.location,
      req.body.price_range,
      req.params.id,
    ]);
    //console.log(req.params.id);
    //console.log(req.body);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  }catch(err){console.log(err)}

});
// DELETE | Delete one restaurant     | /api/v1/restaurants/:id
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  
  try{
    const results = await db.query("DELETE FROM restaurants WHERE id=$1", [req.params.id]);
    res.status(204).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    });
  }catch(err){console.log(err)};

});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}...`);
});