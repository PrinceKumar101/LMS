import express, { Application } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import flash from "connect-flash";
import routes from "./routes/route";
import connectDB from "./config/db";

dotenv.config();

const app: Application = express();

// Initialize database connection
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_PATH as string, // Replace with your frontend's domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // List HTTP methods
    // Allow cookies and credentials
  })
);

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // Session cookie valid for 1 minute
  })
);

// Flash messages middleware
app.use(flash());

// Global middleware to expose flash messages
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// Routes
app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
