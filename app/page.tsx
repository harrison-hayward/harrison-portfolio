"use client";

import { WheelEvent, useEffect, useState } from "react";

// These types describe the shape of project data used throughout the page.
type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  type?: "image" | "pdf";
};

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  myRole: string;
  highlights: string[];
  skills: string[];
  images: ProjectImage[];
  links: ProjectLink[];
};

// Main project content. Updating this array updates the Projects section automatically.
const projects: Project[] = [
  {
    title: "Flexyboard",
    subtitle: "ECE Capstone Project",
    date: "April 2026",
    description:
      "A flexible game table designed to let online players still experience the physical action of moving pieces on a real board. The system uses an overhead camera to detect moves and an x-y gantry with a magnet under the tabletop to move pieces automatically.",
    myRole:
      "I focused on the gantry setup, calibration, stepper motor control code, physical electronics, and microcontroller implementation.",
    highlights: [
      "Built around an x-y gantry system that moves a magnet underneath the board surface.",
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
    images: [
      {
        src: "/capstone/01_full_prototype_annotated.png",
        alt: "Full annotated FlexyBoard prototype with overhead camera, gantry, Raspberry Pi, and power supply",
        caption:
          "Full FlexyBoard prototype with overhead camera, gantry, Raspberry Pi, and power supply",
      },
      {
        src: "/capstone/02_cv_board_detection_view.png",
        alt: "Computer vision board detection view showing detected board regions and pieces",
        caption:
          "Computer vision board detection view used to identify board state and piece movement",
      },
      {
        src: "/capstone/03_full_system_block_diagram.png",
        alt: "Full FlexyBoard system block diagram",
        caption:
          "Full system block diagram showing the gantry, control, computer vision, software, and communication flow",
      },
      {
        src: "/capstone/04_system_architecture_sketch.png",
        alt: "FlexyBoard system architecture sketch",
        caption:
          "System architecture sketch showing the overhead camera, board surface, under-table gantry, and control electronics",
      },
      {
        src: "/capstone/05_gantry_mechanism_sketch.png",
        alt: "FlexyBoard XY gantry mechanism sketch",
        caption:
          "XY gantry mechanism sketch showing the motors, belt system, sliders, and magnet extension",
      },
      {
        src: "/capstone/06_playerCycle.png",
        alt: "FlexyBoard control and communication diagram",
        caption:
          "FlexyBoard player move process diagram showing how the system captures Player 1's move, sends it to Player 2, and uses an under-table XY gantry to execute the response on the physical board",
      },
    ],
    links: [
      {
        label: "Watch Demo",
        href: "https://www.youtube.com/watch?v=KzByPlQyC8Q",
      },
      {
        label: "FlexyBoard Github",
        href: "https://github.com/ChrisBernitsas/FlexyBoard",
      },
    ],
  },
  {
    title: "Evolution of Music Booth Game",
    subtitle: "Sigma Phi Epsilon Booth Project",
    date: "April 2026",
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
        src: "/iPod/display_measure.jpg",
        alt: "Initial measurement of display on wood for iPod",
        caption: "Initial measurement of display on wood for iPod",
      },
      {
        src: "/iPod/comps.jpg",
        alt: "Components used: Raspberry Pi 2 W, TPA3116D2 speaker driver, DFPlayer",
        caption:
          "Components used: Raspberry Pi 2 W, TPA3116D2 speaker driver, DFPlayer",
      },
      {
        src: "/iPod/rfid.jpg",
        alt: "RFID bracelet reader inside iPod",
        caption: "RFID bracelet reader inside iPod",
      },
      {
        src: "/iPod/ipod_innards.jpg",
        alt: "Inside view of the iPod",
        caption: "Inside view of the iPod",
      },
      {
        src: "/iPod/ipod_complete.jpg",
        alt: "Final iPod Station",
        caption: "Custom wooden iPod final station",
      }
      //{
      //  src: "/iPod/bracelet.jpg",
      //  alt: "Bracelet used by participants",
      //  caption:
      //    "Simple 3D printed bracelet used by participants to track their music choices",
      //},
    ],
    links: [
      {
        label: "What is Booth: CMU Spring Carnival",
        href: "https://www.springcarnival.org/booth.shtml",
      },
      {
        label: "iPod Station Github",
        href: "https://github.com/harrison-hayward/SB26_iPodGame",
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
    images: [
      {
        src: "/riscv/01_7_stage_pipeline_architecture.png",
        alt: "7-stage RISC-V pipelined CPU architecture diagram",
        caption:
          "7-stage RISC-V pipeline architecture showing the instruction flow from fetch through writeback",
      },
      {
        src: "/riscv/02_forwarding_hazard_performance.png",
        alt: "Forwarding and hazard detection performance comparison for RISC-V CPU",
        caption:
          "Forwarding and hazard detection improvements reduced pipeline stalls to zero and improved IPC from 0.38 to 0.99",
      },
      {
        src: "/riscv/03_branch_prediction_cycle_reduction.png",
        alt: "Branch prediction cycle reduction chart for RISC-V CPU",
        caption:
          "2-bit branch prediction reduced total execution cycles by 27.5%",
      },
      {
        src: "/riscv/04_wall_clock_speedup.png",
        alt: "Wall-clock speedup chart for pipelined RISC-V CPU",
        caption:
          "Final pipelined CPU achieved a 1.72x wall-clock performance speedup",
      },
    ],
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
    images: [
      {
        src: "/mixed_signal/01_r2r_dac_schematic.png",
        alt: "8-bit R-2R DAC schematic in Cadence Virtuoso",
        caption:
          "8-bit R-2R DAC schematic built in Cadence Virtuoso to convert digital counter outputs into an analog voltage",
      },
      {
        src: "/mixed_signal/02_dac_transient_output.png",
        alt: "DAC transient staircase output simulation",
        caption:
          "DAC transient simulation showing the staircase output response as the digital input code increases",
      },
      {
        src: "/mixed_signal/03_cmos_ota_buffer_schematic.png",
        alt: "CMOS OTA buffer schematic in Cadence Virtuoso",
        caption:
          "CMOS OTA buffer schematic used to reduce load-induced output voltage drop and improve drive capability",
      },
      {
        src: "/mixed_signal/04_dac_ota_layout_drc_clean.png",
        alt: "Full DAC and OTA physical layout with clean DRC validation",
        caption:
          "Full DAC and OTA physical layout with clean DRC validation, showing layout-level implementation and verification",
      },
      {
        src: "/mixed_signal/04_dac_ota_layout_drc_clean_2.png",
        alt: "Zoomed-in DAC physical layout section",
        caption:
          "Zoomed-in DAC physical layout showing the resistor ladder routing, power rails, and repeated layout structure",
      },
      {
        src: "/mixed_signal/04_dac_ota_layout_drc_clean_3.png",
        alt: "Zoomed-in PTA physical layout section",
        caption:
          "Zoomed-in PTA physical layout showing transistor-level routing, shared wells, and local VDD/VSS connections",
      },
    ],
    links: [],
  },
  {
    title: "Hardware Thread Design",
    subtitle: "Digital Systems Project",
    date: "March 2025",
    description:
      "Designed Bluetooth transmitter and receiver hardware threads in SystemVerilog, then tested and deployed them on an FPGA.",
    myRole:
      "I designed and implemented the transmitter and receiver hardware threads, developed the SECDED decoding flow, and tested the design on FPGA hardware.",
    highlights: [
      "Designed Bluetooth transmitter and receiver hardware threads in SystemVerilog.",
      "Developed and ran data through a SECDED decoder for single-error correction and double-error detection.",
      "Tested and deployed the hardware threads on an FPGA.",
    ],
    skills: [
      "SystemVerilog",
      "FPGA",
      "Vivado",
      "Bluetooth",
      "SECDED",
      "Digital Systems",
    ],
    images: [
      {
        src: "/hardware_thread/01_hardware_thread_system_architecture.png",
        alt: "Hardware Thread Design system architecture diagram",
        caption:
          "Hardware-thread pipeline showing input data moving through the transmitter thread, link layer, receiver thread, SECDED decoder, and FPGA output display",
      },
      {
        src: "/hardware_thread/SECDEDdecoder%20Diagram%20Final.pdf",
        alt: "Original SECDED decoder PDF diagram",
        caption:
          "Original SECDED decoder PDF diagram showing syndrome generation, 1-bit error correction, 2-bit error detection, and corrected data output routing",
        type: "pdf",
      },
      {
        src: "/hardware_thread/03_systemverilog_implementation_map.png",
        alt: "SystemVerilog implementation map for hardware thread design",
        caption:
          "SystemVerilog implementation map showing how the transmitter, receiver, SECDED logic, and display modules fit together",
      },
      {
        src: "/hardware_thread/04_verification_fpga_deployment_flow.png",
        alt: "Verification and FPGA deployment flow with waveform screenshot",
        caption:
          "Verification and FPGA deployment flow showing RTL simulation, waveform inspection, synthesis, and board-level validation",
      },
    ],
    links: [],
  },
  {
    title: "NLP Design and Training",
    subtitle: "Machine Learning Project",
    date: "March 2025",
    description:
      "Created, trained, and tested a transformer-based language model using PyTorch and local GPU acceleration.",
    myRole:
      "I implemented the model training pipeline, tuned hyperparameters, applied prompt engineering, and evaluated model performance using accuracy and F1 score.",
    highlights: [
      "Created, trained, and tested a transformer-based large language model.",
      "Tuned model hyperparameters and applied prompt engineering to improve accuracy and F1 score.",
      "Implemented the model with PyTorch and used local GPU acceleration to increase training efficiency.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Transformers",
      "Natural Language Processing",
      "GPU Training",
      "Prompt Engineering",
    ],
    images: [
      {
        src: "/nlp/01_nlp_training_workflow.png",
        alt: "NLP design and training workflow diagram",
        caption:
          "End-to-end NLP workflow showing dataset preparation, tokenization, transformer fine-tuning, GPU training, and evaluation",
      },
      {
        src: "/nlp/02_bert_vs_modernbert_comparison.png",
        alt: "BERT versus ModernBERT model selection comparison chart",
        caption:
          "BERT versus ModernBERT comparison showing validation performance across model-selection experiments",
      },
      {
        src: "/nlp/03_hyperparameter_tuning_results.png",
        alt: "NLP hyperparameter validation loss by configuration chart",
        caption:
          "Hyperparameter tuning results comparing validation loss across learning-rate, batch-size, and training configuration choices",
      },
      {
        src: "/nlp/04_few_shot_ner_strategy_f1.png",
        alt: "Few-shot named entity recognition strategy F1 score chart",
        caption:
          "Few-shot NER strategy comparison showing F1-score improvements across prompting and extraction strategies",
      },
    ],
    links: [],
  },
  {
    title: "Proxy",
    subtitle: "Computer Systems Project",
    date: "November 2024",
    description:
      "Developed a multithreaded caching web proxy in C for concurrent HTTP/1.0 GET requests.",
    myRole:
      "I implemented the core proxy behavior, including socket communication, request parsing, multithreading, LRU caching, and thorough error handling.",
    highlights: [
      "Built a multithreaded proxy server to handle concurrent client requests.",
      "Implemented an LRU cache to reduce repeated network requests and improve response efficiency.",
      "Added robust request parsing, socket communication, and error handling for HTTP/1.0 GET traffic.",
    ],
    skills: ["C", "Sockets", "Multithreading", "HTTP", "Caching", "Systems Programming"],
    images: [],
    links: [],
  },
  {
    title: "Creating RFID Antenna Coils",
    subtitle: "Electrical Engineering Project",
    date: "March 2024",
    description:
      "Designed a 125 kHz RFID scanner antenna coil using RLC circuit tuning and mutual inductance calculations for improved tag detection and powering.",
    myRole:
      "I designed, prototyped, and tested the antenna coil, including coil winding, resonant frequency tuning, and circuit-level optimization for reliable RFID operation.",
    highlights: [
      "Designed a 125 kHz RFID antenna coil for scanner-tag coupling.",
      "Used RLC circuit tuning and mutual inductance calculations to optimize detection and powering behavior.",
      "Built and tested physical prototypes through coil winding and resonant frequency measurement.",
    ],
    skills: ["RFID", "Antenna Design", "RLC Circuits", "Mutual Inductance", "Prototyping", "Circuit Testing"],
    images: [],
    links: [],
  },
];

// Work experience content used to build the Experience cards.
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
  {
    role: "Financial Analyst Intern",
    company: "MA Asset Management",
    location: "Irvington, NY",
    dates: "April 2022 - June 2022",
    description:
      "Built financial models and analyzed debt repayment trends to support investment decision-making.",
    bullets: [
      "Developed Excel-based company models to forecast growth projections and support strategic investment decisions.",
      "Used ConServ data to graph and evaluate MA's debt repayment trends.",
      "Delivered a presentation to management about the impacts of COVID-19 on financial behavior.",
    ],
  },
];

