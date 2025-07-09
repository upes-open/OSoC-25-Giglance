export const categories = {
  "Graphics & Design": {
    subcategories: ["Logo Design", "Illustration", "Web & Mobile Design"],
    icon: "🎨",
    color: "from-primary to-primary/70",
    rating: 4.8,
    skillsCount: 1247,
  },
  "Digital Marketing": {
    subcategories: [
      "Social Media Marketing",
      "Email Marketing",
      "Video Marketing",
    ],
    icon: "📱",
    color: "from-secondary to-secondary/70",
    rating: 4.7,
    skillsCount: 892,
  },
  "Writing & Translation": {
    subcategories: [
      "Articles & Blog Posts",
      "Resume Writing",
      "Technical Writing",
    ],
    icon: "✍️",
    color: "from-accent to-accent/70",
    rating: 4.6,
    skillsCount: 634,
  },
  "Video & Animation": {
    subcategories: ["Video Editing", "Short Video Ads", "Intros & Outros"],
    icon: "🎬",
    color: "from-destructive to-destructive/70",
    rating: 4.9,
    skillsCount: 759,
  },
  "Programming & Tech": {
    subcategories: [
      "Website Development",
      "Mobile Development",
      "Game Development",
    ],
    icon: "💻",
    color: "from-foreground to-foreground/70",
    rating: 4.8,
    skillsCount: 1563,
  },
  "Data Science": {
    subcategories: ["Data Analysis", "Data Visualization", "Machine Learning"],
    icon: "📊",
    color: "from-secondary to-accent",
    rating: 4.7,
    skillsCount: 892,
  },
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "1",
    question: "What is Giglance?",
    answer: "Giglance is a platform that connects freelancers with clients looking for various services. Whether you're a graphic designer, developer, writer, or any other professional, you can showcase your skills and find work opportunities."
  },
  {
    id: "2", 
    question: "How do I get started as a freelancer?",
    answer: "Getting started is easy! Simply sign up for an account, create your profile, showcase your portfolio, set your rates, and start browsing available projects. You can also create gig listings to attract potential clients."
  },
  {
    id: "3",
    question: "How does payment work?",
    answer: "Giglance provides secure payment processing. Clients can pay through our platform, and funds are held securely until the work is completed to satisfaction. Freelancers receive payments directly to their preferred payment method."
  },
  {
    id: "4",
    question: "What fees does Giglance charge?",
    answer: "Giglance charges a small service fee on completed transactions to maintain the platform and provide customer support. The exact fee structure can be found in our pricing section."
  },
  {
    id: "5",
    question: "How do I contact customer support?",
    answer: "You can reach our customer support team through the contact form on our website, or email us directly. We're here to help with any questions or issues you might have."
  },
  {
    id: "6",
    question: "Can I work internationally?",
    answer: "Yes! Giglance connects freelancers and clients from around the world. You can work with anyone globally, and our platform supports multiple currencies and payment methods."
  }
];
