import{_ as e,c as i,a0 as a,o}from"./chunks/framework.TZSYhTdi.js";const m=JSON.parse('{"title":"Applications","description":"","frontmatter":{},"headers":[],"relativePath":"protocol/applications.md","filePath":"protocol/applications.md"}'),n={name:"protocol/applications.md"};function s(r,t,l,c,p,d){return o(),i("div",null,t[0]||(t[0]=[a('<h1 id="applications" tabindex="-1">Applications <a class="header-anchor" href="#applications" aria-label="Permalink to &quot;Applications&quot;">​</a></h1><p>In Essential, <strong>User Data</strong> combined with the flexibility of <strong>Pint</strong> allows users to create complex expressions of their preferences over multiple, potentially unrelated on-chain states. This is a significant shift from platforms like the EVM, where transactions need additional smart contracts to act on behalf of users to interact with multiple contracts atomically. Essential’s approach reduces <strong>chain bloat</strong> by only requiring fundamental application logic to be persistently deployed on-chain. This logic is both <strong>modular and reusable</strong>, enabling common interaction patterns to be deployed once and utilized by everyone.</p><h2 id="time-dependent-constraints" tabindex="-1">Time-Dependent Constraints <a class="header-anchor" href="#time-dependent-constraints" aria-label="Permalink to &quot;Time-Dependent Constraints&quot;">​</a></h2><p>Applications in Essential can also define <strong>time-dependent constraints</strong>. For instance:</p><ul><li>A user wanting to rebalance a portfolio of tokens can express this logic in a contract.</li><li>Alternatively, if a user wishes to <strong>dollar-cost-average</strong> from one token to another over time, this can be encoded in Pint. Solvers can gradually satisfy this requirement without the user’s ongoing input.</li></ul><h2 id="implicit-composability" tabindex="-1">Implicit Composability <a class="header-anchor" href="#implicit-composability" aria-label="Permalink to &quot;Implicit Composability&quot;">​</a></h2><p>The <strong>declarative approach</strong> in Essential brings an advantage through <strong>implicit composability</strong>. Unlike the imperative paradigm, where applications must explicitly implement each other&#39;s interfaces, the declarative model allows any two applications that <strong>constrain the same state</strong> to be implicitly composable. In this case, the <strong>solver</strong> provides the abstraction, bridging different applications without requiring them to be aware of each other’s interfaces.</p><h2 id="efficient-computation-and-verification" tabindex="-1">Efficient Computation and Verification <a class="header-anchor" href="#efficient-computation-and-verification" aria-label="Permalink to &quot;Efficient Computation and Verification&quot;">​</a></h2><p>The <strong>declarative design</strong> also enables greater computational efficiency:</p><ul><li>In imperative systems, complex on-chain business logic can be costly, as the network needs to execute this computation.</li><li>In Essential’s declarative design, the correctness of application logic is ensured through <strong>solution validation</strong> on-chain, while solvers are compensated for finding valid state updates.</li></ul><p>This model allows solvers the freedom to <strong>choose their optimization approaches</strong>, enabling competition in solving business logic efficiently. Essential leverages the fact that some problems are <strong>hard to compute but easy to verify</strong>, enabling efficient and scalable application logic validation.</p>',11)]))}const g=e(n,[["render",s]]);export{m as __pageData,g as default};
