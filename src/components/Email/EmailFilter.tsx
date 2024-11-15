const options: string[] = ["Unread", "Read", "Favorites"];

function EmailFilter({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) {
  const handleClick = (option: string) => {
    if (filter === option) {
      setFilter("");
    } else {
      setFilter(option);
    }
  };
  return (
    <div className="py-5">
      <div className="flex font-semibold items-center">
        <p className="pr-16">Filter By:</p>
        <div className="flex gap-6 items-center">
          {options.map((option) => (
            <div
              key={option}
              className={`${
                filter === option
                  ? "bg-filterbuttoncolor px-4 py-0.5 rounded-full font-medium border-bordercolor border"
                  : "mx-4 my-0.5"
              } cursor-pointer select-none`}
              onClick={() => handleClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmailFilter;
