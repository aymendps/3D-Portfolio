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
      <div
        id="preload-certificate-1"
        className="w-0 h-0 overflow-hidden z-[-1] absolute bg-certificate-1"
      ></div>
      <div
        id="preload-certificate-2"
        className="w-0 h-0 overflow-hidden z-[-1] absolute bg-certificate-2"
      ></div>
    </>
  );
}

export default PreloadImages;
