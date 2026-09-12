function Hero(){
  return (
    <section
      id="home"
      className="mx-auto max-w-[1080px] px-5 py-16 sm:py-20"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8">

        {/* Hero Content */}
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-2px] text-[#141b2d] sm:text-5xl lg:text-[58px]">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and build the perfect stack for
            your next project.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="btn border-none px-5 text-xs font-semibold text-white"
              style={{
                background: "var(--brand-gradient)",
              }}
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="btn btn-outline border-gray-300 px-6 text-xs font-medium text-gray-600"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner */}
        <div className="flex justify-center">
          <img
            src="/images/banner-stack.png"
            alt="Development technology stack"
            className="w-full max-w-[430px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;