// Leadership and athletics content used to build the Leadership cards.
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

// Skills are grouped by category so each group can be rendered as its own card.
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

// Main portfolio page component.
export default function Home() {
  // Tracks which portfolio section is currently being shown.
  const [activeSection, setActiveSection] = useState("about");

  // Stores the image/PDF currently open in the fullscreen preview modal.
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  // Controls image zoom level and where the zoom should focus.
  const [zoom, setZoom] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  // Navigation buttons map directly to section IDs handled in renderActiveSection().
  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "leadership", label: "Leadership" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  // When the modal is open, lock page scrolling and let Escape close the preview.
  useEffect(() => {
    if (!selectedImage) return;

    const originalOverflow = document.body.style.overflow;
    const originalOverscrollBehavior = document.body.style.overscrollBehavior;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeImage();
      }
    }

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overscrollBehavior = originalOverscrollBehavior;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  // Opens an image or PDF preview and resets zoom each time.
  function openImage(image: ProjectImage) {
    setSelectedImage(image);
    setZoom(1);
    setTransformOrigin("center center");
  }

  // Closes the preview modal and clears zoom state.
  function closeImage() {
    setSelectedImage(null);
    setZoom(1);
    setTransformOrigin("center center");
  }

  // Zooms into the image at the mouse position when the viewer scrolls.
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

  // Prevents wheel events inside the modal from scrolling the page behind it.
  function stopPageScroll(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Shared title block used at the top of each portfolio section.
  function renderPageTitle(title: string, subtitle: string) {
    return (
      <div className="mb-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-400">
          Portfolio Section
        </p>

        <h2 className="text-4xl font-extrabold uppercase tracking-[0.18em] text-white sm:text-5xl">
          {title}
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
          {subtitle}
        </p>

        <div className="mt-10 h-px w-full bg-zinc-700" />
      </div>
    );
  }

  // Renders the About section.
  function renderAbout() {
    return (
      <section>
        {renderPageTitle(
          "About",
          "A quick overview of my background, interests, education, and engineering focus."
        )}

        <div className="space-y-6 text-lg leading-8 text-zinc-200">
          <p>
            I recently completed a B.S. in Electrical and Computer Engineering at Carnegie Mellon University 
            with a minor in Human-Computer Interaction. I am now pursuing an M.S. in Electrical and Computer 
            Engineering, expected May 2027, with a focus on semiconductor and hardware system design.
          </p>

          <p>
            My work spans modern computer architecture, circuit design, FPGA hardware threads, data analytics, 
            embedded systems, and interactive physical computing. I enjoy technical projects involving building 
            systems that combine hardware and software with fast iteration and design.
          </p>

          <div className="grid gap-4 pt-4 lg:grid-cols-2">
            <div className="border border-zinc-700 bg-[#242525] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Undergraduate
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                B.S. Electrical and Computer Engineering
              </h3>
              <p className="mt-2 text-zinc-300">Carnegie Mellon University</p>
              <p className="mt-1 text-zinc-400">
                Minor in Human-Computer Interaction
              </p>

              <div className="mt-5 border-t border-zinc-700 pt-4">
                <span className="inline-flex border border-zinc-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  Completed
                </span>
              </div>
            </div>

            <div className="border border-zinc-700 bg-[#242525] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Graduate
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                M.S. Electrical and Computer Engineering
              </h3>
              <p className="mt-2 text-zinc-300">Carnegie Mellon University</p>
              <p className="mt-1 text-zinc-400">
                Focus: Semiconductor and Hardware System Design
              </p>

              <div className="mt-5 grid gap-4 border-t border-zinc-700 pt-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Expected Graduation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-zinc-200">May 2027</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">Pittsburgh, PA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Renders experience cards from the experience array.
  function renderExperience() {
    return (
      <section>
        {renderPageTitle(
          "Experience",
          "Professional work across investment analytics, data tools, dashboards, and educational technology."
        )}

        <div className="space-y-10">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="border border-zinc-700 bg-[#242525] p-6 transition hover:border-zinc-400"
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
      </section>
    );
  }

  // Renders project cards, including image/PDF thumbnails and external links.
  function renderProjects() {
    return (
      <section>
        {renderPageTitle(
          "Projects",
          "Engineering projects across embedded systems, circuits, computer architecture, hardware design, and machine learning."
        )}

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
                  <h3 className="mt-2 text-3xl font-bold">{project.title}</h3>
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
                          {image.type === "pdf" ? (
                            <div className="h-56 w-full overflow-hidden bg-white">
                              <object
                                data={`${image.src}#page=1&view=FitH`}
                                type="application/pdf"
                                className="h-full w-full pointer-events-none"
                                aria-label={image.alt}
                              >
                                <div className="flex h-full items-center justify-center bg-[#1f2020] p-4 text-center text-sm text-zinc-300">
                                  Open the PDF to view the SECDED decoder diagram.
                                </div>
                              </object>
                            </div>
                          ) : (
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-56 w-full object-cover transition duration-300 hover:scale-105"
                            />
                          )}
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
      </section>
    );
  }

  // Renders leadership entries from the leadership array.
  function renderLeadership() {
    return (
      <section>
        {renderPageTitle(
          "Leadership",
          "Athletics and campus leadership experiences that shaped how I work with teams under pressure."
        )}

        <div className="space-y-8">
          {leadership.map((item) => (
            <article key={item.title} className="border border-zinc-700 bg-[#242525] p-6 transition hover:border-zinc-400">
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
      </section>
    );
  }

  // Renders skill categories and individual skill tags.
  function renderSkills() {
    return (
      <section>
        {renderPageTitle(
          "Skills",
          "Technical and professional skills across software, hardware, circuits, data, and project execution."
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="border border-zinc-700 bg-[#242525] p-6 transition hover:border-zinc-400">
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
      </section>
    );
  }

  // Embeds the resume PDF and includes a backup link for browsers that cannot show it inline.
  function renderResume() {
    return (
      <section>
        {renderPageTitle(
          "Resume",
          "View my resume directly on this page, or open the PDF in a new tab."
        )}

        <div className="overflow-hidden border border-zinc-700 bg-[#242525]">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="h-[78vh] w-full bg-white"
          >
            <div className="p-6 text-zinc-200">
              <p>
                Your browser could not display the resume PDF inline. Use the
                button below to open it in a new tab.
              </p>
            </div>
          </object>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-white px-6 py-4 font-bold uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Open Resume PDF
        </a>
      </section>
    );
  }

  // Renders contact methods as clickable cards.
  function renderContact() {
    return (
      <section>
        {renderPageTitle(
          "Contact", "Reach out for internship opportunities, full-time roles, engineering projects, or professional connections."
        )}

        <p className="max-w-3xl text-lg leading-8 text-zinc-200">
          

        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            href="mailto:hhayward@andrew.cmu.edu"
            className="border border-zinc-700 bg-[#242525] p-5 transition hover:border-white"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
              Email
            </p>
            <p className="mt-2 break-words text-xl font-bold text-white">
              hhayward@andrew.cmu.edu
            </p>
          </a>

          <a
            href="tel:9143348145"
            className="border border-zinc-700 bg-[#242525] p-5 transition hover:border-white"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
              Phone
            </p>
            <p className="mt-2 text-xl font-bold text-white">914-334-8145</p>
          </a>

          <a
            href="https://linkedin.com/in/harrison-hayward"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 bg-[#242525] p-5 transition hover:border-white"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
              LinkedIn
            </p>
            <p className="mt-2 break-words text-xl font-bold text-white">
              linkedin.com/in/harrison-hayward
            </p>
          </a>

          <a
            href="https://github.com/harrison-hayward"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 bg-[#242525] p-5 transition hover:border-white"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
              GitHub
            </p>
            <p className="mt-2 break-words text-xl font-bold text-white">
              github.com/harrison-hayward
            </p>
          </a>
        </div>
      </section>
    );
  }

  // Chooses which section renderer to call based on the active navigation tab.
  function renderActiveSection() {
    switch (activeSection) {
      case "about":
        return renderAbout();
      case "experience":
        return renderExperience();
      case "projects":
        return renderProjects();
      case "leadership":
        return renderLeadership();
      case "skills":
        return renderSkills();
      case "resume":
        return renderResume();
      case "contact":
        return renderContact();
      default:
        return renderAbout();
    }
  }

  return (
    <main className="min-h-screen bg-[#1f2020] text-white">
      {/* HERO: large intro banner with background image and short summary. */}
      <section
        className="relative flex min-h-[360px] items-end bg-cover bg-center"
        style={{
          backgroundImage: "url('/switz.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-14">
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

      {/* NAV: sticky section selector. Buttons update activeSection instead of routing pages. */}
      <nav className="sticky top-0 z-50 border-b border-zinc-700 bg-[#1f2020]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6 py-5 text-sm font-bold sm:gap-4 sm:text-base">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={`border px-4 py-2 uppercase tracking-widest transition ${
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-transparent text-white hover:border-zinc-500 hover:text-zinc-300"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ACTIVE PAGE: displays the currently selected section. */}
      <section className="min-h-[calc(100vh-520px)] border-b border-zinc-700">
        <div className="mx-auto max-w-6xl px-6 py-20">{renderActiveSection()}</div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-zinc-400">
        <div className="mx-auto max-w-3xl space-y-3">
          <p>
            © 2026 Harrison Hayward. Built with Next.js and Tailwind CSS.
          </p>

          <p className="leading-6">
            Created this website from the ground up with the help of AI, completing it in ~12 hours of work with no prior knowledge.
          </p>

          <a
            href="https://github.com/harrison-hayward/harrison-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold text-zinc-200 underline underline-offset-4 transition hover:text-white"
          >
            View the website code on GitHub
          </a>
        </div>
      </footer>

      {/* IMAGE MODAL: appears when a project image or PDF thumbnail is clicked. */}
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
            className="flex h-full w-full max-w-[96vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-4 text-center text-sm text-zinc-300">
              {selectedImage.type === "pdf"
                ? "PDF preview shown inline. Use your browser controls to zoom or open it directly."
                : `Scroll over the image to zoom. Zoom: ${zoom.toFixed(2)}x`}
            </p>

            <div className="flex max-h-[82vh] w-full items-center justify-center overflow-auto">
              {selectedImage.type === "pdf" ? (
                <object
                  data={`${selectedImage.src}#page=1&view=FitH`}
                  type="application/pdf"
                  className="h-[82vh] w-[92vw] max-w-[1500px] bg-white"
                  aria-label={selectedImage.alt}
                >
                  <div className="flex h-[82vh] w-[92vw] max-w-[1500px] items-center justify-center border border-zinc-700 bg-[#1f2020] p-6 text-center text-zinc-200">
                    This browser could not display the PDF inline. Use the button below to open it.
                  </div>
                </object>
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  onWheel={handleImageWheel}
                  className="cursor-zoom-in object-contain transition-transform duration-100"
                  style={{
                    width: "min(92vw, 1500px)",
                    maxHeight: "82vh",
                    height: "auto",
                    transform: `scale(${zoom})`,
                    transformOrigin,
                  }}
                />
              )}
            </div>

            <p className="mt-4 max-w-5xl text-center text-lg text-zinc-200">
              {selectedImage.caption}
            </p>

            {selectedImage.type === "pdf" && (
              <a
                href={selectedImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border border-white px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
              >
                Open PDF
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
