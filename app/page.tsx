"use client";

import { WheelEvent, useEffect, useState } from "react";

const projects = [
  {
    title: "Flexyboard",
    subtitle: "ECE Capstone Project",
    date: "Spring 2026",
    description:
      "A flexible game table designed to let remote players still experience the physical action of moving pieces on a real board. The system used an overhead camera to detect player moves and an x-y gantry with a magnet under the tabletop to move pieces automatically.",
    myRole:
      "I focused on the gantry setup, calibration, stepper motor control code, physical electronics, and microcontroller implementation.",
    highlights: [
      "Built around an x-y gantry system that moved a magnet underneath the board surface.",
      "Used an overhead camera to capture initial and final board states, then detect piece movement through pixel differences.",
      "Transferred detected moves to a second player through a laptop GUI.",
      "Implemented the physical actuation system that moved Player 2's chosen piece on the Flexyboard.",
    ],
    skills: [
      "Stepper Motors",
      "Microcontrollers",
      "Gantry Calibration",
      "Computer Vision",
      "Embedded Systems",
      "Physical Prototyping",
    ],
    images: [],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=KzByPlQyC8Q",
      },
    ],
  },
  {
    title: "Evolution of Music Booth Game",
    subtitle: "Sigma Phi Epsilon Booth Project",
    date: "Spring 2025",
    description:
      "As a brother of Sigma Phi Epsilon, I participated in Booth, a Carnegie Mellon tradition where student organizations build one to two story themed structures for Spring Carnival. Each organization designs its booth around a specific interpretation of the overall theme. This year, the theme was Scottie's Playlist, and SigEp's booth focused on the Evolution of Music, showing how music media has changed over time.\n\nAs one of the Head Booth Chairs, I had many responsibilities but one interesting one that happened to fall on me was the creation of the final station of our booth game. Players received RFID bracelets that stored music they picked as they moved through rooms representing different eras of media (concert hall -> gramophone -> radio -> vinyl -> cassette -> CD -> digital). The experience ended in a digital room finale, where each players' saved choices generated a custom song played back through the final station.",
    myRole:
      "I built the final station of the game: two large custom wooden iPods that read each player's RFID bracelet, selected the matching song, displayed album art in an old iPod-style interface, and played the song through an internal speaker system.",
    highlights: [
      "Designed and cut two custom wooden iPod enclosures from wooden sheets.",
      "Mounted a vertical 27-inch display inside each iPod.",
      "Programmed two Raspberry Pi Zero 2 Ws to read RFID bracelet data and select the corresponding song.",
      "Built the display interface to show album art in an old iPod-style view.",
      "Used a speaker driver and externally powered speaker to play each selected song loudly inside the booth.",
      "Completed this entire project from ideation to showing in about 1 week with no prior knowledge.",
    ],
    skills: [
      "Raspberry Pi",
      "RFID",
      "Python",
      "Display Interface",
      "Wood Fabrication",
      "Embedded Audio",
    ],
    images: [
      {
        src: "/projects/display_measure.jpg",
        alt: "Initial measurement of display on wood for iPod",
        caption: "Initial measurement of display on wood for iPod",
      },
      {
        src: "/projects/comps.jpg",
        alt: "Components used: Raspberry Pi 2 W, TPA3116D2 speaker driver, DFPlayer",
        caption:
          "Components used: Raspberry Pi 2 W, TPA3116D2 speaker driver, DFPlayer",
      },
      {
        src: "/projects/rfid.jpg",
        alt: "RFID bracelet reader inside iPod",
        caption: "RFID bracelet reader inside iPod",
      },
      {
        src: "/projects/ipod_innards.jpg",
        alt: "Inside view of the iPod",
        caption: "Inside view of the iPod",
      },
      {
        src: "/projects/ipod_complete.jpg",
        alt: "Final iPod Station",
        caption: "Custom wooden iPod final station",
      },
      {
        src: "/projects/bracelet.jpg",
        alt: "Bracelet used by participants",
        caption:
          "Simple 3D printed bracelet used by participants to track their music choices",
      },
    ],
    links: [
      {
        label: "What is Booth: CMU Spring Carnival",
        href: "https://www.springcarnival.org/booth.shtml",
      },
      {
        label: "iPod Project Github",
        href: "http://localhost:3000",
      },
      {
        label: "Head Booth Chair Responsibilities",
        href: "https://drive.google.com/drive/folders/1eTtnNA8aSClevoIuJ9KjEApKjfXA1b5R?usp=sharing",
      },
    ],
  },
  {
    title: "Pipelined RISC-V CPU",
    subtitle: "Computer Architecture Project",
    date: "March 2026",
    description:
      "Designed a 7-stage RISC-V processor in SystemVerilog with hazard detection, forwarding, and a 2-bit branch predictor.",
    myRole:
      "I worked on processor architecture, pipeline behavior, performance improvement, and SystemVerilog implementation.",
    highlights: [
      "Reduced pipeline stalls to zero, improving IPC from 0.38 to 0.99.",
      "Achieved 1.72x wall-clock performance speedup.",
      "Reduced cycles by 27.5% using branch prediction.",
    ],
    skills: ["SystemVerilog", "Computer Architecture", "Branch Prediction"],
    images: [],
    links: [],
  },
  {
    title: "Mixed Signal IC Design",
    subtitle: "Circuit Design Project",
    date: "December 2025",
    description:
      "Simulated an 8-bit R-2R DAC and CMOS OTA buffer using Cadence Virtuoso.",
    myRole:
      "I analyzed circuit behavior, improved output performance, and designed semiconductor layout under area constraints.",
    highlights: [
      "Reduced load-induced voltage drop from 35% to less than 0.1% using an OTA buffer.",
      "Analyzed output impedance and circuit performance.",
      "Designed semiconductor layout using chaining, shared wells, and capacitor integration.",
    ],
    skills: ["Cadence Virtuoso", "Analog Circuits", "IC Layout"],
    images: [],
    links: [],
  },
];

