import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import connectDB from "./config/database.js"

import authRoutes from "./routes/auth.route.js"
import listingRoutes from "./routes/listing.route.js"
import bookingRoutes from "./routes/booking.route.js"
import userRoutes from "./routes/user.route.js"


dotenv.config()

const PORT = process.env.PORT || 3000;

const app = express()

// to make input as json
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

const corsOptions = {
  origin: 'http://127.0.0.1:5173', // Replace with your client's origin
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


// routes 
app.use("/api/auth", authRoutes)
app.use("/api/listing", listingRoutes)
app.use("/api/booking", bookingRoutes)
app.use("/api/user", userRoutes)


// Database connection
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})




app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})
