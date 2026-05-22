import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "logger",
    name: "Logger",
    description: "A full-stack accountability tracker built as a capstone project at Ada Developers Academy. Users can track personal or group goals, add accountability partners, and send SMS check-in reminders to friends via Textbelt.",
    role: "Built the group feature end to end, including list display, button events, forms, API calls to the backend, and Textbelt SMS integration. Styled the full application with Material UI and co-authored the layout, loading logic, and component styles across the app.",
    aiUsage: "Used AI to navigate Material UI documentation and for debugging and breaking down problems throughout development.",
    techStack: ["React", "Vite", "Material UI", "React Router", "Java Spring Boot", "PostgreSQL", "Textbelt API"],
    githubUrl: "https://github.com/lauracastrotech/logger-frontend",
    mediaType: "embed",
    mediaSrc: "https://www.loom.com/embed/777618a1e74247388af573732a755ee4",
    thumbnailSrc: "/thumbnail/logger_thumbnail.jpg",
  },
  {
    id: "food-pulse",
    name: "Food Pulse",
    description: "Food Pulse is a full-stack nutrient tracker built around health, not weight loss. Inspired by a conversation about iron deficiency and food pairing, the app lets users log meals, track daily nutrient intake, and set personal targets. Calorie counts are optional and can be hidden if they are a trigger.",
    role: "Originated the idea and served as product owner throughout development. Built user authentication end-to-end including registration, login, input validation, error messaging, and JWT and Bcrypt security. Developed the profile page with customizable nutrient goal cards and daily target setting. Debugged calendar and Luxon API issues. Led Agile ceremonies, wrote user stories, created wireframes, and ran user testing with five participants including a registered dietitian.",
    aiUsage: "Collaborated with Claude to refactor the application for semantic HTML and to improve accessibility styling, including color contrast and screen reader support.",
    techStack: ["React", "Vite", "Node.js", "Express", "MySQL", "Luxon", "JWT", "Bcrypt", "TypeScript"],
    githubUrl: "https://github.com/lauracastrotech/food-pulse",
    mediaType: "embed",
    mediaSrc: "https://www.loom.com/embed/eeb142ba33824069b1600ef89b3e5b42",
    thumbnailSrc: "/thumbnail/foodpulse_thumbnail.jpg",
  },
];
