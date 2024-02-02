import { useState } from "react";

const initialState = {
  id: 0,
  title: "",
  author: "",
  price: 0,
  stockQuantity: 0,
};
const useFormData = () => {
  const [formData, setFromData] = useState(initialState);

  const resetData = () => {
    setFromData(initialState);
  };

  return { formData, setFromData, resetData };
};

export default useFormData;
