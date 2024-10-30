// docs/.vitepress/config.mts

import { defineConfig } from 'vitepress'

// Vitepress Site Configuration
// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  // --- Basic Site Information ---
  title: "Essential Docs",           // Site title displayed in the browser tab
  description: "Essential Documentation",  // Site meta description for search engines
  
  // --- Theme and Navigation Settings ---
  themeConfig: {
    
    // --- Top Navigation Bar Links ---
    nav: [
      { text: 'Home', link: '/' },   // Link to the homepage
    ],
    
    // --- Sidebar Configuration ---
    sidebar: [
      
      // --- Introduction Section ---
      {
        text: 'Introduction',          // Sidebar heading for Introduction
        items: [
          { text: 'Welcome to Essential', link: '/welcome' },    // Link to Welcome page
          { text: 'Why Essential?', link: '/why-essential' },    // Link to Why Essential page
        ]
      },
      
      // --- Learn Section ---
      {
        text: 'Learn',                 // Sidebar heading for learning resources
        items: [
          
          // Topic: Declarative vs Imperative Programming
          { 
            text: 'Declarative vs Imperative', 
            collapsed: false,           // Start as collapsed
            items: [
              { text: 'Concepts', link: '/declarative-vs-imperative/concepts' },   // Core concepts overview
              { text: 'Programming', link: '/declarative-vs-imperative/programming' },   // Programming types intro
              
              // Subtopic: Imperative Pitfalls
              { text: 'Imperative Pitfalls', 
                collapsed: true,
                items: [
                  { text: 'Sub-optimal Outcomes', link: '/declarative-vs-imperative/sub-optimal-outcomes' },
                  { text: 'Execution Bottleneck', link: '/declarative-vs-imperative/execution-bottleneck' },
                ]
              },
              
              // Subtopic: Declarative Approach
              { text: 'Declarative Approach', 
                collapsed: true,
                items: [
                  { text: 'Early Stages', link: '/declarative-vs-imperative/early-stages' },
                  { text: 'Intent Narrative', link: '/declarative-vs-imperative/intent-narrative' },
                  { text: 'Fully Declarative', link: '/declarative-vs-imperative/fully-declarative' },
                ]
              },
            ]          
          },
          
          // Topic: A Declarative Blockchain
          {
            text: 'A Declarative Blockchain',
            collapsed: false,           // Start as collapsed
            items: [
              { text: 'Overview', link: '/declarative-blockchain/overview' },      // Overview of declarative blockchain
              { text: 'Advantages', link: '/declarative-blockchain/advantages' },  // Advantages section
              { text: 'Landscape', link: '/declarative-blockchain/landscape' },    // Blockchain landscape overview
            ]
          },
        ]
      },
      
      // --- Build Section ---
      {
        text: 'Build',                 // Sidebar heading for building resources
        items: [
          
          // Topic: Getting Started Guide
          { 
            text: 'Getting Started', 
            link: '/getting-started/', 
            items: [
              
              // Subsection: Installation Methods
              { 
                text: 'Installation',    // Installation guide
                collapsed: true,
                link: '/getting-started/installation/', 
                items: [
                  { text: 'Nix', link: '/getting-started/installation/nix' },    // Nix installation guide
                  { text: 'Crates IO', link: '/getting-started/installation/crates-io' },   // Crates IO installation
                ]
              }, 
              { text: 'Components', link: '/getting-started/components' },   // Configuration and components setup
              
              // Subsection: Example Projects
              { 
                text: 'Example', 
                collapsed: true,
                link: '/getting-started/example/', 
                items: [
                  
                  // Example Project: Pint
                  { 
                    text: 'Pint Project',
                    collapsed: true,
                    items: [
                      { text: 'New Project', link: '/getting-started/example/new-project' },  // Setting up a new Pint project
                      { text: 'Define Storage', link: '/getting-started/example/define-storage' },  // Define storage features
                      { text: 'Write Predicate', link: '/getting-started/example/write-predicate' },  // Write predicate
                      { text: 'Add Constraint', link: '/getting-started/example/write-constraint' },  // Add constraints
                      { text: 'Compile', link: '/getting-started/example/compile' },  // Compile the project
                    ] 
                  },  
                  
                  // Example Project: Rust Workflow
                  {
                    text: 'Cargo Project',
                    collapsed: true,
                    items: [
                      { text: 'Setup Project', link: '/getting-started/example/new-project' },    // Rust project setup
                      
                      // Development Process
                      { 
                        text: 'Develop', 
                        collapsed: true,
                        items: [
                          { text: 'Dependencies', link: '/getting-started/example/dependencies' },   // Dependency setup
                          { text: 'Keys', link: '/getting-started/example/keys' },                   // Key management
                          { text: 'Extract Count', link: '/getting-started/example/extract-count' }, // Data extraction
                          { text: 'Create Solution', link: '/getting-started/example/create-solution' }, // Create solutions
                          { text: 'Increment', link: '/getting-started/example/increment' },          // Increment function
                          { text: 'Review', link: '/getting-started/example/review' },                // Review code
                        ]
                      },
                      
                      // Testing Steps
                      { 
                        text: 'Test',
                        collapsed: true, 
                        items: [
                          { text: 'Generate Address', link: '/getting-started/example/generate-address' }, // Address generation
                          { text: 'Deploy Contract', link: '/getting-started/example/deploy-contract' },   // Contract deployment
                          { text: 'Read Count', link: '/getting-started/example/read-count' },             // Reading data
                          { text: 'Increment Count', link: '/getting-started/example/increment-count' },   // Data increment
                          { text: 'Build Block', link: '/getting-started/example/build-block' },           // Block creation
                          { text: 'Competing Solutions', link: '/getting-started/example/competing-solutions' }, // Solution competition
                          { text: 'Review', link: '/getting-started/example/review' },                    // Code review
                        ]
                      },  
                    ] 
                  },
                  {
                    text: 'Rust CLI',
                    collapsed: true,
                    items: [
                      { text: 'Dependencies', link: '/getting-started/example/dependencies' },   // Dependency setup
                      { text: 'Generate Address', link: '/getting-started/example/keys' },                   // Key management
                      { text: 'Args', link: '/getting-started/example/extract-count' }, // Data extraction
                      { text: 'Query Count', link: '/getting-started/example/create-solution' }, // Create solutions
                      { text: 'Run', link: '/getting-started/example/increment' },          // Increment function
                      { text: 'Review', link: '/getting-started/example/review' },                // Review code
                    ]
                  },
                  {
                    text: 'Interact with Testnet',
                    link: '/getting-started/example/interact-with-testnet'
                  }
                ]
              },
            ]                 
          },
        ]
      },
      
      // --- Pint Section ---
      {
        text: 'Pint',
        link: '/pint',
        collapsed: true,                // Collapsed by default
        items: [
          
          // Subtopic: Contracts in Pint
          { text: 'Contracts', 
            link: '/pint/overview', 
            items: [
              { text: 'Predicates', link: '/pint/contracts/predicates' },
              { text: 'Constraints', link: '/pint/contracts/constraints' },
              { text: 'User Data', link: '/pint/contracts/user-data' },
              { text: 'Solutions', link: '/pint/contracts/solutions' },
            ]
          },
          { text: 'Applications', link: '/pint/applications' },   // Overview of Pint applications
        ]
      },
      
      // --- Protocol Section ---
      {
        text: 'Protocol',               // Sidebar heading for protocol documentation
        collapsed: true,                // Collapsed by default
        items: [
          { text: 'Overview', link: '/protocol/overview' },     // General protocol overview
          { text: 'Core Components', link: '/protocol/core-components' },  // Details on core components
        ]
      }
    ],
    
    // --- Footer Social Links ---
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }   // GitHub repository link
    ]
  }
})
