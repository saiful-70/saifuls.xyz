import { IProject } from "../interface/interface";

export const projects: IProject[] = [
  {
    slug: "gadget-vibe",
    imgSrc: [
      "/project-screenshots/gadget-vibe/1.png",
      "/project-screenshots/gadget-vibe/3.png",
      "/project-screenshots/gadget-vibe/2.png",
    ],
    name: "Gadget Vibe",
    summary:
      "Almost full functional e-commerce web app(Desktop) with the help of commreceJs api.",
    preview: "http://gadget-vibe.vercel.app/",
    repo: "https://github.com/saiful-70/gadget-vibe/",
    stack: "NextJs, Material UI, CommerjeJs",
    description: [
      "Backend handled by CommerceJs api.",
      "Context API for state management.",
      "Implemented authentication with email token, cart, checkout, etc.",
      "Tried to add every necessary component of the MUI framework for design the UI.",
      "Mainly focused on functionality of the application. ",
    ],
  },
  {
    slug: "chat-room",
    imgSrc: [
      "/project-screenshots/chat-room/1.png",
      "/project-screenshots/chat-room/2.png",
    ],
    name: "Chat Room",
    summary: "A real time private chat app controlled by different room id.",
    repo: "https://github.com/saiful-70/chat-room",
    stack: "React, Express, Socket.io",
    description: [
      "Cross origin fixes.",
      "Socket.io for real time data sharing.",
      "Each room people can't see another room's data.",
      "In future, will connect with database system.",
    ],
  },
  {
    slug: "basic-crud-app",
    imgSrc: [
      "/project-screenshots/react-node-crud/1.png",
      "/project-screenshots/react-node-crud/2.png",
      "/project-screenshots/react-node-crud/3.png",
    ],
    name: "React-Node CRUD App",
    summary:
      "Simple student management system created with react, expressjs, mongodb.",
    repo: "https://github.com/saiful-70/react-node-crud",
    stack: "React, ExpressJs, MongoDB, Bootstrap",
    description: [
      "Connected react frontend with nodejs backend.",
      "Used mongoose as mongodb's ORM model.",
      "Worked with model, controller, middleware, etc. for backend part.",
    ],
  },
  {
    slug: "gitco-search",
    imgSrc: [
      "/project-screenshots/gitco-search/1.png",
      "/project-screenshots/gitco-search/2.png",
      "/project-screenshots/gitco-search/3.png",
      "/project-screenshots/gitco-search/4.png",
    ],
    name: "GitCoSearch",
    summary: "Search people of codeforces and github by their handle/username.",
    preview: "http://gitco-search.vercel.app/",
    repo: "https://github.com/saiful-70/gitco-search",
    stack: "NextJs, TailwindCSS, Axios",
    description: [
      "Multiple request with axios.all in the replace of promise.all",
      "Best use of useRef hook.",
      "Tried to make the UI as simple as possible.",
    ],
  },
  {
    slug: "dolla",
    imgSrc: [
      "/project-screenshots/dolla/4.png",
      "/project-screenshots/dolla/2.png",
      // "/project-screenshots/dolla/1.png",
      "/project-screenshots/dolla/3.png",
      "/project-screenshots/dolla/5.png",
    ],
    name: "Dolla",
    summary: "A good looking responsive react site",
    preview: "https://dolla-dolla.netlify.app/",
    repo: "https://github.com/saiful-70/dolla",
    stack: "React, Styled Components, React Scroll",
    description: [
      "Full responsive.",
      "Styled components for styling the components.",
      "React scroll for active nav menu.",
    ],
  },
  {
    slug: "hisab-nikash",
    imgSrc: [
      "/project-screenshots/hisab-nikash/1.png",
      "/project-screenshots/hisab-nikash/2.png",
      "/project-screenshots/hisab-nikash/3.png",
    ],
    name: "Hisab Nikash",
    summary: "A monthly budget tracker made with pure vanilla javascript",
    preview: "https://saiful-70.github.io/hisab-nikash/",
    repo: "https://github.com/saiful-70/hisab-nikash.git",
    stack: "HTML, CSS, Javascript",
    description: [
      "DOM manipulation.",
      "Can add and delete the income and expense separately.",
    ],
  },
];
