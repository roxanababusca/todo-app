import { useState } from 'react';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { PriorityPicker } from './PriorityPicker';


export function AddItem({ refreshData }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  const [dueDate, setDueDate] = useState(format(new Date(), "dd/MM/yyyy"));
 
  const onAddItem = () => {
    fetch("api/add-item", {
      method: "POST",
      body: JSON.stringify({ id: uuidv4(), description, priority, dueDate }),
    }).then(() => {
      setDescription("");
      setPriority(1);
      setDueDate(format(new Date(), "dd/MM/yyyy"));
      refreshData();
    });
  };

  return (
      <div className="rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 ">
        <div className="flex flex-col bg-gray-100 rounded-lg">
          <label htmlFor="description" className="sr-only">
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Add awesome activity"
            required
            className="w-full rounded-md border-gray-200 py-2.5 pr-10 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <div className="flex flex-col md:flex-row items-center">
            <PriorityPicker priority={priority} setPriority={setPriority} />
            <label htmlFor="dueDate" className="sr-only">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={dueDate} 
              min={format(new Date(), "dd/MM/yyyy")}
              className="w-full rounded-md border-gray-200"
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
            <div className="w-12 place-content-center mt-2 sm:mt-0">
              <button
                type="button"
                className="rounded-full bg-violet-900 text-white hover:bg-violet-700"
                onClick={onAddItem}
              >
                <span className="sr-only">Submit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}



