const fs = require('fs');
const getData = require('./getData');

const init = async () => {
  const dataPath = './data.json';
  
  if (!fs.existsSync(dataPath)) {
    console.log('Initializing dummy data...');
    try {
      const data = await getData();
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      console.log('Dummy data initialized.');
    } catch (error) {
      console.error('Error initializing data:', error.message);
    }
  } else {
    console.log('Dummy data already initialized.');
  }
};

module.exports = init;
