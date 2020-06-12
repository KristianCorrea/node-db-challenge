const express = require("express");

const projectRouter = require('./routers/projectRouter');
const server = express();

server.use(express.json());
server.use("/api",projectRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "Online! Server is up" });
});

module.exports = server;
