import { ReactNode } from "react";

interface Position {
  title: string;
  openPositions: number;
  icon: ReactNode;
  gradientClass: string;
}

const positions: Position[] = [
  {
    title: "Design",
    openPositions: 4,
    gradientClass: "from-[#BBCBFB] to-[#F1D4FF]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },

  {
    title: "Engineering",
    openPositions: 8,
    gradientClass: "from-[#FBBBDA] to-[#FFD4D4]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        // width="24"
        // height="24"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
        />
      </svg>
    ),
  },

  {
    title: "Operations",
    openPositions: 2,
    gradientClass: "from-[#BBEBFB] to-[#EFD4FF]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </svg>
    ),
  },

  {
    title: "People",
    openPositions: 6,
    gradientClass: "from-[#BBFBE4] to-[#D4E0FF]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },

  {
    title: "Sales",
    openPositions: 7,
    gradientClass: "from-[#BBD8FB] to-[#FFD4D4]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800 "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-width="2"
          d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
        />
      </svg>
    ),
  },

  {
    title: "University",
    openPositions: 8,
    gradientClass: "from-[#FFDEC7] to-[#D4D9FF]",
    icon: (
      <svg
        className="h-6 w-6 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
      </svg>
    ),
  },
];

export const JobPositions = () => {
  return (
    <div className="w-full space-y-20 text-center">
      <h1 className="font-meri text-3xl font-black">Open positions</h1>

      <div className="grid grid-cols-3 gap-8 px-4">
        {positions.map((position) => (
          <div className="flex flex-col space-y-8 rounded-2xl bg-white px-10 py-12">
            <div className="flex items-center justify-center space-x-4">
              <div
                className={`h-16 items-center justify-center rounded-2xl bg-gradient-to-br p-16 ${position.gradientClass}`}
              >
                {position.icon}
              </div>
              <p className="font-popi text-2xl font-medium">{position.title}</p>
            </div>
            <button className="border-[1px] px-6 py-4 text-lg hover:bg-[#1E2246] hover:text-white">
              {position.openPositions} open positions
            </button>
          </div>
        ))}
      </div>

      <p className="mx-auto max-w-3xl [text-wrap:balance]">
        We are proud to be an equal opportunity employer that values diversity.
        We do not discriminate on the basis of race, religion, color, national
        origin, gender, sexual orientation, age, marital status, veteran status,
        or disability status.
      </p>
    </div>
  );
};
