import {
  ClockIcon,
  FlagIcon,
  PaperclipIcon,
  PencilLineIcon,
} from "@phosphor-icons/react";
import { flag_obj } from "../constant";

const TaskItem = ({ title, desc, assign, attached, priority, datetime }) => {
  return (
    <div className="task_container">
      <div className="task_header">
        <p className="task_title">{title}</p>
        <button className="edit_btn">
          <PencilLineIcon size={16} />
        </button>
      </div>
      <div className="task_body">
        <p className="task_desc">{desc}</p>
        <p className="task_assign">{assign}</p>
      </div>
      <div className="task_footer">
        <div className="attach_wrapper">
          <PaperclipIcon size={16} />
          <p className="attach_index">{attached}</p>
        </div>
        <FlagIcon size={16} color={flag_obj[priority].color} />
        <div className="datetime_wrapper">
          <ClockIcon size={16} />
          <p>{datetime}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
