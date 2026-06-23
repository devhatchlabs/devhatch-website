"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Construction,
  ExternalLink,
  Layers,
} from "lucide-react";
import { useState } from "react";

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.37-1.34-3.37-1.34-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.944 0-1.092.39-1.985 1.029-2.685-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.58 9.58 0 0 1 12 6.756a9.56 9.56 0 0 1 2.504.337c1.909-1.295 2.748-1.026 2.748-1.026.546 1.377.203 2.394.1 2.647.64.7 1.027 1.593 1.027 2.685 0 3.843-2.339 4.688-4.566 4.936.359.31.678.92.678 1.854 0 1.338-.012 2.418-.012 2.747 0 .269.18.58.688.482A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const projects = [
  {
    title: "Grocery Store Platform",
    description:
      "A full-stack grocery delivery platform with product browsing, authentication, admin controls, cart, wishlist, reviews, order tracking, and recommendations.",
    category: "Full Stack",
    image: "/projects/grocery.jpg",
    tags: ["Python", "Flask", "MySQL", "Chart.js"],
    featured: true,
    metrics: "Flask + MySQL · bcrypt authentication",
    live: "https://grocery-store-website-orpin.vercel.app",
    github: "https://github.com/Sara12-2/Grocery_Store_Website-",
  },
  {
    title: "Smart Cafeteria",
    description:
      "A role-based food ordering system with menu management, order handling, dashboard controls, and analytics for smoother cafeteria operations.",
    category: "Full Stack",
    image: "/projects/cafeteria.jpg",
    tags: ["Flask", "MySQL", "Bootstrap", "jQuery"],
    featured: false,
    metrics: "Role-based access · Order management",
    live: null,
    github: "https://github.com/Sara12-2/Smart_Cafeteria_Full_Stack_Website",
  },
  {
    title: "Smart Retail Shelf",
    description:
      "A computer-vision shelf monitoring system built to identify inventory items and support automated stock monitoring workflows.",
    category: "AI / ML",
    image: "/projects/retail.jpg",
    tags: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    featured: true,
    metrics: "YOLOv8 · Inventory monitoring",
    live: null,
    github: "https://github.com/Sara12-2/smart_retail_shelf_system",
  },
  {
    title: "ASL Recognition",
    description:
      "A real-time American Sign Language recognition prototype using computer vision and a CNN-based classification workflow.",
    category: "AI / ML",
    image: "/projects/asl.jpg",
    tags: ["TensorFlow", "Keras", "CNN", "OpenCV"],
    featured: false,
    metrics: "CNN · Real-time inference workflow",
    live: null,
    github: "https://github.com/Sara12-2/ASL_Sign_Language_Recognition",
  },
  {
    title: "SwiftEats",
    description:
      "A responsive food delivery website featuring menu filtering, an FAQ accordion, notifications, and smooth interactions.",
    category: "Web",
    image: "/projects/swifteats.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    featured: false,
    metrics: "Responsive UI · Vanilla JavaScript",
    live: "https://restaurant-food-delivery-website-la.vercel.app",
    github:
      "https://github.com/Sara12-2/Swifteats_Premium_food_delievery_landing_page",
  },
  {
    title: "TechNest",
    description:
      "A React e-commerce experience with product search, cart and wishlist logic, theme switching, and local storage persistence.",
    category: "React",
    image: "/projects/technest.jpg",
    tags: ["React", "Vite", "Framer Motion"],
    featured: false,
    metrics: "React · Local storage persistence",
    live: null,
    github: "https://github.com/Sara12-2/TechNest_Ecommerce_Website",
  },
  {
    title: "Luxe Commerce",
    description:
      "A premium e-commerce interface designed around polished product presentation, responsive browsing, and a modern shopping experience.",
    category: "E-commerce",
    image: "/projects/luxestate.jpg",
    tags: ["E-commerce", "Responsive UI", "Product Showcase"],
    featured: false,
    metrics: "Premium storefront · Clean product browsing",
    live: null,
    github: null,
  },
  {
    title: "Watch Store",
    description:
      "A product-focused watch showcase created to present collections, key product details, and a clean digital shopping interface.",
    category: "E-commerce",
    image: "/projects/watch.jpg",
    tags: ["Product UI", "Responsive Design", "E-commerce"],
    featured: false,
    metrics: "Product showcase · Modern storefront",
    live: null,
    github: null,
  },
];

