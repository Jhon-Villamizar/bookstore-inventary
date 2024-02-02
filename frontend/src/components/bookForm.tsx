/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useFormData from "../hooks/useFormData";
import { Form } from "../types/form";

const BookForm = ({ onSubmit, onCancel, updateBook }: Form) => {
  const { formData, setFromData, resetData } = useFormData();

  useEffect(() => {
    updateDataHandler();
  }, [updateBook]);

  const updateDataHandler = () => {
    if (updateBook) {
      setFromData({
        id: updateBook.id,
        title: updateBook.title,
        author: updateBook.author,
        price: updateBook.price,
        stockQuantity: updateBook.stockQuantity,
      });
    }
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.author ||
      !formData.price ||
      !formData.stockQuantity
    ) {
      alert("all fields are required");
      return;
    }
    onSubmit(formData);
    resetData();
  }

  const handlerCancel = (e: any) => {
    e.preventDefault();
    onCancel();
    resetData();
  };

  return (
    <div className="card">
      <h3>{updateBook ? "Update book" : "Create new book"} </h3>
      <form className="form" onSubmit={handleSubmit}>
        <input type="hidden" value={formData.id} />
        <div className="inputText">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={formData.title.length > 0 ? formData.title : ""}
            onChange={(e) =>
              setFromData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="inputText">
          <label>Author: </label>
          <input
            type="text"
            name="author"
            id="author"
            defaultValue={formData.author}
            onChange={(e) =>
              setFromData({ ...formData, author: e.target.value })
            }
          />
        </div>
        <div className="inputText">
          <label>Price: </label>
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={!formData.price ? "" : formData.price}
            onChange={(e) =>
              setFromData({ ...formData, price: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="inputText">
          <label>Stock quantity: </label>
          <input
            type="number"
            name="stockQuantity"
            id="stockQuantity"
            defaultValue={!formData.stockQuantity ? "" : formData.stockQuantity}
            onChange={(e) =>
              setFromData({
                ...formData,
                stockQuantity: parseInt(e.target.value),
              })
            }
          />
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={handlerCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
