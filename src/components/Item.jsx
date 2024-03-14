import Button from "./Button";

export default function Item({ item, onDeleteItems }) {
  return (
    <div className="flex items-center justify-between my-3 bg-[#ffffff51] rounded p-2 w-auto">
      <li className="w-auto mr-4 py-2">
        <span className="text-white font-sans mx-1">
          {item.quantity} {item.description} {item.quantity * item.price}€
        </span>
      </li>
      <Button onClick={() => onDeleteItems(item.id)}>Remove item</Button>
    </div>
  );
}
