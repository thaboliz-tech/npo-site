import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpenCheck,
  Building2,
  Check,
  ChevronDown,
  HandHeart,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Shovel,
  Sprout,
  UsersRound,
} from "lucide-react";

const programmes = [
  {
    number: "01",
    title: "Youth outreach",
    description:
      "Create positive opportunities for young people through outreach, encouragement, practical support and community connection.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1100&q=85",
    alt: "Young people learning and spending time together",
    icon: BookOpenCheck,
  },
  {
    number: "02",
    title: "Care where it’s needed",
    description:
      "Help underserved households and vulnerable people access essential items and community-led support.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1100&q=85",
    alt: "Volunteers working together on a community initiative",
    icon: HandHeart,
  },
  {
    number: "03",
    title: "Orphanage assistance",
    description:
      "Coordinate donations and practical assistance for children's homes, based on the needs they identify.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1100&q=85",
    alt: "Children taking part in a group activity",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Community improvement",
    description:
      "Bring people, materials and skills together for practical projects such as paving, access paths and local road improvements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85",
    alt: "Construction workers and building materials at a project site",
    icon: Shovel,
  },
];

const partnershipOptions = [
  {
    number: "01",
    title: "Fund a project",
    description:
      "Contribute toward an agreed outreach, essential-goods drive or community improvement project.",
  },
  {
    number: "02",
    title: "Donate goods or materials",
    description:
      "Help provide food, clothing, school supplies, tools, building materials or other agreed essentials.",
  },
  {
    number: "03",
    title: "Bring your team's skills",
    description:
      "Explore employee volunteering, pro-bono expertise or practical support for a community initiative.",
  },
];

