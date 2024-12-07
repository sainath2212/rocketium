const express = require('express');
const dataRoutes = require('./routes/data');
const init = require('./utils/init');

const app = express();
const PORT = process.env.PORT || 3000;

init();

app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
