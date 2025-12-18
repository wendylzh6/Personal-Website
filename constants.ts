
// types
export interface Project {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  role: string;
  summary: string;
  description: string;
  image: string; // Company Logo
  overview: string;
  context: string;
  whatIDid: string[];
  outcomes: string;
  gallery: string[];
  website?: string;
}

export interface SchoolProject {
  id: string;
  title: string;
  course: string;
  description: string;
  image: string;
  pdfUrl: string;
}

// Data
export const PROJECTS: Project[] = [
  {
    id: "yale-som-entrepreneurship",
    title: "Community Engagement Coordinator",
    company: "Yale SOM Entrepreneurship",
    location: "New Haven, CT",
    period: "Oct 2025 - Present",
    role: "Community Engagement Coordinator",
    summary: "Leading demand generation and ecosystem growth for Yale's entrepreneurial hub.",
    description: "Driving visibility and partnership development for the Yale entrepreneurial ecosystem through data-driven demand generation.",
    image: "https://drive.google.com/thumbnail?id=1clUJjyrq3M1p9mrNywcuN6gZUUB7Om3U&sz=w1000",
    overview: "Managing the intersection of student innovation and institutional support at Yale.",
    context: "Scaling Yale’s entrepreneurship visibility across students, alumni, and founders.",
    whatIDid: [
      "Executed **performance tracking and demand generation analytics** to measure content delivery ROI",
      "Leveraged data insights to **expand audience reach by 40%** and optimize stakeholder strategies",
      "Collaborated cross-functionally with **Yale Ventures** to drive partnership development"
    ],
    outcomes: "Successfully expanded program reach and formalized engagement tracking.",
    gallery: [],
    website: "https://som.yale.edu/programs/entrepreneurship"
  },
  {
    id: "ruder-finn-asia",
    title: "Corporate Strategy Intern",
    company: "Ruder Finn Asia",
    location: "Hong Kong",
    period: "Mar 2025 - Jun 2025",
    role: "Corporate Strategy Intern",
    summary: "Strategic advisor for GTM opportunities in the crypto and fintech sectors.",
    description: "Formulating market entry strategies for crypto and credit-rating sectors through intensive research.",
    image: "https://drive.google.com/thumbnail?id=1Gf-vxdyIMAZkj2EqcVuBoh1b2ijjn6YR&sz=w1000",
    overview: "Worked within a leading strategic communications firm in Hong Kong.",
    context: "Uncovering high-value opportunities and guiding business development.",
    whatIDid: [
      "Conducted industry trend research to identify **go-to-market opportunities** in crypto",
      "Delivered **8 market entry strategy reports** to uncover high-value opportunities",
      "Executed integrated **influencer marketing campaigns** for major industry events (Token 2049)"
    ],
    outcomes: "Improved market penetration by 50% for key strategic clients.",
    gallery: [],
    website: "https://ruderfinn.com/"
  },
  {
    id: "loreal-combined",
    title: "Digital Product Manager / Intern",
    company: "L'OREAL",
    location: "Shanghai, China",
    period: "Jun 2021 - Jul 2024",
    role: "Digital Product Manager & Intern",
    summary: "Spearheaded e-commerce rollouts, omnichannel enablement, and SAP workflow automation.",
    description: "Leading end-to-end GTM strategy and digital product enablement for global beauty leaders.",
    image: "https://drive.google.com/thumbnail?id=1WSBLWcBRXp96mXub3TLQ8W7YW7hcj8GA&sz=w1000",
    overview: "Owned the digital roadmap for B2C e-commerce rollouts across major brands.",
    context: "Leveraging data and AI to stay ahead in the competitive beauty space.",
    whatIDid: [
      "Orchestrated **end-to-end GTM strategy** for B2C rollouts (La Roche-Posay, Maybelline), driving 20% lift in CTR",
      "Analyzed **5,000+ customer records** using SQL to identify whitespace in men's skincare",
      "Automated translation processes with **Generative AI integration**, improving efficiency by 60%"
    ],
    outcomes: "Captured 15% market share for men's skincare; reduced system onboarding time by 40%.",
    gallery: [],
    website: "https://www.loreal.com/"
  },
  {
    id: "danliren-comedy",
    title: "Podcast Project Intern",
    company: "Danliren Comedy",
    location: "Beijing, China",
    period: "Nov 2020 - Apr 2021",
    role: "Podcast Project Intern",
    summary: "Led cross-industry collaboration and managed high-growth audio platform strategy.",
    description: "Driving growth and brand partnerships for one of China's leading comedy podcasts.",
    image: "https://drive.google.com/thumbnail?id=1s2uH9vrT_B8Iok8KjZ8TitCTvJroksxJ&sz=w1000",
    overview: "Focused on cross-industry partnerships and rapid user growth.",
    context: "Expanding the reach of audio content through strategic collaborations.",
    whatIDid: [
      "Led cross-industry collaboration with **Nestlé China**, generating **4M+ plays** across 10 episodes",
      "Managed social and audio platform content strategy, driving a **4x increase in user growth**",
      "Scaled user base from **100k to 500k** within a 3-month timeframe"
    ],
    outcomes: "Achieved massive listener growth and solidified major brand partnerships.",
    gallery: [],
    website: "https://www.danliren.com/"
  },
  {
    id: "data-ai",
    title: "Marketing Analyst Intern",
    company: "Data.ai",
    location: "Beijing, China",
    period: "Aug 2020 - Oct 2020",
    role: "Marketing Analyst Intern",
    summary: "Facilitated B2B SaaS platform launches through market asset optimization.",
    description: "Accelerating product rollout and pipeline generation for Game IQ.",
    image: "https://drive.google.com/thumbnail?id=1OAEjxjaUzcZWxvmDLDFTdQ0Rb2Lmoyga&sz=w1000",
    overview: "Marketing analytics role at a leading mobile data platform.",
    context: "Enabling customer acquisition initiatives through sales enablement materials.",
    whatIDid: [
      "Accelerated product rollout by **15%** through collaboration with Sales teams",
      "Created **10+ go-to-market launch assets** for the Game IQ platform",
      "Converted **20% of leads** into active pipeline opportunities in the first month"
    ],
    outcomes: "Achieved faster sales ramp-up and pipeline growth in the first 30 days.",
    gallery: [],
    website: "https://www.data.ai/"
  }
];

