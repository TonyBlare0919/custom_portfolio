"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Creative and innovative{" "}
          <span className="text-white">AI & Full Stack Engineer</span> with 7+
          years of experience building everything from{" "}
          <span className="text-white">AI-driven fraud detection systems</span>
          to{" "}
          <span className="text-white">high-performance web applications</span>.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Skilled in Python, Django, FastAPI, React, Next.js, and Redux, I love
          solving complex problems with simple, elegant solutions (and
          occasionally <span className="text-white">too much coffee</span> ☕) .
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Known for improving performance, streamlining systems, and turning
          ambitious ideas into production-ready software, I see myself not just
          as a developer but as a{" "}
          <span className="text-white">partner who grows with the company</span>
          . Always curious, always learning, and never afraid to try something
          new if it means pushing the boundaries of what’s possible.
        </p>
      </div>
    </section>
  );
}
