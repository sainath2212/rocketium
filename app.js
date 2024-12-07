const express = require('express');
const dataRoutes = require('./routes/data');
const init = require('./utils/init');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    init()
    return res.status(200).json({ message : "Dummy data initialized"})
})

app.use('/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
