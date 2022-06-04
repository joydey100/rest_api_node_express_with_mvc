// important varables
const app = require("./app");
// Config dotenv
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// listening the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
