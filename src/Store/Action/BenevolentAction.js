import axios from "axios";
import { fetchBenevolent, fetchErrorBenevolent, fetchingBenevolent } from "../Slice/BenevolentSlice";
const URL = process.env.REACT_APP_BASE_URL;

export const addBenevolentData = async (giftsArray, setError) => {
  console.log(giftsArray);
  try {
    await axios.post(`${URL}benevolents/buyGift`, giftsArray);
    await axios.post(`${URL}benevolents/sendMail`, {email:giftsArray?.mail});
    setError('ok')
  } catch (error) {
    setError(error)
  }
};

export const addBenevolentLetter = async (LetterArray, setErrorSucces) => {
  try {
    await axios.post(`${URL}benevolents/takeLetter`, LetterArray);
    await axios.post(`${URL}benevolents/sendMail`, {email:LetterArray?.mail});
    setErrorSucces("ok");
  } catch (error) {
    setErrorSucces(error);
  }
};

export const getBenevolentData = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingBenevolent());
      const res = await axios.get(`${URL}benevolents/getBenevolent/${id}`);
      dispatch(fetchBenevolent(res?.data))
    } catch (error) {
      console.error(error, "error");
      fetchErrorBenevolent(error)
    }
  };
};
