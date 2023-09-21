export function PriorityPicker({ priority, setPriority }) {
    return (
      <div className="bg-white w-full rounded-lg border-gray-200 py-2 border">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <FireEmoji
              key={index}
              selected={index <= priority}
              index={index}
              setSelected={setPriority}
            />
          );
        })}
      </div>
    );
  }
  function FireEmoji({ selected, setSelected, index }) {
    return (
      <span
        onClick={() => setSelected(index)}
        className={`cursor-pointer ${selected ? "grayscale-0" : "grayscale"}`}
      >
        🔥
      </span>
    );
  }