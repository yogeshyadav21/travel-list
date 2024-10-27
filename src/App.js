import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "keys", quantity: 4, packed: true },
];

const App = () => {
    return (
        <div className="app">
            <Logo></Logo>
            <Form></Form>
            <TravelList></TravelList>
            <Stats></Stats>
        </div>
    );
};

const Logo = () => {
    return <h1>🏝️ FAR AWAY 🧳</h1>;
};

const Form = () => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;

        initialItems.push({ id: initialItems.length, description: description, quantity: quantity, packed: false });
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

const TravelList = () => {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
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
