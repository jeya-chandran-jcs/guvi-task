const Json_resume = {
  "name": "Jeya Chandran",
  "contact": {
    "email": "jeyachandran@gmail.com",
    "phone": "1234567890",
    "address": "123 Main Street, Madurai, Tamil Nadu"
  },
  "summary": "As a fresher, I'm eager to learn new technologies.",
  "education": [
    {
      "degree": "Master of Science in Computer Science",
      "university": "Madurai Kamaraj University",
      "graduationYear": 2023
    }
  ],
  "skills": [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "SQL",
    "Git",
    "Agile Development",
    "Problem Solving"
  ],
  "languages": [
    {
      "name": "English",
      "fluency": "Intermediate"
    },
    {
      "name": "Tamil",
      "fluency": "Native"
    }
  ],
  "certifications": [
    "MERN Stack Developer - Associate"
  ],
  "interests": [
    "Open-source projects",
    "Hiking",
    "Photography"
  ]
};

console.log(JSON.stringify(Json_resume, null, 2));
