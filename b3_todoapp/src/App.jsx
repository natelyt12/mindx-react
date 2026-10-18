import "./App.css";
import Searchbar from "./components/search";
import Category from "./components/cat";
import { todo_obj } from "./constant";
const main = () => {
  return (
    <div className="container">
      <div className="header">
        <Searchbar />
        <button className="new_item">New Item</button>
      </div>
      <div className="content">
        {todo_obj.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            items={category.metadata}
          />
        ))}
      </div>
    </div>
  );
};

export default main;
