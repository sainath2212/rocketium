const getData = async () => {
  try {
    const response = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json');
    const data = await response.json();
    return data;  
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

module.exports = getData;
