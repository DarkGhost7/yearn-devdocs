(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(8),i=(n(0),n(266)),r={},b={unversionedId:"process-and-procedures/naming-convention",id:"version-0.4.2/process-and-procedures/naming-convention",isDocsHomePage:!1,title:"Naming Conventions",description:"yVaults",source:"@site/versioned_docs/version-0.4.2/process-and-procedures/naming-convention.md",sourceDirName:"process-and-procedures",slug:"/process-and-procedures/naming-convention",permalink:"/yearn-devdocs/v2/process-and-procedures/naming-convention",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/process-and-procedures/naming-convention.md",version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"Emergency Procedures for Yearn Finance",permalink:"/yearn-devdocs/v2/process-and-procedures/emergency"},next:{title:"BaseStrategy",permalink:"/yearn-devdocs/v2/smart-contracts/BaseStrategy"}},o=[{value:"Dev Cheat Sheet (Examples)",id:"dev-cheat-sheet-examples",children:[]},{value:"Overview and Explanation",id:"overview-and-explanation",children:[]},{value:"yVault Want Token",id:"yvault-want-token",children:[]},{value:"yUSD",id:"yusd",children:[]},{value:"yEarn",id:"yearn",children:[]},{value:"Test Products",id:"test-products",children:[]},{value:"Future Products",id:"future-products",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"yVaults"),Object(i.b)("h3",{id:"dev-cheat-sheet-examples"},"Dev Cheat Sheet (Examples)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Vanilla ERC20 tokens"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"${token.symbol()} or override yVault")),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yv${token.symbol()} or override"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"USDC yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvUSDC"),", ",Object(i.b)("inlineCode",{parentName:"li"},"aLINK yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvaLINK")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"LP positions"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Curve"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Curve + pool + Pool yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Curve sBTC Pool yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Curve 3pool yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Curve Y Pool yVault")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-pool"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-sBTC"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-3pool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-Y"),". We make an exception for the last one and call it ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD"),"."))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Uniswap"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvUni-TOKEN-TOKEN"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvUni-USDT-WETH"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvUni-WBTC-WETH")))),Object(i.b)("li",{parentName:"ul"},"Note: Version was included for Uniswap LP tokens to help limit confusion between UNI-v2 LP tokens and upcoming UNI-v3 LP tokens."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Balancer"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool yVault")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvBal-TOKEN-TOKEN"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvBal-USDT-WETH"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvBal-WBTC-WETH")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SushiSwap"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvSushi-TOKEN-TOKEN"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvSushi-USDT-WETH"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvSushi-WBTC-WETH")))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Experimental"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"No hard rules for ",Object(i.b)("inlineCode",{parentName:"li"},"name")," or ",Object(i.b)("inlineCode",{parentName:"li"},"symbol"),", just be sure to end ",Object(i.b)("inlineCode",{parentName:"li"},"name"),' with "yVault".',Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yveCRV-DAO yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yveCRV-DAO"),", ",Object(i.b)("inlineCode",{parentName:"li"},"St. Banteg of Yearn Patron of Plebs Lido St. Ether yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"sboypoplyvstETH"))))))),Object(i.b)("h3",{id:"overview-and-explanation"},"Overview and Explanation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Acceptable alternative names include Yearn Vaults, or informally referring to the product as vaults."),Object(i.b)("li",{parentName:"ul"},"When referring to a specific yVault, the preferred name is generally ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN + yVault"),"; this matches the ",Object(i.b)("inlineCode",{parentName:"li"},"name")," field on the yVault contract. However, it is also acceptable to use ",Object(i.b)("inlineCode",{parentName:"li"},"yvTOKEN + Vault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Yearn + TOKEN + Vault")," or ",Object(i.b)("inlineCode",{parentName:"li"},"yvTOKEN"),"; the latter matches ",Object(i.b)("inlineCode",{parentName:"li"},"symbol")," in the contract.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"DAI yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvDAI Vault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Yearn DAI Vault"),", or simply ",Object(i.b)("inlineCode",{parentName:"li"},"yvDAI")))),Object(i.b)("li",{parentName:"ul"},"For each yVault, name and symbol conventions are as follows:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"${token.symbol()} or override yVault")),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yv${token.symbol()} or override")))),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"version")," field is included in the token contract to correspond to the major yVault release version.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Additionally, developers may find it useful to denote ",Object(i.b)("inlineCode",{parentName:"li"},"version")," within the ",Object(i.b)("inlineCode",{parentName:"li"},"name")," field itself to help clarify the token to be deposited. Useful examples include Uniswap LPs (below), and also v1 vs v2 Aave aTokens."))),Object(i.b)("li",{parentName:"ul"},"The predominant use case for name and symbol override is for LP tokens. The use of the term ",Object(i.b)("inlineCode",{parentName:"li"},"Pool")," or ",Object(i.b)("inlineCode",{parentName:"li"},"LP")," is interchangeable, and will be selected based on colloquial use for each protocol.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For instance, Curve and Balancer LP positions are typically referred to as pools since they can contain more than two tokens, while Uniswap and SushiSwap positions are typically referred to as LPs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Curve"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Curve + pool + Pool yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Curve sBTC Pool yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Curve 3pool yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Curve Y Pool yVault")),Object(i.b)("li",{parentName:"ul"},"In this case, ",Object(i.b)("inlineCode",{parentName:"li"},"pool")," is taken directly from Curve.fi's UI, and we can adjust for capitalization as needed. In the case of the ",Object(i.b)("inlineCode",{parentName:"li"},"3pool"),', the redundant "Pool" is removed.'))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-pool"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-sBTC"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-3pool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-Y")))),Object(i.b)("li",{parentName:"ul"},"Note: In this methodology, ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-Y")," refers to the vault previously known as ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD"),". Please see below for a more detailed discussion on proper use of ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Uniswap"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvUni-TOKEN-TOKEN"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvUni-USDT-WETH"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvUni-WBTC-WETH")))),Object(i.b)("li",{parentName:"ul"},"Note: Version was included for Uniswap LP tokens to help limit confusion between UNI-v2 LP tokens and upcoming UNI-v3 LP tokens."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Balancer"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool yVault")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvBal-TOKEN-TOKEN"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvBal-USDT-WETH"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvBal-WBTC-WETH")))),Object(i.b)("li",{parentName:"ul"},"Note: Since Balancer allows more than two tokens per pool, append as many ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN")," as needed for the pool in question."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SushiSwap"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP yVault"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yvSushi-TOKEN-TOKEN"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yvSushi-USDT-WETH"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yvSushi-WBTC-WETH"))))))))),Object(i.b)("h2",{id:"yvault-want-token"},"yVault Want Token"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Yearn's UI, it may be useful to denote the desired token to deposit into a specific yVault. For basic ERC20 ",Object(i.b)("inlineCode",{parentName:"li"},"want")," tokens, ",Object(i.b)("inlineCode",{parentName:"li"},"name")," and ",Object(i.b)("inlineCode",{parentName:"li"},"symbol")," can be pulled directly from the token contract and utilized as-is.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"USD Coin"),", ",Object(i.b)("inlineCode",{parentName:"li"},"USDC"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ChainLink Token"),", ",Object(i.b)("inlineCode",{parentName:"li"},"LINK")))),Object(i.b)("li",{parentName:"ul"},"However, for LP positions, naming needs to be standardized.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Curve",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Curve + pool + Pool"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Curve sBTC Pool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Curve 3pool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Curve Y Pool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Curve Compound Pool")),Object(i.b)("li",{parentName:"ul"},"In this case, ",Object(i.b)("inlineCode",{parentName:"li"},"pool")," is taken directly from Curve.fi's UI, and we can adjust for capitalization as needed. In the case of the ",Object(i.b)("inlineCode",{parentName:"li"},"3pool"),', the redundant "Pool" is removed.'))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"crvPOOL or override"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"crvBUSD"),", ",Object(i.b)("inlineCode",{parentName:"li"},"crvCOMP"),", ",Object(i.b)("inlineCode",{parentName:"li"},"crvGUSD"),", ",Object(i.b)("inlineCode",{parentName:"li"},"crvMUSD"),", ",Object(i.b)("inlineCode",{parentName:"li"},"crvTBTC"),", ",Object(i.b)("inlineCode",{parentName:"li"},"crvSBTC"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yCRV"),", ",Object(i.b)("inlineCode",{parentName:"li"},"3Crv")))),Object(i.b)("li",{parentName:"ul"},"These names were chosen as ",Object(i.b)("inlineCode",{parentName:"li"},"crvBUSD")," and ",Object(i.b)("inlineCode",{parentName:"li"},"crvSBTC")," are already fairly widely used, and applying this formula works well for other pools. ",Object(i.b)("inlineCode",{parentName:"li"},"yCRV")," and ",Object(i.b)("inlineCode",{parentName:"li"},"3Crv")," are the allowed exceptions, as ",Object(i.b)("inlineCode",{parentName:"li"},"yCRV")," is the most widely used name for that pool, and ",Object(i.b)("inlineCode",{parentName:"li"},"3Crv")," usage is now fairly common with the recent admin fee distribution."))),Object(i.b)("li",{parentName:"ul"},"Uniswap",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN-TOKEN UNI"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"USDT-WETH UNI"),", ",Object(i.b)("inlineCode",{parentName:"li"},"WBTC-WETH UNI")))))),Object(i.b)("li",{parentName:"ul"},"Balancer",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN-TOKEN BPT"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"USDT-WETH BPT"),", ",Object(i.b)("inlineCode",{parentName:"li"},"WBTC-WETH BPT")))),Object(i.b)("li",{parentName:"ul"},"Note: Since Balancer allows more than two tokens per pool, append as many ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN")," as needed for the pool in question."))),Object(i.b)("li",{parentName:"ul"},"SushiSwap",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP")))),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"TOKEN-TOKEN SLP"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"USDT-WETH SLP"),", ",Object(i.b)("inlineCode",{parentName:"li"},"WBTC-WETH SLP"))))))))),Object(i.b)("h2",{id:"yusd"},"yUSD"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"While the term ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD")," was used to refer to the Curve Y Pool yVault in the past, under our updated naming convention this vault token is now ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-Y"),". However, usage of ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD")," is still permissable when referring to the asset itself.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Example:")," Yearn pays monthly grants in ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD"),"."))),Object(i.b)("li",{parentName:"ul"},"In the future, if Yearn creates a new ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD")," that is a collection of several yVault tokens (as has been previously discussed), then the current ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD")," will simply be referred to as ",Object(i.b)("inlineCode",{parentName:"li"},"yvCurve-Y")," and only the new token will be ",Object(i.b)("inlineCode",{parentName:"li"},"yUSD"),".")),Object(i.b)("h2",{id:"yearn"},"yEarn"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"These are Yearn's original yield-aware tokens, whose v2 and v3 contracts can be found ",Object(i.b)("a",{parentName:"li",href:"https://docs.yearn.finance/developers/deployed-contracts-registry#v2-yield-tokens"},"here"),"."),Object(i.b)("li",{parentName:"ul"},"These products should be referred to as yEarn Tokens, ",Object(i.b)("inlineCode",{parentName:"li"},"underlying token name + Earn"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"y{token.symbol()}v${self.version()}"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"yDAIv2"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yDAI Earn"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yBUSDv3"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yBUSD Earn"))))),Object(i.b)("h2",{id:"test-products"},"Test Products"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For deployed contracts that have not reached their final production version, a simple modification is included to designate these on the contract level as being test products.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Name: ",Object(i.b)("inlineCode",{parentName:"li"},"${token.symbol()} or override + Test + Product")),Object(i.b)("li",{parentName:"ul"},"Symbol: ",Object(i.b)("inlineCode",{parentName:"li"},"yt${token.symbol()} or override")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"DAI Test yVault"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ytDAI")))),Object(i.b)("li",{parentName:"ul"},"Additionally, the v2 yVault contracts have upgradeable ",Object(i.b)("inlineCode",{parentName:"li"},"name")," and ",Object(i.b)("inlineCode",{parentName:"li"},"symbol")," fields. This means that should a test contract perform well, these fields can be updated to reflect that it is no longer a test contract, removing the need to deploy new contracts.")),Object(i.b)("h2",{id:"future-products"},"Future Products"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Future products can follow a simple naming convention: ",Object(i.b)("inlineCode",{parentName:"li"},"y + product"),", where the product and any potential token names follow similar guidelines as above with yVaults. These can then be further modified as needed based on the product","(","s",")",".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Examples:")," ",Object(i.b)("inlineCode",{parentName:"li"},"ySwap"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yBorrow"),", ",Object(i.b)("inlineCode",{parentName:"li"},"yTrade"))))))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,u=m["".concat(r,".").concat(O)]||m[O]||s[O]||i;return n?l.a.createElement(u,b(b({ref:t},c),{},{components:n})):l.a.createElement(u,b({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var c=2;c<i;c++)r[c]=n[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);