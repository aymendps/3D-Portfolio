function PinnedDiv({ className, children }) {
  return (
    <div className={"relative " + className}>
      <img
        className="absolute right-0 top-0 w-[50px] z-50 pointer-events-none"
        alt=""
        src={process.env.PUBLIC_URL + "/assets/images/red-pin.png"}
      ></img>
      {children}
    </div>
  );
}

export default PinnedDiv;
