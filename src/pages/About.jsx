import { useEffect, useRef } from "react";

function About() {
  const HEADING_TEXT_REF = useRef(null);

  useEffect(() => {
    HEADING_TEXT_REF.current.innerText = "Learn More About Us";
    HEADING_TEXT_REF.current.style.fontSize = "2rem";
    HEADING_TEXT_REF.current.style.color = "blue";
  }, []);
  return (
    <>
      <section className="container mx-auto">
        <h1
          ref={HEADING_TEXT_REF}
          className="text-center uppercase font-semibold"
        >
          About Us
        </h1>
        <p className="text-center my-3">We are a Pet Store</p>
      </section>
    </>
  );
}

export default About;
