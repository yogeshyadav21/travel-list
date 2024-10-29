import { useState } from "react";
import Logo from "./components/Logo";
import TravelList from "./components/TravelList";
import Stats from "./components/Stats";
import Form from "./components/Form";

const App = () => {
    const [items, setItems] = useState([]);

    const handleAddItem = (item) => {
        setItems((items) => [...items, item]);
    };

    const handleDeleteItem = (id) => {
        setItems((items) => items.filter((item) => item.id !== id));
    };

    const handleToggleItem = (id) => {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
    };

    const handleClearList = () => {
        setItems([]);
    };

    return (
        <div className="app">
            <Logo></Logo>
            <Form onAddItem={handleAddItem}></Form>
            <TravelList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}></TravelList>
            <Stats items={items}></Stats>
        </div>
    );
};


export default App;
