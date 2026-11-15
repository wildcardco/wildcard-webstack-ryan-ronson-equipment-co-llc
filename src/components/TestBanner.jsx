export function TestBanner() {
  return (
    <div>
      <div
        className="h-3 w-full"
        style={{ background: "repeating-linear-gradient(-45deg, #111 0 8px, #da2343 8px 16px)" }}
        aria-hidden="true"
      />
      <div className="bg-black text-white">
        <p className="wrap py-4 text-center font-display text-[1.35rem] font-extrabold uppercase leading-none tracking-[0.08em] sm:text-4xl">
          TEST / NO PAYMENT / NO REAL ORDER
        </p>
      </div>
    </div>
  );
}
