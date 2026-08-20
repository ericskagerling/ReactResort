export const Hero = () => (
  <section className="w-full p-20 min-h-[calc(100svh-100px)] flex flex-col justify-between items-center border">
    <div className="flex-1"></div>
    <div className="flex-1 text-center">
      <h1 className="heading-one">REACT TO RELAX</h1>
      <h3 className="heading-three">
        Find your{" "}
        <a
          href="/#hotels"
          className="text-nav-button hover:text-nav-button-hover transition-color duration-300"
        >
          next resort
        </a>{" "}
        now
      </h3>
    </div>
    <a href="/#hotels" className="nav-button">
      Hotels
    </a>
  </section>
);
