// import "./index.css";
import Search from "./components/search/search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container my-5 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
