export const Collections = () => {
  const TAGS = ["Profile", "New York", "Relax", "Person", "Fashion"];
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 shadow-lg">
      <h1 className="font-meri text-3xl font-bold">Popular Collection</h1>
      <div className="mt-6 space-x-2">
        {TAGS.map((tag) => (
          <a
            className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:text-blue-400"
            id={tag}
          >
            {tag}
          </a>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1">
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img
              src="Three_people1.png"
              className="aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="Three_people2.png"
              className="aspect-video w-full rounded-2xl"
              alt=""
            />
            <img
              src="Three_people3.png"
              className="aspect-video w-full rounded-2xl"
              alt=""
            />
            <img
              src="Three_people4.png"
              className="aspect-video w-full rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <div className="mt-14 grid grid-cols-1">
        <div className="rounded-3xl bg-white p-6">
          <img
            src="Three_people1.png"
            className="aspect-video w-full rounded-2xl"
            alt=""
          />
          Hello
        </div>

        <div className="rounded-3xl bg-white p-6">
          <img
            src="Three_nature1.png"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
        </div>

        <div className="rounded-3xl bg-white p-6">
          <img
            src="Three_history1.png"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
        </div>
      </div> */}

      {/* <div className="mt-14 grid grid-cols-1">
        <div className="rounded-3xl bg-white p-6">
          <img
            src="Three_people1.png"
            className="aspect-video w-full rounded-2xl"
            alt=""
          />
          Hello
        </div>

        <div className="rounded-3xl bg-white p-6">
          <img
            src="Three_nature1.png"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
        </div>

        <div className="rounded-3xl bg-white p-6">
          <img
            src="Three_history1.png"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
        </div>
      </div> */}
    </div>
  );
};
