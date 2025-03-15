"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Twitter, Mail, ArrowRight, Calendar, Briefcase, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ScrollReveal";
import TypeWriter from "@/components/TypeWriter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillsFooterProps {
  items: SkillItem[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  codeLink: string[];
  demoLink: string;
  duration: string;
  teamSize: number;
}

const SkillsFooter: React.FC<SkillsFooterProps> = ({ items }) => {
  return (
    <>
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors"
        >
          <img
            src={item.icon}
            alt={item.name || "Skill icon"}
            className="w-10 h-10 object-contain"
          />
          <span className="text-sm text-center font-medium">
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (href === "/") {
        setIsActive(window.scrollY < 200);
        return;
      }

      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        setIsActive(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  return (
    <Link
      href={href}
      className={`text-sm transition-colors ${isActive
        ? "font-semibold text-primary underline underline-offset-4"
        : "hover:text-primary"
        }`}
    >
      {children}
    </Link>
  );
}

const programmingLanguages: SkillItem[] = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
];

const frontend: SkillItem[] = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Shadcn UI",
    icon: "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon.ico",
  },
  {
    name: "React Router",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
  },
  {
    name: "Axios",
    icon: "https://axios-http.com/assets/logo.svg",
  },
  {
    name: "TanStack Query",
    icon: "https://static-00.iconduck.com/assets.00/react-query-icon-2048x2048-9mt1fqgv.png",
  },
];

const backend: SkillItem[] = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "NestJS",
    icon: "https://nestjs.com/img/logo-small.svg",
  },
  {
    name: "Socket.IO",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    name: "Jsonwebtoken",
    icon: "https://jwt.io/img/pic_logo.svg",
  },
  {
    name: "Nodemailer",
    icon: "https://nodemailer.com/nm_logo_200x136.png",
  },
  {
    name: "RabbitMQ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
];

