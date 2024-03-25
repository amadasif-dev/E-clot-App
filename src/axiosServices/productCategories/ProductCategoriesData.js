import axios from "../config"

export const getProductShoes = async () => {
  try {
    const res = await axios.get('/mens-shoes');
    return res?.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const getProductBag = async () => {
  try {
    const res = await axios.get('/womens-bags');
    return res?.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};