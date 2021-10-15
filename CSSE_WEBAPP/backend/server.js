const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require('morgan');
//Routers
const staffApi = require("./Routes/StaffRoute");
const adminRouter = require('./Routes/adminRouter');
const ItemApi = require("./Routes/ItemRoute");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
const PORT = process.env.PORT || 8095;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Database Error " + error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/staff", staffApi());
app.use('/api', adminRouter);
app.use("/item", ItemApi());