const experience = [
  {
    role: "Data Analyst Intern",
    company: "HPS Investment Partners / BlackRock",
    location: "New York, NY",
    dates: "June 2025 - August 2025",
    description:
      "Developed data tools and dashboards for investment analytics, risk assessment, and securities analysis.",
    bullets: [
      "Developed an SQL stored procedure to derive tranches of investment securities.",
      "Used query optimization strategies to improve efficiency on large datasets.",
      "Built a Power BI dashboard to calculate LTVs of investments and support faster risk assessment.",
      "Delivered a live final project presentation to the Data Analytics team and management.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "GoldenTree Asset Management",
    location: "New York, NY",
    dates: "June 2024 - August 2024",
    description:
      "Worked on financial data modeling, dashboarding, and fund performance analysis.",
    bullets: [
      "Constructed Excel models using Bloomberg data to forecast company financial health and performance.",
      "Used Google BigQuery and Tableau to create dashboards for research analysts.",
      "Applied SQL to compare fund-level performance metrics with ICE benchmarks.",
    ],
  },
  {
    role: "Web Design Intern",
    company: "NYC FIRST",
    location: "Cornell Tech, New York, NY",
    dates: "June 2021 - August 2022",
    description:
      "Designed educational technology resources and programs for robotics and makerspace learning.",
    bullets: [
      "Designed and launched a makerspace program for underserved NYC students.",
      "Built an online course platform to support remote learning.",
      "Used Fusion 360 and data analysis to support robotics education and COVID-safe gear design.",
    ],
  },
];

const leadership = [
  {
    title: "Track and Field — Pole Vault",
    organization: "Hackley High School and Carnegie Mellon Division III",
    dates: "September 2017 - December 2025",
    bullets: [
      "Pole vaulter with a personal record of 14'6\".",
      "Men's Outdoor UAA Champion in 2023 and 2024.",
      "NYSAIS Pole Vault Outdoor Champion in May 2022.",
      "Qualified for New Balance Indoor Pole Vault National Championship in March 2022.",
    ],
  },
  {
    title: "CMU Orientation Leader",
    organization: "Carnegie Mellon University",
    dates: "August 2025",
    bullets: [
      "Led 3 Orientation Counselors and 40 incoming students with nearly 100% attendance across 9 days.",
      "Helped plan and set up events involving all 1,800 incoming students.",
      "Built leadership experience through delegation, emergency response, and teamwork.",
    ],
  },
];

const skills = {
  Languages: ["C", "C++", "Python", "SQL", "HTML/CSS", "Java", "JavaScript"],
  Hardware: [
    "SystemVerilog",
    "Cadence Virtuoso",
    "Vivado",
    "Fusion 360",
    "Jetson",
    "Raspberry Pi",
    "RFID",
    "Stepper Motors",
  ],
  Professional: [
    "Mentorship",
    "Coaching",
    "Rapid Iteration",
    "Execution Under Deadlines",
    "Project Ownership",
  ],
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const [zoom, setZoom] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    const originalOverscrollBehavior = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overscrollBehavior = originalOverscrollBehavior;
    };
  }, [selectedImage]);

  function openImage(image: { src: string; alt: string; caption: string }) {
    setSelectedImage(image);
    setZoom(1);
    setTransformOrigin("center center");
  }

  function closeImage() {
    setSelectedImage(null);
    setZoom(1);
    setTransformOrigin("center center");
  }

  function handleImageWheel(event: WheelEvent<HTMLImageElement>) {
    event.preventDefault();
    event.stopPropagation();

    const rect = event.currentTarget.getBoundingClientRect();
    const xPercent = ((event.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((event.clientY - rect.top) / rect.height) * 100;

    setTransformOrigin(`${xPercent}% ${yPercent}%`);

    setZoom((currentZoom) => {
      const zoomAmount = event.deltaY < 0 ? 0.25 : -0.25;
      const nextZoom = currentZoom + zoomAmount;

      return Math.min(Math.max(nextZoom, 1), 5);
    });
  }

  function stopPageScroll(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <main className="min-h-screen bg-[#1f2020] text-white">
      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[460px] items-end bg-cover bg-center"
        style={{
          backgroundImage: "url('/switz.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-200">
            Portfolio
          </p>

          <h1 className="max-w-5xl text-5xl font-extrabold uppercase tracking-[0.16em] text-white sm:text-6xl">
            Harrison Hayward
          </h1>

          <p className="mt-4 max-w-3xl text-xl leading-8 text-zinc-200">
            Electrical and Computer Engineering student at Carnegie Mellon
            University with experience in hardware design, data analytics,
            software development, and human-computer interaction.
          </p>
        </div>
      </section>

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-zinc-700 bg-[#1f2020]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 py-6 text-sm font-bold sm:gap-10 sm:text-base">
          <a href="#about" className="transition hover:text-zinc-300">
            About
          </a>
          <a href="#experience" className="transition hover:text-zinc-300">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-zinc-300">
            Projects
          </a>
          <a href="#leadership" className="transition hover:text-zinc-300">
            Leadership
          </a>
          <a href="#skills" className="transition hover:text-zinc-300">
            Skills
          </a>
          <a href="#resume" className="transition hover:text-zinc-300">
            Resume
          </a>
          <a href="#contact" className="transition hover:text-zinc-300">
            Contact
          </a>
        </div>
      </nav>

      {/* ABOUT */}
      <section id="about" className="border-b border-zinc-700">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.18em]">
            About
          </h2>

          <div className="space-y-6 text-lg leading-8 text-zinc-200">
            <p>
              I am pursuing a B.S. in Electrical and Computer Engineering at
              Carnegie Mellon University with a minor in Human-Computer
              Interaction. I am interested in building systems that combine
              hardware, software, data, and user-focused design.
            </p>

            <p>
              My work spans computer architecture, mixed-signal circuit design,
              FPGA hardware threads, machine learning, data analytics, embedded
              systems, and interactive physical computing. I enjoy technical
              projects where I can move quickly, solve hard problems, and take
              ownership from idea to execution.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="border border-zinc-700 p-5">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                  Education
                </p>
                <p className="mt-2 text-xl font-bold">
                  Carnegie Mellon University
                </p>
                <p className="mt-1 text-zinc-300">
                  B.S. Electrical and Computer Engineering
                </p>
                <p className="text-zinc-300">
                  Minor in Human-Computer Interaction
                </p>
              </div>

              <div className="border border-zinc-700 p-5">
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                  Expected Graduation
                </p>
                <p className="mt-2 text-xl font-bold">May 2026</p>
                <p className="mt-1 text-zinc-300">Pittsburgh, PA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b border-zinc-700">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.18em]">
            Experience
          </h2>

          <div className="space-y-10">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="border-l-4 border-zinc-500 pl-6"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold">{item.role}</h3>
                    <p className="text-zinc-300">{item.company}</p>
                    <p className="text-sm text-zinc-400">{item.location}</p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                    {item.dates}
                  </p>
                </div>

                <p className="mt-4 text-lg leading-8 text-zinc-200">
                  {item.description}
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-zinc-700">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.18em]">
            Projects
          </h2>

          <div className="space-y-14">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-zinc-700 bg-[#242525] p-6 transition hover:border-zinc-400"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                    {project.date}
                  </p>
                </div>

                <p className="mt-5 max-w-3xl whitespace-pre-line text-lg leading-8 text-zinc-200">
                  {project.description}
                </p>

                <div className="mt-6 border-l-4 border-zinc-500 pl-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                    My Role
                  </p>
                  <p className="mt-2 text-lg leading-8 text-zinc-200">
                    {project.myRole}
                  </p>
                </div>

                <ul className="mt-6 list-disc space-y-2 pl-5 text-zinc-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                {project.images.length > 0 && (
                  <div className="mt-8">
                    <p className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
                      Project Images
                    </p>

                    <div className="grid gap-4 md:grid-cols-3">
                      {project.images.map((image) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => openImage(image)}
                          className="overflow-hidden border border-zinc-700 bg-[#1f2020] text-left transition hover:border-zinc-400"
                        >
                          <figure>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                            />
                            <figcaption className="border-t border-zinc-700 p-3 text-sm text-zinc-300">
                              {image.caption}
                            </figcaption>
                          </figure>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-zinc-600 px-3 py-1 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-widest transition hover:bg-white hover:text-black"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="border-b border-zinc-700">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.18em]">
            Leadership
          </h2>

          <div className="space-y-8">
            {leadership.map((item) => (
              <article key={item.title} className="border border-zinc-700 p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-zinc-300">{item.organization}</p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                    {item.dates}
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b border-zinc-700">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.18em]">
            Skills
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border border-zinc-700 p-6">
                <h3 className="text-xl font-bold">{category}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-zinc-600 px-3 py-1 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="border-b border-zinc-700">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.18em]">
            Resume
          </h2>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-200">
              View or download my resume for a complete summary of my education,
              experience, projects, leadership, and technical skills.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border border-white px-6 py-4 font-bold uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.18em]">
            Contact
          </h2>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-200">
              I am open to internship opportunities, full-time roles,
              engineering projects, and professional connections.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hhayward@andrew.cmu.edu"
                className="border border-white px-6 py-4 font-bold uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                Email
              </a>

              <a
                href="https://linkedin.com/in/harrison-hayward"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-500 px-6 py-4 font-bold uppercase tracking-widest transition hover:border-white hover:bg-white hover:text-black"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Megatronicle"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-500 px-6 py-4 font-bold uppercase tracking-widest transition hover:border-white hover:bg-white hover:text-black"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-700 px-6 py-8 text-center text-sm text-zinc-400">
        © 2026 Harrison Hayward. Built with Next.js and Tailwind CSS.
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/90 px-4 py-8"
          onClick={closeImage}
          onWheel={stopPageScroll}
        >
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-6 top-6 z-[110] border border-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
          >
            Back
          </button>

          <div
            className="flex max-h-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-4 text-center text-sm text-zinc-300">
              Scroll over the image to zoom. Zoom: {zoom.toFixed(2)}x
            </p>

            <div className="max-h-[80vh] max-w-full overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                onWheel={handleImageWheel}
                className="max-h-[80vh] w-auto max-w-full cursor-zoom-in object-contain transition-transform duration-100"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin,
                }}
              />
            </div>

            <p className="mt-4 text-center text-lg text-zinc-200">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}