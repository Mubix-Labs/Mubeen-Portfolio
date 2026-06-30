// Replace the `link` value of each project with your real URL.
// app -> OneDrive shared link, websites -> live URL, SaaS -> VS Code / repo redirect link.

export const projects = [
  {
    id: "bahria-lms",
    tag: "Mobile App",
    title: "Bahria University LMS App",
    description:
      "A mobile companion app for Bahria University's Learning Management System, built to let students check coursework, grades, and announcements on the go. Not yet on the Play Store distributed directly as an installable file.",
    stack: ["Flutter", "REST API", "Firebase"],
    link: "https://appdistribution.firebase.dev/i/e1a09a18999e0e35",
    linkLabel: "Download APK",
  },
  {
    id: "luxora",
    tag: "E-Commerce",
    title: "Luxora",
    description:
      "A multi-vendor seller platform built for merchants to list, manage, and sell products online covering storefronts, listings, and order handling end to end.",
    stack: ["React", "Node.js", "MongoDB"],
    link: "https://main.d2lt1ew6n4l6qs.amplifyapp.com/",
    linkLabel: "View Live",
  },
  {
    id: "mubix-labs",
    tag: "Software House",
    title: "Mubix Labs",
    description:
      "The official site for Mubix Labs, the software house I founded showcasing the studio's services, work, and the team building cross-platform apps, SaaS tools, and websites for clients.",
    stack: ["Next.js", "Tailwind CSS", "Node.js"],
    link: "https://mubixlabs.studio/",
    linkLabel: "Visit Website",
  },
];

export const saasTool = {
  name: "SEO Insight Engine",
  description:
    "A micro SaaS tool that automatically runs SEO optimization and performance optimization on websites surfacing fixes that move a site closer to a perfect Lighthouse score.",
  stack: ["Node.js", "Lighthouse API", "React"],
  pricingLink: "https://REPLACE_WITH_LICENSE_PURCHASE_LINK",
  getStartedLink: "https://REPLACE_WITH_VSCODE_REDIRECT_LINK",
};
