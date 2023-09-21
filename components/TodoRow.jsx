import { format } from "date-fns";

export function TodoRow({ todo, refreshData }) {
  const deleteTodo = (todoItem) => {
    fetch("api/remove-item", {
      method: "POST",
      body: JSON.stringify(todoItem),
    }).then(() => {
      refreshData();
    });
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 text-slate-700">
        {todo.description}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-slate-700">
        <PriorityPill priority={todo.priority} />
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-slate-700 ">
        <span>{todo.dueDate}</span>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-slate-700">
      <span onClick={() => deleteTodo(todo)} className="cursor-pointer">
          🗑
        </span>
      </td>
    </tr>
  );
}

function PriorityPill({ priority }) {
  const bgColors = [
    "bg-green-400",
    "bg-blue-400",
    "bg-yellow-300",
    "bg-orange-400",
    "bg-red-400",
  ];
  const textColors = [
    "text-green-800",
    "text-blue-800",
    "text-yellow-800",
    "text-orange-800",
    "text-red-800",
  ];

  return (
    <div
      className={`rounded-xl w-fit px-4 ${bgColors[priority - 1]} ${
        textColors[priority - 1]
      }`}
    >
      {priority}
    </div>
  );
}