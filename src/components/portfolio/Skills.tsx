import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Users, Lightbulb } from "lucide-react";

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
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and soft skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <span>Programming Languages</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full tech-gradient rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <span>Tools & Platforms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span>Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Always Learning</h3>
              </div>
              <p className="text-muted-foreground">
                I'm constantly expanding my skill set and staying updated with the latest technologies and industry best practices. 
                Currently exploring advanced web development frameworks and cloud technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;