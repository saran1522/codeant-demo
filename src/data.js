import { TbHome, TbSettings, TbCloud, TbCode, TbBook2 } from "react-icons/tb";
import { FaGithub, FaBitbucket, FaGitlab, FaKey } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";

export const navlinks = [
  {
    icon: TbHome,
    link: "/",
    title: "Repositories",
  },
  {
    icon: TbCloud,
    link: "/cloud",
    title: "Cloud Security",
  },
  {
    icon: TbCode,
    link: "/review",
    title: "AI Code Review",
  },
  {
    icon: TbBook2,
    link: "/guide",
    title: "How to use",
  },
  {
    icon: TbSettings,
    link: "/settings",
    title: "Settings",
  },
];

export const repos = [
  {
    title: "design-system",
    visibility: "Public",
    tech: "React",
    size: "5090kb",
    updated: "4 days ago",
  },
  {
    title: "codeant-ai-app",
    visibility: "Public",
    tech: "JavaScript",
    size: "3000kb",
    updated: "2 days ago",
  },
  {
    title: "analytics-dashboard",
    visibility: "Private",
    tech: "Python",
    size: "7900kb",
    updated: "15 days ago",
  },
  {
    title: "mobile-app",
    visibility: "Public",
    tech: "Flutter",
    size: "3333kb",
    updated: "19 days ago",
  },
  {
    title: "e-commerce-platform",
    visibility: "Public",
    tech: "Anguler",
    size: "3000kb",
    updated: "9 days ago",
  },
  {
    title: "blog-website",
    visibility: "Private",
    tech: "NextJs",
    size: "3000kb",
    updated: "12 days ago",
  },
  {
    title: "social-network",
    visibility: "Private",
    tech: "PHP",
    size: "4570kb",
    updated: "20 days ago",
  },
];

export const signinbuttons = {
  saas: [
    {
      icon: FaGithub,
      title: "Sign in with Github",
      style: "",
    },
    {
      icon: FaBitbucket,
      title: "Sign in with BitBucket",
      style: "text-blue-600",
    },
    {
      icon: VscAzureDevops,
      title: "Sign in with Azure DevOps",
      style: "text-blue-600",
    },
    {
      icon: FaGitlab,
      title: "Sign in with GitLab",
      style: "text-orange-600",
    },
  ],

  self: [
    {
      icon: FaGitlab,
      title: "Self Hosted GitLab",
      style: "text-orange-600",
    },
    {
      icon: FaKey,
      title: "Sign in with SSO",
      style: "",
    },
  ],
};
