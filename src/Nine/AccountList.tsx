interface Account {
  logo: string;
  name: string;
  subtitle: string;
  accounts: number;
}

const accounts: Account[] = [
  {
    name: "DropBox",
    subtitle: "dropbox.com",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/dropbox-2-logo-png-transparent.png",
    accounts: 24,
  },
  {
    name: "Facebook",
    subtitle: "facebook.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    accounts: 12,
  },
  {
    name: "Printerest",
    subtitle: "printerest.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png",
    accounts: 3,
  },
  {
    name: "Microsoft",
    subtitle: "microsoft.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    accounts: 19,
  },
];

export const AccountList = () => {
  return (
    <div className="w-[60rem] rounded-3xl bg-white p-24">
      <div className="flex items-center">
        <div className="relative rounded-xl border-2 border-gray-300">
          <input
            type="text"
            className="mr-2 w-full px-4 py-3 pl-10"
            placeholder="Search"
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

        <div className="ml-auto flex items-center">
          <button className="inline-flex h-16 w-16 items-center justify-center rounded-full p-2 text-[#0E0D46]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>

          <button className="h-16 w-16 rounded-full bg-[#8598FC] p-2 text-white">
            <span className="font-popi text-3xl font-medium">TTD</span>
          </button>
        </div>
      </div>
      <h1 className="pt-10 font-meri text-2xl font-bold">Accounts</h1>
      <div className="mt-7 w-full">
        {accounts.map((account) => (
          <div className="flex items-center justify-between p-5 text-[#0E0D46] hover:bg-[#FAF2FE]">
            <div className="w-[220px] flex items-center gap-x-4">
              <img
                className="h-16 w-16 rounded-full"
                src={account.logo}
                alt=""
              />
              <div>
                <h2 className="font-meri text-2xl font-bold">{account.name}</h2>
                <p>{account.subtitle}</p>
              </div>
            </div>

            <div>{account.accounts} accounts</div>

            <button className="h-10 w-10 items-center justify-center rounded-full bg-white">
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
                  stroke-width="2"
                  d="M6 12h.01m6 0h.01m5.99 0h.01"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
