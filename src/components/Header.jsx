import Title from "./Title";

export default function Header() {
  const videoStyle = {
    minWidth: "100vw",
    transform: "translateX(-50%) translateY(-50%)",
  };
  const overlayStyle = {
    background: "rgba(0, 0, 0, 0.3)",
  };
  return (
    <>
      <div style={overlayStyle} className="w-full h-screen relative z-10"></div>
      <div className="absolute top-0 w-full h-screen overflow-hidden">
        <video
          style={videoStyle}
          className="max-w-none min-h-screen h-auto w-auto absolute top-2/4 left-2/4 overflow-hidden"
          src="/barcelona-coast-xl.mp4"
          loop
          autoPlay
          muted
        />
        <Title />
      </div>
    </>
  );
}
