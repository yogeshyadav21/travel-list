const Stats = ({ items }) => {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>Let's do some packing 🧳</em>
            </footer>
        );
    }

    const num = items.length;
    const packedNum = items.filter((item) => item.packed).length;
    const percentage = (packedNum / num) * 100;
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "You're ready to go ✈️" : `🧳You have ${num} items in your list, and you already packed ${packedNum} (${percentage}%)`}
            </em>
        </footer>
    );
};

export default Stats;