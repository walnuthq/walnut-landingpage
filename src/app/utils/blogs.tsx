import author_roman from "@/images/blog/J6fWCiVz_400x400.jpg";
import header_cairovm from "@/images/blog/Cairo Playground.jpg";
import marijamijailovic from "@/images/blog/marijamijailovic.png";

export const posts = [
  {
    publishedAt: "Friday, May 2, 2025",
    slug: "debugging-and-transaction-simulations-are-the-most-requested-features",
    title: "Debugging and Transaction Simulations Are the Most Requested Features by Blockchain Developers",
    excerpt:
      "Starknet is an ecosystem that made a bold decision: it launched with its own custom language—Cairo. That means, among other things, it had to build everything from scratch. Cairo devs couldn’t rely on any of the existing blockchain tooling available for Solidity, Ethereum, or other blockchain ecosystems.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
  {
    publishedAt: " Monday, April 28, 2025",
    slug: "new-partnership-with-arbitrum",
    title: "New Partnership with Arbitrum: Advancing Debugging for the Solidity MultiVM",
    excerpt:
      "Walnut Labs is partnering with Offchain Labs—the team behind Arbitrum—to improve the debugging experience across the Arbitrum stack. This effort is part of our broader mission to bring modern debugging and monitoring tools to emerging rollup ecosystems.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
  {
    publishedAt: "Friday, March 7, 2025",
    slug: "new-partnership-with-optimism",
    title: "New Partnership with Optimism: Open-Source Debugger and Simulator for the Superchain",
    excerpt:
      "Optimism and the Superchain are some of the fastest-growing ecosystems in blockchain. We’re excited to announce a new partnership between Walnut and Optimism to bring open-source debugging and simulation tools to this fast-moving environment.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
  {
    publishedAt: "Tuesday, February 11, 2025",
    slug: "walnut-labs-selected-as-core-maintainer",
    title: "Walnut Labs Selected as Core Maintainer of Madara Documentation — Official Appchain Stack on Starknet",
    excerpt:
      "We’re excited to announce that Walnut Labs, the team behind Walnut, has been selected as the core maintainer of the official Madara Documentation.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
  {
    publishedAt: "Tuesday, January 14, 2025",
    slug: "deep-dive-into-starknet-tx-call-trace",
    title: "Deep Dive into Starknet Transaction Call Trace",
    excerpt:
      "On Starknet, every transaction represents the execution of a Cairo program, uniquely identified by a transaction hash. A Call Trace offers a detailed breakdown of each execution, capturing invoked functions, arguments, and outputs—making it an essential tool for understanding transaction behavior.",
    author: {
      name: "@marijamijailovic",
      image: marijamijailovic,
    },
  },
  {
    mainImage: header_cairovm,
    publishedAt: "Monday, September 16, 2024",
    slug: "cairovm-codes-debug-learn-cairo",
    title: "cairovm.codes – Run, Debug, and Learn Cairo Programming",
    excerpt:
      "Explore cairovm.codes, the web app for running, debugging, and learning Cairo programming. Officially recognized by Starkware, packed with powerful features.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
  {
    publishedAt: "Monday, August 12, 2024",
    slug: "starknet-contract-verification",
    title: "Announcing Contract Verification on Starknet",
    excerpt:
      "We are excited to introduce Cairo contract verification for Starknet, now live on Walnut and accessible via Walnut APIs.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
  {
    publishedAt: "Saturday, July 06, 2024",
    slug: "why-blockchains-mark-new-era-for-debugging-and-monitoring-services",
    title:
      "Why blockchains mark a new era for debugging and monitoring services",
    excerpt:
      "Blockchain technology will revolutionize the $100 billion+ application monitoring market, demanding new specialized tools and creating major opportunities.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
  {
    publishedAt: "Friday, December 29, 2023",
    slug: "why-does-starknet",
    title: "Why does Starknet need a debugger?",
    excerpt:
      "In this article, we'll explore current challenges developers face with debugging transactions on Starknet.",
    author: {
      name: "@kunal_jain",
    },
  },
  {
    publishedAt: "Saturday, December 23, 2023",
    slug: "welcome",
    title: "Welcome to Walnut blog",
    excerpt:
      "Welcome to our blog focused on Starknet developer tooling development. Our first highlight is the Walnut Debugger, a game-changer for Cairo developers, now in closed Beta and set for a Q1 2024 release.",
    author: {
      name: "@romanmazur",
      image: author_roman,
    },
  },
];
