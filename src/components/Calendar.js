import "../styles/Calendar.css";

function Calendar() {
  const years = [
    {
      id: 2020,
      months: [
        { completed: false, id: 1, name: "January" },
        { completed: true, id: 2, name: "February" },
        { completed: true, id: 3, name: "March" },
        { completed: true, id: 4, name: "April" },
        { completed: true, id: 5, name: "May" },
        { completed: true, id: 6, name: "June" },
        { completed: true, id: 7, name: "July" },
        { completed: true, id: 8, name: "August" },
        { completed: true, id: 9, name: "September" },
        { completed: true, id: 10, name: "October" },
        { completed: true, id: 11, name: "November" },
        { completed: true, id: 12, name: "December" },
      ],
    },
    {
      id: 2021,
      months: [
        { completed: true, id: 1, name: "January" },
        { completed: true, id: 2, name: "February" },
        { completed: false, id: 3, name: "March" },
        { completed: false, id: 4, name: "April" },
        { completed: false, id: 5, name: "May" },
        { completed: false, id: 6, name: "June" },
        { completed: false, id: 7, name: "July" },
        { completed: false, id: 8, name: "August" },
        { completed: false, id: 9, name: "September" },
        { completed: false, id: 10, name: "October" },
        { completed: false, id: 11, name: "November" },
        { completed: false, id: 12, name: "December" },
      ],
    },
  ];
  return (
    <div className="year-wrapper">
      {years.map((year) => (
        <div key={`${year.id}`}>
          <div className="year">{year.id}</div>
          <div className="month-wrapper">
            {year.months.map((month) => (
              <a
                href={
                  month.completed
                    ? `#/month/${year.id}/${month.id}`
                    : "peepospictures/#/"
                }
                key={`${year.id}-${month.id}`}
                className={month.completed ? "" : "not-completed"}
              >
                {month.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Calendar;
