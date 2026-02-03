import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Briefcase, Code2, Award, Rocket, Terminal, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Portfolio() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const experiences = [{
    role: "ASAU Computer Lab Assistant",
    company: "Carleton University",
    date: "Sept 2025 – Present",
    bullets: [
      "Delivered frontline technical support across university computer labs, diagnosing OS-level, hardware, and application issues in real time.",
      "Maintained and reimaged lab workstations, ensuring system stability, software consistency, and minimal downtime for hundreds of users.",
      "Assisted with networking tasks including cable mapping, connectivity troubleshooting, and basic server maintenance."
    ]
  }, {
    role: "Warehouse Associate",
    company: "Amazon",
    date: "Sept 2022 – Apr 2023",
    bullets: [
      "Operated handheld scanners and warehouse management systems (WMS) to track inventory with strict accuracy and throughput requirements.",
      "Worked within highly optimized logistics pipelines, following safety protocols and performance metrics in a time-critical environment.",
      "Collaborated within large, distributed teams to ensure real-time data integrity across inbound and outbound operations."
    ]
  }];

  const projects = [{
    title: "HinLIBS – Library Management System",
    date: "Sept 2025 – Dec 2025",
    bullets: [
      "Led a 4-person team to architect and build a full-stack Qt + SQLite application supporting end-to-end library operations.",
      "Implemented secure authentication, role-based access control, transactional borrowing workflows, fines, audit logs, and administrative reporting.",
      "Designed the system with fault tolerance, data integrity, and privacy compliance in mind."
    ],
    tech: ["Qt", "SQLite", "C++", "Linux"]
  }, {
    title: "Shift Grabber Automation",
    date: "July 2025 – Aug 2025",
    bullets: [
      "Developed a Python-based automation system to monitor an external API and capture work shifts in near real time.",
      "Implemented secure authentication, scheduled polling at 7-second intervals, and robust error handling.",
      "Optimized performance and reliability to ensure consistent low-latency execution."
    ],
    tech: ["Python", "API", "Automation"]
  }, {
    title: "House Price Predictor",
    date: "May 2025 – Jun 2025",
    bullets: [
      "Built an end-to-end machine learning pipeline using scikit-learn for preprocessing, feature engineering, and training.",
      "Experimented with multiple regression models and ensemble techniques to improve predictive accuracy.",
      "Evaluated model performance using statistical metrics and iterative tuning."
    ],
    tech: ["Python", "ML", "scikit-learn"]
  }];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-gradient-to-r from-orange-500 to-transparent" />
              <span className="text-orange-500 font-mono text-sm tracking-wider uppercase">
                Portfolio 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-8xl md:text-9xl font-black tracking-tighter"
            >
              <span className="block">Huzaifas</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                Khan
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl space-y-4"
            >
              <p className="text-2xl text-zinc-400 leading-relaxed">
                Computer Science architect building{" "}
                <span className="text-orange-500 font-semibold">production-grade systems</span>,{" "}
                <span className="text-amber-500 font-semibold">intelligent automation</span>, and{" "}
                <span className="text-yellow-500 font-semibold">software that performs</span> under pressure.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Button 
                onClick={() => window.location.href = 'mailto:your.huzaifaikhaan@gmail.com'}
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-8 py-6 text-lg rounded-none font-semibold border-0 shadow-2xl shadow-orange-600/50 group cursor-pointer"
              >
                <Mail className="mr-2" />
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/huzaifaikhan', '_blank')}
                variant="outline" 
                className="border-2 border-orange-500/50 text-orange-500 hover:bg-orange-500/10 px-8 py-6 text-lg rounded-none font-semibold cursor-pointer"
              >
                <Linkedin className="mr-2" />
                LinkedIn
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-12 max-w-2xl"
            >
              {[
                { value: "2026", label: "Graduation" },
                { value: "5+", label: "Projects" },
                { value: "9+", label: "Technologies" }
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-orange-500/50 pl-4">
                  <div className="text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <Terminal className="w-8 h-8 text-orange-500" />
              <h2 className="text-6xl font-black">About</h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-transparent" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                <p>
                  I'm a Computer Science student at <span className="text-orange-500 font-bold">Carleton University</span>, 
                  graduating October 2026. My work spans the full spectrum—from low-level system architecture to 
                  intelligent automation and scalable applications.
                </p>
                <p>
                  I obsess over <span className="text-amber-500 font-bold">correctness</span>, 
                  demand <span className="text-yellow-500 font-bold">performance</span>, and build 
                  software that doesn't collapse when it hits production.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: Code2, text: "Systems Architecture" },
                  { icon: Zap, text: "Performance Tuning" },
                  { icon: Rocket, text: "Automation" },
                  { icon: Award, text: "Best Practices" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-4 border-l-2 border-orange-500/50 bg-zinc-900/50"
                  >
                    <item.icon className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-zinc-900 border-l-4 border-orange-500 p-10 space-y-6 shadow-2xl shadow-orange-600/10">
                {[
                  { label: "University", value: "Carleton University" },
                  { label: "Program", value: "B.S. Computer Science" },
                  { label: "Graduation", value: "October 2026" },
                  { label: "Status", value: "Canadian Citizen" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-zinc-800 pb-4 last:border-0"
                  >
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE - ZIGZAG TIMELINE */}
      <section className="py-32 px-6 relative bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-orange-500" />
              <h2 className="text-6xl font-black">Experience</h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-transparent mx-auto" />
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500 transform -translate-x-1/2 hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-32">
              {experiences.map((exp, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`relative grid lg:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'lg:grid-flow-dense'}`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10"
                      whileHover={{ scale: 1.5 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-zinc-950 shadow-xl shadow-orange-500/50" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-orange-500"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Content Card */}
                    <div className={`lg:col-start-${isLeft ? '1' : '2'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-zinc-900 border-l-4 border-orange-500 p-8 shadow-2xl shadow-orange-600/10 relative group"
                      >
                        {/* Connection Line */}
                        <div className={`hidden lg:block absolute top-1/2 ${isLeft ? 'left-full' : 'right-full'} w-8 h-1 bg-gradient-to-${isLeft ? 'r' : 'l'} from-orange-500 to-transparent`} />
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-3xl font-black text-white mb-2">{exp.role}</h3>
                            <div className="flex items-center gap-3 text-orange-500">
                              <span className="font-bold">{exp.company}</span>
                              <span className="text-zinc-600">•</span>
                              <span className="text-zinc-400">{exp.date}</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {exp.bullets.map((bullet, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: j * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                <p className="text-zinc-300">{bullet}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className={`hidden lg:block lg:col-start-${isLeft ? '2' : '1'}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS - ZIGZAG TIMELINE */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Code2 className="w-8 h-8 text-orange-500" />
              <h2 className="text-6xl font-black">Projects</h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-transparent mx-auto" />
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-amber-500 to-orange-500 transform -translate-x-1/2 hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-32">
              {projects.map((proj, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`relative grid lg:grid-cols-2 gap-8 items-center ${isLeft ? '' : 'lg:grid-flow-dense'}`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-6 h-6 rotate-45 bg-amber-500 border-4 border-zinc-950 shadow-xl shadow-amber-500/50" />
                      <motion.div
                        className="absolute inset-0 rotate-45 bg-amber-500"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Content Card */}
                    <div className={`lg:col-start-${isLeft ? '1' : '2'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-zinc-900 border-l-4 border-amber-500 p-8 shadow-2xl shadow-amber-600/10 relative group"
                      >
                        {/* Connection Line */}
                        <div className={`hidden lg:block absolute top-1/2 ${isLeft ? 'left-full' : 'right-full'} w-8 h-1 bg-gradient-to-${isLeft ? 'r' : 'l'} from-amber-500 to-transparent`} />
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-3xl font-black text-white mb-2">{proj.title}</h3>
                            <div className="text-zinc-400">{proj.date}</div>
                          </div>

                          <div className="space-y-3">
                            {proj.bullets.map((bullet, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: j * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                <p className="text-zinc-300">{bullet}</p>
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2 pt-4">
                            {proj.tech.map((tech, j) => (
                              <span
                                key={j}
                                className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold uppercase tracking-wider"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className={`hidden lg:block lg:col-start-${isLeft ? '2' : '1'}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-orange-500" />
              <h2 className="text-6xl font-black">Skills</h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Java", "Python", "C++", "C", "Haskell", "SQL", "HTML/CSS", "MATLAB", "Git", "Qt", "SQLite", "Linux"].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: "rgb(249, 115, 22)" }}
                className="bg-zinc-900 border-2 border-zinc-800 p-6 text-center font-bold text-lg hover:bg-zinc-800 transition-all cursor-default"
              >
                <span className="text-white">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-zinc-500">
            © {new Date().getFullYear()} Huzaifa Khan
          </div>
          <div className="text-orange-500 font-bold uppercase tracking-wider text-sm">
            Built for Impact
          </div>
        </div>
      </footer>
    </div>
  );
}