export const projects = [
  {
    id: 1,

    title: "Real-Time Messaging Platform",

    subtitle: "Modern real-time chat application built with the MERN stack.",

    year: "May 2026",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],

    mobileImage: "/image/chat-app/chat.png",

    images: [
      "/image/chat-app/signup.png",
      "/image/chat-app/chat.png",
      "/image/chat-app/contacts.png",
      "/image/chat-app/message.png",
    ],

    description:
      "A production-ready messaging platform featuring real-time communication, secure authentication, chat history persistence, and scalable backend architecture.",

    highlights: [
      "Real-time messaging powered by WebSockets with sub-second delivery.",
      "JWT authentication and authorization with protected routes.",
      "Online/offline presence tracking and persistent chat history.",
      "REST API architecture with scalable event-driven backend.",
      "Optimized MongoDB schema and database queries.",
      "Responsive interface built using React and Tailwind CSS.",
    ],

    challenges: [
      {
        title: "Real-time Communication",
        text: "Designed an event-driven Socket.IO architecture capable of handling multiple concurrent users with low latency.",
      },
      {
        title: "Authentication",
        text: "Implemented secure JWT authentication, authorization middleware, and protected API endpoints.",
      },
      {
        title: "Performance",
        text: "Optimized MongoDB queries and backend routing for faster message retrieval and improved scalability.",
      },
    ],

    github: "https://github.com/SaptarshiCodes/Real-time-chat",

    live: "https://real-time-chat-rosy-phi.vercel.app/",

    accent: "#22C55E",
    bgTitle: "MESSAGING PLATFORM",
  },

  {
    id: 2,

    title: "Real-Time Collaborative Coding Interview Platform",

    subtitle:
      "A collaborative coding platform for technical interviews and pair programming.",

    year: "Jun 2026",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk",
      "Stream",
      "Inngest",
      "TanStack Query",
      "Tailwind CSS",
    ],

    mobileImage: "/image/interview-platform/session.png",

    images: [
      "/image/interview-platform/signup.png",
      "/image/interview-platform/dashboard.png",
      "/image/interview-platform/problems.png",
      "/image/interview-platform/session.png",
    ],

    description:
      "A full-stack interview platform enabling collaborative code editing, video conferencing, live chat, secure authentication, and automated code execution.",

    highlights: [
      "Collaborative real-time code editor.",
      "Integrated video conferencing using Stream.",
      "Secure authentication with Clerk and RBAC.",
      "Code execution engine supporting multiple languages.",
      "Interview dashboard with analytics and notifications.",
      "Background jobs using Inngest for scalable workflows.",
      "TanStack Query caching for better performance.",
    ],

    challenges: [
      {
        title: "Collaboration",
        text: "Built synchronized collaborative editing and live communication for multiple participants.",
      },
      {
        title: "Background Processing",
        text: "Used Inngest to handle asynchronous workflows and user synchronization.",
      },
      {
        title: "Scalability",
        text: "Designed reusable REST APIs and optimized client-side caching with TanStack Query.",
      },
    ],

    github: "https://github.com/SaptarshiCodes/Coding-platform",

    live: "https://coding-platform-jet-two.vercel.app/",

    accent: "#3B82F6",
    bgTitle: "INTERVIEW PLATFORM",
  },

  {
    id: 3,

    title: "MPLADS Risk Monitor",

    subtitle:
      "AI-powered anomaly detection and risk intelligence platform for MPLADS public fund monitoring.",

    year: "Sep 2026",

    tech: [
      "React",
      "FastAPI",
      "Python",
      "XGBoost",
      "Scikit-Learn",
      "LangGraph",
      "PostgreSQL",
      "pgvector",
      "Leaflet",
      "Tailwind CSS",
    ],

    mobileImage: "/image/mplad-risk-monitor/home_page.png",

    images: [
      "/image/mplad-risk-monitor/home_page.png",
      "/image/mplad-risk-monitor/dm_dashboard.png",
      "/image/mplad-risk-monitor/mp_dashboard.png",
      "/image/mplad-risk-monitor/login.png",
    ],

    description:
      "An end-to-end governance and risk monitoring platform designed to identify fund allocation anomalies, execution delays, and contractor monopolies in Members of Parliament Local Area Development Scheme (MPLADS) projects.",

    highlights: [
      "Machine learning risk scoring pipeline utilizing XGBoost, Scikit-Learn, and SHAP interpretability.",
      "Self-RAG conversational AI with LangGraph, PostgreSQL pgvector hybrid search, and BGE reranking.",
      "Interactive constituency risk mapping and geospatial analytics powered by Leaflet and React.",
      "FastAPI backend with Supabase database integration and document parsing pipelines.",
      "Automated anomaly detection for budget overruns, repeat contractors, and timeline lags.",
      "Responsive data dashboard built with React, Vite, and Tailwind CSS.",
    ],

    challenges: [
      {
        title: "Anomaly Detection",
        text: "Trained predictive ML models with XGBoost and Optuna hyperparameter tuning to accurately flag high-risk public infrastructure projects.",
      },
      {
        title: "Domain Intelligence with Self-RAG",
        text: "Engineered a hybrid semantic retrieval pipeline combining pgvector, keyword tsvector search, and cross-encoder reranking for government scheme guidelines.",
      },
      {
        title: "Geospatial Visualization",
        text: "Built interactive maps and multi-dimensional risk dashboards to visualize constituency-level fund allocation and contractor patterns.",
      },
    ],

    github: "https://github.com/EvilLucifer00/MPLAD-Risk-Monitor",

    live: "https://mplad-risk-monitor.vercel.app/",

    accent: "#EAB308",
    bgTitle: "RISK MONITOR",
  },
];
