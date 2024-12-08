import { useState } from "react";

interface User {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

const users: User[] = [
  {
    name: "John Doe",
    job: "Software Engineer",
    avatar: "Five_avt1.svg",
    tags: ["React", "TypeScript", "JavaScript"],
  },
  {
    name: "Jane Smith",
    job: "UI/UX Designer",
    avatar: "Five_avt2.svg",
    tags: ["UI Design", "Figma", "Sketch"],
  },
  {
    name: "Mike Johnson",
    job: "Data Analyst",
    avatar: "Five_avt3.svg",
    tags: ["Data Analysis", "SQL", "Python"],
  },
  {
    name: "Sarah Thompson",
    job: "Product Manager",
    avatar: "Five_avt4.svg",
    tags: ["Product Strategy", "Agile", "Scrum"],
  },
  {
    name: "David Wilson",
    job: "Full Stack Developer",
    avatar: "Five_avt5.svg",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Emily Davis",
    job: "Frontend Developer",
    avatar: "Five_avt6.svg",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const UsersList = () => {
  const FILTERS = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const [query, setQuery] = useState("");

  const filteredUsers = query.length > 0 ? users.filter(user => {
    return user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  }) : users;
  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1 className="font-meri text-3xl font-black">User</h1>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div className="relative grow rounded-md border-2 border-gray-300">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mr-2 w-full px-4 py-3 pl-10"
              placeholder="Search Users"
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
        </div>

        <div className="space-x-2">
          {FILTERS.map((flt) => (
            <a
              className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:bg-[#849FFF] hover:text-white"
              id={flt}
            >
              {flt}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <div
            key={user.name}
            className="flex cursor-pointer gap-x-4 rounded-xl bg-[#FBFCFF] p-6 hover:border-[1px] hover:bg-[#BFC8E5] hover:shadow-lg"
          >
            <img src={user.avatar} alt="" className="h-24 w-24 rounded-full" />

            <div>
              <h3 className="font-meri font-black">{user.name}</h3>
              <p className="font-popi text-sm">{user.job}</p>

              <div className="mt-4 space-x-2">
                {user.tags.map((tag) => (
                  <span
                    className="inline-block rounded-full border-[1px] border-slate-500 px-1 text-xs text-[#516DF4]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
