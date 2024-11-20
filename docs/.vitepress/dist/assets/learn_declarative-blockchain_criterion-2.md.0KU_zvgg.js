import{_ as t,c as i,a0 as a,o}from"./chunks/framework.TZSYhTdi.js";const d=JSON.parse('{"title":"Criterion 2: State Updates Without Execution","description":"","frontmatter":{},"headers":[],"relativePath":"learn/declarative-blockchain/criterion-2.md","filePath":"learn/declarative-blockchain/criterion-2.md"}'),r={name:"learn/declarative-blockchain/criterion-2.md"};function s(n,e,c,p,l,h){return o(),i("div",null,e[0]||(e[0]=[a('<h1 id="criterion-2-state-updates-without-execution" tabindex="-1">Criterion 2: State Updates Without Execution <a class="header-anchor" href="#criterion-2-state-updates-without-execution" aria-label="Permalink to &quot;Criterion 2: State Updates Without Execution&quot;">​</a></h1><p>The second core property of declarative blockchains is that they achieve <strong>state updates without execution</strong>.</p><p>This is an emergent property of using <a href="https://en.wikipedia.org/wiki/Constraint_programming" target="_blank" rel="noreferrer">constraints</a>:</p><blockquote><p>“Constraints differ from the common primitives of imperative programming languages in that they do not specify a step or sequence of steps to execute, but rather the properties of a solution to be found.”</p></blockquote><p>In declarative blockchains, <strong>state updates are specified directly within a block</strong>. These updates must then pass relevant predefined constraint checks to be considered valid. This contrasts with imperative blockchains, where transactions are included in a block and then executed to compute a new state.</p><h2 id="executionless-state-updates" tabindex="-1">Executionless State Updates <a class="header-anchor" href="#executionless-state-updates" aria-label="Permalink to &quot;Executionless State Updates&quot;">​</a></h2><p>Achieving state updates without execution is a significant breakthrough in blockchain protocol design. Previously, we discussed how <a href="./../declarative-vs-imperative/imperative-pitfalls/sub-optimal-outcomes.html">in-protocol execution (i.e., processing step-by-step instructions)</a> is a limiting factor for imperative blockchains.</p><p>The <strong>“executionless” property</strong> of declarative blockchains removes the need for the most costly aspects of general-purpose blockchains—execution and the consensus needed for it—without sacrificing functionality or verifiability. This approach even makes verification of state transitions trivial, thanks to the nature of constraint-based problems: they are <strong>hard to compute but easy to verify</strong>.</p>',8)]))}const f=t(r,[["render",s]]);export{d as __pageData,f as default};
