/** Interactive resume content — synced with CV PDF narrative */

export const resumeSections = [
  { id: "objective", label: "Objective" },
  { id: "summary", label: "Summary" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "training", label: "Training" },
  { id: "contests", label: "Contests" },
  { id: "career", label: "Career info" },
  { id: "languages", label: "Languages" },
] as const;

export type ResumeSectionId = (typeof resumeSections)[number]["id"];

export const resumeContent = {
  objective:
    "Motivated Computer Science & Engineering graduate from Daffodil International University seeking an entry to mid-level position where I can apply skills in software development, mobile applications, applied machine learning, and problem-solving to contribute to organizational growth while building a strong professional career in the IT industry.",

  academicSummary:
    "Final-year CSE student at Daffodil International University (expected graduation July 2026; CGPA 3.35 / 4.00). Undergraduate thesis defended; university certificate awaiting. Completed academic and research projects in deep learning, smart transport systems, mobile/web applications, and data-driven systems using Python, Flutter, Firebase, PHP, and MySQL.",

  specialQualification:
    "Practical strength in Python-based ML/DL research, Flutter + Firebase mobile apps, and PHP/MySQL web platforms. Experience with multimodal modeling, explainable AI, CNN transfer learning, and intrusion-detection pipelines. Contributed to team-based smart transport systems for Dhaka students.",

  educationRows: [
    {
      exam: "B.Sc.",
      major: "CSE",
      institute: "Daffodil International University (DIU)",
      result: "CGPA 3.35/4.00 (Thesis defended; cert. awaiting)",
      year: "2026",
    },
    {
      exam: "HSC",
      major: "Science",
      institute: "Govt. Rajendra College, Faridpur",
      result: "GPA 5.00/5.00",
      year: "2021",
    },
    {
      exam: "SSC",
      major: "Science",
      institute: "Faridpur Zilla School",
      result: "GPA 5.00/5.00",
      year: "2018",
    },
  ],

  careerInfo: [
    { label: "Looking for", value: "Entry-level full-time software engineering" },
    { label: "Available", value: "Full time" },
    { label: "Preferred location", value: "Dhaka" },
    { label: "Expected salary", value: "Negotiable" },
  ],

  languages: [
    { language: "English", reading: "High", writing: "High", speaking: "Medium" },
    { language: "Bangla", reading: "High", writing: "High", speaking: "High" },
  ],

  extracurricular:
    "Active participant in DIU Computer & Programming Club (CPC) events. Continuously improving through self-learning in Flutter, Firebase, applied deep learning, and cybersecurity-oriented ML.",
};
