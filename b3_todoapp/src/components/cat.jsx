import { DotsThreeIcon, PlusIcon } from "@phosphor-icons/react";
import TaskItem from "./taskItem";

const Category = ({ name, items }) => {
  return (
    <div className="cat">
      <div className="cat_header">
        <div className="cat_header_left">
          <p className="group_title">{name}</p>
          <p className="badge">{items.length}</p>
        </div>
        <div className="cat_header_actions">
          <button className="icon_btn">
            <PlusIcon size={16} />
          </button>
          <button className="icon_btn">
            <DotsThreeIcon size={16} />
          </button>
        </div>
      </div>
      <div className="cat_body">
        {items.map((item, index) => (
          <TaskItem
            key={index}
            title={item.title}
            desc={item.desc}
            assign={item.assign}
            attached={item.attached}
            priority={item.priority}
            datetime={item.datetime}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
