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
      "Learned about mongodb basic, model, controller, middleware, etc.",
    ],
  },
];
