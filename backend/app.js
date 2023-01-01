const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { authorise } = require("./middleware/authMiddleware");

const reviewRouter = require("./routes/reviewRoutes");
const userRouter = require("./routes/userRoutes");
const searchRouter = require("./routes/searchRoutes");

dotenv.config();
const port = process.env.PORT || 3000;

// middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }),
  })
);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// routes

app.use("/api/users", userRouter);
app.use("/api/review", authorise, reviewRouter);
app.use("/api/search", searchRouter);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
