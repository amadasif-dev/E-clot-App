import axios from "../config"

export const getProductListing = async (endPoint) => {
  try {
    // '/mens-shoes'
    const res = await axios.get(endPoint);
    return res?.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};

// export const getProductWomwnShose = async () => {
//   try {
//     const res = await axios.get('/womens-shoes');
//     return res?.data;
//   } catch (error) {
//     console.log('Error: ', error);
//   }
// };

// export const getProductBag = async () => {
//   try {
//     const res = await axios.get(endPoint);
//     return res?.data;
//   } catch (error) {
//     console.log('Error: ', error);
//   }
// };