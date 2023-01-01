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
const nestjs = "/assets/images/nestjs.svg";

const TAGS = {
  Game: "Game Dev: ",
  GameWeb: "Game & Web Dev: ",
  FullStack: "Full Stack: ",
  Software: "Software Dev: ",
  AI: "AI Dev: ",
  Frontend: "Frontend: ",
  Backend: "Backend: ",
};

// {
//   title: "",
//   order: "",
//   tag: "",
//   thumbnail: "",
//   images: [],
//   video: "",
//   mainTech: [],
//   otherTech: [],
//   github: "",
//   moreScreenshots: "",
//   download: "",
//   website: "",
//   description: ``,
// }

const portfolioConfig = [
  {
    title: "Follow The Light",
    order: 10,
    tag: TAGS.Game,
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [unity, csharp],
    otherTech: [],
    github: "https://github.com/aymendps/Follow-The-Light",
    moreScreenshots: "https://github.com/aymendps/Follow-The-Light",
    download: "",
    website: "",
    description: `As a glowing light ball lost in darkness, each time you collide with something, you transfer some of your light to it, slowly revealing the path that you should follow.

    Explore your way through this physics-based game:
    - Move the glowing ball around by appling force
    - Rotate the camera to change your perspective
    - Jump in the same spot to bounce higher each time
    - Quickly hop between two walls, climbing up
    
    This project helped me get an idea about:
    - Handling player controls and movement
    - Handling camera translation and rotation
    - Working with rigidbody, colliders, and raycasts
    - Working with Unity's animator component and courotines`,
  },
  {
    title: "Student Specialty Advisor",
    order: 10,
    tag: TAGS.FullStack,
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
    website: "",
    description: `Ever been a student or know someone who is attending university?

    Then you must be familiar with the difficulties that one faces when choosing a specialty to pursue.

    Student Specialty Advisor is an award-winning free web app for the South Mediterranean University's community that aims to help the students pick the right educational path.
    
    While working on this project, my team and I learned a lot about full stack development, responsive design, teamwork, and the scrum framework.`,
  },
  {
    title: "Beyond Invaders",
    order: 10,
    tag: TAGS.Game,
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [c],
    otherTech: [],
    github: "",
    moreScreenshots: "",
    download: "",
    website: "",
    description: `This project is my take on the classic arcade game 'Space Invaders', made using C & the SDL library in 2020.

    Playing as a spaceship and being the humanity's last hope, you fight against an alien invasion in order to save the world.
    
    In this project, you will face multiple waves of enemies, until you reach the big bad boss. Take it down to save humanity and win the game.

    This project helped me learn about:
    - Handling object movement and player input
    - Handling enemy AI (enemy attacks, boss ability rotation..)
    - Working with collisions and game states/phases
    - Implementing a persistent leaderboard
    `,
  },
  {
    title: "My Personal Website",
    order: 1,
    tag: TAGS.GameWeb,
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [react, threejs, tailwindcss],
    otherTech: [js],
    github: "",
    moreScreenshots: "",
    download: "",
    website: "https://aymendps.github.io/",
    description: `Every recruiter in the gaming, software or web industry will tell you how important having a portfolio is when trying to get interviews for that dream job.

    As I was building mine, I wanted to present it in a slightly different way that could express my shared passion for web and game dev.

    This is how my website ended up being a 3D environment, where you can check out my collection of projects, and also get to know a litle about me.

    Any feedback you have is welcome, as always.
    
    Now, onto the next challenge!
    `,
  },
  {
    title: "File Management System",
    order: 10,
    tag: TAGS.FullStack,
    thumbnail: "",
    images: [
      "/assets/screenshots/file-manager/upload.png",
      "/assets/screenshots/file-manager/context-menu.png",
      "/assets/screenshots/file-manager/recent.png",
    ],
    video: "",
    mainTech: [nodejs, react, nestjs, mysql],
    otherTech: [js, ts],
    github: "",
    moreScreenshots:
      "https://github.com/aymendps/aymendps.github.io/tree/master/public/assets/screenshots/file-manager",
    download: "",
    website: "",
    description: `During my part-time job at Cynoia, I started the development of a file management system from scratch.
    
    This task challenged my design skills and forced me to think outside the box multiple times to implement a code that is optimized and cost-effective.
        
    Features of the system include: creating folders, uploading files, previewing, downloading, renaming, favouriting, sharing, managing access, keeping track of activity history, deleting elements and more!`,
  },
  {
    title: "Job Seekr",
    order: 5,
    tag: TAGS.Software,
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [python],
    otherTech: [],
    github: "",
    moreScreenshots: "",
    download: "",
    website: "",
    description: `Job Seekr is a Python application that, given a job role, will look up famous hiring websites and scrape all the relevant applications.
    
    The data is then previewed in a table, where the user can quickly check them out, and visit the link of any application they like.
    
    This project helped me learn about automation, web scraping and handling data records.`,
  },
  {
    title: "Casino TextIO Game",
    order: 7,
    tag: TAGS.Game,
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
    website: "",
    description: `Casino TextIO Game is a casino simulator developped using Java and MySQL.
    
    As a player, you can create your account, display your balance, purchase & sell chips, view game stats & transactions history, and enjoy two exciting games.
    
    Blackjack: Play against the AI in the most widely played casino banking game. The goal is to collect cards that total more points than the dealer, without going over 21.
    
    Slot Machine: Luck-based game where the goal is to play until you hit a jackpot.
    
    Through this project, I learned more about class design, testing, SQL queries and the implementation of game logic & AI.`,
  },
  {
    title: "Cat n' Quest",
    order: 10,
    tag: TAGS.Game,
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [unity, csharp],
    otherTech: [],
    github: "https://github.com/aymendps/Cat-N-Quest",
    moreScreenshots: "",
    download: "",
    website: "https://aymendps.itch.io/cat-n-quest",
    description: `Join a grumpy cat in an adventure to support villagers and spread peace in its own way.

    This game was made during the Unidos HISPANIC HERITAGE MONTH Game Jam 2022 @itch.io using Unity 2D.

    The game jam lasted for 1 week, and our team was composed of three members.
    
    This project helped me learn about:
    - AI Pathfinding: NavMesh surfaces, NavMeshAgents and NavMeshObstacles
    - Implementing the logic behind quests and NPC dialogues
    - Working with sprites, tiles and layers in a 2D topdown view
    - Working with vectors, rigidbodies, colliders and triggers`,
  },
  {
    title: "Discord Butler Bot",
    order: 7,
    tag: TAGS.Backend,
    thumbnail: "",
    images: [],
    video: "",
    mainTech: [nodejs, ts],
    otherTech: [],
    github: "",
    moreScreenshots: "",
    download: "",
    website: "",
    description: `Butler Bot is a private discord bot that I made for a discord server me and my friends hang out in.

    The bot was developed using Discord.js version 14, TypeScript and Node.js.
    
    Controlled by chat messages / commands, it's capable of executing multiple tasks, one of which is searching, queueing and playing requested music.

    It also uses 'Riot Games Developer Portal' APIs to check 'League of Legends' account stats, match history, champion mastery & other information.
    
    Future work on the bot will include voice recognition / commands, similar to the use case of Siri / Alexa`,
  },
];

const PORTFOLIO = portfolioConfig.sort((a, b) => b.order - a.order);

export default PORTFOLIO;
