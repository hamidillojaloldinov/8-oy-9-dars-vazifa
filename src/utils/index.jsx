import axios from "axios";

const productsURL = "https://dummyjson.com/";

export const customFetch = axios.create({
  baseURL: productsURL,
});

export const generatedAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};