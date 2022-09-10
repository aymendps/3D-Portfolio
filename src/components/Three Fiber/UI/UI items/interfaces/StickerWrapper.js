function StickerWrapper({ children, color, ...props }) {
  return (
    <div
      className={`${
        color === "orange" ? "bg-orange-sticker" : "bg-yellow-sticker"
      } bg-contain bg-no-repeat bg-center flex justify-center items-center`}
      style={{ ...props }}
    >
      {color === "orange" ? (
        <div className="w-[80%] mr-[8%] mb-[5%] h-[69%] overflow-hidden">
          {children}
        </div>
      ) : (
        <div className="w-[60%] h-[70%] overflow-hidden">{children}</div>
      )}
    </div>
  );
}

export default StickerWrapper;
