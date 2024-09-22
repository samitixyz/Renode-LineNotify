import fetch from "node-fetch";
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.LINE_NOTIFY_TOKEN;

const app = express();
app.use(cors());
const port = 5000; // You can choose any port

/**
 * Root endpoint that returns a welcome message.
 * @route GET /
 * @returns {string} A welcome message
 */
app.get("/", (req, res) => {
  res.send("Hello from the Node.js backend!");
});


/**
 * Endpoint to send notifications via the LINE Notify API.
 * @route GET /notify
 * @returns {object} The response from the LINE Notify API
 */
app.get("/notify", async (req, res) => {
  try {
    const response = await fetch("https://notify-api.line.me/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: new URLSearchParams({
        message: "hello world",
      }),
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});
