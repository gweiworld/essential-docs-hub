import{_ as t,c as a,a0 as s,o as i}from"./chunks/framework.TZSYhTdi.js";const o="/essential-docs-hub/images/imperative-starter-pack.png",d=JSON.parse('{"title":"Sub-Optimal Outcomes","description":"","frontmatter":{},"headers":[],"relativePath":"learn/declarative-vs-imperative/imperative-pitfalls/sub-optimal-outcomes.md","filePath":"learn/declarative-vs-imperative/imperative-pitfalls/sub-optimal-outcomes.md"}'),n={name:"learn/declarative-vs-imperative/imperative-pitfalls/sub-optimal-outcomes.md"};function r(c,e,u,h,l,m){return i(),a("div",null,e[0]||(e[0]=[s('<h1 id="sub-optimal-outcomes" tabindex="-1">Sub-Optimal Outcomes <a class="header-anchor" href="#sub-optimal-outcomes" aria-label="Permalink to &quot;Sub-Optimal Outcomes&quot;">​</a></h1><p>To justify the need for a new paradigm, we should examine the current state of blockchain architecture and its shortcomings. Consider the fundamental differences in how the two main programming paradigms handle instructions versus outcomes:</p><ul><li><strong>Imperative</strong>: Always follow the instructions, regardless of the outcome.</li><li><strong>Declarative</strong>: Always produce a valid outcome, without the need for specific instructions.</li></ul><p>In imperative systems, there is an inherent tension between the network and its users. From the network&#39;s perspective, the primary goal is achieving consensus over state. A straightforward way to ensure this is to agree on a common framework (e.g., a VM) for computing network state. In an imperative model, given an initial state and a set of transactions, any node can compute the next state based on predefined rules.</p><p>However, when considering why most people use blockchains, expressing interactions as instructions instead of outcomes is clunky and unintuitive. For users, the focus is on the outcome they desire, not the steps to achieve it—yet today’s blockchains aren’t designed with this user-centric perspective in mind.</p><p><a href="https://prestwi.ch/declarative-smart-contracts-2/" target="_blank" rel="noreferrer">James Prestwich</a> summarizes this trade-off with imperative design:</p><blockquote><p>“[Imperative] smart contracts prevent us from knowing the outcome of a transaction before it is confirmed. Its state changes are unknown before the transaction is included in a block. By signing the transaction, the user has consented to whatever state changes the contract defines, without knowledge of the outcome. When users call a contract they entrust their funds to it with no guarantee of good behavior.</p></blockquote><blockquote><p>&quot;Given that the entire point of a blockchain is to create and update a state securely, smart contracts are intuitively problematic. Users deserve to know exactly what the transaction will do before they sign it. Anything else cedes partial control of user funds to miners or other users. It dilutes the permissions set on the shared state, which diminishes the usefulness of the chain.”</p></blockquote><h2 id="consequences-of-imperative-architectures" tabindex="-1">Consequences of Imperative Architectures <a class="header-anchor" href="#consequences-of-imperative-architectures" aria-label="Permalink to &quot;Consequences of Imperative Architectures&quot;">​</a></h2><p>This uncertainty creates negative consequences for users. Many users experience anxiety while refreshing an Etherscan page, waiting to see if a trade went through. At best, a failed transaction wastes gas fees. At worst, malicious smart contracts can go unnoticed until they’ve drained a user&#39;s funds.</p><img src="'+o+'" alt="Imperative Starter Pack"><p>The most common UX complaints about blockchains—uncertain outcomes, failed transactions, MEV (Miner Extractable Value), high slippage—are actually symptoms of the underlying imperative architecture.</p><p>But it doesn&#39;t have to be this way. Blockchains don&#39;t need to rely on in-protocol execution to achieve consensus over state.</p>',13)]))}const f=t(n,[["render",r]]);export{d as __pageData,f as default};
