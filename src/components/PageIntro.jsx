export function PageIntro({ eyebrow, title, children, image }) {
  return (
    <header className="relative bg-coal text-white">
      {image ? (
        <div className="relative h-52 sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]">
          <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      ) : (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-brand lg:block"
          style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)" }}
          aria-hidden="true"
        />
      )}
      <div className="wrap relative">
        <div
          data-reveal
          className={
            image
              ? "relative z-10 -mt-10 max-w-2xl bg-header px-5 py-8 sm:px-8 lg:my-12 lg:mt-12 lg:w-[42rem] lg:max-w-none"
              : "max-w-2xl py-12 sm:py-16"
          }
        >
          {eyebrow ? (
            <p className="kicker flex items-center gap-3 text-white">
              <span className="inline-block h-3 w-8 shrink-0 bg-brand" aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="display mt-3 text-[2.6rem] text-white sm:text-6xl">{title}</h1>
          {children ? <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