const database: SkillItem[] = [
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

const tools: SkillItem[] = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Loopme-apis",
    description: "LoopMe is a social networking platform similar to Facebook, built with a microservices architecture, containerized using Docker, and deployed on Kubernetes (K8s).",
    longDescription: "LoopMe is a social networking platform similar to Facebook, built with a microservices architecture, containerized using Docker, and deployed on Kubernetes (K8s).",
    image: "/project1.png",
    technologies: ["TypeScript", "Express.js", "Node.js", "JWT (JSON Web Tokens)", "Rabbitmq", "Redis", "MongoDB", "Docker", "Kubernetes", "Socket.IO", "Nodemailer", "Zod", "Winston"],
    features: [
      "Packaged the application using Docker Compose and deployed it on Kubernetes",
      "Designed and developed microservices enabling interaction via asynchronous communication (RabbitMQ) and synchronous communication (REST API)",
      "Implemented social networking features, including posts, comments, and reactions",
      "Developed group management with role-based permissions",
      "Implemented friend system with request and acceptance functionality",
      "Integrated user authentication with email verification and JWT-based security",
      "Developed real-time messaging and notifications"
    ],
    codeLink: ["https://github.com/NguyenChiThannh/loopme-apis"],
    demoLink: "",
    duration: "09/2024 - 2/2025",
    teamSize: 1
  },
  {
    id: 2,
    title: "Trello",
    description: "Trello is an online project management tool based on a board and card system.",
    longDescription: "Trello is an online project management tool based on a board and card system.",
    image: "/project2.png",
    technologies: ["Javascript", "Node.js", "Express.js", "Socket.IO", "Jsonwebtoken", "Nodemailer", "Reactjs", "Redux", "Material UI", "Axios", "React Router", "Cloudinary", "MongoDB"],
    features: [
      "Developed front-end functionality using React.js, enabling a drag-and-drop interface for organizing boards, columns, and cards",
      "Built API for board management, supporting drag-and-drop for columns and cards",
      "Integrated user authentication with email verification and JWT-based security",
      "Developed real-time messaging feature using WebSockets",
    ],
    codeLink: ["https://github.com/NguyenChiThannh/Trello-apis", "https://github.com/NguyenChiThannh/Trello"],
    demoLink: "",
    duration: "12/2023 - 6/2024",
    teamSize: 1,
  },
  {
    id: 3,
    title: "MIF- Nextjs",
    description: "MIF is a forum for film enthusiasts. The application allowing users to join groups, post articles, engage with film content, and message within groups. ",
    longDescription: "MIF is a forum for film enthusiasts. The application allowing users to join groups, post articles, engage with film content, and message within groups. It provides detailed information about movies and actors, along with features for rating and saving films, as well as favoriting artists",
    image: "/project3.png",
    technologies: ["Javascript", "NextJS", "Shadcn UI", "Tailwind CSS", "Redux", "Axios TanStack Query"],
    features: [
      "Responsible for designing user interfaces and integrating APIs in projects",
    ],
    codeLink: ["https://github.com/cogi2996/mif_nextjs"],
    demoLink: "",
    duration: "6/2024 - 6/2025",
    teamSize: 1,
  },
  {
    id: 4,
    title: "Music-app",
    description: "CISNW is a music player application on the Android platform",
    longDescription: "CISNW is a music player application on the Android platform that allows users to listen to music, create playlists, and share music with friends. The app provides a user-friendly interface with features for searching, playing, and organizing music.",
    image: "/project4.png",
    technologies: ["Java", "Spring boot", "Firebase"],
    features: [
      "Build home activity, search activity, profile activity, notification activity",
      "Use Firebase Realtime Database for instant messaging and FCM for offline notifications"
    ],
    codeLink: ["https://github.com/NguyenChiThannh/music_app_backend", "https://github.com/NguyenChiThannh/music_app"],
    demoLink: "",
    duration: "4/2024 - 6/2024",
    teamSize: 4,
  }
];
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-lg font-medium">
              Chis Thanh
            </Link>
            <div className="hidden md:flex space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-4">
              <Badge variant="secondary" className="mb-4">Fullstack Developer</Badge>
              <h2 className="text-3xl font-medium text-muted-foreground">Hi,</h2>
              <h1 className="text-3xl md:text-3xl font-medium">
                <span className="">My name is Thanh,</span>
              </h1>
              <h2 className="text-4xl font-bold flex items-center gap-2">
                I&apos;m a <TypeWriter
                  words={["Developer"]}
                  delay={150}
                  className="text-primary"
                />
              </h2>
              <p className="text-muted-foreground max-w-md py-4">
                Like coding, music, take a photo, and sleep.
              </p>

              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <Link href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Work</Link>
                </Button>
              </div>

              <div className="flex space-x-4 pt-8">
                <Link href="https://www.linkedin.com/in/nguyenchithannh/" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://github.com/NguyenChiThannh" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </Link>
                <Link href="mailto:thanh.161003@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} />
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                {/* Background gradient and effects */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm"></div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-secondary/20 animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Border and image container */}
                <div className="absolute inset-0 rounded-full border-2 shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  <Image
                    src="/avatar.png"
                    alt="Thanh - Web Designer"
                    width={320}
                    height={320}
                    className="absolute inset-0 object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Subtle ring effect */}
                <div className="absolute -inset-2 rounded-full border border-primary/10 animate-pulse" style={{ animationDuration: '3s' }}></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 bg-secondary/5">
        <ScrollReveal delay={0.2} className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 mx-auto block w-fit">About Me</Badge>
          <h2 className="text-3xl font-bold text-center mb-8">Who I Am</h2>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p className="leading-relaxed">
              I have a strong foundation in design and frontend development, allowing me to create visually appealing and user-friendly interfaces. Additionally, I have experience in backend development and enjoy working with databases, APIs, and server-side logic. I am also passionate about learning and exploring system architecture to better understand how different components of an application interact and scale efficiently.
            </p>
            <p className="leading-relaxed">
              My goal over the next three years is to enhance my skills in both frontend and backend technologies, deepen my knowledge of software architecture, and ultimately become a proficient full-stack developer.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <Button variant="outline">Download Resume</Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.2} className="w-full relative flex flex-col items-center gap-8">
            <Badge variant="outline" className="mb-2 mx-auto block w-fit">My Expertise</Badge>
            <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>

            <div className="flex flex-col gap-12 w-full">
              <ScrollReveal y={50} delay={0.3} className="block w-full">
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">
                  Programming Languages
                </h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                  <SkillsFooter items={programmingLanguages} />
                </div>
              </ScrollReveal>

              <ScrollReveal className="block w-full" y={50} delay={0.4}>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">
                  Front End
                </h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                  <SkillsFooter items={frontend} />
                </div>
              </ScrollReveal>

              <ScrollReveal className="block w-full" y={50} delay={0.4}>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">
                  Back End
                </h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                  <SkillsFooter items={backend} />
                </div>
              </ScrollReveal>

              <ScrollReveal className="block w-full" y={50} delay={0.5}>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">
                  Tools & Technologies
                </h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                  <SkillsFooter items={database} />
                </div>
              </ScrollReveal>

              <ScrollReveal className="block w-full" y={50} delay={0.5}>
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">
                  Tools & Technologies
                </h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                  <SkillsFooter items={tools} />
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <Badge variant="outline" className="mb-4 mx-auto block w-fit">My Journey</Badge>
            <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

            <div className="space-y-12">
              {/* Experience Item 1 */}
              <ScrollReveal delay={0.3} y={30} className="relative border-l border-border pl-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Software Engineering Student</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>HCMC University of Technology and Education</span>
                    <span className="mx-2">•</span>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>2021 - Present</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3">
                  Currently studying Software Engineering, focusing on web development and modern technologies. Learning to build web applications using Reactjs and Nodejs, develop responsive designs, and optimize performance. Passionate about coding, problem-solving, and continuously improving skills through coursework and personal projects.
                </p>
              </ScrollReveal>

              {/* Experience Item 2 */}
              {/* <ScrollReveal delay={0.3} y={30} className="relative border-l border-border pl-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Computer Science Student</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>HCMC University of Technology and Education</span>
                    <span className="mx-2">•</span>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>2021 - Present</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3">
                  Studying computer science with a strong focus on frontend development. Building web applications using React and Next.js, implementing responsive designs, optimizing performance, and continuously learning modern web technologies. Passionate about coding, problem-solving, and staying up to date with industry trends.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </ScrollReveal> */}

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal delay={0.2}>
            <Badge variant="outline" className="mb-4 mx-auto block w-fit">My Work</Badge>
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={0.3 + index * 0.1} y={30} className="group">
                  <div className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 h-full flex flex-col">
                    <div className="relative h-48 bg-secondary/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="outline">{tech}</Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.codeLink[0]} className="flex items-center">
                            <Code className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-[80vw] max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                            </DialogHeader>
                            <div className="mt-6">
                              <div className="relative h-64 md:h-80 w-full mb-6 rounded-md overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="text-lg font-medium mb-2">Overview</h4>
                                  <p className="text-muted-foreground">{project.longDescription}</p>
                                </div>

                                <div className="flex flex-wrap gap-6">
                                  <div className="flex items-center">
                                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                                    <span className="text-sm">Duration: <span className="font-medium">{project.duration}</span></span>
                                  </div>
                                  <div className="flex items-center">
                                    <Briefcase className="h-5 w-5 mr-2 text-primary" />
                                    <span className="text-sm">Team Size: <span className="font-medium">{project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</span></span>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-lg font-medium mb-2">Technologies</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                      <Badge key={i} variant="secondary">{tech}</Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-lg font-medium mb-2">Responsibiltities</h4>
                                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    {project.features.map((feature, i) => (
                                      <li key={i}>{feature}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="flex justify-end gap-4 mt-8">
                                {project.codeLink.length > 0 &&
                                  project.codeLink.map((link, i) => (
                                    <Button key={i} variant="outline" asChild>
                                      <Link href={link} target="_blank" className="flex items-center">
                                        <Code className="mr-2 h-4 w-4" />
                                        {project.codeLink.length > 1
                                          ? (i === 0 ? "View Code Backend" : "View Code Frontend")
                                          : "View Code"}
                                      </Link>
                                    </Button>
                                  ))}
                                {project.demoLink && (
                                  <Button asChild>
                                    <Link href={project.demoLink} target="_blank" className="flex items-center">
                                      <ExternalLink className="mr-2 h-4 w-4" />
                                      Live Demo
                                    </Link>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="#">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <Badge variant="outline" className="mb-4 mx-auto block w-fit">Get In Touch</Badge>
            <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
            <p className="text-center text-muted-foreground mb-8">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="mailto:thanh.161003@gmail.com">
                  Send Message <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Thanh. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/in/nguyenchithannh/" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="https://github.com/NguyenChiThannh" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
