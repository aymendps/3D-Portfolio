function PinnedDiv({ className, children }) {
  return (
    <div className={"relative " + className}>
      <img
        className="absolute right-0 top-0 w-[50px] z-50"
        alt=""
        src="/assets/images/red-pin.png"
      ></img>
      {children}
    </div>
  );
}

export default PinnedDiv;
