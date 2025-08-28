import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Briefcase, TrendingUp, Code2, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Ncode Infoway",
      position: "Software Development Intern",
      location: "Gandhinagar",
      period: "Feb 2025 - Apr 2025",
      type: "Internship",
      description: [
        "Worked on AI/ML, Data Analytics, and Python-based projects",
        "Gained experience in data visualization and real-world software development",
        "Demonstrated strong problem-solving and analytical skills"
      ],
      technologies: ["Python", "AI/ML", "Data Analytics", "Data Visualization"]
    },
    {
      company: "Codesoft",
      position: "Python Programming Developer Intern",
      location: "Remote",
      period: "Dec 2024 - Jan 2025", 
      type: "Internship",
      description: [
        "Developed Python projects, enhancing problem-solving and algorithmic skills",
        "Gained hands-on experience with data handling, user input, and logical thinking in Python",
        "Worked on various programming challenges and real-world applications"
      ],
      technologies: ["Python", "Algorithms", "Data Structures", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey through innovative internships and hands-on software development experiences
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <TrendingUp className="w-5 h-5 text-primary animate-bounce" />
            <span className="text-primary font-semibold">Growing & Learning</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/50 md:left-1/2 md:-translate-x-0.5 rounded-full opacity-60" />
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent md:left-1/2 md:-translate-x-0.5 rounded-full animate-pulse" />

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-16 md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                {/* Enhanced Timeline dot */}
                <div className="absolute left-5 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 z-20 shadow-lg group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-1 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-60" />
                  <div className="absolute inset-2 flex items-center justify-center">
                    <Code2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-2 border-transparent hover:border-primary/30 card-shadow hover:card-shadow-hover transition-all duration-500 hover:scale-105 group-hover:rotate-1">
                    {/* Card background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <Badge 
                          variant={exp.type === "Internship" ? "secondary" : "default"}
                          className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
                        >
                          <Sparkles className="w-3 h-3 mr-1" />
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        {exp.position}
                      </CardTitle>
                      <div className="space-y-3 mt-4">
                        <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          <div className="p-2 rounded-lg bg-primary/10 mr-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <span className="font-semibold text-lg">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground group-hover:text-accent transition-colors duration-300">
                          <div className="p-2 rounded-lg bg-accent/10 mr-3 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4 mb-6">
                        {exp.description.map((item, idx) => (
                          <div key={idx} className="flex items-start group/item">
                            <div className="relative mt-2 mr-4">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover/item:scale-150 transition-transform duration-300" />
                              <div className="absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-0 group-hover/item:opacity-100" />
                            </div>
                            <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="px-3 py-1 text-xs font-medium border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-br from-card via-primary/5 to-accent/5 border-2 border-primary/20 card-shadow-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                  <TrendingUp className="w-8 h-8 text-primary animate-bounce" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Key Achievements & Impact
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-0 group-hover:opacity-75" />
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Enhanced Problem-Solving Skills</span>
                      <p className="text-sm text-muted-foreground mt-1">Developed critical thinking through complex algorithmic challenges</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-accent/10 hover:to-transparent transition-all duration-300">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent to-primary group-hover:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-accent to-primary animate-ping opacity-0 group-hover:opacity-75" />
                    </div>
                    <div>
                      <span className="font-semibold text-accent">Data Visualization Expertise</span>
                      <p className="text-sm text-muted-foreground mt-1">Mastered tools for creating insightful data representations</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-0 group-hover:opacity-75" />
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Real-World Project Experience</span>
                      <p className="text-sm text-muted-foreground mt-1">Applied theoretical knowledge to practical business solutions</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-accent/10 hover:to-transparent transition-all duration-300">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent to-primary group-hover:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-accent to-primary animate-ping opacity-0 group-hover:opacity-75" />
                    </div>
                    <div>
                      <span className="font-semibold text-accent">Algorithm Implementation</span>
                      <p className="text-sm text-muted-foreground mt-1">Built efficient solutions using advanced algorithmic concepts</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-8 space-x-2">
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }} 
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;