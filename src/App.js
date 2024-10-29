import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "keys", quantity: 4, packed: true },
];

const App = () => {
    const [items, setItems] = useState([]);

    const handleItem = (item) => {
        setItems(items => [...items, item]);
    };

    return (
        <div className="app">
            <Logo></Logo>
            <Form onAddItem={handleItem}></Form>
            <TravelList items={items}></TravelList>
            <Stats></Stats>
        </div>
    );
};

const Logo = () => {
    return <h1>🏝️ FAR AWAY 🧳</h1>;
};

const Form = ({onAddItem}) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;
        const item = { id: initialItems.length, description: description, quantity: quantity, packed: false };

        onAddItem(item);
        initialItems.push(item);
        console.log(initialItems);
        setDescription("");
        setQuantity(1);
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for you 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item......"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            ></input>
            <button type="submit">Add</button>
        </form>
    );
};

const TravelList = ({items}) => {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <li>
                        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                            {item.quantity} {item.description}
                        </span>

                        <button>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Stats = () => {
    return (
        <footer className="stats">
            <em>🧳You have X items in your list, and you already packed X (X%) </em>
        </footer>
    );
};

export default App;
