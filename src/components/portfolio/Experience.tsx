import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

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
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 z-10" />
                
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="card-shadow hover:card-shadow-hover transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <Badge variant={exp.type === "Internship" ? "secondary" : "default"}>
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <div className="space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
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

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-shadow">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Enhanced problem-solving skills</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Data visualization expertise</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Real-world project experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Algorithm implementation</span>
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

export default Experience;