import { Job, JobProps } from "./Job";

const jobList: JobProps[] = [
  {
    title: "Furniture",
    bgClass: "bg-[#FFECEC]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Property",
    bgClass: "bg-[#F7ECFF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    ),
  },
  {
    title: "Job",
    bgClass: "bg-[#ECF0FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    title: "Travel",
    bgClass: "bg-[#D7F9F3]",
    icon: (
      <img src="plane.svg"/>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   strokeWidth={1.5}
      //   stroke="currentColor"
      //   className="h-6 w-6"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      //   />
      // </svg>
    ),
  },

  {
    title: "Boat",
    bgClass: "bg-[#E2FFD4]",
    icon: (
      <img src="boat.png"/>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   strokeWidth={1.5}
      //   stroke="currentColor"
      //   className="h-6 w-6"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
      //   />
      // </svg>
    ),
  },
  {
    title: "MC",
    bgClass: "bg-[DBD5EC]",
    icon: (
      <img src="bike.jpeg"/>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   strokeWidth={1.5}
      //   stroke="currentColor"
      //   className="h-6 w-6"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
      //   />
      // </svg>
    ),
  },
  {
    title: "Economy",
    bgClass: "bg-[#FFF3C9]",
    icon: (
      <img src="money.png"/>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   strokeWidth={1.5}
      //   stroke="currentColor"
      //   className="h-6 w-6"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
      //   />
      // </svg>
    ),
  },
  {
    title: "Holiday",
    bgClass: "bg-[#FFD9C9]",
    icon: (
      <img src="holiday.png"/>
      // <svg
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   strokeWidth={1.5}
      //   stroke="currentColor"
      //   className="h-6 w-6"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      //   />
      // </svg>
    ),
  },
];

export const JobList = () => {
  return (
    <div className="w-[40rem] rounded-md bg-white p-16">
      <div className="flex gap-2">
        <div className="relative grow rounded-md border-2 border-gray-300">
          <input
            type="text"
            className="mr-2 w-full px-4 py-3 pl-10"
            placeholder="Search for a part time job"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <button className="flex items-center rounded-md bg-[#281A51] px-4 py-2 text-white hover:bg-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 inline h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          Use map
        </button>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4">
        {jobList.map((jobList) => (
          <Job
            title={jobList.title}
            bgClass={jobList.bgClass}
            icon={jobList.icon}
          />
        ))}
      </div>
    </div>
  );
};
