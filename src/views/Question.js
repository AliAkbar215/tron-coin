import React,{useState} from 'react'

export default function Question() {
    const [quest1Active,setQuest1Active]=useState(false)
    const [quest2Active,setQuest2Active]=useState(false)
    const [quest3Active,setQuest3Active]=useState(false)
    const [quest4Active,setQuest4Active]=useState(false)
    const [quest5Active,setQuest5Active]=useState(false)
    const [quest6Active,setQuest6Active]=useState(false)
    const [quest7Active,setQuest7Active]=useState(false)
    const [quest8Active,setQuest8Active]=useState(false)
    const [quest9Active,setQuest9Active]=useState(false)
    const [quest10Active,setQuest10Active]=useState(false)
    const [quest11Active,setQuest11Active]=useState(false)
    const [quest12Active,setQuest12Active]=useState(false)
    const [quest13Active,setQuest13Active]=useState(false)
    const [quest15Active,setQuest15Active]=useState(false)
    const [quest16Active,setQuest16Active]=useState(false)
    const [quest17Active,setQuest17Active]=useState(false)
    return (
        <div id="faq" class="faq">
        <div class="faq-img">
            <img src="/img/frequently.svg" alt="" />
        </div>
        <div class="faq-title">Frequently Asked Questions</div>
        <div class="faqs">
            <div class="faq-block">
                <div onClick={()=>setQuest1Active(!quest1Active)} className={`faq-block-top ${quest1Active? "active": ""}`}>Q. How to start working with TronEarn?</div>
                <div class="faq-block-content">Step 1 : Registration.<br />Step 2 : Buy Any BASE and Earn TRON with Global BASE.</div>
            </div>
            <div class="faq-block">
                <div  onClick={()=>setQuest2Active(!quest2Active)} className={`faq-block-top ${quest2Active? "active": ""}`}>Q. What is TRON?</div>
                <div class="faq-block-content">TRON (TRX) is one of the leading cryptocurrency established in 2017. The blockchain of the cryptocurrency allows you to create on the basis of smart contracts. A huge number of large crypto companies uses this currency.</div>
            </div>



            <div class="faq-block">
                <div onClick={()=>setQuest3Active(!quest3Active)} className={`faq-block-top ${quest3Active? "active": ""}`}>Q. What Happen with My Registrar Fees ?</div>
                <div class="faq-block-content">A.Registration Fees 20 TRX is instantly paid to your direct<br /> sponsor.</div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest4Active(!quest4Active)} className={`faq-block-top ${quest4Active? "active": ""}`}>Q. How many BASE are in the system ?</div>
                <div class="faq-block-content">A.Total 12 Worldwide BASE in the system.</div>
            </div>


            <div class="faq-block">
                <div onClick={()=>setQuest5Active(!quest5Active)} className={`faq-block-top ${quest5Active? "active": ""}`}>Q. What is a SMART CONTRACT? What are its ADVANTAGES?</div>
                <div class="faq-block-content">A.Smart contract – the algorithm inside the blockchain cryptocurrencies. In our case that TRON is number one among the those on which it is possible to create smart contracts. The main purpose of such contracts is the automation of the relationship, the opportunity to make commitments.</div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest6Active(!quest6Active)} className={`faq-block-top ${quest6Active? "active": ""}`}>Q. Who MANAGES the platform?</div>
                <div class="faq-block-content">A.Platform TronEarn does not have a Manager. There are the creators of the Smart contract who works in the TRON blockchain. This means that the platform is fully decentralized (i.e. it has no leaders or admins).</div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest7Active(!quest7Active)} className={`faq-block-top ${quest7Active? "active": ""}`}>Q. WHAT DATA DO I NEED TO REGISTER?</div>
                <div class="faq-block-content">A.To register you will need only a wallet Tronlink - a Google Chrome extension (PC) and/or some other applications for mobile devices. Tested and safe applications:<br />
                wallet Tronlink <a href="https://www.tronlink.org/" target="_blank">https://www.tronlink.org/</a><br />
                wallet Tron Wallet <a href="https://www.tronwallet.me/" target="_blank">https://www.tronwallet.me/</a><br /> 
                Pocket Wallet Token <a href="https://www.tokenpocket.pro/" target="_blank">https://www.tokenpocket.pro</a>
                During registration you will need to enter the name or email address.
                </div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest8Active(!quest8Active)} className={`faq-block-top ${quest8Active? "active": ""}`}>Q. HOW TO BUY TRON, IF I NEVER HAD TO DEAL WITH CRYPTOCURRENCY?</div>
                <div class="faq-block-content">A.There are many ways of buying/selling cryptocurrency - all of them are as simple as with ordinary money, enough to make a couple of transactions independently, then each operation will take you no more than 1-2 minutes. One of the main ways is the use of sharing sites that allow you to exchange real money for free. One of the ways of replenishment of the purse.
                Proven website exchange: <a href="https://www.bestchange.net/" target="_blank">https://www.bestchange.net/</a>
                </div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest9Active(!quest9Active)} className={`faq-block-top ${quest9Active? "active": ""}`}>Q. HOW TO SWAP ETHEREUM TO TRON?</div>
                <div class="faq-block-content">A.If you have Ethereum than need not to buy TRX.You can just swap Ethereum to Tron in <a href="https://www.bestchange.net/ethereum-to-tron.html" target="_blank">https://www.bestchange.net/ethereum-to-tron.html</a>
                </div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest10Active(!quest10Active)} className={`faq-block-top ${quest10Active? "active": ""}`}>Q. What is Worldwide One Line Base ?</div>


                <div class="faq-block-content">A. Worldwide One Line Base is one Worldwide network based on first enter first Join Basis.</div>
            </div>
            <div class="faq-block">
                <div onClick={()=>setQuest11Active(!quest11Active)} className={`faq-block-top ${quest11Active? "active": ""}`}>Q. How many Bases are in the system ?</div>
                <div class="faq-block-content">A. Total 12 Worldwide Bases in the system.</div>
            </div>
            <div class="faq-block">
                <div onClick={()=>setQuest12Active(!quest12Active)} className={`faq-block-top ${quest12Active? "active": ""}`}>Q. Can I buy the 4th base at once?</div>
                <div class="faq-block-content">A. No, all bases are bought in turn. If you haven't bought 1-2-3 bases, then you cannot buy base 4.</div>
            </div>
            <div class="faq-block">
                <div onClick={()=>setQuest13Active(!quest13Active)} className={`faq-block-top ${quest13Active? "active": ""}`}>Q. What happen is I not Enter at Next Base ?</div>
                <div class="faq-block-content">A.Your account remain active in the system forever, and you will get Referral Income from entire team. you may enter next Base anytime you wants.</div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest15Active(!quest15Active)} className={`faq-block-top ${quest15Active? "active": ""}`}>Q. Is my (TRX) Funds safe ?</div>
                <div class="faq-block-content">A.YES, YOUR FUND IS SAFE as it's always Stored on Decentralized Tron Wallets like TRUST WALLET or METAMASK</div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest16Active(!quest16Active)} className={`faq-block-top ${quest16Active? "active": ""}`}>Q. Is it possible to earn Passively here at TronEarn ?</div>
                <div class="faq-block-content">A.Yes, Definitely. As TronEarn is Worldwide One Line Base Decentralized Open Source Smart Contract System. Every New User who Joins after you falls under you in one (Uni/Mono) line. Personal Invitation or Recruitment gives you additional Opportunity to earn Referral Income 20 TRX. In addition to this Base gives you Opportunity to multiply 400 Tron to X3072 TIMES i.e. 400 TRX to 1228800 TRX multiple times again and again.</div>
            </div>

            <div class="faq-block">
                <div onClick={()=>setQuest17Active(!quest17Active)} className={`faq-block-top ${quest17Active? "active": ""}`}>Q. I don't have Referral link, can I register with<br /> TronEarn ?</div>
                <div class="faq-block-content">A. Yes,You will be Register under Systems Referral link.</div>
            </div>

        </div>
        <div class="faq-img"></div>
    </div>
  
    )
}
