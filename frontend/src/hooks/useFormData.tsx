import { useState } from "react"

const initialState = {
  id: "",
  title: "",
  author: "",
  price: "",
  stockQuantity: "",
}
const useFormData = () => {
  const [formData, setFromData] = useState(initialState);

  const resetData = () => {
    setFromData(initialState);
  }

  return {formData, setFromData, resetData}
}

export default useFormData;