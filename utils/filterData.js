const getData = require('./getData');

const filterData = async (data, filterBy, value) => {
  try {
    return data.filter(item => {
      if (typeof item[filterBy] === 'string') {
        return item[filterBy].toLowerCase().includes(value.toLowerCase());
      }
      return item[filterBy] === value;
    });
  } catch (error) {
    console.error('Error filtering data:', error.message);
    throw error;
  }
};

module.exports = filterData;
