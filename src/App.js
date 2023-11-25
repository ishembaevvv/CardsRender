import Cards from "./components/Cards";

const data = [
  {
    index: 1,
    color: 'yellow'
  },
  {
    index: 2,
    color: 'green'
  },
  {
    index: 3,
    color: 'red'
  },
  {
    index: 4,
    color: 'blue'
  },
]

function App() {
  return (
    <div className="App">
      {
        data.map((item, id) => {
          return <Cards
            index={item.index}
            color={item.color}
          />
        })
      }
    </div>
  );
}

export default App;
