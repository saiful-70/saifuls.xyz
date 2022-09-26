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
    imgSrc: ["/images/project.png"],
    name: "Chat Room",
    summary: "A real time private chat app controlled by different room id.",
    preview: "http://gadget-vibe.vercel.app/",
    repo: "https://github.com/saiful-70/gadget-vibe",
    stack: "React, Express, Socket.io",
  },
  {
    slug: "basic-crud-app",
    imgSrc: ["/images/project.png"],
    name: "Basic React-Node CRUD App",
    summary: "",
    preview: "http://gadget-vibe.vercel.app/",
    repo: "https://github.com/saiful-70/gadget-vibe",
    stack: "React, ExpressJs, MongoDB, Bootstrap",
  },
];
