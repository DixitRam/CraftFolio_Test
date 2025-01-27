export default function JumboHeader() {
  return (
    <section className="flex flex-col relative items-center justify-center gap-4 py-5 md:h-[80vh] h-[60vh] text-center">
      <h1 className="relative text-3xl leading-[3.2rem] md:text-6xl font-black md:leading-[5rem]">
        Front-end developer<br />in Stockholm
      </h1>

      <div className="relative">
        <h2 className="font-bold text-xl relative z-10">Available for a new challenge after May 2025</h2>
        <span className="bg-mainGreen absolute bottom-0 left-0 h-1 w-full"></span>

      </div>
      <p>
        I don&rsquo;t bite! Let&rsquo;s connect.<br /> I&rsquo;m only a message/call away.
      </p>

      <div className="flex gap-5">
        <a
          className="flex items-center gap-3 rounded-xl text-black px-5 py-3 text-sm border-2 border-black"
          href="mailto:info@marcruizenaar.com"
        >
          Send a email
        </a>

        <a
          className="flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-sm text-white"
          href="tel:+31628672650"
        >
          <span className="relative flex h-3 w-3">
            <span className="bg-mainGreen absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
          </span>
          Call me directly
        </a>
      </div>

      <div className="topBorder absolute left-0 bottom-0 h-[0.2rem] w-full"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>

    </section>
  );
}
