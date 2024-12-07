const getData = require('./getData');

const sortData = async (data, sortBy, order = 'asc') => {
  try {
    if (!sortBy) return data;

    return data.sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return order === 'asc' ? valueA - valueB : valueB - valueA;
        } else if (typeof valueA === 'string' && typeof valueB === 'string') {
            return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        } else {
        return 0; 
      }
    });
  } catch (error) {
    console.error('Error sorting data:', error.message);
    throw error;
  }
};

module.exports = sortData;
