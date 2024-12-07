const express = require('express');
const filterData = require('../utils/filterData');
const sortData = require('../utils/sortData');
const getData = require('../utils/getData');

const router = express.Router();
const validFields = ['name', 'language', 'id', 'bio', 'version'];

router.get('/', async (req, res) => {
  try {
    const { sortBy, filterBy, value, order = 'asc' } = req.query;
    let data = await getData();

    if (filterBy && !validFields.includes(filterBy)) {
      return res.status(400).json({ error: `Invalid filter field: ${filterBy}. Valid fields are: ${validFields.join(', ')}` });
    }

    if (sortBy && !validFields.includes(sortBy)) {
      return res.status(400).json({ error: `Invalid sort field: ${sortBy}. Valid fields are: ${validFields.join(', ')}` });
    }

    if(filterBy && value && sortBy){
        filteredData = await filterData(data, filterBy, value); 
        sortedData = await sortData(filteredData, sortBy, order); 

        return res.status(200).json(sortedData)
    }

    if (filterBy && value) {
      data = await filterData(data, filterBy, value);
    }

    if (sortBy) {
      data = await sortData(data, sortBy, order);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error processing request:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
