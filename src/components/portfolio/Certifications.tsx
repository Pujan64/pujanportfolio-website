import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, BarChart3, Cloud, Building2, TrendingUp } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Certificate",
      provider: "Google | Coursera",
      description: "Developed strong data analysis skills, including data cleaning, visualization, and drawing meaningful insights from real-world datasets. Learned to use industry-standard tools and techniques for data-driven decision making.",
      skills: ["Data Cleaning", "Data Visualization", "Statistical Analysis", "Business Intelligence"],
      icon: BarChart3,
      category: "Data Analytics",
      link: "https://coursera.org/verify/professional-cert/your-cert-id"
    },
    {
      title: "AWS Academy Certificate",
      provider: "Amazon Web Services",
      description: "Completed comprehensive training that provided in-depth knowledge of cloud computing concepts, AWS service offerings, deployment models, and cloud security best practices.",
      skills: ["Cloud Computing", "AWS Services", "Cloud Architecture", "Security Best Practices"],
      icon: Cloud,
      category: "Cloud Computing",
      link: "https://aws.amazon.com/academy/"
    },
    {
      title: "JPMorgan Chase & Co. Virtual Internship",
      provider: "JPMorgan Chase & Co.",
      description: "Gained practical experience in financial technology, software development practices in banking sector, and understanding of enterprise-level application development and deployment.",
      skills: ["Financial Technology", "Enterprise Development", "Banking Systems", "Software Engineering"],
      icon: Building2,
      category: "FinTech",
      link: "https://www.theforage.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/Software%20Engineering%20Virtual%20Experience"
    },
    {
      title: "Accenture Data Analytics & Visualization Virtual Internship",
      provider: "Accenture",
      description: "Enhanced skills in data analytics, visualization techniques, and business consulting. Learned to present data insights effectively and make strategic recommendations based on analytical findings.",
      skills: ["Data Analytics", "Data Visualization", "Business Consulting", "Strategic Analysis"],
      icon: TrendingUp,
      category: "Analytics & Consulting",
      link: "https://www.theforage.com/virtual-internships/prototype/hzmoNKtzvAzXsEqx8/Data%20Analytics%20Virtual%20Experience"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and virtual internships that enhance my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-medium">
                    {cert.provider}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                These certifications represent my commitment to continuous learning and professional development. 
                I regularly pursue new learning opportunities to stay current with industry trends and technologies.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Industry-recognized certifications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Hands-on project experience</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Real-world application skills</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    <span className="text-sm">Professional development focus</span>
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

export default Certifications;