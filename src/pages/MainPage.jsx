import Converter from "../components/Converter";
import Form from "../components/Form";
import List from "../components/List";
import Title from "../components/Title";
import User from "../components/User";
import Weather from "../components/Weather";

function MainPage({ onAddItems, items, setItems, onDeleteItems }) {
  function calculateTotal(items) {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }

  return (
    <div className="grid justify-center items-center sm:grid grid-cols-1 mx-5">
      <div className="grid grid-cols-1 md:flex items-center justify-between">
        <div className="flex justify-center">
          <User />
        </div>
        <div className="grid grid-cols-1 sm:flex justify-between items-center ">
          <div className="flex justify-center">
            <Converter />
          </div>
          <div className="flex justify-center">
            <Weather />
          </div>
        </div>
      </div>

      <Title />
      <Form
        onAddItems={onAddItems}
        onDeleteItems={onDeleteItems}
        items={items}
      />
      <List
        items={items}
        setItems={setItems}
        onDeleteItems={onDeleteItems}
        total={calculateTotal(items)}
      />
    </div>
  );
}

export default MainPage;
