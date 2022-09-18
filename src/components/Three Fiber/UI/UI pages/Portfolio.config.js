/* eslint-disable */

const js = "/assets/images/js.png";
const ts = "/assets/images/ts.svg";
const cpp = "/assets/images/cpp.svg";
const c = "/assets/images/c.svg";
const csharp = "/assets/images/c-sharp.svg";
const java = "/assets/images/java.svg";
const python = "/assets/images/python.svg";
const unity = "/assets/images/unity.png";
const unreal = "/assets/images/unreal.png";
const threejs = "/assets/images/three-js.svg";
const nodejs = "/assets/images/node.png";
const expressjs = "/assets/images/express.svg";
const react = "/assets/images/react.png";
const tailwindcss = "/assets/images/tailwind.svg";
const mysql = "/assets/images/mysql.png";
const mongodb = "/assets/images/mongo.png";

const portfolioConfig = [
  {
    title: "Follow The Light",
    tag: "Game Dev: ",
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [unity, csharp],
    otherTech: [],
    github: "",
    moreScreenshots: "",
    download: "",
    description: "",
  },
  {
    title: "Beyond Invaders SDL",
    tag: "Game Dev: ",
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [c],
    otherTech: [],
    github: "",
    moreScreenshots: "",
    download: "",
    description: "",
  },
  {
    title: "My Personal Website",
    tag: "Game & Web Dev: ",
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [react, threejs, tailwindcss],
    otherTech: [js],
    github: "",
    moreScreenshots: "",
    download: "",
    description: "",
  },
  {
    title: "Student Specialty Advisor",
    tag: "Full Stack Dev: ",
    thumbnail: "https://img.youtube.com/vi/Svc3JQEW03E/0.jpg",
    images: [
      "https://raw.githubusercontent.com/aymendps/student-specialty-advisor/master/documentation/screenshots/desktop/login.png",
      "https://raw.githubusercontent.com/aymendps/student-specialty-advisor/master/documentation/screenshots/desktop/achievements.png",
      "https://raw.githubusercontent.com/aymendps/student-specialty-advisor/master/client/src/assets/art/team/award2.jpg",
    ],
    video: "https://www.youtube.com/watch?v=Svc3JQEW03E",
    mainTech: [nodejs, react, expressjs, mongodb],
    otherTech: [js],
    github: "https://github.com/aymendps/student-specialty-advisor",
    moreScreenshots:
      "https://github.com/aymendps/student-specialty-advisor/tree/master/documentation/screenshots",
    download: "",
    description: `Ever been a student or know someone who is attending university?

    Then you must be familiar with the difficulties that one faces when choosing a specialty to pursue.

    Student Specialty Advisor is an award-winning free web app for the South Mediterranean University's community that aims to help the students pick the right educational path.
    
    While working on this project, my team and I learned a lot about full stack development, responsive design, teamwork, and the scrum framework.`,
  },
  {
    title: "File Management System",
    tag: "Full Stack Dev: ",
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [nodejs, react, expressjs, mysql],
    otherTech: [js, ts],
    github: "",
    moreScreenshots: "",
    download: "",
    description: "",
  },
  {
    title: "Casino TextIO Game",
    tag: "Game Dev: ",
    thumbnail: "",
    images: [
      "https://raw.githubusercontent.com/aymendps/Casino-TextIO-Game/master/documentation/screenshots/sign-in.png",
      "https://raw.githubusercontent.com/aymendps/Casino-TextIO-Game/master/documentation/screenshots/blackjack.png",
      "https://raw.githubusercontent.com/aymendps/Casino-TextIO-Game/master/documentation/screenshots/slot-machine-2.png",
    ],
    video: "",
    mainTech: [java, mysql],
    otherTech: [],
    github: "https://github.com/aymendps/Casino-TextIO-Game",
    moreScreenshots:
      "https://github.com/aymendps/Casino-TextIO-Game/tree/master/documentation",
    download: "",
    description: `Casino TextIO Game is a casino simulator developped using Java and MySQL.
    
    As a player, you can create your account, display your balance, purchase & sell chips, view game stats & transactions history, and enjoy two exciting games: Blackjack & Slot Machine.
    
    Blackjack: Play against the AI in the most widely played casino banking game. The goal is to collect cards that total more points than the dealer, without going over 21.
    
    Slot Machine: Luck-based game where the goal is to play until you hit a jackpot.`,
  },
  {
    title: "Job Seekr",
    tag: "Software Dev: ",
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [python],
    otherTech: [],
    github: "",
    moreScreenshots: "",
    download: "",
    description: "",
  },
];

export default portfolioConfig;
