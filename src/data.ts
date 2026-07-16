import { Project, Experience, Education, Certification } from "./types";
import portraitUrl from "./assets/images/yoseph_portrait_1780390885544-1.jpg";

export const PERSONAL_INFO = {
  name: "Yoseph Awoke",
  fullName: "Yoseph Awoke Fentie",
  title: "Senior Software Engineer & AI Researcher",
  subtitles: [
    "Senior Software Engineer",
    "Deep Learning & Computer Vision Researcher",
    "AIoT & Edge Systems Innovator",
    "Full-Stack Architect",
  ],
  email: "yosephawoke8@gmail.com",
  phone: "+251920409888",
  linkedin: "linkedin.com/in/yosephawoke",
  github: "https://github.com",
  location: "Addis Ababa, Ethiopia",
  bio: "Experienced Full-Stack Senior Software Engineer and Artificial Intelligence Researcher. Specialized in implementing deep learning computer vision architectures, designing robust full-stack enterprise applications, and architecting AIoT edge intelligence solutions. Combining scientific research methods with high-fidelity software craftsmanship, I build intelligent systems that drive digital transformation.",
  portrait: portraitUrl,
};

export const SKILL_CATEGORIES = [
  {
    name: "Artificial Intelligence & Data Science",
    skills: [
      "Deep Learning",
      "Machine Learning",
      "Computer Vision",
      "Fine-Grained Classification",
      "Attention Mechanisms",
      "Model Evaluation & Optimization",
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "TensorFlow",
      "PyTorch",
      "Spring Boot",
      "Laravel",
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Kotlin",
      "SQL",
    ],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    name: "Branding & Design Products",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "UI/UX Prototyping",
    ],
  },
  {
    name: "Design Methodologies & Tools",
    skills: ["Agile/Scrum", "Kanban", "Docker", "Git/GitLab", "CI/CD Pipelines"],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    school: "Huazhong University of Science and Technology (HUST)",
    degree: "Master of Science (MSc)",
    major: "Information and Communication Engineering",
    duration: "2022 – June 2024",
    gpa: "3.84 / 4.0",
  },
  {
    school: "American College of Technology (ACT)",
    degree: "Master of Science (MSc)",
    major: "Computer Science (Concentration in Cyber Security)",
    duration: "2020 – October 2022",
    gpa: "3.84 / 4.0",
  },
  {
    school: "Jigjiga University",
    degree: "Bachelor of Science (BSc)",
    major: "Software Engineering",
    duration: "2014 – June 2018",
    gpa: "3.72 / 4.0",
  },
];

