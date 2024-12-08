export const LandingPage = () => {
  return (
    <div className="">

    <div className="flex justify-between items-center p-5">
      <div className="logo">LOGO</div>
      <div className="flex w-1/2 justify-around">
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#portfolio">Portfolio        </a>
        <a href="#testimonial" >Testimonial</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..."/>
      </div>
    </div>

    <div className="mt-10 flex">
        <div className="w-1/2">
            <h1 className="text-4xl font-bold">We have design experience</h1>
            <p className="mt-4 text-lg text-gray-600">Crafting beautiful and functional user interfaces for an exceptional user experience.</p>
        </div>
        <div className="w-1/2">
            <img className="w-full rounded-full" src="https://pbs.twimg.com/media/EpsnCPpXIAEri1u?format=jpg&name=medium" alt="Hero" />
        </div>
    </div>
    </div>
  );
};
