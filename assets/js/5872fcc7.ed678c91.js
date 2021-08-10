(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),l=(a(0),a(266)),o={},i={unversionedId:"governance/governance-and-operations",id:"governance/governance-and-operations",isDocsHomePage:!1,title:"Governance and Operations",description:"---",source:"@site/docs/contributing/governance/governance-and-operations.md",sourceDirName:"governance",slug:"/governance/governance-and-operations",permalink:"/yearn-devdocs/contributing/governance/governance-and-operations",version:"current",lastUpdatedBy:"philburrrt",lastUpdatedAt:1628583471,formattedLastUpdatedAt:"8/10/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"Decision-Making Processes",permalink:"/yearn-devdocs/contributing/operations/decision-making"},next:{title:"Proposal Process",permalink:"/yearn-devdocs/contributing/governance/proposal-process"}},b=[{value:"DAO Responsibilities",id:"dao-responsibilities",children:[{value:"Token Holders",id:"token-holders",children:[]},{value:"yTeams",id:"yteams",children:[]},{value:"Multisig",id:"multisig",children:[]}]},{value:"Future Implementations",id:"future-implementations",children:[]}],c={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("p",null,"Since ",Object(l.b)("a",{parentName:"p",href:"https://gov.yearn.finance/t/yip-61-governance-2-0/10460"},"YIP-61: Governance 2.0")," passed on April 25th, 2021, yearn began the transition into a ",Object(l.b)("strong",{parentName:"p"},"multi-DAO")," structure, managed by ",Object(l.b)("strong",{parentName:"p"},"constrained delegation"),". This approach allows protocol development to not be stiffened by bureaucracy while maintaining a sufficient level of decentralization. "),Object(l.b)("p",null,"Multi-DAO refers to the fluid number of decentralized autonomous organizations (DAOs) that contribute to the protocol in some unique way. These independent groups consist of YFI holders, yTeams and the Multisig."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"YFI holders")," vote for changes to the protocol or the protocols governance structure"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"yTeams")," focus on specific aspects of the protocol or relevant operations"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Multisig")," members execute or veto any on-chain decisions")),Object(l.b)("p",null,"Token holders have ultimate say over what yTeams exist, who is part of the Multisig, and the limitations of each group's operational control. The term 'constrained delgation' originates from token holders delegating specific powers to various groups that build and manage yearn."),Object(l.b)("p",null,"A simplified flow of governance would look like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"1. YFI holders create, destroy and define limitations of yTeams \n2. yTeam notifies yTx of a decision \n3. yTx creates a delegated transaction and send it to the Multisig \n4. Multisig executes or vetos the transaction\n")),Object(l.b)("h2",{id:"dao-responsibilities"},"DAO Responsibilities"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/IDysF5O.png",alt:null})),Object(l.b)("h3",{id:"token-holders"},"Token Holders"),Object(l.b)("p",null,"it is the ",Object(l.b)("a",{parentName:"p",href:"https://docs.yearn.finance/governance/yfi"},"YFI token")," holder's duty to create and vote for proposals that improve the protocol. "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Proposals"),Object(l.b)("th",{parentName:"tr",align:null},"Descriptions"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Yearn Improvement Proposal (YIP)"),Object(l.b)("td",{parentName:"tr",align:null},"A proposal to execute on any power delegated to YFI holders or outside the scope of enumerated powers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Yearn Delegation Proposal (YDP)"),Object(l.b)("td",{parentName:"tr",align:null},"A proposal to change where any discrete decision-making power is delegated")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Yearn Signaling Proposal (YSP)"),Object(l.b)("td",{parentName:"tr",align:null},"A non-binding proposal to signal community feelings or intent on any issue")))),Object(l.b)("p",null,"Specifically, these proposals allow token holders to make the following decisions: "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Power"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Manage Powers"),Object(l.b)("td",{parentName:"tr",align:null},"YFI holders can vote to create, assign, or revoke discrete powers to or from yTeams")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change YFI Token Contract"),Object(l.b)("td",{parentName:"tr",align:null},"Any interaction with the YFI token contract, such as to mint YFI or burn the minting keys, remains under the control of YFI holders.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Set Fees"),Object(l.b)("td",{parentName:"tr",align:null},"Set the standard fee structures in the Yearn Protocol")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change Multisig Signers"),Object(l.b)("td",{parentName:"tr",align:null},"As the Multisig will continue to hold critical powers over the near term, only YFI holders can vote to change its signers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Ratify yTeams"),Object(l.b)("td",{parentName:"tr",align:null},"Formally ratify or deratify yTeams to control which yTeams can hold delegated powers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Change yOps Signers"),Object(l.b)("td",{parentName:"tr",align:null},"As yOps has the power to change signers of other yTeams, this is a special power to change the signers of yOps")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Spend Treasury Funds"),Object(l.b)("td",{parentName:"tr",align:null},"Spend funds from the treasury")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"YIP Power"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Holders have the power to propose a YIP on anything not already delegated")))),Object(l.b)("h3",{id:"yteams"},"yTeams"),Object(l.b)("p",null,"Each yTeam has an objective and discrete powers which are defined by token holders. They can be broken further into membership pools, which are separate groups of contributors working towards similar goals as the overarching team. Additionally, one membership pool can bet a part of multiple yTeams."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"yTeam"),Object(l.b)("th",{parentName:"tr",align:null},"Objective"),Object(l.b)("th",{parentName:"tr",align:null},"Membership Pool"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yGuard"),Object(l.b)("td",{parentName:"tr",align:null},"Protect the vaults"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Protocol Dev, YFI Strategists, YFI Mechanics, YFI Secret Admirers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yBrain"),Object(l.b)("td",{parentName:"tr",align:null},"Manage the strats"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Strategists")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yDev"),Object(l.b)("td",{parentName:"tr",align:null},"Manage the protocol"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Protocol Dev")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yPeople"),Object(l.b)("td",{parentName:"tr",align:null},"Curate the team"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Compensation Working Group, YFI Advisors")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yBudget"),Object(l.b)("td",{parentName:"tr",align:null},"Spend money well"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Finances, YFI Advisors")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yFarm"),Object(l.b)("td",{parentName:"tr",align:null},"Grow the treasury"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Secret Admirers, YFI Secret Entrance")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yTx"),Object(l.b)("td",{parentName:"tr",align:null},"Write transactions"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Doers")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yOps"),Object(l.b)("td",{parentName:"tr",align:null},"Coordinate contributors"),Object(l.b)("td",{parentName:"tr",align:null},"YFI Ops")))),Object(l.b)("p",null,"Each yTeam is assigned specific decision-making powers, defined by YIP-61: "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"yTeam"),Object(l.b)("th",{parentName:"tr",align:null},"Power"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yGuard"),Object(l.b)("td",{parentName:"tr",align:null},"Emergency Powers"),Object(l.b)("td",{parentName:"tr",align:null},"Immediately intervene in case of attack or bug to shutdown or rollback strategies or vaults")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yBrain"),Object(l.b)("td",{parentName:"tr",align:null},"Manage Strategies"),Object(l.b)("td",{parentName:"tr",align:null},"Activate, deactivate, tune, and maintain strategies")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yDev"),Object(l.b)("td",{parentName:"tr",align:null},"Define Yearn Protocol"),Object(l.b)("td",{parentName:"tr",align:null},"Decide what code is considered part of yearn and what isn\u2019t")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yDev"),Object(l.b)("td",{parentName:"tr",align:null},"Manage Protocol"),Object(l.b)("td",{parentName:"tr",align:null},"Maintain and improve the Yearn Protocol")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yDev"),Object(l.b)("td",{parentName:"tr",align:null},"Add Strategies"),Object(l.b)("td",{parentName:"tr",align:null},"Add new strategies to vaults")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yTx"),Object(l.b)("td",{parentName:"tr",align:null},"Delegate Transactions"),Object(l.b)("td",{parentName:"tr",align:null},"Create delegated transactions for the multisig to sign and execute")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yPeople"),Object(l.b)("td",{parentName:"tr",align:null},"Pay Team"),Object(l.b)("td",{parentName:"tr",align:null},"Create, deploy, modify, or terminate Yearn compensation packages")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yBudget"),Object(l.b)("td",{parentName:"tr",align:null},"Set Budgets"),Object(l.b)("td",{parentName:"tr",align:null},"Create budgets for coordinape, grants, hiring, operations, or other workstreams")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yFarm"),Object(l.b)("td",{parentName:"tr",align:null},"Farm Treasury"),Object(l.b)("td",{parentName:"tr",align:null},"Farm with the treasury and make decisions on airdrops")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"yOps"),Object(l.b)("td",{parentName:"tr",align:null},"Ratify yTeam Signers"),Object(l.b)("td",{parentName:"tr",align:null},"Formally approve or remove signers for each yTeam")))),Object(l.b)("h3",{id:"multisig"},"Multisig"),Object(l.b)("p",null,"Decisions issued by yTeams will be executed on-chain by the Multisig until a more decentralized system is approved for implimentation. In the mean time, the ",Object(l.b)("a",{parentName:"p",href:"https://docs.yearn.finance/resources/faq#who-is-on-the-multisig"},"Multisig")," controls the following:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Power"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Execution Power"),Object(l.b)("td",{parentName:"tr",align:null},"The power to execute decisions made by YFI holders and yTeams on-chain")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Veto Power"),Object(l.b)("td",{parentName:"tr",align:null},"This power allows the Multisig to veto any decision and ideally should not be needed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Transitionary Power"),Object(l.b)("td",{parentName:"tr",align:null},"A temporary power enabling the Multisig to operate under the mandate of YIP-41 until the set of decision-making powers covers all needed transactions")))),Object(l.b)("h2",{id:"future-implementations"},"Future Implementations"),Object(l.b)("p",null,"Yearn is continuously paving the way towards an ideal balance of DAO decentralization and productivity. The current phase of efforts impliment changes mostly on the social layer, and in the future we will be moving towards software implementations such as: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Multisig consensus mechanisms that allows each yTeam to have execution power "),Object(l.b)("li",{parentName:"ul"},"Move from proxy voting to on-chain voting"),Object(l.b)("li",{parentName:"ul"},"tokenize decision-making powers as NFTs"),Object(l.b)("li",{parentName:"ul"},"Utilize ",Object(l.b)("a",{parentName:"li",href:"https://coordinape.com/"},"Coordinape")," for things like budget allocation and compensation")))}s.isMDXComponent=!0},266:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.a.createElement(u,i(i({ref:t},c),{},{components:a})):r.a.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);