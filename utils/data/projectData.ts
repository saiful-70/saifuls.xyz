import { IProject } from "../interface/interface";

export const projects: IProject[] = [
  {
    slug: "snapshot",
    imgSrc: [
      "/project-screenshots/snapshot/1.png",
      "/project-screenshots/snapshot/2.png",
      "/project-screenshots/snapshot/3.png",
      "/project-screenshots/snapshot/4.png",
      "/project-screenshots/snapshot/5.png",
      "/project-screenshots/snapshot/6.png",
      "/project-screenshots/snapshot/7.png",
      "/project-screenshots/snapshot/8.png",
    ],
    name: "SnapShot",
    summary:
      "A complete social media web application with one-to-one chat functionality.",
    preview: "https://snapshot-beryl.vercel.app/",
    repo: "https://github.com/saiful-70/snapshot/",
    stack: "React, Redux, Express, Nodejs, MongoDB, Socket.io, Material UI",
    description: [
      "Developed a feature-rich full-stack social media web application with one-to-one chat functionality.",
      "Utilizing technologies such as Redux for state management, Socket.io for real-time data sharing, Cloudinary for cloud-based image storage and JWT for robust authentication and authorization.",
      "Implemented CORS policies based on best practices.",
      "Overcame challenges while designing and implementing a comprehensive API, managing application state, implementing cloud-based image storage, and integrating one-to-one chat functionality.",
    ],
  },
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
    slug: "rick-morty-wiki",
    imgSrc: [
      "/project-screenshots/rick-morty-wiki/1.png",
      "/project-screenshots/rick-morty-wiki/2.png",
      "/project-screenshots/rick-morty-wiki/3.png",
      "/project-screenshots/rick-morty-wiki/4.png",
    ],
    name: "Gadget Vibe",
    summary:
      "Almost full functional e-commerce web app(Desktop) with the help of commreceJs api.",
    preview: "http://rick-morty-wiki-nine.vercel.app/",
    repo: "https://github.com/saiful-70/rick-morty-wiki/",
    stack: "NextJs, Material UI",
    description: [
      "Converted a figma file to React.",
      "Used REST API for data given by their documentation.",
      "100% responsive website.",
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
