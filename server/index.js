const express = require('express');
const cors = require('cors');
const plotRoutes = require('./routes/plotRoutes');

const app = express();
const port = 5050;

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(cors());

// Mount the plotRoutes under the "/api" prefix
app.use('/api', plotRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
