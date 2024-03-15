import Button from "./Button";
import Item from "./Item";

export default function List({ items, setItems, onDeleteItems, total }) {
  let itemsThing;
  itemsThing = items;

  function handleSellItems(item) {
    setItems([]);
  }

  return (
    <div className="flex justify-center">
      <ul className="rounded my-5 p-2">
        <p className="flex justify-center text-white">Total price: {total}€</p>
        {itemsThing.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} key={item.id} />
        ))}{" "}
        <div className="flex justify-center">
          <Button onClick={handleSellItems}>Sell the articles</Button>
        </div>
      </ul>
    </div>
  );
}
