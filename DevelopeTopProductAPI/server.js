const express = require("express")
require("dotenv").config()
const routes=require('./routes/Route');
const cors = require("cors")
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
const allowedOrigins = [
  'http://localhost:5173'
];
app.use(cors({
    origin:allowedOrigins,
    credentials: true,
}));

app.use("/api",routes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https:localhost:5000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("X-Powered-By")
    next();
  });

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))

