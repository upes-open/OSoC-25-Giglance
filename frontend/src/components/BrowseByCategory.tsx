"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <motion.svg
          key={`full-${i}`}
          className="h-4 w-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: fullStars * 0.1,
            type: "spring",
            stiffness: 200,
          }}
        >
          <svg
            className="h-4 w-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="absolute top-0 left-0 h-4 w-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </motion.div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <motion.svg
          key={`empty-${i}`}
          className="h-4 w-4 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1,
            type: "spring",
            stiffness: 200,
          }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}

      <span className="text-muted-foreground ml-1 text-sm">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
const categories = {
  "Graphics & Design": {
    subcategories: [
      "Logo Design",
      "Brand Style Guides",
      "Game Art",
      "Illustration",
      "Web & Mobile Design",
      "Social Media Design",
    ],
    icon: "🎨",
    color: "from-primary to-primary/70",
    rating: 4.8,
    skillsCount: 1247,
  },
  "Digital Marketing": {
    subcategories: [
      "Social Media Marketing",
      "SEO",
      "Content Marketing",
      "Email Marketing",
      "Video Marketing",
      "Influencer Marketing",
    ],
    icon: "📱",
    color: "from-secondary to-secondary/70",
    rating: 4.7,
    skillsCount: 892,
  },
  "Writing & Translation": {
    subcategories: [
      "Articles & Blog Posts",
      "Translation",
      "Proofreading & Editing",
      "Resume Writing",
      "Technical Writing",
      "Creative Writing",
    ],
    icon: "✍️",
    color: "from-accent to-accent/70",
    rating: 4.6,
    skillsCount: 634,
  },
  "Video & Animation": {
    subcategories: [
      "Video Editing",
      "Short Video Ads",
      "Animated Explainers",
      "Logo Animation",
      "Intros & Outros",
      "Character Animation",
    ],
    icon: "🎬",
    color: "from-destructive to-destructive/70",
    rating: 4.9,
    skillsCount: 759,
  },
  "Music & Audio": {
    subcategories: [
      "Voice Over",
      "Mixing & Mastering",
      "Podcast Editing",
      "Music Production",
      "Audiobook Production",
    ],
    icon: "🎵",
    color: "from-primary to-secondary",
    rating: 4.5,
    skillsCount: 423,
  },
  "Programming & Tech": {
    subcategories: [
      "Website Development",
      "Mobile App Development",
      "E-Commerce Development",
      "WordPress",
      "Game Development",
      "Cybersecurity",
    ],
    icon: "💻",
    color: "from-foreground to-foreground/70",
    rating: 4.8,
    skillsCount: 1563,
  },
  Business: {
    subcategories: [
      "Virtual Assistant",
      "Data Entry",
      "Market Research",
      "Business Plans",
      "Project Management",
    ],
    icon: "💼",
    color: "from-muted-foreground to-muted-foreground/70",
    rating: 4.4,
    skillsCount: 567,
  },
  Lifestyle: {
    subcategories: [
      "Online Tutoring",
      "Fitness Lessons",
      "Cooking Lessons",
      "Life Coaching",
      "Travel Planning",
    ],
    icon: "🌟",
    color: "from-accent to-primary",
    rating: 4.3,
    skillsCount: 389,
  },
  "Data Science & Analytics": {
    subcategories: [
      "Data Analysis",
      "Data Visualization",
      "Machine Learning",
      "Data Engineering",
      "Data Mining",
      "Statistical Analysis",
    ],
    icon: "📊",
    color: "from-secondary to-accent",
    rating: 4.7,
    skillsCount: 892,
  },
};

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animation variants for individual cards
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      duration: 0.8,
    },
  },
};

// Hover animation variants
const hoverVariants = {
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 400,
    },
  },
};

const BrowseByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (category: string) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const handleSubcategoryClick = (subcategory: string) => {
    const searchQuery = subcategory.replace(/\s+/g, "+");
    window.location.href = `/?searchQuery=${searchQuery}`;
    handleCloseModal();
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* Header Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="mb-4 text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {"Browse by Category".split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="from-foreground via-primary to-foreground mr-3 inline-block bg-gradient-to-r bg-clip-text text-transparent"
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {"Discover amazing opportunities across different fields and find the perfect match for your skills"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                className="mr-2 inline-block"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.05,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {word}
              </motion.span>
            ))}
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Object.entries(categories).map(
          (
            [category, { subcategories, icon, color, rating, skillsCount }],
            index,
          ) => (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="group touch-manipulation"
            >
              <motion.div
                variants={hoverVariants}
                className="relative h-full cursor-pointer touch-manipulation"
                onClick={() => handleCardClick(category)}
              >
                <Card className="from-background to-secondary/10 group-hover:from-secondary/5 group-hover:to-secondary/20 group-active:from-secondary/5 group-active:to-secondary/20 relative h-full overflow-hidden border-0 bg-gradient-to-br shadow-lg transition-all duration-300 hover:shadow-2xl active:shadow-xl">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-10 group-active:opacity-10`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    whileTap={{ opacity: 0.1 }}
                  />

                  {/* Animated icon background */}
                  <motion.div
                    className="absolute top-0 right-0 h-20 w-20 overflow-hidden opacity-5 transition-opacity duration-300 group-hover:opacity-20 group-active:opacity-20"
                    initial={{ opacity: 0.05 }}
                    whileHover={{ opacity: 0.2 }}
                    whileTap={{ opacity: 0.2 }}
                  >
                    <motion.div
                      className="translate-x-4 -translate-y-4 transform text-6xl grayscale transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125 group-hover:rotate-12 group-hover:grayscale-0 group-active:translate-x-2 group-active:-translate-y-2 group-active:scale-125 group-active:rotate-12 group-active:grayscale-0"
                      style={{
                        filter: "brightness(0.8) contrast(1.2)",
                      }}
                      transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 400,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 12,
                        transition: {
                          type: "spring",
                          damping: 10,
                          stiffness: 400,
                        },
                      }}
                      whileTap={{
                        scale: 1.1,
                        rotate: 8,
                        transition: {
                          type: "spring",
                          damping: 10,
                          stiffness: 400,
                        },
                      }}
                    >
                      {icon}
                    </motion.div>
                  </motion.div>

                  {/* Floating particles effect */}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ opacity: 1 }}
                  >
                    {Array.from({ length: 3 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="bg-primary/30 absolute h-1 w-1 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${10 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Shimmer effect - Now covers the entire card */}
                  <motion.div
                    className="via-primary/10 pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 group-hover:translate-x-full group-active:translate-x-full"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    whileTap={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />

                  <CardContent className="relative z-10 flex h-full flex-col p-6">
                    <motion.div
                      className="mb-4 flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <motion.span
                        className="text-2xl grayscale transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:brightness-110 group-hover:contrast-125 group-hover:grayscale-0 group-active:scale-110 group-active:rotate-12 group-active:brightness-110 group-active:contrast-125 group-active:grayscale-0"
                        transition={{
                          type: "spring",
                          damping: 10,
                          stiffness: 400,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 12,
                          transition: {
                            type: "spring",
                            damping: 10,
                            stiffness: 400,
                          },
                        }}
                        whileTap={{
                          scale: 1.05,
                          rotate: 8,
                          transition: {
                            type: "spring",
                            damping: 10,
                            stiffness: 400,
                          },
                        }}
                      >
                        {icon}
                      </motion.span>
                      <motion.h3
                        className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent"
                        whileHover={{
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 400 },
                        }}
                      >
                        {category}
                      </motion.h3>
                    </motion.div>

                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <motion.p
                        className="text-muted-foreground group-hover:text-foreground/80 group-active:text-foreground/80 mb-4 text-sm leading-relaxed transition-colors duration-300"
                        whileHover={{
                          scale: 1.01,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        whileTap={{
                          scale: 0.99,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                      >
                        {subcategories.join(" • ")}
                      </motion.p>

                      {/* Rating and Skills Count */}
                      <motion.div
                        className="mt-auto flex items-center justify-between"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <StarRating rating={rating} />
                        </motion.div>

                        <motion.div
                          className="text-muted-foreground bg-secondary/50 group-hover:bg-secondary/70 group-active:bg-secondary/70 rounded-full px-2 py-1 text-xs font-medium transition-colors duration-300"
                          whileHover={{
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                          whileTap={{
                            scale: 0.95,
                            transition: { type: "spring", stiffness: 300 },
                          }}
                        >
                          {skillsCount.toLocaleString()} skills
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Hover indicator */}
                    <motion.div
                      className="from-primary to-primary/50 absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      whileTap={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ),
        )}
      </motion.div>

      {/* Subcategory Selection Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCategory && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-background max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-xl border shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="border-border border-b p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {
                        categories[selectedCategory as keyof typeof categories]
                          ?.icon
                      }
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCategory}</h2>
                      <p className="text-muted-foreground">
                        Choose a subcategory to explore
                      </p>
                    </div>
                  </div>
                  <motion.button
                    className="hover:bg-secondary rounded-lg p-2 transition-colors"
                    onClick={handleCloseModal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="max-h-[60vh] overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {categories[
                    selectedCategory as keyof typeof categories
                  ]?.subcategories.map((subcategory, index) => (
                    <motion.button
                      key={subcategory}
                      className="border-border hover:border-primary hover:bg-primary/5 group rounded-lg border p-4 text-left transition-all duration-200"
                      onClick={() => handleSubcategoryClick(subcategory)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="group-hover:text-primary font-medium transition-colors">
                          {subcategory}
                        </span>
                        <motion.div
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <svg
                            className="text-primary h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-border bg-secondary/20 border-t p-6">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-sm">
                    {
                      categories[selectedCategory as keyof typeof categories]
                        ?.subcategories.length
                    }{" "}
                    subcategories available
                  </p>
                  <motion.button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 transition-colors"
                    onClick={handleCloseModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BrowseByCategory;