const filters = [
  "All",
  "Full Stack",
  "AI / ML",
  "Web",
  "React",
  "E-commerce",
  "Upcoming",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCount = (filter: string) => {
    if (filter === "All") return projects.length;
    if (filter === "Upcoming") return null;

    return projects.filter((project) => project.category === filter).length;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pb-28 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(23,105,255,0.11),transparent_62%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#14C8E8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-[48%] h-80 w-80 rounded-full bg-[#6D4AFF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <section className="max-w-3xl border-b border-[#D9E6FA] pb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9E6FA] bg-[#EEF5FF] px-4 py-1.5 text-xs font-bold text-[#1769FF]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1769FF] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1769FF]" />
            </span>
            Selected Team Builds
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#061A45] sm:text-5xl lg:text-6xl"
          >
            Work built to solve
            <br />
            <span className="bg-gradient-to-r from-[#1769FF] via-[#159FE8] to-[#6D4AFF] bg-clip-text text-transparent">
              practical business problems.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-5 max-w-2xl text-base leading-relaxed text-[#61708A] sm:text-lg"
          >
            A selection of web, full-stack, and AI-focused projects created by
            the DevHatch Labs team. Each build reflects our approach to useful,
            user-focused technology.
          </motion.p>
        </section>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-9 flex flex-wrap gap-2 border-b border-[#D9E6FA] pb-8"
        >
          {filters.map((filter) => {
            const count = getCount(filter);
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all ${
                  isActive
                    ? "border-[#1769FF] bg-[#1769FF] text-white shadow-[0_10px_24px_rgba(23,105,255,0.24)]"
                    : filter === "Upcoming"
                      ? "border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100"
                      : "border-[#D9E6FA] bg-white text-[#61708A] hover:border-[#1769FF]/40 hover:text-[#1769FF]"
                }`}
              >
                {filter === "Upcoming" && (
                  <Construction className="h-3.5 w-3.5" />
                )}

                {filter}

                {count !== null && (
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#EEF5FF] text-[#61708A]"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        <section className="mt-10">
          <AnimatePresence mode="wait">
            {activeFilter === "Upcoming" ? (
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex min-h-[330px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#D9E6FA] bg-[#F8FBFF] px-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1769FF]/10 text-[#1769FF]">
                  <Layers
                    className="h-6 w-6 animate-spin"
                    style={{ animationDuration: "6s" }}
                  />
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#061A45]">
                  More projects are in progress.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#61708A]">
                  We are continuously building new AI systems, automation
                  workflows, and custom web applications for future releases.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {visibleProjects.map((project, index) => (
                  <motion.article
                    key={project.title}
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={index * 0.08}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#D9E6FA] bg-white p-5 shadow-[0_8px_30px_rgba(23,105,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1769FF]/45 hover:shadow-[0_20px_44px_rgba(23,105,255,0.14)]"
                  >
                    <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-2xl border border-[#D9E6FA] bg-[#EEF5FF]">
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#061A45]/75 via-transparent to-transparent" />

                      <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#061A45]/45 text-[10px] font-bold text-white backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-[#061A45]/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                        {project.category}
                      </span>

                      {project.featured && (
                        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#1769FF] shadow-lg">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="text-lg font-bold text-[#061A45] transition-colors group-hover:text-[#1769FF]">
                          {project.title}
                        </h2>

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="rounded-lg border border-[#D9E6FA] p-2 text-[#61708A] transition hover:border-[#1769FF]/40 hover:bg-[#EEF5FF] hover:text-[#1769FF]"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-[#61708A]">
                        {project.description}
                      </p>

                      <div className="mt-5 border-t border-[#D9E6FA] pt-4">
                        <p className="font-mono text-[10px] text-[#61708A]">
                          {project.metrics}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-[#D9E6FA] bg-[#F8FBFF] px-2 py-1 font-mono text-[10px] text-[#61708A]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] transition hover:gap-2"
                            >
                              Live demo
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#61708A] transition hover:text-[#1769FF]"
                            >
                              <GitHubIcon className="h-4 w-4" />
                              View code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={0}
          className="mt-24 rounded-3xl border border-[#D9E6FA] bg-gradient-to-br from-[#061A45] via-[#0A2D70] to-[#1769FF] px-6 py-12 text-center shadow-[0_20px_55px_rgba(23,105,255,0.22)] sm:px-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#14C8E8]">
            Your idea can be next
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Ready to build a smarter digital system?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            Let’s discuss your AI automation, website, dashboard, or custom
            software idea and turn it into a practical solution.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1769FF] transition hover:-translate-y-0.5 hover:bg-[#EEF5FF] hover:shadow-xl"
          >
            Start Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.section>
      </div>
    </main>
  );
}