import axios from 'axios';

const API_KEY = 'b8fd39eca7934d0687d5d36f7ad7ea31';

export const getAddressFromCoordinates = async (latitude, longitude) => {
  const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`);
  
  if (response.data.status.code === 200) {
    return response.data.results[0].formatted;
  } else {
    throw new Error('Unable to retrieve address.');
  }
};