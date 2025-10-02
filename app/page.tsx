import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Lawrence</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
            Full Stack Developer & Masters Student
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in-up">
            I build modern web applications with clean code and intuitive user experiences.
            Passionate about creating scalable solutions and learning new technologies.
            Currently pursuing a Master's degree in Artificial Intelligence.
          </p>
          <div className="flex gap-4 flex-wrap animate-fade-in-up">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <div className="flex gap-4 mt-8 animate-fade-in-up">
            <Button size="icon" variant="ghost" asChild>
              <a href="https://github.com/yogaisBC" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="https://www.linkedin.com/in/lawrence-liu-942172198/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="mailto:liukarlap@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I'm a passionate software developer with a strong foundation in both frontend and backend technologies.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              With experience in modern web development, I specialize in building responsive applications
              using React, Next.js, TypeScript, and Node.js. I'm always eager to learn new technologies
              and best practices to deliver high-quality software.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Tools & Other</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "VS Code", "Figma", "Linux", "CI/CD"].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                link: "#"
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates and team features.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                link: "#"
              },
              {
                title: "Portfolio Website",
                description: "A modern, responsive portfolio website showcasing projects and skills.",
                tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
                link: "#"
              }
            ].map((project) => (
              <div key={project.title} className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.link} className="inline-flex items-center gap-2">
                    View Project <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl w-full text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="mailto:your.email@example.com">
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Lawrence. Built with Next.js and shadcn/ui.</p>
      </footer>
    </div>
  );
}
