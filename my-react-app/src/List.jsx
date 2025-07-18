import PropTypes from 'prop-types';
function List({ items = [], category = "Category" }) {


    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE alphabetical
    //fruits.sort((a, b) => a.calories - b.calories); // Numeric order
    //fruits.sort((a, b) => b.calories - a.calories); // REVERSE (desceding)Numeric order

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories > 100);



    const listItems = items.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    return (
        <>
            <h3 className="list-cat">{category}</h3>
            <ol className="li-items">{listItems}</ol>
        </>);
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),

}


export default List