import { PopularTags, RightSidebarLinks, SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const rightSidebarLinks: RightSidebarLinks[] = [
  {
    _id: "1",
    question:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: "2",
    question: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: "3",
    question: "Redux Toolkit Not Updating State as Expected",
  },
  {
    _id: "4",
    question: "Can I get the course for free?",
  },
  {
    _id: "5",
    question: "Async/Await Function Not Handling Errors Properly",
  },
];

export const popularTags: PopularTags[] = [
  { _id: "1", name: "NEXTJS", totalQuestions: "32" },
  { _id: "2", name: "TEST", totalQuestions: "19" },
  { _id: "3", name: "REACT", totalQuestions: "17" },
  { _id: "4", name: "CSS", totalQuestions: "14" },
  { _id: "5", name: "JAVASCRIPT", totalQuestions: "103" },
];
