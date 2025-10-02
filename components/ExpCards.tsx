"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Jun 2025 — Present",
    currentPosition: "AI & Full Stack Engineer",
    place: "Freelance",
    previousPositions: [""],
    description:
      "I currently help startups and SMEs bring their ideas to life by building AI-powered applications and full-stack platforms.",
    skills: [
      "AI powered Applications",
      "Flexible Working Time",
      "Startups",
      "FastAPI",
      "Python",
    ],
  },
  {
    timeline: "Feb 2022 — May 2025",
    currentPosition: "AI & Full Stack Engineer",
    place: "Luxoft",
    previousPositions: [""],
    description:
      "I worked on fintech and telecom projects, where performance and security were critical. I led the development of an AI-driven fraud detection dashboard that achieved 92% accuracy and saved the client millions in potential losses. I also improved scalability by 40% through microservices architecture with FastAPI and Django. This role gave me strong expertise in cloud deployment, hybrid team collaboration, and enterprise AI systems.",
    skills: [
      "AI Integration",
      "Machine Learning",
      "Fintech",
      "FastAPI",
      "Saas Platform",
      "Scalability",
      "ChatBot",
      "Project Management",
      "Fraud Detection",
      "Leadership",
      "Testing & QA",
    ],
  },
  {
    timeline: "Mar 2020 — Dec 2021",
    currentPosition: "Full Stack Engineer",
    place: "SoftServe",
    previousPositions: [],
    description:
      "I delivered enterprise healthcare and retail platforms that required both speed and precision. One project was a healthcare analytics system that processed patient records 30% faster by using React.js, Next.js, and optimized APIs. I also migrated legacy applications to cloud-native microservices, reducing infrastructure costs by 25%. My work here centered on Python, API integration, data pipelines, and full-stack web development.",
    skills: [
      "Healthcare",
      "Project Management",
      "Next.js",
      "API Integration",
      "Cloud-Native",
      "Microservices",
      "Python",
      "Flask",
      "Enterprise Platforms",
    ],
  },
  {
    timeline: "Jul 2017 - Feb 2020",
    currentPosition: "Full Stack Developer",
    place: "EPAM Systems",
    previousPositions: [""],
    description:
      "I started my career with Python and React.I contributed to large-scale e-commerce and financial applications used by over a million users. I built responsive interfaces with React.js and Redux, backed by robust Django APIs. By optimizing PostgreSQL queries and backend logic, I reduced page load times by 35%. My work on CI/CD pipelines also streamlined deployments, reducing release times from days to hours. This was my foundation in enterprise-grade development and global project delivery.",
    skills: [
      "e-commerce",
      "Python",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "PostgreSQL",
      "enterprise software",
      "CI/CD",
      "Performance Optimization",
      "Testing & QA",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col  lg:flex-row w-full min-h-fit gap-2 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <div className=" lg:w-[35%] sm:w-full ">
              <CardHeader className="h-full w-full p-0 text-right">
                <CardTitle className="text-base text-slate-400 tracking-wide whitespace-nowrap text-left pr-6">
                  {job.timeline}
                </CardTitle>
              </CardHeader>
            </div>
            <div className=" lg:w-[65%] sm:w-full ">
              <CardContent className="flex flex-col p-0">
                <p className="text-foreground font-bold">
                  {job.currentPosition} • {job.place}
                </p>
                {job.previousPositions.map((position, index) => (
                  <p key={index} className="text-slate-400 text-sm font-bold">
                    {position}
                  </p>
                ))}
                <CardDescription className="py-3 text-muted-foreground">
                  {job.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </div>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:alexander@meikopoulos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
