export default function Title() {
  const fontFamilyOswald = {
    fontFamily: "Oswald",
    fontSize: "25px",
  };
  const titleFirstLine = {
    letterSpacing: "12px",
  };
  const titleSecondLine = {
    letterSpacing: "50px",
  };
  return (
    <>
      <div
        style={fontFamilyOswald}
        className="overlay-container absolute w-full h-screen top-0"
      >
        <div className="flex items-center justify-center h-full flex-col uppercase relative z-20">
          <p style={titleFirstLine} className="text-xl	">
            The people who make
          </p>
          <p style={titleSecondLine} className="text-6xl">
            Catalonia
          </p>
        </div>
      </div>
    </>
  );
}
