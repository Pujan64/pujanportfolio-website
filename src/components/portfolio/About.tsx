import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and journey in software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Engineering</h3>
                  <p className="text-muted-foreground mb-3">Silver Oak University</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2022 - 2026</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Ahmedabad, India</span>
                    </div>
                    <div className="mt-3 p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm font-medium text-primary">CGPA: 9.42</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Higher Secondary & Secondary</h3>
                  <p className="text-muted-foreground mb-3">Madhav International School</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2018 - 2022</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Ahmedabad, India</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="p-2 bg-primary/5 rounded">
                        <p className="text-sm"><span className="font-medium">HSC:</span> 60%</p>
                      </div>
                      <div className="p-2 bg-primary/5 rounded">
                        <p className="text-sm"><span className="font-medium">SSC:</span> 75%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a dedicated Computer Engineering student with a passion for software development and problem-solving. 
            My journey includes hands-on experience with various programming languages and technologies, 
            complemented by strong soft skills in communication, teamwork, and innovation. 
            I believe in continuous learning and staying updated with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;