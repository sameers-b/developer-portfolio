import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Memento Social",
    description: `Built Backend of AR social app that user share AR content by using ARKit, ARCore. Users can post photo,
video and 3d Models as AR content and also Generate Image using AI . Real time chat and push notifications
for activity and other features of like social media app. Optimized performance and responsiveness by leveraging asynchronous programming and efficient data caching
techniques with microservices architecture.`,
    tools: [
      "Express",
      "MongoDB",
      "RUNPOD API",
      "AWS EC2",
      "AWS S3",
      "AWS EKS",
      "AWS ECR",
      "AWS SES",
      "Joi",
      "Socker",
      "ARCore",
      "NextJs",
      "Tailwind CSS",
      "RabbitMQ",
      "Push Notifications",
    ],
    role: "Backend Engineer",
    code: "",
    app: "https://apps.apple.com/gb/app/memento-social/id1634405931",
    web: "https://memento.sameerdev.in/",
    image: crefin,
  },
  {
    id: 2,
    name: "Fourth Star",
    description: `VR project for experiencing real life events in Oculus(VR) like entertainment, events, gaming, concerts.
    Designed Frontend for user and creator portal to purchase and upload data to VR for more than 1000 users. Built some Backend service which based on microservices architecture.`,
    tools: [
      "ReactJs",
      "Express",
      "MongoDB",
      "AWS EC2",
      "AWS S3",
      "AWS EKS",
      "AWS ECR",
      "AWS SES",
      "Joi",
      "Socker",
      "NextJs",
      "Tailwind CSS",
      "Redis",
    ],
    role: "Full Stack Developer",
    code: "",
    image: travel,
    web: "https://fourthstar.com/",
  },
  {
    id: 3,
    name: "Pranaforce",
    description: `In this platform anyone create webapp using drag and drop. User can create their own webapp(like e-
commerce, live classes and other. including backend) kind of wordpress or shopify. In this platform provide templete.
you can choose any templete and modify then publish with a custom subdomain`,
    tools: ["React", "MUI", "Express", "MySql", "GrapeJS", "JWT", "Rapyd"],
    code: "",
    role: "Full Stack Developer",
    web: "http://pranaforceshop.com/",
    image: realEstate,
  },
  {
    id: 4,
    name: "Penny Meal",
    description: `Provide best price over different products and also user track history of any products. User plan our daily recipes.`,
    tools: ["ViteJS", "Shadcn UI", "Tailwind", "MixPanel", "RTK", "Redux"],
    code: "",
    web: "https://beta.pennymeal.com/",
    image: ayla,
    role: "Frontend Engineer",
  },
  {
    id: 5,
    name: "Uza Online",
    description: `your all-in-one solution for classified ads, job hunting, and connecting with local opportunities. Whether you're searching for the perfect job, browsing CVs, or intending to sell, buy or rent any item, our app has you covered`,
    tools: ["ReactJs", "Material UI", "Redux", "Firebase", "Redux"],
    code: "",
    web: "https://www.uzaonline.com/",
    image: ayla,
    role: "Frontend Engineer",
  },
  {
    id: 6,
    name: "dfb vc",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