export const EXPERIENCE_LIST: Experience[] = [
  {
    id: "exp-pmo",
    role: "Senior ICT Expert",
    company: "Prime Minister Office of Ethiopia (Unity Park)",
    location: "Addis Ababa, Ethiopia",
    duration: "Jan 2020 – Present",
    description: [
      "Architect full-stack applications and lead computer vision R&D for national security and digital tourism systems.",
      "Design and deploy production-grade ML/CV pipelines utilizing PyTorch, TensorFlow, FastAPI, and React.",
      "Spearhead high-throughput, secure ticketing/validation APIs processing thousands of daily park tourists."
    ],
    tags: ["TensorFlow", "FastAPI", "React", "Spring Boot", "Kotlin", "PostgreSQL", "Docker", "Adobe Suite"],
  },
  {
    id: "exp-techin",
    role: "System Development and Maintenance Engineer",
    company: "Technology and Innovation Institute (TechIn²)",
    location: "Addis Ababa, Ethiopia",
    duration: "Jan 2019 – Dec 2019",
    description: [
      "Engineered robust full-stack portals and system automations using Laravel, React, and high-performance databases.",
      "Optimized system architecture workflows, decreasing portal load times by 40% and enhancing visual brand identities."
    ],
    tags: ["Laravel", "React", "MySQL", "JavaScript", "Linux Admin", "Illustrator", "Photoshop"],
  },
  {
    id: "exp-dz",
    role: "Full-Stack Developer",
    company: "DZ Software Engineering PLC",
    location: "Addis Ababa, Ethiopia",
    duration: "Sep 2018 – Nov 2018",
    description: [
      "Developed robust enterprise dashboard modules, database back-office logic, and resolved SQL bottlenecks via JSP and Oracle."
    ],
    tags: ["Java", "JSP", "SQL", "JavaScript", "HTML5", "CSS3", "Git"],
  },
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "proj-med-plants",
    title: "Medicinal Plant AI & Info System",
    description: "Deep Learning fine-grained plant classification model & knowledge base system for identifying Ethiopian traditional medicinal herbs.",
    category: "ai",
    tags: ["TensorFlow", "FastAPI", "React", "Python", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&h=500",
    githubUrl: "https://github.com/yosephawoke/Medicinal-Plant-AI",
    caseStudy: {
      overview: "Yoseph's Master's thesis research focused on the intersection of deep learning computer vision and classical Ethiopian ethnobotany. To preserve and structure high-value medicinal plant metadata, this system features a neural network optimized to identify fine-grained botanical features from leaves, stems, and flowers, even within low-resolution clinical conditions.",
      features: [
        "Curated and annotated a first-of-its-kind fine-grained image dataset encompassing 50 distinct endemic Ethiopian botanical species.",
        "Engineered dual spatial-and-channel attention modules inside CNN transfer-learning backbones (MobileNetV3 and ResNet50) to filter key structural textures.",
        "Constructed a high-throughput FastAPI microservice delivering inference responses in under 180ms.",
        "Built an interactive client catalog linking predicted labels to rich folk remedies, chemical traits, and clinical dosages."
      ],
      tools: ["TensorFlow", "FastAPI", "React", "Python", "MongoDB", "Tailwind CSS", "Git"],
      role: "Lead Deep Learning Architect & Full-Stack Developer",
      outcome: "Exceeded initial research goals by securing a 94.2% top-1 model classification accuracy, subsequently publishing a highly commended MSc thesis at Huazhong University of Science and Technology."
    }
  },
  {
    id: "proj-aeroview-weather",
    title: "AeroView: Advanced Weather Dashboard",
    description: "A full-stack weather intelligence dashboard with live weather, air quality, and multi-city tracking in a polished responsive interface.",
    category: "full-stack",
    tags: ["React", "Vite", "Express", "MongoDB", "Tailwind CSS"],
    image: "/src/assets/images/weather-app.png",
    githubUrl: "https://github.com/YosephAwoke/AeroView-Advanced-Weather-Dashboard",
    liveUrl: "https://aeroview-advanced-weather-dashboard.vercel.app/",
    caseStudy: {
      overview: "AeroView is a full-stack weather intelligence dashboard that delivers live weather, air quality, and city tracking in a visually rich interface. It combines a React and Vite frontend with an Express and MongoDB backend to fetch, cache, and display real-time weather data for multiple locations, while providing resilient fallback handling when external APIs or database connectivity are unstable.",
      features: [
        "Multi-city tracking with add, remove, and reorder functionality.",
        "Live weather and air quality data fetched from external APIs.",
        "Backend caching and MongoDB persistence for tracked cities and weather payloads.",
        "Dynamic weather-based UI themes, responsive layouts, loading skeletons, and offline-friendly fallback handling."
      ],
      tools: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "Node.js", "Express", "MongoDB", "Mongoose"],
      role: "Full-Stack Developer",
      outcome: "Delivered a production-ready weather dashboard with a premium portfolio-style experience, separate frontend and backend deployment support, and resilient data handling for unstable network conditions."
    }
  },
  {
    id: "proj-covid-xray",
    title: "COVID-19 Chest X-Ray Diagnostic Model",
    description: "Deep learning neural network built to detect and classify viral pneumonia, COVID-19, and healthy chest radiographs automatically.",
    category: "ai",
    tags: ["PyTorch", "CNN", "Python", "OpenCV", "Medical Informatics"],
    image: "https://images.unsplash.com/photo-1530026405186-ed1eaae6bbd4?auto=format&fit=crop&q=80&w=800&h=500",
    githubUrl: "https://github.com/yosephawoke/COVID19-Chest-Xray-DenseNet",
    caseStudy: {
      overview: "Developed to assist overworked radiologists during acute pandemic peaks, this radiological evaluation model operates binary and multiclass pipelines. It uses Grad-CAM to overlay thermal density masks directly on raw visual outputs to highlight lung opacity zones.",
      features: [
        "Implemented rigorous preprocessing including adaptive histogram equalization (CLAHE) to adjust radiographic contrast variables.",
        "Finetuned dense block connections in state-of-the-art DenseNet-121 classifiers to prevent overfitting on scarce medical imagery.",
        "Designed Gradient-weighted Class Activation Mapping (Grad-CAM) layers for explainable AI, highlighting spatial pathological indicators.",
        "Integrated statistical validation curves (ROC, Matthews correlation coefficients, confused matrices)."
      ],
      tools: ["PyTorch", "Python", "NumPy", "OpenCV", "Matplotlib", "Docker"],
      role: "Solo Deep Learning Developer",
      outcome: "Obtained a 97.4% sensitivity and 96.1% specificity score on test benchmarks, publishing open-source Python packages to support clinical trials."
    }
  },
  {
    id: "proj-tour-guide",
    title: "Unity Park Dynamic Tour Guide System",
    description: "High-performance full-stack web and mobile application serving offline guides, maps, and audio narration to park visitors.",
    category: "full-stack",
    tags: ["Kotlin", "React", "Node.js", "PostgreSQL", "Geolocation"],
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800&h=500",
    githubUrl: "https://github.com/yosephawoke/Unity-Park-Tour-Guide",
    liveUrl: "https://unitypark.et",
    caseStudy: {
      overview: "Commissioned under the Prime Minister's Office for Unity Park, this comprehensive platform guides tourists across imperial castles, zoological zoos, and historic monuments. It integrates dynamic GPS positioning and custom offline routing assets, mitigating poor cell coverage.",
      features: [
        "Constructed a high-fidelity React dashboard and Kotlin-based native-grade mobile framework.",
        "Built multi-lingual offline voice syncing allowing real-time storytelling triggered by geofencing bounds.",
        "Engineered secure ticketing APIs, validating QR passes at physical park turnstiles instantly over isolated local LANs.",
        "Developed custom vector map layers and optimized geo-JSON polygons using Leaflet coordinates."
      ],
      tools: ["Kotlin", "React", "Node.js", "Express", "PostgreSQL", "Leaflet.js", "Tailwind CSS"],
      role: "Lead Full-Stack Systems Engineer",
      outcome: "Directly deployed live to physical kiosks and application stores, successfully guiding over 250,000 visitors within its first year and increasing average park retention times."
    }
  },
  {
    id: "proj-iot-sensing",
    title: "Friendship Square Smart Air & Sense Hub",
    description: "AIoT environmental telemetries network computing microclimates and PM2.5 pollutant spikes in public green zones.",
    category: "aiot",
    tags: ["AIoT", "Raspberry Pi", "C++", "FastAPI", "D3.js"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    githubUrl: "https://github.com/yosephawoke/Smart-Air-Sensing-Network",
    caseStudy: {
      overview: "To track carbon emission spikes and microclimate dynamics inside Friendship Square, this project implements physical edge-sensing pods linked to a centralized reactive web visualization. It deploys pruned random forest regressions on the hardware layer to forecast hourly index spikes.",
      features: [
        "Constructed embedded edge-sensing firmware utilizing C++ and Raspberry Pi/ESP32, logging carbon-monoxide, gas, and particulate matter.",
        "Programmed a lightweight cellular TCP/IP telemetry server to securely sync packet updates.",
        "Designed an event-driven FastAPI broker feeding database pipelines and websockets.",
        "Created beautiful, high-contrast dynamic graphs using D3.js to illustrate air quality indices (AQI) chronologically."
      ],
      tools: ["Raspberry Pi", "C++", "FastAPI", "SQLite", "React", "D3.js", "Tailwind CSS"],
      role: "IoT System Integration Architect",
      outcome: "Deployed 6 rugged, self-powered sensor pylons across the public sector, providing the prime minister's development committee with granular monthly reports on green space carbon sinking."
    }
  },
  {
    id: "proj-teacher-eval",
    title: "Institutional Teacher Evaluation Platform",
    description: "Automated, secure web portal collecting multi-stakeholder feedback surveys and compiling faculty scorecards.",
    category: "full-stack",
    tags: ["Spring Boot", "React", "Java", "MySQL", "LDAP"],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=500",
    githubUrl: "https://github.com/yosephawoke/Teacher-Evaluation-System",
    caseStudy: {
      overview: "Conceived during Yoseph's tenure at Jigjiga University, this secure feedback application replaces error-prone, manually compiled paper course review cards, offering real-time dean portals and statistical standard-deviation calculators.",
      features: [
        "Implemented strict LDAP-based active directory verification, preventing double-voting anomalies.",
        "Engineered a fully dynamic poll builder allowing administrative units to create diverse rating matrices and qualitative text containers.",
        "Constructed Spring Boot backend servers enforcing role-based ACLs, securing faculty review data.",
        "Designed a client analytics dashboard in React displaying rating breakdowns, standard deviation scatter-plots, and comment summaries."
      ],
      tools: ["Java", "Spring Boot", "React", "MySQL", "Chart.js", "Bootstrap", "Git"],
      role: "Lead Software Developer",
      outcome: "Successfully deployed and scaled across Jigjiga University, capturing surveys from over 12,000 active students and saving administrative staff hundreds of billing hours each semester."
    }
  },
  {
    id: "proj-virtual-walkthrough",
    title: "Jigjiga University 3D Virtual Emulator",
    description: "Immersive 3D software tool offering prospective students a virtual geographic tour of university structures.",
    category: "ui-ux",
    tags: ["Unity 3D", "C#", "UI/UX Design", "Three.js", "WebGL"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=500",
    githubUrl: "https://github.com/yosephawoke/Jigjiga-3D-Walkthrough",
    caseStudy: {
      overview: "Constructed to offer off-site and international students a fully immersive visual representation of university buildings. The interactive 3D digital twin offers navigation across campuses, lecture halls, and complex laboratory spaces using WebGL standards.",
      features: [
        "Modeled and textured scale buildings using realistic mesh architectures and ambient daylight conditions.",
        "Programmed key interactive waypoints, allowing visitors to click key structures to inspect department facts and program descriptions.",
        "Built smooth orbital camera logic, custom floating overlay panels, and physics collision parameters.",
        "Exported light build pipelines using advanced WebGL compressions for instant loads directly inside standard web browsers."
      ],
      tools: ["Unity 3D", "C#", "WebGL", "Three.js", "React UI Overlay", "Adobe Illustrator"],
      role: "Lead 3D Designer & Interaction Engineer",
      outcome: "Embedded as the premier highlight of the university's public portal, gaining praise from the Ministry of Education for digital resource innovation."
    }
  }
];

export const CERTIFICATIONS_LIST: Certification[] = [
  {
    id: "cert-android",
    title: "Android Developer Fundamentals Nanodegree",
    issuer: "Udacity",
    date: "September 30, 2024",
  },
  {
    id: "cert-dell-emc",
    title: "Networking Concepts and Products Professional",
    issuer: "Dell EMC",
    date: "July 30, 2021",
  },
  {
    id: "cert-python-hub",
    title: "Professional Python Programming Certification",
    issuer: "Google Developer Launchpad / Programming Hub",
    date: "November 17, 2021",
  },
  {
    id: "cert-java-hub",
    title: "Professional Java Programming Certification",
    issuer: "Google Developer Launchpad / Programming Hub",
    date: "November 17, 2021",
  },
  {
    id: "cert-sql-hub",
    title: "Professional SQL Database Certification",
    issuer: "Google Developer Launchpad / Programming Hub",
    date: "November 23, 2021",
  },
  {
    id: "cert-ccna",
    title: "Complete CCNA (200-301) Master Class",
    issuer: "Udemy",
    date: "March 2021",
  },
  {
    id: "cert-python-udemy",
    title: "Start Your Career as Python Programmer Now!",
    issuer: "Udemy",
    date: "March 12, 2022",
  },
  {
    id: "cert-mcom",
    title: "Economic Transition & Upgrading of Ethiopia Seminar",
    issuer: "Ministry of Commerce of China (Qingdao, Shandong Province)",
    date: "November 2019",
  },
];
