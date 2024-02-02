import { useState } from "react"

const useShowForm = () => {
  const [showForm, setShowForm] = useState(false);
  
  return {
    showForm, setShowForm
  }
}
export default useShowForm