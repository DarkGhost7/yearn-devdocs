(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(8),r=(a(0),a(266)),o={},s={unversionedId:"process-and-procedures/emergency",id:"version-0.4.2/process-and-procedures/emergency",isDocsHomePage:!1,title:"Emergency Procedures for Yearn Finance",description:"TLDR: Emergency Checklist",source:"@site/versioned_docs/version-0.4.2/process-and-procedures/emergency.md",sourceDirName:"process-and-procedures",slug:"/process-and-procedures/emergency",permalink:"/yearn-devdocs/v2/process-and-procedures/emergency",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/process-and-procedures/emergency.md",version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"Operations procedures",permalink:"/yearn-devdocs/v2/process-and-procedures/operations"},next:{title:"Naming Conventions",permalink:"/yearn-devdocs/v2/process-and-procedures/naming-convention"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Definitions and Examples of Emergencies",id:"definitions-and-examples-of-emergencies",children:[]},{value:"Roles",id:"roles",children:[{value:"Facilitator",id:"facilitator",children:[]},{value:"Multi-sig Herder",id:"multi-sig-herder",children:[]},{value:"Strategist Lead",id:"strategist-lead",children:[]},{value:"Core Dev Lead (Guardian)",id:"core-dev-lead-guardian",children:[]},{value:"Web Lead",id:"web-lead",children:[]},{value:"Ops",id:"ops",children:[]}]},{value:"Emergency Steps",id:"emergency-steps",children:[{value:"Emergency Checklist",id:"emergency-checklist",children:[]},{value:"Tools",id:"tools",children:[]}]},{value:"Incident Post Mortem",id:"incident-post-mortem",children:[{value:"Post Mortem Outputs",id:"post-mortem-outputs",children:[]},{value:"Post Mortem Steps",id:"post-mortem-steps",children:[]}]}],l={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TLDR: ",Object(r.b)("a",{parentName:"p",href:"#emergency-checklist"},"Emergency Checklist")),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"This document details the procedures and guidelines that should take place in the event of an emergency situation. Its purpose is to minimize the risk for loss of funds for Yearn's users, Treasury, and Smart Contracts."),Object(r.b)("h2",{id:"definitions-and-examples-of-emergencies"},"Definitions and Examples of Emergencies"),Object(r.b)("p",null,"For the purposes of this document, an emergency situation is defined to be:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Any situation that may lead to a considerable amount of loss of funds for Yearn users, Yearn's Treasury, or Smart Contracts deployed by Yearn."))),Object(r.b)("p",null,"This is a non exhaustive list of possible emergency scenarios:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Bug/Exploit in Vault/Strategy code that can cause a loss of funds for users"),Object(r.b)("li",{parentName:"ol"},"Bug/Exploit in an underlying protocol that a Yearn Strategy is utilizing that may lead to loss of funds"),Object(r.b)("li",{parentName:"ol"},"Loss of private keys for a key role, such as a Strategist"),Object(r.b)("li",{parentName:"ol"},"Potential exploit discovered by team or bounty program researcher"),Object(r.b)("li",{parentName:"ol"},"Active exploit / hack in progress discovered by unknown party")),Object(r.b)("h2",{id:"roles"},"Roles"),Object(r.b)("p",null,"In the event of an emergency situation, the following roles should be assigned to Yearn contributors working to resolve the situation:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Facilitator"),Object(r.b)("li",{parentName:"ul"},"Multi-sig Herder"),Object(r.b)("li",{parentName:"ul"},"Strategist Lead"),Object(r.b)("li",{parentName:"ul"},"Core Dev Lead (Guardian)"),Object(r.b)("li",{parentName:"ul"},"Web Lead"),Object(r.b)("li",{parentName:"ul"},"Ops")),Object(r.b)("p",null,"A contributor may be assigned up to two of these roles concurrently."),Object(r.b)("h3",{id:"facilitator"},"Facilitator"),Object(r.b)("p",null,"Facilitates the emergency handling and ensures\xa0the process described in this document is followed, engaging with the correct stakeholders and teams in order for the necessary decisions to be made quickly. A suitable Facilitator is any person familiar with the process and is confident that they can drive the team to follow through. It's expected that the person assigned to this role has relevant experience either from having worked real scenarios or through drill training."),Object(r.b)("h3",{id:"multi-sig-herder"},"Multi-sig Herder"),Object(r.b)("p",null,"Responsible for ensuring that different Yearn teams' Multi-sig wallets (i.e. dev.ychad.eth, brain.ychad.eth, ychad.eth) are able to execute transactions in a timely manner during the emergency."),Object(r.b)("p",null,"Main responsibilities:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Help clear the queue of any pending operations once the War Room starts"),Object(r.b)("li",{parentName:"ul"},"Coordinate required signers so they can respond quickly to queued transactions"),Object(r.b)("li",{parentName:"ul"},"Prepare or help with transactions in different multi-sigs\nReference:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/yearn/emergency-toolbox"},"emergency-toolbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/yearn/chief-multisig-officer"},"CMO")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/yearn/strategist-ms"},"strategists-ms"))))),Object(r.b)("h3",{id:"strategist-lead"},"Strategist Lead"),Object(r.b)("p",null,"In charge of coordinating quick changes to management and strategist roles during the emergency, including but not limited to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Prepare and Execute Strategist Multi-sig transactions and operations"),Object(r.b)("li",{parentName:"ul"},"Set strategy in emergency exit mode"),Object(r.b)("li",{parentName:"ul"},"Update debt ratios"),Object(r.b)("li",{parentName:"ul"},"Remove Strategies from Queue"),Object(r.b)("li",{parentName:"ul"},"Coordinate Harvests")),Object(r.b)("h3",{id:"core-dev-lead-guardian"},"Core Dev Lead (Guardian)"),Object(r.b)("p",null,"Coordinates quick changes to Governance and Guardian roles during the emergency, including but not limited to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Prepare and Execute Core Dev Multi-sig transactions and operations"),Object(r.b)("li",{parentName:"ul"},"Revoke a Strategy"),Object(r.b)("li",{parentName:"ul"},"Set vault in emergency shutdown mode")),Object(r.b)("h3",{id:"web-lead"},"Web Lead"),Object(r.b)("p",null,"Coordinates quick changes to UI and Websites as required, including but not limited to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Disable deposits/withdrawals through the UI"),Object(r.b)("li",{parentName:"ul"},"Display alerts and banners"),Object(r.b)("li",{parentName:"ul"},"Other UI related work")),Object(r.b)("h3",{id:"ops"},"Ops"),Object(r.b)("p",null,"In charge of coordinating comms and operations assistance as required:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Clear with War Room what information and communication can be published during and after the incident"),Object(r.b)("li",{parentName:"ul"},"Coordinate Communications"),Object(r.b)("li",{parentName:"ul"},"Take note of timelines and events for disclosure")),Object(r.b)("h2",{id:"emergency-steps"},"Emergency Steps"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Also see ",Object(r.b)("a",{parentName:"em",href:"#Emergency-checklist"},"Check list")," and ",Object(r.b)("a",{parentName:"em",href:"#tools"},"Tools"),".")),Object(r.b)("p",null,"This acts as a guideline to follow when an incident is reported requiring immediate attention."),Object(r.b)("p",null,"The primary objective is minimized the loss of funds, in particular for Yearn's users. All decisions made should be driven by this goal."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open a private chat room (War Room) with a voice channel and invite only the team members that are online that can cover the ",Object(r.b)("a",{parentName:"li",href:"#Roles"},"roles described above"),". The War Room is limited to members that act in the capacities of the designated roles, as well as additional persons that can provide critical insight into the circumstances of the issue and how it can best be resolved."),Object(r.b)("li",{parentName:"ol"},"All the information that is gathered during the War Room should be considered private to the chat and not to be shared with third parties. Relevant data should be pinned and updated by the Facilitator for the team to have handy."),Object(r.b)("li",{parentName:"ol"},"The team's first milestone is to assess the situation as quickly as possible: Confirming the reported information and determine how critical the incident is. A few questions to guide this process:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Is there confirmation from several team members/sources that the issue is valid? Are there example transactions that show the incident occurring? (Pin these in the War Room)"),Object(r.b)("li",{parentName:"ul"},"Is the Strategist that knows the most about the code in the War Room? Can the Strategist in question be reached? If not, can we reach the backup Strategist?"),Object(r.b)("li",{parentName:"ul"},"Are funds presently at risk? Is immediate action required?"),Object(r.b)("li",{parentName:"ul"},"Is the issue isolated or does it affect several vaults/strategies? Can the affected contracts be identified? (Pin these in the War Room)"),Object(r.b)("li",{parentName:"ul"},"Which Multi-sig will require signing to address the issue? The Multi-sig Herder should begin to notify signers and clear the queue in preparation for emergency transactions."),Object(r.b)("li",{parentName:"ul"},"If there is no immediate risk for loss of funds, does the team still need to take preventive action or some other mitigation?"),Object(r.b)("li",{parentName:"ul"},"Is there agreement in the team that the situation is under control and that the War Room\xa0can be closed?"))),Object(r.b)("li",{parentName:"ol"},"Once the issue has been confirmed as valid, the next stop is to take immediate corrective action to prevent further loss of funds. If root cause requires further research, the team\xa0must err on the side of caution and take emergency preventive actions while the situation continues to be assessed. A few questions to guide the decisions of the team:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Disable deposits to the affected Vaults? Should migrations and deposits be removed from the UI?"),Object(r.b)("li",{parentName:"ul"},"Activate Emergency Exit on the affected Strategies?"),Object(r.b)("li",{parentName:"ul"},"Remove one or more strategies from the withdrawal queue from the affected vaults?"),Object(r.b)("li",{parentName:"ul"},"Activate Emergency Shutdown in the Vault?"),Object(r.b)("li",{parentName:"ul"},"Revoke 1 or more Strategies?"),Object(r.b)("li",{parentName:"ul"},"Are multiple Team members able to confirm the corrective actions will stop the immediate risk through local Ganache fork testing? Strategist and Core Dev main roles in particular to confirm this step."))),Object(r.b)("li",{parentName:"ol"},"The immediate corrective actions should be scripted or taken from the repository ",Object(r.b)("a",{parentName:"li",href:"https://github.com/yearn/emergency-toolbox"},"emergency-toolbox")," and executed ASAP. Multi-sig Herder and Strategist Lead should coordinate this execution within the corresponding roles. ",Object(r.b)("strong",{parentName:"li"},"NOTE: This step is meant to give the War Room time to assess and research a more long term solution"),"."),Object(r.b)("li",{parentName:"ol"},"Once corrective measures are in place and there is confirmation by multiple sources that funds are no longer at risk, the next objective is to identify the root cause. A few questions/actions during this step that can help the team make decisions:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"What communications should be made public at this point in time?"),Object(r.b)("li",{parentName:"ul"},"Can research among members of the War Room be divided? This step can be open for team members to do live debug sessions sharing screens to help identify the problem using the sample transactions."))),Object(r.b)("li",{parentName:"ol"},"Once the cause is identified, the team can brainstorm to come up with the most suitable remediation plan and its code implementation (if required). A few questions that can help during this time:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In case there are many possible solutions can the team prioritize by weighing each option by time to implement and minimization of losses?"),Object(r.b)("li",{parentName:"ul"},"Can the possible solutions be tested and compared to confirm the end state fixes the issue?"),Object(r.b)("li",{parentName:"ul"},"Is there agreement in the War Room about the best solution? If not, can the objections be identified and a path for how to reach consensus on the approach be worked out, prioritizing the minimization of losses?"),Object(r.b)("li",{parentName:"ul"},"If a solution will take longer than a few hours, are there any further communications and preventive actions needed while the fix is developed?"),Object(r.b)("li",{parentName:"ul"},"Does the solution require a longer term plan? Is there identified owners for the tasks/steps for the plan's execution?"))),Object(r.b)("li",{parentName:"ol"},"Once a solution has been implemented, the team will confirm the solution resolves the issue and minimizes the loss of funds. Possible actions needed during this step:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Run in ganache fork simulations of end state to confirm the proposed solution(s)"),Object(r.b)("li",{parentName:"ul"},"Coordinate signatures from multi-sig signers and execution"),Object(r.b)("li",{parentName:"ul"},"Enable UI changes to normalize operations as needed"))),Object(r.b)("li",{parentName:"ol"},"Assign a lead to prepare a ",Object(r.b)("a",{parentName:"li",href:"https://github.com/yearn/yearn-security"},"disclosure")," (should it be required), preparing a timeline of the events that took place."),Object(r.b)("li",{parentName:"ol"},"The team agrees when the War Room\xa0can be dismantled. The Facilitator breaks down the War Room and sets reminders if it takes longer than a few hours for members to reconvene.")),Object(r.b)("h3",{id:"emergency-checklist"},"Emergency Checklist"),Object(r.b)("p",null,"This checklist should be complemented with the ",Object(r.b)("a",{parentName:"p",href:"#emergency-steps"},"steps")),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create War room with audio"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Assign Key Roles to War Room members"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add Strategist or other Expert (or their backup) to the War Room"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Clear related Multi-sig queues"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Confirm and identify Issue"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Take immediate corrective/preventive actions in order to prevent (further) loss of funds"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Communicate the current situation internally and externally (as appropriate)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Determine the root cause"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Propose workable solutions"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement and validate solutions"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Prioritize solutions"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Reach agreement in Team on best solution"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Execute solution"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Confirm incident has been resolved"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Assign ownership of security disclosure report"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Disband War Room"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Conduct immediate debrief"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Schedule a Post Mortem")),Object(r.b)("h3",{id:"tools"},"Tools"),Object(r.b)("p",null,"List of tools and alternatives in case primary tools are not available during an incident."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Primary"),Object(r.b)("th",{parentName:"tr",align:"center"},"Secondary"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Code Sharing"),Object(r.b)("td",{parentName:"tr",align:null},"Github"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"https://hackmd.io/"},"HackMd"),", ",Object(r.b)("a",{parentName:"td",href:"https://codeshare.io/5Og7mj"},"CodeShare"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Communications*"),Object(r.b)("td",{parentName:"tr",align:null},"Telegram"),Object(r.b)("td",{parentName:"tr",align:"center"},"Discord")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Transaction Details"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://etherscan.io/"},"Etherscan")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"https://ethtx.info/"},"EthTxInfo"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Debugging"),Object(r.b)("td",{parentName:"tr",align:null},"Brownie"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"https://tenderly.co/"},"Tenderly"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Transaction Builder"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://github.com/banteg/ape-safe"},"ape-safe")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("em",{parentName:"td"},"Backup if gnosis safe Api is not working?"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Screen Sharing*"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://jitsi.org/"},"jitsi")),Object(r.b)("td",{parentName:"tr",align:"center"},"Google Hangouts")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Facilitator is responsible to ensure no unauthorized persons enter the War Room or join these tools via invite links that leak.")),Object(r.b)("h2",{id:"incident-post-mortem"},"Incident Post Mortem"),Object(r.b)("p",null,"A Post Mortem should be conducted after an incident to gather data and feedback from War Room participants in order to produce actionable improvements for Yearn processes such as this one."),Object(r.b)("p",null,"Following the dissolution of a War Room, the Facilitator should ideally conduct an immediate informal debrief to gather initial notes before they are forgotten by participants. "),Object(r.b)("p",null,"This can then be complemented by a more extensive Post Mortem as outlined below."),Object(r.b)("p",null,"The Post Mortem should be conducted at the most a week following the incident to ensure a fresh recollection by the participants."),Object(r.b)("p",null,"It is key that most of the participants of the War Room are involved during this session in order for an accurate assessment of the events that took place. Discussion is encouraged. The objective is to collect constructive feedback for how the process can be improved, ",Object(r.b)("strong",{parentName:"p"},"and not")," to assign blame on any War Room participants."),Object(r.b)("p",null,"Participants are encouraged to provide inputs on each of the steps. If a participant is not giving inputs, the Facilitator is expected to try to obtain more feedback by asking questions."),Object(r.b)("h3",{id:"post-mortem-outputs"},"Post Mortem Outputs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"List of what went well"),Object(r.b)("li",{parentName:"ul"},"List of what be improved"),Object(r.b)("li",{parentName:"ul"},"List of questions that came up in the Post Mortem"),Object(r.b)("li",{parentName:"ul"},"List of insights from the process"),Object(r.b)("li",{parentName:"ul"},"Root Cause Analysis along with concrete measures required to prevent the incident from ever happening again."),Object(r.b)("li",{parentName:"ul"},"List of action items assigned to owners with estimates for completion.")),Object(r.b)("h3",{id:"post-mortem-steps"},"Post Mortem Steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Facilitator runs the session in a voice channel and shares a screen for participants to follow notes."),Object(r.b)("li",{parentName:"ol"},"Facilitator runs through an agenda to obtain the necessary ",Object(r.b)("a",{parentName:"li",href:"#post-mortem-outputs"},"outputs"),"."),Object(r.b)("li",{parentName:"ol"},"For the Root Cause Analysis part, the Facilitator conducts an exercise to write the problem statement first and then confirm with the participants that the statement is correct and understood."),Object(r.b)("li",{parentName:"ol"},"Root Cause Analysis can be identified with following tools:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Brainstorming"},"Brainstorming")," session with participants"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Five_whys"},"5 Whys Technique")))),Object(r.b)("li",{parentName:"ol"},"Once Root Causes have been identified, action items can be written and assigned to willing participants that can own the tasks. It is recommended that an estimated time for completion is given. A later process can track completion of given assignments. ",Object(r.b)("strong",{parentName:"li"},"Note: The action items need to be clear, actionable and measurable for completion")),Object(r.b)("li",{parentName:"ol"},"The Facilitator tracks completion of action items. The end result of the process should be an actionable improvement in the process. Some possible improvements:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Changes in the process and documentation"),Object(r.b)("li",{parentName:"ul"},"Changes in code and tests to validate"),Object(r.b)("li",{parentName:"ul"},"Changes in tools implemented and incorporated into the process")))))}b.isMDXComponent=!0},266:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,u=m["".concat(o,".").concat(p)]||m[p]||d[p]||r;return a?i.a.createElement(u,s(s({ref:t},l),{},{components:a})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);