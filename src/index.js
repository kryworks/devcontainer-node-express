const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => res.json({ message: "Welcome to the API!" }));

app.get("/health", (req, res) => res.send("OK"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
