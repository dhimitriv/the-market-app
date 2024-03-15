import { useState } from "react";
import Button from "./Button";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");

  const products = [
    {
      description: "Milk",
      id: 1,
      price: 2,
    },
    {
      description: "Bread",
      id: 2,
      price: 3,
    },
    {
      description: "Egg",
      id: 3,
      price: 1,
    },
    {
      description: "Oil",
      id: 4,
      price: 5,
    },
    {
      description: "Pasta",
      id: 5,
      price: 3,
    },
    {
      description: "Sugar",
      id: 6,
      price: 2,
    },
    {
      description: "Water",
      id: 7,
      price: 1,
    },
    {
      description: "Proscute",
      id: 8,
      price: 4,
    },
    {
      description: "Yogurt",
      id: 9,
      price: 2,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      quantity,
      id: Date.now(),
      price,
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
    setPrice(0);
  }

  function handleClick(selectedProduct) {
    setDescription(selectedProduct.description);
    setPrice(selectedProduct.price);
  }

  const ProductList = ({ products }) => {
    return (
      <div className="grid justify-center items-center text-white mb-3">
        <h2 className="text-xl flex justify-center">
          Select products in list or write them in the form.
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-5 justify-center items-center mx-auto text-white sm:w-[450px]">
          {products.map((product) => (
            <li
              className="m-3 p-1.5 w-[80px] flex justify-center rounded bg-[#ffffff75]"
              key={product.id}
              onClick={() => handleClick(product)}
            >
              <p className="text-sm mr-1">{product.description}</p>
              <p className="text-sm">{product.price}$</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <ProductList products={products} />

      <form
        className=" grid grid-cols-2 justify-center items-center mx-auto sm:flex"
        onSubmit={handleSubmit}
      >
        <select
          className="bg-[#ffffffc7] p-2 m-1 rounded"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="p-2 bg-[#ffffffc7] m-2 rounded"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="p-2 bg-[#ffffffc7] m-2 rounded w-[50px] "
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <Button>Add product</Button>
      </form>
    </div>
  );
}
