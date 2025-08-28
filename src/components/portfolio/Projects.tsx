import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Gamepad2, Calculator, Lock, ListTodo, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Designed and developed a professional portfolio website using HTML and CSS, showcasing web development and design skills. Implemented a clean, modern aesthetic and ensured optimal viewing across all devices.",
      technologies: ["HTML", "CSS", "Responsive Design", "Web Development"],
      icon: Code,
      category: "Web Development"
    },
    {
      title: "Face Detection System",
      description: "Developed a Python application for real-time face detection using computer vision libraries. Implemented advanced image processing techniques for accurate facial recognition and detection.",
      technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
      icon: Code,
      category: "Machine Learning"
    },
    {
      title: "Interactive To-Do List",
      description: "Created a dynamic task management application with user-friendly interface for task creation, editing, and deletion. Features include task prioritization and completion tracking.",
      technologies: ["Python", "GUI", "Data Management", "User Interface"],
      icon: ListTodo,
      category: "Desktop Application"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Built an interactive Tic-Tac-Toe game with intelligent gameplay logic and user interaction. Implemented game state management and win condition detection algorithms.",
      technologies: ["Python", "Game Logic", "User Interaction", "Algorithm Design"],
      icon: Gamepad2,
      category: "Game Development"
    },
    {
      title: "Paper-Scissors-Rock Game",
      description: "Developed a classic rock-paper-scissors game with computer AI opponent. Features random move generation and score tracking with an intuitive user interface.",
      technologies: ["Python", "Random Logic", "Game Development", "User Interface"],
      icon: Gamepad2,
      category: "Game Development"
    },
    {
      title: "Secure Password Generator",
      description: "Created a robust password generation tool with customizable security parameters. Includes options for password length, character sets, and security strength indicators.",
      technologies: ["Python", "Security", "Random Generation", "Cryptography"],
      icon: Lock,
      category: "Security Tool"
    },
    {
      title: "Expense Tracker Web Application",
      description: "Developed a full-stack web application using Python (Django) with HTML, CSS, and JavaScript for personal expense tracking and management. Features include expense categorization and financial reporting.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "Database"],
      icon: DollarSign,
      category: "Full-Stack Web App"
    }
  ];

  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating various programming skills and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-shadow">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Project Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Full-stack development experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Machine learning implementations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">User interface design</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Algorithm optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Database management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Security implementation</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;