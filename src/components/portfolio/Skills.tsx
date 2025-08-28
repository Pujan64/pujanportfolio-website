import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Users, Lightbulb, Star, Award, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "HTML & CSS", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git & GitHub", level: 85 },
    { name: "Pandas", level: 80 },
    { name: "Matplotlib", level: 75 }
  ];

  const tools = [
    "Visual Studio Code",
    "Git & GitHub",
    "Excel",
    "PowerPoint",
    "MongoDB Compass"
  ];

  const softSkills = [
    "Excellent Communication",
    "Teamwork & Collaboration", 
    "Problem-Solving",
    "Creativity & Innovation",
    "Analytical Thinking",
    "Time Management"
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of my technical prowess and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-transparent hover:border-primary/20 card-shadow hover:card-shadow-hover transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg">Programming Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3 group/skill">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary/70" />
                      <span>{skill.name}</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < Math.floor(skill.level / 20) ? 'bg-primary' : 'bg-muted'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary-glow to-accent rounded-full transition-all duration-2000 ease-out group-hover/skill:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    />
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-shimmer"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-transparent hover:border-accent/20 card-shadow hover:card-shadow-hover transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-6 h-6 text-accent" />
                </div>
                <span className="text-lg">Tools & Platforms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-secondary to-secondary/80 hover:from-primary hover:to-accent hover:text-primary-foreground transform hover:scale-110 transition-all duration-300 cursor-default shadow-md hover:shadow-lg border border-border/50 hover:border-transparent"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-transparent hover:border-primary/20 card-shadow hover:card-shadow-hover transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg">Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="group/item flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent group-hover/item:scale-125 transition-transform duration-300" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-0 group-hover/item:opacity-75" />
                    </div>
                    <span className="text-sm font-medium group-hover/item:text-primary transition-colors duration-300">{skill}</span>
                    <Award className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors duration-300 ml-auto opacity-0 group-hover/item:opacity-100" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-3xl mx-auto relative overflow-hidden bg-gradient-to-br from-card via-primary/5 to-accent/5 border-2 border-primary/20 card-shadow-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-pulse" />
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="relative">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-bounce">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute inset-0 p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-ping opacity-50" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Always Learning & Growing
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about continuous learning and staying at the forefront of technology. 
                Currently exploring <span className="text-primary font-semibold">advanced web development frameworks</span>, 
                <span className="text-accent font-semibold"> cloud technologies</span>, and 
                <span className="text-primary font-semibold"> emerging AI/ML trends</span> to deliver cutting-edge solutions.
              </p>
              <div className="flex justify-center mt-6 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;