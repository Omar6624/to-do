const InputSection = () => {
  const date = new Date();
  const day = date.getDate();
  const WeekName = date.toLocaleString("en-Us", {
    weekday: "long",
  });
  const MonthName = date.toLocaleString("en-Us", {
    month: "long",
  });

  const prefix = day > 3 ? "th" : day === 1 ? "st" : day === 2 ? "nd" : "rd";

  return (
    <>
      <div className="flex justify-center border-2 ">
        <p className="text-3xl text-gray-dark ">
          {`${WeekName} ${date.getDate()}${prefix}, `}
          <span className="text-gray-light"> {MonthName}</span>
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </>
  );
};
export default InputSection;

export const AddTaskButton = () => {
  return <div></div>;
};
