import axios from 'axios';
 
// TODO: Move this to an env var
const BASE_URL = "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros";
const PRODUCTS_URL = "bp/products/verification";
const AUTHOR_ID = process.env.REACT_APP_AUTH_ID;

export const isValidId = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${PRODUCTS_URL}`, {
      params: {
        id,
      },
      headers: {
        authorId: AUTHOR_ID,
      },
      withCredentials: false
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
