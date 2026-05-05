import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import BlurText from '../components/animations/BlurText';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { fetchProjects, fetchExperience, fetchSkills, sendMessage } from '../api/client';
import { motion } from 'framer-motion';

export function Home() {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProjects().then(setProjects).catch(console.error);
    fetchExperience().then(setExperiences).catch(console.error);
    fetchSkills().then(setSkills).catch(console.error);
  }, []);

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    try {
      await sendMessage(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-transparent text-primary selection:bg-white selection:text-black">
      <Navbar />

      {/* OVERFLOW FIX: Changed hidden to clip so sticky positioning works */}
      <main className="max-w-[1440px] mx-auto px-8 md:px-16 pt-32 pb-48 overflow-clip">

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="min-h-[80vh] flex flex-col justify-center gap-8 border-b border-[rgba(255,255,255,0.05)]"
        >
          <div className="max-w-5xl">
            <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-8xl lg:text-[120px] leading-[1.1] font-extrabold tracking-[-0.04em] mb-8">
              ENGINEERING<br />
              <span className="text-secondary">EXCELLENCE.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl md:text-2xl text-secondary max-w-2xl leading-[1.6]">
              Building sophisticated infrastructure and high-end digital experiences for world-class organizations.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="flex gap-4 mt-8">
            <a href="#work"><Button variant="primary">VIEW PROJECTS</Button></a>
            <a href="#contact"><Button variant="secondary">GET IN TOUCH</Button></a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-32">
            <div className="inline-flex items-center gap-3 border border-[rgba(255,255,255,0.1)] rounded-pill px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-secondary tracking-widest uppercase">Available for Work</span>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="mb-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <BlurText
                text="Hi, I'm Dibyajit, a full-stack engineer and system architect."
                delay={100}
                animateBy="words"
                direction="top"
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1.1] text-primary"
              />
            </div>
            <div>
              <BlurText
                text="With a deep focus on performance and structural integrity, I work with companies to create intuitive and highly efficient digital systems."
                delay={50}
                animateBy="words"
                direction="bottom"
                className="font-body text-xl md:text-2xl text-secondary leading-relaxed max-w-lg"
              />
            </div>
          </div>
        </motion.section>

        {/* Selected Works Section */}
        <section
          id="work"
          className="mb-section relative pb-32 mt-12" // Added pb-32 for extra scroll room at the bottom
        >
          {/* THE STICKY BACKGROUND TEXT (Keep this, it's great) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
              <div
                style={{
                  fontSize: 'clamp(6rem, 15vw, 15rem)',
                  lineHeight: 1,
                  fontWeight: 'bold',
                  color: 'var(--color-primary)',
                  mixBlendMode: 'overlay',
                  opacity: 0.08,
                  willChange: 'transform'
                }}
                className="whitespace-nowrap tracking-tighter"
              >
                SELECTED WORK
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <motion.div variants={fadeInUp} className="grid grid-cols-12 gap-2 mb-16">
              <div className="col-span-12 md:col-span-4">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em]">Selected<br />Works</h2>
              </div>
              <div className="col-span-12 md:col-span-8 flex items-end">
                <p className="font-body text-secondary text-lg max-w-xl">
                  A showcase of technically rigorous, design-led applications prioritizing performance and structural integrity.
                </p>
              </div>
            </motion.div>

            {/* THE NEW STICKY CARDS CONTAINER */}
            {projects.length > 0 ? (
              <div className="relative flex flex-col gap-12 mt-24">
                {projects.map((project, index) => {
                  // Calculate dynamic styles based on the index to create the stacking effect

                  // The 'top' offset ensures the title of the card underneath remains visible
                  // Adjust '40px' to whatever offset looks best for your design (e.g., 2rem, 5vh)
                  const topOffset = `calc(10vh + ${index * 40}px)`;

                  // We use Framer Motion to slightly scale down the card as it scrolls up
                  // The viewport margins trigger the scale right before the card hits the top
                  return (
                    <motion.div
                      key={project.id}
                      className="sticky origin-top"
                      style={{ top: topOffset }}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {/* 
                          We wrap the card in another motion div that handles the scaling.
                          As you scroll past this element, it scales down slightly to 0.95 
                      */}
                      <motion.div
                        initial={{ scale: 1, opacity: 1 }}
                        whileInView={{ scale: 0.95, opacity: 0.8 }}
                        viewport={{ margin: "-100% 0px -100% 0px" }} // Triggers when the element hits the absolute top of screen
                        transition={{ duration: 0.5 }}
                      >
                        <Card
                          title={project.title}
                          description={project.description}
                          tags={project.techStack ? project.techStack.split(',').map(s => s.trim()) : []}
                          imageUrl={project.image || "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"}
                          // Adding a slight shadow helps separate the stacked cards
                          className="shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="min-h-[50vh] flex items-center justify-center">
                <p className="font-body text-secondary">Loading projects...</p>
              </div>
            )}
          </div>
        </section>

        {/* Experience Section */}
        <motion.section
          id="approach"
          className="mb-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-12 gap-8 mb-16">
            <motion.div variants={fadeInUp} className="col-span-12 md:col-span-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] sticky top-32">Experience</h2>
            </motion.div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-12">
                {experiences.length > 0 ? experiences.map((exp) => (
                  <motion.div variants={fadeInUp} key={exp.id} className="border-t border-[rgba(255,255,255,0.05)] pt-8 group">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                      <h3 className="font-display text-3xl font-semibold transition-colors group-hover:text-white">{exp.role}</h3>
                      <span className="font-mono text-sm text-secondary">
                        {new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Present'}
                      </span>
                    </div>
                    <h4 className="font-mono text-lg text-primary mb-2">{exp.organization}</h4>
                    <p className="font-body text-secondary text-lg max-w-2xl">{exp.Description || exp.description}</p>
                  </motion.div>
                )) : (
                  <p className="font-body text-secondary border-t border-[rgba(255,255,255,0.05)] pt-8">Loading experience...</p>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-12 gap-8 mb-16">
            <motion.div variants={fadeInUp} className="col-span-12 md:col-span-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] sticky top-32">Skills</h2>
            </motion.div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-12">
                {skills.length > 0 ? Object.entries(
                  skills.reduce((acc, skill) => {
                    const category = skill.category || 'General';
                    if (!acc[category]) acc[category] = [];
                    acc[category].push(skill);
                    return acc;
                  }, {})
                ).map(([category, categorySkills]) => (
                  <motion.div variants={fadeInUp} key={category} className="border-t border-[rgba(255,255,255,0.05)] pt-8">
                    <h3 className="font-mono text-sm uppercase tracking-widest text-secondary mb-6">{category}</h3>
                    <div className="flex flex-wrap gap-4">
                      {categorySkills.map((skill) => (
                        <span key={skill.id} className="font-mono text-sm text-secondary border border-[rgba(255,255,255,0.1)] rounded-pill px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )) : (
                  <p className="font-body text-secondary border-t border-[rgba(255,255,255,0.05)] pt-8">Loading skills...</p>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="mb-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-12 gap-8">
            <motion.div variants={fadeInUp} className="col-span-12 md:col-span-4">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-[-0.02em] sticky top-32">Contact</h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="col-span-12 md:col-span-8">
              <form onSubmit={handleMessageSubmit} className="space-y-6 border-t border-[rgba(255,255,255,0.05)] pt-8 max-w-2xl">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-secondary mb-2 uppercase tracking-widest">Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-surface border border-[rgba(255,255,255,0.1)] rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-secondary mb-2 uppercase tracking-widest">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-surface border border-[rgba(255,255,255,0.1)] rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-mono text-xs text-secondary mb-2 uppercase tracking-widest">Subject</label>
                  <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} className="w-full bg-surface border border-[rgba(255,255,255,0.1)] rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-secondary mb-2 uppercase tracking-widest">Message</label>
                  <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleInputChange} className="w-full bg-surface border border-[rgba(255,255,255,0.1)] rounded-sm px-4 py-3 text-primary focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>
                <Button type="submit" disabled={submitStatus === 'sending'} className="w-full">
                  {submitStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                </Button>
                {submitStatus === 'success' && <p className="text-green-500 font-mono text-xs tracking-widest mt-4">Message sent successfully.</p>}
                {submitStatus === 'error' && <p className="text-red-500 font-mono text-xs tracking-widest mt-4">Failed to send message.</p>}
              </form>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[rgba(255,255,255,0.05)] py-12 px-8 text-center bg-surface">
        <p className="font-mono text-xs text-secondary tracking-widest uppercase">© {new Date().getFullYear()} Monolithic Engineering</p>
      </footer>
    </div>
  );
}