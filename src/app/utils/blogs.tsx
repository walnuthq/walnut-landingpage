import author_roman from "@/images/blog/J6fWCiVz_400x400.jpg";
import header_cairovm from "@/images/blog/Cairo Playground.jpg";
import marijamijailovic from "@/images/blog/marijamijailovic.png";


export const posts = [ 
  { 
    publishedAt:'Wednesday, February 12, 2025',
    slug: 'deep-dive-into-starknet-tx-call-trace', 
    title: 'Deep Dive into Starknet Transaction Call Trace', 
    excerpt:'On Starknet, transactions represent the execution of programs written in the Cairo programming language. Each transaction (or program execution) is identified by a unique transaction hash, making it traceable and distinguishable. For instance, running the same program twenty times will result in twenty unique transactions, each with its own transaction hash. Like any program execution, the behavior of these transactions can be analyzed through a Call Trace, a detailed log that captures the functions invoked, the arguments passed, the outputs returned, and more.', 
    author: {
      name: '@marijamijailovic', 
      image: marijamijailovic
    },
  },
  {
    mainImage: header_cairovm, 
    publishedAt:'Monday, September 16, 2024',
    slug: 'cairovm-codes-debug-learn-cairo', 
    title: 'cairovm.codes – Run, Debug, and Learn Cairo Programming', 
    excerpt:'Explore cairovm.codes, the web app for running, debugging, and learning Cairo programming. Officially recognized by Starkware, packed with powerful features.', 
    author: {
      name: '@romanmazur', 
      image: author_roman
    },
  },
  {
    publishedAt:'Monday, August 12, 2024',
    slug: 'starknet-contract-verification', 
    title: 'Announcing Contract Verification on Starknet', 
    excerpt:'We are excited to introduce Cairo contract verification for Starknet, now live on Walnut and accessible via Walnut APIs.', 
    author: {
      name: '@romanmazur', 
      image: author_roman
    },
  },
  {
    publishedAt:'Saturday, July 06, 2024',
    slug: 'why-blockchains-mark-new-era-for-debugging-and-monitoring-services', 
    title: 'Why blockchains mark a new era for debugging and monitoring services', 
    excerpt:'Blockchain technology will revolutionize the $100 billion+ application monitoring market, demanding new specialized tools and creating major opportunities.', 
    author: {
      name: '@romanmazur', 
      image: author_roman
    },
  },
  {
    publishedAt:'Friday, December 29, 2023',
    slug: 'why-does-starknet', 
    title: 'Why does Starknet need a debugger?', 
    excerpt:"In this article, we'll explore current challenges developers face with debugging transactions on Starknet.", 
    author: {
      name: '@kunal_jain', 
    },
  },
  {
    publishedAt:'Saturday, December 23, 2023',
    slug: 'welcome', 
    title: 'Welcome to Walnut blog', 
    excerpt:"Welcome to our blog focused on Starknet developer tooling development. Our first highlight is the Walnut Debugger, a game-changer for Cairo developers, now in closed Beta and set for a Q1 2024 release.", 
    author: {
      name: '@romanmazur', 
      image: author_roman
    },
  },
]