export const SCHOOL_PROJECTS: SchoolProject[] = [
  {
    id: "mens-makeup-launch",
    title: "Men's Makeup Line Launch Strategy",
    course: "Integrated Marketing Communications",
    description: "A multi-phase IMC roadmap for a new male makeup line, redefining masculinity for Gen-Z consumers.",
    image: "https://drive.google.com/thumbnail?id=1UQQM9fo-rmR5XJFr7y7_VKqtNmdZ0nID&sz=w1000",
    pdfUrl: "https://drive.google.com/file/d/1UQQM9fo-rmR5XJFr7y7_VKqtNmdZ0nID/view?usp=drive_link"
  },
  {
    id: "love-gifting-strategy",
    title: "Releasing One Day For Love: Gifting Strategy",
    course: "Brand Management",
    description: "Bridging French romance and Gen-Z digital habits with an immersive gifting identity and customer journey.",
    image: "https://drive.google.com/thumbnail?id=1-vRBR75CoYfbF9LbVwCmv3F8DIAFhGGS&sz=w1000",
    pdfUrl: "https://drive.google.com/file/d/1-vRBR75CoYfbF9LbVwCmv3F8DIAFhGGS/view?usp=drive_link"
  },
  {
    id: "hiphop-beauty-strategy",
    title: "Hip Hop Men's Beauty Content Strategy",
    course: "Consumer Behavior",
    description: "Leveraging street culture and hip-hop influence to break traditional grooming stereotypes.",
    image: "https://drive.google.com/thumbnail?id=1cKk7r4Ym5ATT78E_412Vn5Mry3y439GT&sz=w1000",
    pdfUrl: "https://drive.google.com/file/d/1cKk7r4Ym5ATT78E_412Vn5Mry3y439GT/view?usp=drive_link"
  },
  {
    id: "interpafume-memo",
    title: "Interparfums Take Private Memo",
    course: "PRIVATE EQUITY & LBOS",
    description: "Strategic investment analysis and recommendation for Interparfums regarding a potential take-private transaction.",
    image: "https://drive.google.com/thumbnail?id=1buABko_UAKxcjVWs-za7owmw-nnLtZS1&sz=w1000",
    pdfUrl: "https://drive.google.com/file/d/1buABko_UAKxcjVWs-za7owmw-nnLtZS1/view?usp=drive_link"
  },
  {
    id: "pet-food-lbo",
    title: "Pet Food LBO Analysis",
    course: "Private Equity & LBOs",
    description: "Quantitative and qualitative analysis of an LBO opportunity within the pet food industry.",
    image: "https://drive.google.com/thumbnail?id=15bR_kYwxrG-CED7rCsv3NqgZ2f8O9sBy&sz=w1000",
    pdfUrl: "https://drive.google.com/file/d/15bR_kYwxrG-CED7rCsv3NqgZ2f8O9sBy/view?usp=drive_link"
  },
  {
    id: "douyin-expansion-plan",
    title: "Douyin Store New Channel Expansion Plan",
    course: "Strategic Marketing",
    description: "Channel expansion strategy focusing on 'Interest E-commerce' trends in the Chinese market.",
    image: "https://drive.google.com/thumbnail?id=1BlBbudoOehqn1V8FeIpKwGyw1vvATkzN&sz=w1000",
    pdfUrl: "https://drive.google.com/file/d/1BlBbudoOehqn1V8FeIpKwGyw1vvATkzN/view?usp=drive_link"
  },
  {
    id: "square-ipo-analysis",
    title: "Square IPO Analysis",
    course: "Corporate Finance",
    description: "Retrospective analysis of the Square IPO, focusing on valuation models and market performance.",
    image: "https://logo.clearbit.com/square.com",
    pdfUrl: "https://drive.google.com/file/d/1uUeWG4u1-iAVV8BuPZ45_EN-4aJYF-ki/view?usp=drive_link"
  }
];

export const CONTACT_INFO = {
  email: "wendy.liu@yale.edu",
  linkedin: "https://www.linkedin.com/in/wendy-liu-211b651b0/"
};
