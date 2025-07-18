import Button from './expirements/button'
import List from './List.jsx'
function App() {
  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "bannana", calories: 105 },
  { id: 4, name: "coconut", calories: 159 },
  { id: 5, name: "pineapple", calories: 37 }];

  const veggies = [{ id: 6, name: "potatoes", calories: 110 },
  { id: 7, name: "celery", calories: 15 },
  { id: 8, name: "carrots", calories: 25 },
  { id: 9, name: "corn", calories: 63 },
  { id: 10, name: "broccoli", calories: 50 }];

  const fruits2 = [];
  return (

    //<Header></Header> This is valid,but shorthand way below
    // <></> = "fragement" used to technically return a single element
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {veggies.length > 0 && <List items={veggies} category="Veggies" />}
      {fruits2.length > 0 && <List items={fruits2} category="Fruits Dos" />}
    </>

  );

}

export default App
