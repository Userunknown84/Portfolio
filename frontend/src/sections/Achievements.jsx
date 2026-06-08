import React from "react";

const achievements = [
{
image: "/assets/Achievments/JavaDsa.png",
title: "Java DSA",
},
{
image: "/assets/Achievments/FullStack.png",
title: " Full Stack",
},
{
image: "/assets/Achievments/ByteSize_Sage_Al_Hackathon_.png",
title: "Byte Size Ai Hackathon",
},
{
image: "/assets/Achievments/Zomato.png",
title: "Zomato The Data Hackathon",
},
{
image: "/assets/Achievments/aws-academy-graduate-aws-academy-cloud-foundations.png",
title: "AWS Academy",
},
{
image: "/assets/Achievments/AWS.png",
title: "AWS Academy Cloud Foundations",
},
{
image: "/assets/Achievments/AWS2.png",
title: "AWS Academy Microserves CI/CD Pipeline Builder",
},
{
image: "/assets/Achievments/BRIDGE Campus Learning Series - Thank you badge_Audit Intelligence.png",
title: "Deliote Bridge Course",
},
{
image: "/assets/Achievments/introduction-to-modern-ai.png",
title: "Introduction To Modern Ai",
},
{
image: "/assets/Achievments/introduction-to-data-science.png",
title: "Introduction To Data Science",
},
{
image: "/assets/Achievments/TataCrudle.jpg",
title: "Tata Crudle",
},
{
image: "/assets/Achievments/Unstop certificate.jpg",
title: "Unstop Certificate",
},
{
image: "/assets/Achievments/Pregrad.png",
title: "Pregrad Certification",
},
{
image: "/assets/Achievments/CloudToCrowd.png",
title: "Cloud To Crowd:Introduction for Media IQ",
},
{
image: "/assets/Achievments/GitHub_Portfolio_Analyzer_&_Enhancer_Hackathon.png",
title: "Github Portfolio Analyzer",
},
{
image: "/assets/Achievments/Hcl.png",
title: "Hcl Vibe Coding",
},
];

export default function Achievements() {
return ( <section
   id="achievements"
   className="relative min-h-screen overflow-hidden py-32"
 >
{/* Background */} <div className="absolute inset-0"> <img
       src="/hero-bg.jpg"
       alt="Achievements background"
       className="w-full h-full object-cover opacity-40"
     /> <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" /> </div>

  {/* Floating Dots */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
        style={{
          backgroundColor: "#20B2A6",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `slow-drift ${
            15 + Math.random() * 20
          }s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>

  {/* Content */}
  <div className="container mx-auto px-6 relative z-10">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h1 className="text-5xl md:text-6xl font-bold">
        My <span className="text-primary glow-text">Achievements</span>
      </h1>

      <p className="text-muted-foreground mt-4">
        Certifications, open-source contributions, coding milestones,
        and technical accomplishments.
      </p>
    </div>

    {/* Achievement Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {achievements.map((item, idx) => (
        <div
          key={idx}
          className="glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 border border-primary/20"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={item.image}
            alt={item.title}
            draggable="false"
            className="w-full h-56 object-cover select-none pointer-events-none"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}
