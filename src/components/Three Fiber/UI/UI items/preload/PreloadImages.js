function PreloadImages() {
  return (
    <>
      <div
        id="preload-paper-image"
        className="w-0 h-0 overflow-hidden z-[-1] absolute bg-paper-image"
      ></div>
      <div
        id="preload-certificate-1"
        className="w-0 h-0 overflow-hidden z-[-1] absolute bg-certificate-1"
      ></div>
      <div
        id="preload-certificate-2"
        className="w-0 h-0 overflow-hidden z-[-1] absolute bg-certificate-2"
      ></div>
      <img
        alt=""
        src="assets/images/me-with-shadow.png"
        className="w-0 h-0 overflow-hidden z-[-1] absolute"
      />
      <img
        className="w-0 h-0 overflow-hidden z-[-1] absolute"
        src={process.env.PUBLIC_URL + "/assets/images/coursera-scrum.png"}
        alt=""
      />
      <img
        className="w-0 h-0 overflow-hidden z-[-1] absolute"
        src={process.env.PUBLIC_URL + "/assets/images/RH124.jpg"}
        alt=""
      />
    </>
  );
}

export default PreloadImages;