const faqs = [
  {
    question: "How can a company support Youth Challenge Club?",
    answer:
      "Companies can discuss sponsoring a specific project, donating goods or materials, contributing professional skills, or supporting an outreach activity. The scope and budget should be agreed before any commitment is made.",
  },
  {
    question: "Can I donate items instead of money?",
    answer:
      "Yes. In-kind support may be useful, depending on current community needs. Please contact the team before arranging a delivery so the organisation can confirm what is needed and how it can be received.",
  },
 
  {
    question: "Can we request assistance for a community project or children's home?",
    answer:
      "Use the contact details below to introduce the organisation or community, explain the need, and share any relevant supporting information. Requests can then be reviewed against the Club's capacity and priorities.",
  },
];

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center text-[#1e4938] ${
        footer
          ? "size-[38px]"
          : "size-[43px] max-[760px]:size-[38px]"
      }`}
    >
      <svg viewBox="0 0 44 44" fill="none" className="size-full">
        <path
          d="M22 3.5 38.5 13v18L22 40.5 5.5 31V13L22 3.5Z"
          fill="currentColor"
          opacity=".12"
        />
        <path
          d="M22 7.5 34.5 14.7v14.6L22 36.5 9.5 29.3V14.7L22 7.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14.5 25.8c4.3-.2 7.1-2.2 8.2-6.1 2 3.8 4.3 5.1 7 5.3M22.7 19.7v9.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.1 15.5c2.1-.2 3.8.9 5.2 3.1-3 .1-4.8-.9-5.2-3.1ZM27 14.3c-2.1.2-3.5 1.8-4.2 4.2 2.8-.8 4.2-2.2 4.2-4.2Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-[10px] text-[9px] font-extrabold uppercase leading-[1.5] tracking-[0.19em] text-[#1e4938]">
      <span
        aria-hidden="true"
        className="inline-block h-px w-[25px] shrink-0 bg-[#c49b55]"
      />
      {children}
    </p>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="#top"
      aria-label="Youth Challenge Club home"
      className="inline-flex shrink-0 items-center gap-[11px] max-[760px]:gap-2"
    >
      <BrandMark footer={footer} />

      <span className="flex flex-col gap-1">
        <span
          className={`font-serif font-bold tracking-[-0.035em] ${
            footer
              ? "text-[15px]"
              : "text-[17px] max-[760px]:text-sm"
          }`}
        >
          Youth Challenge Club
        </span>

        <span className="text-[8px] uppercase tracking-[0.13em] text-[#7c847b] max-[760px]:text-[7px]">
          People first. Progress together.
        </span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-clip bg-[#f7f5ef] font-[Arial,Helvetica,sans-serif] text-[#1d3028] antialiased selection:bg-[#d7e4d8] selection:text-[#173a2e]"
    >
      {/* Announcement bar */}
      

      {/* Header */}
      <header className="mx-auto flex h-[90px] max-w-[1290px] items-center justify-between gap-7 px-[42px] max-[1100px]:gap-[17px] max-[1100px]:px-[30px] max-[760px]:h-[75px] max-[760px]:px-5">
        <Brand />

        <nav
          aria-label="Main navigation"
          className="ml-auto flex items-center gap-[clamp(18px,2.4vw,36px)] max-[1100px]:gap-[17px] max-[760px]:hidden"
        >
          <a
            href="#about"
            className="text-[15px] text-[#58665e] transition-colors hover:text-[#1e4938] max-[1100px]:text-[10px]"
          >
            Who we are
          </a>
          <a
            href="#work"
            className="text-[15px] text-[#58665e] transition-colors hover:text-[#1e4938] max-[1100px]:text-[10px]"
          >
            Our work
          </a>
          <a
            href="#partnerships"
            className="text-[15px] text-[#58665e] transition-colors hover:text-[#1e4938] max-[1100px]:text-[10px]"
          >
            Partner with us
          </a>
          <a
            href="#faq"
            className="text-[15px] text-[#58665e] transition-colors hover:text-[#1e4938] max-[1100px]:text-[10px]"
          >
            FAQs
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex min-h-[51px] items-center justify-center gap-[15px] whitespace-nowrap border border-[#1e4938] bg-[#1e4938] px-[18px] text-[11px] font-bold leading-none text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#173a2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4938] max-[1100px]:gap-2 max-[1100px]:px-[14px] max-[1100px]:text-[10px] max-[760px]:hidden"
        >
          Support our work <ArrowUpRight size={16} />
        </a>

        <details className="relative hidden max-[760px]:block">
          <summary
            aria-label="Open navigation menu"
            className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-[#e1e2d9] text-[#1e4938] [&::-webkit-details-marker]:hidden"
          >
            <Menu size={22} />
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[44px] z-20 flex w-[220px] flex-col border border-[#e1e2d9] bg-[#fffefa] p-[10px] shadow-[0_14px_40px_#173a2e1a]"
          >
            <a href="#about" className="border-b border-[#edf0e9] px-3 py-[13px] text-[13px]">
              Who we are
            </a>
            <a href="#work" className="border-b border-[#edf0e9] px-3 py-[13px] text-[13px]">
              Our work
            </a>
            <a href="#partnerships" className="border-b border-[#edf0e9] px-3 py-[13px] text-[13px]">
              Partner with us
            </a>
            <a href="#faq" className="border-b border-[#edf0e9] px-3 py-[13px] text-[13px]">
              FAQs
            </a>
            <a href="#contact" className="px-3 py-[13px] text-[13px]">
              Contact us
            </a>
          </nav>
        </details>
      </header>

      {/* Hero */}
      <section className="mx-auto grid min-h-[600px] w-full max-w-[1290px] grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-center gap-[clamp(35px,6vw,90px)] px-[42px] pt-[42px] pb-[75px] max-[1100px]:gap-9 max-[1100px]:px-[30px] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:px-[21px] max-[760px]:pt-[37px] max-[760px]:pb-12">
        <div className="max-w-[530px] py-5 pb-3 max-[760px]:p-0">
          

          <h1 className="my-[22px] max-w-[600px] font-serif text-[clamp(48px,5.2vw,72px)] font-bold leading-[0.99] tracking-[-0.061em] text-[#1d3028] max-[1100px]:text-[clamp(46px,5.6vw,64px)] max-[760px]:mt-[18px] max-[760px]:mb-[22px] max-[760px]:max-w-[490px] max-[760px]:text-[clamp(48px,12.7vw,68px)]">
            A stronger future{" "}
            <em className="font-bold italic text-[#1e4938]">
              starts here.
            </em>
          </h1>

          <p className="mb-[27px] max-w-[440px] text-lg leading-[1.85] text-[#58665e] max-[760px]:max-w-[500px] max-[760px]:text-[20px]">
            We bring people together to support young people, stand alongside
            vulnerable communities, and help improve the places we call home.
          </p>

          <div className="flex flex-wrap items-center gap-6 max-[760px]:gap-4">
            <a
              href="#partnerships"
              className="inline-flex min-h-[51px] items-center justify-center gap-[15px] border border-[#1e4938] bg-[#1e4938] px-[21px] text-[14px] font-bold leading-none text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#173a2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4938]"
            >
              Partner with us <ArrowUpRight size={17} />
            </a>

            <a
              href="#work"
              className="inline-flex w-fit items-center gap-2 border-b border-[#b9c5b8] pb-[7px] text-[14px] font-bold text-[#1e4938] transition duration-200 hover:gap-3"
            >
              Work we do <ArrowUpRight size={17} />
            </a>
          </div>

          
        </div>

        {/* Hero image and decorative elements */}
        <div className="relative min-w-0 py-0 pr-[17px] pb-[18px] max-[760px]:mr-[6px] max-[760px]:ml-[18px] max-[760px]:pr-[9px] max-[760px]:pb-[11px]">
          <div className="relative h-[min(48vw,525px)] min-h-[400px] overflow-hidden rounded-t-[48%] rounded-b-[8px] bg-[#d7ddd2] max-[760px]:h-[92vw] max-[760px]:max-h-[475px] max-[760px]:min-h-[335px] max-[760px]:[border-radius:45%_45%_6px_6px]">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1500&q=88"
              alt="A group coming together around a shared community activity"
              className="size-full object-cover object-center"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(15,39,29,0.7)_100%)]"
            />

            <div className="absolute bottom-[25px] left-[75px] flex items-center gap-3 text-white max-[760px]:bottom-[18px] max-[760px]:left-[17px]">
      

              <span>
                <strong className="block font-serif text-7xl font-normal max-[760px]:text-[15px]">
                  Showing up matters.
                </strong>
                
              </span>
            </div>


          </div>

          

          <div
            aria-hidden="true"
            className="absolute bottom-12 left-[-30px] flex size-[92px] rotate-[-11deg] flex-col items-center justify-center rounded-full bg-[#d6b66f] text-[#283b2f] shadow-[0_6px_18px_#3332] max-[760px]:bottom-9 max-[760px]:left-[-17px] max-[760px]:size-[75px]"
          >
            <span className="font-serif text-[23px] tracking-[-0.08em] max-[760px]:text-[18px]">
              YCC
            </span>
            <span className="my-1 h-px w-[30px] bg-[#556149]" />
            <small className="text-center text-[7px] uppercase leading-[1.35] tracking-[0.09em]">
              Better
              <br />
              together
            </small>
          </div>
        </div>
      </section>

      {/* Principles strip */}
      

      {/* About */}
      <section
        id="about"
        className="mx-auto grid w-full max-w-[1290px] grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] items-start gap-[clamp(45px,10vw,155px)] px-[42px] py-[112px] max-[1100px]:px-[30px] max-[760px]:grid-cols-1 max-[760px]:gap-5 max-[760px]:px-[21px] max-[760px]:py-[74px]"
      >
        <div>
          <h2 className="mt-[18px] font-serif text-[clamp(38px,4.2vw,55px)] font-normal leading-[1.08] tracking-[-0.055em] text-[#1d3028] max-[760px]:text-[clamp(38px,9.8vw,49px)]">
            Change happens when{" "}
            <em className="font-normal text-[#1e4938]">we show up.</em>
          </h2>
        </div>

        <div className="pt-7 max-[760px]:pt-0">
          <p className="mb-[17px] font-serif text-[25px] leading-[1.55] tracking-[-0.025em] text-[#1d3028] max-[760px]:text-[19px]">
            Youth Challenge Club is focused on turning community concern into
            practical, people-centred action.
          </p>

          <p className="text-[20px] leading-[1.9] text-[#58665e]">
            From youth outreach and assistance for children's homes to essential
            donations and neighbourhood improvements, our work is about meeting
            real needs with care, collaboration and respect.
          </p>

          <a
            href="#partnerships"
            className="mt-3 inline-flex w-fit items-center gap-2 border-b border-[#b9c5b8] pb-[6px] text-[15px] font-bold text-[#1e4938] transition duration-200 hover:gap-3"
          >
            Be part of the work <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Programmes */}
      <section
        id="work"
        className="bg-[#eff0e9] py-[112px] max-[760px]:py-[74px]"
      >
        <div className="mx-auto w-full max-w-[1290px] px-[42px] max-[1100px]:px-[30px] max-[760px]:px-[21px]">
          <div className="mb-12 flex items-end justify-between gap-10 max-[760px]:mb-[30px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[19px]">
            <div>

              <h2 className="mt-4 font-serif text-[clamp(38px,4.2vw,55px)] font-normal leading-[1.08] tracking-[-0.055em] text-[#1d3028] max-[760px]:text-[clamp(38px,9.8vw,49px)]">
                Practical support.
                <br />
                <em className="font-normal text-[#1e4938]">
                  Meaningful progress.
                </em>
              </h2>
            </div>

            <p className="mb-[5px] w-[min(355px,40%)] text-lg leading-[1.85] text-[#58665e] max-[760px]:w-full max-[760px]:max-w-[480px]">
              Every community has its own priorities. We aim to direct energy,
              resources and partnerships toward work that responds to those
              needs.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-[17px] max-[1100px]:grid-cols-2 max-[760px]:grid-cols-1 max-[760px]:gap-4">
            {programmes.map((programme) => {
              const Icon = programme.icon;

              return (
                <article
                  key={programme.number}
                  className="group min-w-0 border border-[#e3e5dc] bg-[#fffefa] transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_35px_#173a2e0d]"
                >
                  <div className="relative h-[210px] overflow-hidden bg-[#dbe0d6] max-[1100px]:h-[245px] max-[760px]:h-[240px]">
                    <img
                      src={programme.image}
                      alt={programme.alt}
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />

                  </div>

                  <div className="flex min-h-[213px] flex-col items-start px-[19px] pt-[25px] pb-5 max-[1100px]:min-h-[185px] max-[760px]:min-h-[170px]">
                    <h3 className="mb-[10px] font-serif text-2xl font-normal leading-[1.15] tracking-[-0.035em] text-[#1d3028] max-[760px]:text-[22px]">
                      {programme.title}
                    </h3>

                    <p className="mb-5 text-[15px] leading-[1.8] text-[#58665e] max-[760px]:text-[15px]">
                      {programme.description}
                    </p>

                    <a
                      href="#contact"
                      aria-label={`Enquire about ${programme.title}`}
                      className="mt-auto inline-flex items-center gap-2 text-[12px] font-extrabold text-[#1e4938] transition-all hover:gap-3 max-[760px]:text-[15px]"
                    >
                      Find out how to help <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          
        </div>
      </section>

      {/* Our approach */}
      <section className="mx-auto grid w-full max-w-[1290px] grid-cols-1 items-start gap-10 px-[42px] py-[112px] sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-[clamp(50px,8vw,100px)] lg:px-[42px] max-[1100px]:px-[30px] max-[760px]:gap-[35px] max-[760px]:px-[21px] max-[760px]:py-[74px]">

  {/* LEFT: Sticky image with title overlay */}
  <div className="relative min-w-0 lg:sticky lg:top-24 lg:self-start">
    <div
      aria-hidden="true"
      className="absolute top-[-18px] left-0 h-[62%] w-[60%] bg-[#e9e2d1]"
    />

    <div className="relative isolate h-[430px] overflow-hidden bg-[#d7ddd2] sm:h-[470px] lg:h-[min(55vh,420px)] lg:min-h-[360px]">
      <img
        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=85"
        alt="Volunteers working together in support of a community initiative"
        loading="lazy"
        className="absolute inset-0 size-full object-cover object-center"
      />

      {/* Dark gradient behind the title */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#102c20]/95 via-[#102c20]/40 to-transparent"
      />

      {/* Title and supporting text over image */}
      <div className="absolute inset-x-0 bottom-0 p-6 pb-8 sm:p-9 sm:pb-10 lg:p-8 xl:p-10">
        

        <h2 className="max-w-[560px] font-serif text-[clamp(38px,4.2vw,55px)] font-normal leading-[1.08] tracking-[-0.055em] text-[#fffefa] max-[760px]:text-[clamp(36px,9vw,47px)]">
          Good intentions,
          <br />
          <em className="font-normal text-[#d6b66f]">
            put into action.
          </em>
        </h2>

        
      </div>
    </div>

    {/* Decorative label */}
    
  </div>

  {/* RIGHT: Scrolling list */}
  <div className="min-w-0 pt-2 lg:pt-0">
    <div className="mb-6 pb-6">
      <h2 className="mt-4 font-serif text-[clamp(38px,4.2vw,55px)] font-normal leading-[1.08] tracking-[-0.055em] text-[#1d3028] max-[760px]:text-[clamp(38px,9.8vw,49px)]">
                Our Commitment
                
        </h2>

      <p className="max-w-[440px] text-[20px] leading-[1.9] text-[#58665e]">
        We believe good community work takes more than good intentions.
        It requires listening, collaboration, responsible decisions and
        following through on what we promise.
      </p>
    </div>

    <div>
      {/* Step 01 */}
      <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 border-t border-[#e1e2d9] py-[25px]">
        <span className="font-serif text-[15px] text-[#9d7d43]">
        
        </span>

        <div>
          <h3 className="mb-[8px] font-serif text-[40px] font-normal tracking-[-0.025em] text-[#1d3028]">
            Listen first
          </h3>

          <p className="max-w-[440px] text-[20px] leading-[1.9] text-[#58665e]">
            Understand the need and consult the people affected before
            planning support. Each initiative should respond to an
            identified community priority.
          </p>
        </div>
      </div>

      {/* Step 02 */}
      <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 border-t border-[#e1e2d9] py-[25px]">
        <span className="font-serif text-[15px] text-[#9d7d43]">
          
        </span>

        <div>
          <h3 className="mb-[8px] font-serif text-[40px] font-normal tracking-[-0.025em] text-[#1d3028]">
            Bring people together
          </h3>

          <p className="max-w-[440px] text-[20px] leading-[1.9] text-[#58665e]">
            Connect community members, volunteers, donors and organisations
            around a shared purpose, combining resources and skills where
            they can make a practical difference.
          </p>
        </div>
      </div>

      {/* Step 03 */}
      <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 border-t border-b border-[#e1e2d9] py-[25px]">
        <span className="font-serif text-[15px] text-[#9d7d43]">
          
        </span>

        <div>
          <h3 className="mb-[8px] font-serif text-[40px] font-normal tracking-[-0.025em] text-[#1d3028]">
            Act responsibly
          </h3>

          <p className="max-w-[440px] text-[20px] leading-[1.9] text-[#58665e]">
            Agree on realistic goals, use donations and other resources
            carefully, and share honest updates about the work undertaken
            and what it achieves.
          </p>
        </div>
      </div>
    </div>

    <a
      href="#contact"
      className="mt-7 inline-flex min-h-[51px] items-center justify-center gap-[15px] border border-[#c7cec4] px-[18px] py-[15px] text-[15px] font-bold text-[#1e4938] transition duration-200 hover:border-[#1e4938] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4938]"
    >
      Start a conversation <ArrowUpRight size={16} />
    </a>
  </div>
</section>

      {/* Partnerships */}
      <section
        id="partnerships"
        className="bg-[#173a2e] py-[112px] text-white max-[760px]:py-[74px]"
      >
        <div className="mx-auto w-full max-w-[1290px] px-[42px] max-[1100px]:px-[30px] max-[760px]:px-[21px]">
         
          <div className="mt-2 grid grid-cols-[1fr_0.72fr] items-end gap-[60px] max-[760px]:mt-5 max-[760px]:grid-cols-1 max-[760px]:gap-[22px]">
            <h2 className="m-0 font-serif text-[clamp(40px,4.5vw,58px)] font-normal leading-[1.08] tracking-[-0.055em] text-white max-[760px]:text-[clamp(38px,9.8vw,49px)]">
              Your support can
              <br />
              <em className="font-normal text-[#d6b66f]">
                move good work forward.
              </em>
            </h2>

            <p className="mb-[5px] max-w-[440px] text-lg leading-[1.9] text-[#e0e8df]">
              Whether you're an individual, a business or a community
              organisation, there is more than one way to contribute. Let's
              find a practical fit for your resources and the needs on the
              ground.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 border-y border-white/20 max-[760px]:mt-8 max-[760px]:grid-cols-1">
            {partnershipOptions.map((option, index) => (
              <article
                key={option.number}
                className={`min-h-[226px] py-[25px] pr-7 pb-[26px] ${
                  index > 0
                    ? "border-l border-white/20 pl-7 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:pl-0"
                    : "pr-7"
                } max-[760px]:min-h-0 max-[760px]:py-[22px] max-[760px]:pb-6`}
              >
                

                <h3 className="mb-3 font-serif text-2xl font-normal tracking-[-0.03em] text-white max-[760px]:text-[22px]">
                  {option.title} 
                </h3>

                <p className="mb-[17px] min-h-[58px] text-[14px] leading-[1.8] text-[#e0e8df] max-[760px]:mb-[15px] max-[760px]:min-h-0 max-[760px]:text-[15px]">
                  {option.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[15px] font-bold text-[#e4c783] transition-all hover:gap-3"
                >
                  Discuss this option <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-[25px] flex items-center justify-center gap-[9px] text-[#e0e8df] max-[760px]:items-start max-[760px]:justify-start">
            
            
            <Check size={17} className="shrink-0 text-[#d6b66f]" />
            <p className="m-0 max-w-3xl text-center text-[15px] leading-[1.7] max-[760px]:text-left max-[760px]:text-[15px]">
              We welcome transparent conversations about goals, budgets,
              timelines and what can realistically be delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        aria-label="Our belief"
        className="flex min-h-[260px] flex-col items-center justify-center bg-[#eaece4] px-[25px] py-[60px] text-center max-[760px]:min-h-[230px] max-[760px]:px-[22px] max-[760px]:py-12"
      >
       

        <p className="my-[14px] max-w-[750px] font-serif text-4xl leading-[1.3] tracking-[-0.04em] text-[#1d3028] max-[760px]:text-[28px]">
          Stronger communities are built when people choose to care{" "}
          <em className="font-normal text-[#1e4938]">and take action.</em>
        </p>

        
      </section>

      {/* FAQs */}
      <section
        id="faq"
        className="mx-auto grid w-full max-w-[1290px] grid-cols-[0.75fr_1.25fr] gap-[clamp(55px,10vw,150px)] px-[42px] py-[112px] max-[1100px]:px-[30px] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:px-[21px] max-[760px]:py-[74px]"
      >
        <div>

          <h2 className="mt-[18px] font-serif text-[clamp(36px,3.7vw,48px)] font-normal leading-[1.08] tracking-[-0.055em] text-[#1d3028] max-[760px]:text-[clamp(38px,9.8vw,49px)]">
            Questions about
            <br />
            <em className="font-normal text-[#1e4938]">
              getting involved?
            </em>
          </h2>

          <p className="mt-[22px] mb-[10px] max-w-[280px] text-[15px]  text-[#58665e] max-[760px]:max-w-[360px]">
            Have another question? Contact the team and tell us what you have
            in mind.
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex w-fit items-center gap-2 border-b border-[#b9c5b8] pb-[6px] text-[15px] font-bold text-[#1e4938] transition duration-200 hover:gap-3"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="border-t border-[#e1e2d9]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-[#e1e2d9]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[18px] py-[21px] font-serif text-[17px] tracking-[-0.02em] text-[#1d3028] [&::-webkit-details-marker]:hidden max-[760px]:py-[19px] max-[760px]:text-[15px]">
                {faq.question}

                <ChevronDown
                  size={18}
                  className="shrink-0 text-[#1e4938] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <p className="mt-[-3px] mb-[21px] mr-[34px] max-w-[610px] text-[15px] leading-[1.9] text-[#58665e]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto w-full max-w-[1290px] px-[42px] pt-0 pb-20 max-[1100px]:px-[30px] max-[760px]:px-[21px] max-[760px]:pb-[50px]"
      >
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-[70px] bg-[#e7e9df] p-[clamp(35px,5.3vw,68px)] max-[1100px]:gap-10 max-[760px]:grid-cols-1 max-[760px]:gap-[30px] max-[760px]:px-[22px] max-[760px]:py-[30px]">
          <div>

            <h2 className="mt-[18px] mb-[18px] font-serif text-[clamp(38px,4vw,53px)] font-normal leading-[1.08] tracking-[-0.055em] text-[#1d3028] max-[760px]:text-[40px]">
              Have a resource,
              <br />
              an idea, or a{" "}
              <em className="font-normal text-[#1e4938]">way to help?</em>
            </h2>

            <p className="mb-0 max-w-[460px] text-lg leading-[1.9] text-[#58665e] max-[760px]:text-[11px]">
              Tell us what you'd like to support. We can start a conversation
              about community needs, a potential donation, volunteering or a
              sponsorship partnership.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-[13px] border-b border-[#cdd3c8] py-3 first:pt-0">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d9e1d6] text-[#1e4938]">
                <Mail size={18} />
              </span>

              <div className="flex min-w-0 flex-col gap-[5px]">
                <small className="text-[8px] font-extrabold tracking-[0.14em] text-[#788177]">
                  EMAIL
                </small>
                <strong className="break-words text-[11px] font-semibold text-[#1d3028] max-[760px]:text-[10px]">
                  [Add official email address]
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-[13px] border-b border-[#cdd3c8] py-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d9e1d6] text-[#1e4938]">
                <MapPin size={18} />
              </span>

              <div className="flex min-w-0 flex-col gap-[5px]">
                <small className="text-[8px] font-extrabold tracking-[0.14em] text-[#788177]">
                  SERVICE AREA
                </small>
                <strong className="break-words text-[11px] font-semibold text-[#1d3028] max-[760px]:text-[10px]">
                  [Add town / municipality / province]
                </strong>
              </div>
            </div>

            <div className="flex items-center gap-[13px] border-b border-[#cdd3c8] py-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d9e1d6] text-[#1e4938]">
                <PackageCheck size={18} />
              </span>

              <div className="flex min-w-0 flex-col gap-[5px]">
                <small className="text-[8px] font-extrabold tracking-[0.14em] text-[#788177]">
                  NPO REGISTRATION
                </small>
                <strong className="break-words text-[11px] font-semibold text-[#1d3028] max-[760px]:text-[10px]">
                  [Add official NPO registration number]
                </strong>
              </div>
            </div>

            <a
              href="mailto:"
              className="mt-5 inline-flex min-h-[51px] w-fit items-center justify-center gap-[15px] border border-[#1e4938] bg-[#1e4938] px-[21px] text-[15px] font-bold leading-none text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#173a2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1e4938]"
            >
              Contact the team <ArrowUpRight size={17} />
            </a>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e1e2d9] bg-[#f0efe8]">
        <div className="mx-auto grid w-full max-w-[1290px] grid-cols-[1fr_1fr_auto] items-center gap-[35px] px-[42px] py-[34px] max-[1100px]:grid-cols-2 max-[1100px]:px-[30px] max-[760px]:grid-cols-1 max-[760px]:gap-5 max-[760px]:px-[21px] max-[760px]:py-7">
          <Brand footer />

          

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-[18px] max-[1100px]:col-span-full max-[760px]:col-span-1 max-[760px]:gap-[15px]"
          >
            <a
              href="#about"
              className="text-[15px] text-[#657066] transition-colors hover:text-[#1e4938]"
            >
              About
            </a>
            <a
              href="#work"
              className="text-[15px] text-[#657066] transition-colors hover:text-[#1e4938]"
            >
              Our work
            </a>
            <a
              href="#partnerships"
              className="text-[15px] text-[#657066] transition-colors hover:text-[#1e4938]"
            >
              Partnerships
            </a>
            <a
              href="#contact"
              className="text-[15px] text-[#657066] transition-colors hover:text-[#1e4938]"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mx-auto flex min-h-12 w-full max-w-[1290px] items-center justify-between gap-5 border-t border-[#e1e2d9] px-[42px] text-[15px] text-[#81877e] max-[1100px]:px-[30px] max-[760px]:items-start max-[760px]:px-[21px] max-[760px]:py-[13px]">
          <span>
            © {new Date().getFullYear()} Youth Challenge Club. All rights
            reserved.
          </span>

          <a href="https://thaboliz.co.za/services/technologies" className="font-bold text-[#1e4938] underline">
           Developed by Thaboliz Technologies
          </a>

          <a href="#top" className="flex gap-2 font-bold text-white bg-[#1e4938] p-3">
            Back to top <ArrowUp />
          </a>
        </div>
      </footer>
    </main>
  );
}