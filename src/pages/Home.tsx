import { useRef } from "react";


import Hero from "../components/Hero";

import Footer from "../components/Footer";
import videoBg from "../assets/videoplayback.mp4";
import PizzaCarousel from "../components/PizzaCarousel";
import CircularGallery from "../pages/CircularGallery";
import OrbitImages from "./OrbitImages";

import Service from "../components/Service";
import webDevImg1 from "../assets/feature/source2.png";
import webDevImg2 from "../assets/feature/source3.png";
import webDevImg3 from "../assets/feature/source4.png";
import webDevImg4 from "../assets/feature/source5.png";
import webDevImg5 from "../assets/feature/source6.png";
import webDevImg6 from "../assets/feature/source7.png";
import webDevImg7 from "../assets/feature/source8.png";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = scrollRef.current;
    if (!slider) return;

    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const orbitImages = [
    "https://picsum.photos/300/300?grayscale&random=1",
    "https://picsum.photos/300/300?grayscale&random=2",
    "https://picsum.photos/300/300?grayscale&random=3",
    "https://picsum.photos/300/300?grayscale&random=4",
    "https://picsum.photos/300/300?grayscale&random=5",
    "https://picsum.photos/300/300?grayscale&random=6",
  ];

  return (
    <>
      <Hero />

      {/* NEW HEADLINE SECTION */}
      <section className="headline-section">
        <h2>AIGETAI</h2>
        <p>
          AIGETAI is a forward-thinking software company specializing in
          end-to-end digital solutions. We combine modern frameworks, cloud
          infrastructure, and artificial intelligence to build products that
          solve real problems. From startups to enterprises, we turn complex
          challenges into elegant, scalable software.
        </p>
      </section>

      {/* ===================== */}

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

      <section className="my-24 carousel-section">
        <Service />
      </section>

      <hr className="section-divider" />

      {/* new headline section */}
      <section className="headline-section">
        <h2>Your creative partner for ideation & imagination</h2>
        <p>
          {" "}
          We design and develop web apps, mobile applications, AI-powered
          systems, and custom software—delivering scalable, secure, and reliable
          solutions with ongoing support.
        </p>
      </section>

      {/* orbit images */}
      <section className="orbit-section">
        <OrbitImages
          images={orbitImages}
          shape="ellipse"
          radiusX={570}
          radiusY={100}
          rotation={-8}
          duration={65}
          itemSize={140}
          responsive={true}
          radius={160}
          direction="normal"
          fill
          showPath
          paused={false}
        />
      </section>

      <hr className="section-divider" />

      <section className="services">
        <div
          className="services-scroll"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
        >
          <div className="services-track">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>We build fast, secure, and scalable</p>
              <p> websites using modern technologies.</p>
              <img src={webDevImg1} alt="Web Development" />
            </div>

            <div className="service-card">
              <h3>Mobile App Development</h3>
              <p>We design and develop high-quality</p>{" "}
              <p> Android and iOS applications.</p>
              <img src={webDevImg2} alt="Web Development" />
            </div>

            <div className="service-card">
              <h3>AI & Automation</h3>
              <p>We create AI-powered systems to automate </p>{" "}
              <p>workflows and enhance decision-making.</p>
              <img src={webDevImg3} alt="Web Development" />
            </div>

            <div className="service-card">
              <h3>Custom Software</h3>
              <p>We develop tailored software </p>{" "}
              <p> designed around your business needs..</p>
              <img src={webDevImg4} alt="Web Development" />
            </div>

            <div className="service-card">
              <h3>Maintenance & Support</h3>
              <p>We provide continuous monitoring, updates, </p>{" "}
              <p>and technical support.</p>
              <img src={webDevImg5} alt="Web Development" />
            </div>

            {/* DUPLICATE for infinite scroll */}
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Modern, scalable websites and web apps.</p>
              <img src={webDevImg6} alt="Web Development" />
            </div>

            <div className="service-card">
              <h3>Mobile App Development</h3>
              <p>Android & iOS apps.</p>
              <img src={webDevImg7} alt="Web Development" />
            </div>
          </div>
        </div>
      </section>

      {/* pizza carousile */}
      <section className="my-12 carousel-section">
        <PizzaCarousel />
      </section>

      {/* Video Background Section */}
      <section className="video-section">
        <video
          className="video-bg"
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-overlay">
          <div className="video-content">
            <h2>Your creative partner for ideation & imagination</h2>
            <p>
              We design and develop web apps, mobile applications, AI-powered
              systems, and custom software—delivering scalable, secure, and
              reliable solutions with ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* WEBSITE FAQ SECTION */}
      <section className="dream-machine-faq">
        <div className="faq-container">
          <h2 className="faq-title">AIGETAI Website FAQs</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What services are showcased on this website?</h3>
              <p>
                This website highlights our core services including web
                development, mobile app development, AI and automation, custom
                software, cloud support, and long-term maintenance.
              </p>
            </div>

            <div className="faq-item">
              <h3>Who is this website built for?</h3>
              <p>
                The platform is designed for startups, growing businesses, and
                enterprises looking for a reliable technology partner to design,
                build, and scale digital products.
              </p>
            </div>

            <div className="faq-item">
              <h3>How can I start a project through this website?</h3>
              <p>
                You can start by using the enquiry section to share your
                requirements. Our team reviews your goals, proposes a scope,
                and then moves forward with planning and execution.
              </p>
            </div>

            <div className="faq-item">
              <h3>Does AIGETAI provide support after project delivery?</h3>
              <p>
                Yes. We provide post-launch support, performance monitoring,
                security updates, bug fixes, and iterative enhancements to keep
                your product stable and growth-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

