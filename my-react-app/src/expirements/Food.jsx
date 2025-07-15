
function Food() {

    const food1 = "tacos";
    const food2 = "Quesadilla";
    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food