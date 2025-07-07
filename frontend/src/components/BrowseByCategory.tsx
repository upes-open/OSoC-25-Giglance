"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { categories } from "@/data/constants";
import { StarRating } from "./ui/star-rating";
import {
  containerVariants,
  cardVariants,
  hoverVariants,
  wordAnimationVariants,
  iconAnimationVariants,
  modalVariants,
  buttonAnimationVariants,
  effectVariants,
} from "@/lib/animations";

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
              whileHover={wordAnimationVariants.title.whileHover}
              initial={wordAnimationVariants.title.initial}
              animate={wordAnimationVariants.title.animate}
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
                whileHover={wordAnimationVariants.subtitle.whileHover}
                initial={wordAnimationVariants.subtitle.initial}
                animate={wordAnimationVariants.subtitle.animate}
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

      <motion.div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
                        animate={effectVariants.particles.animate}
                        transition={{
                          ...effectVariants.particles.transition,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Shimmer effect - Now covers the entire card */}
                  <motion.div
                    className="via-primary/10 pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 group-hover:translate-x-full group-active:translate-x-full"
                    initial={effectVariants.shimmer.initial}
                    whileHover={effectVariants.shimmer.whileHover}
                    whileTap={effectVariants.shimmer.whileTap}
                    transition={effectVariants.shimmer.transition}
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
                        whileHover={iconAnimationVariants.whileHover}
                        whileTap={iconAnimationVariants.whileTap}
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
                          whileHover={buttonAnimationVariants.whileHover}
                          whileTap={buttonAnimationVariants.whileTap}
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
                      initial={effectVariants.hoverIndicator.initial}
                      whileHover={effectVariants.hoverIndicator.whileHover}
                      whileTap={effectVariants.hoverIndicator.whileTap}
                      transition={effectVariants.hoverIndicator.transition}
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
            initial={modalVariants.overlay.initial}
            animate={modalVariants.overlay.animate}
            exit={modalVariants.overlay.exit}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-background max-h-[80vh] w-full max-w-2xl overflow-hidden rounded-xl border shadow-2xl"
              initial={modalVariants.content.initial}
              animate={modalVariants.content.animate}
              exit={modalVariants.content.exit}
              transition={modalVariants.content.transition}
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
                    whileHover={buttonAnimationVariants.whileHover}
                    whileTap={buttonAnimationVariants.whileTap}
                  >
                    <X className="h-6 w-6" />
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
                          <ChevronRight className="text-primary h-5 w-5" />
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
                    whileHover={buttonAnimationVariants.whileHover}
                    whileTap={buttonAnimationVariants.whileTap}
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
