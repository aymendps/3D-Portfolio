function PreloadImages() {
  return (
    <>
      <div
        id="preload-paper-image"
        className="w-0 h-0 overflow-hidden z-[-1] absolute bg-paper-image"
      ></div>
      <div
        id="preload-me-drawn-image"
        className="w-0 h-0 overflow-hidden z-[-1] absolute bg-me-drawn-image"
      ></div>
    </>
  );
}

export default PreloadImages;
