"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BsHouse } from "react-icons/bs";
import { useState } from "react";
import Email from "./Components/Email/Email";
import Link from "next/link";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question:
        "How many DLICOM Token will be issued in total, and what share of those tokens will be sold during the ICO?",
      answer:
        "Seventy percent of DLICOM tokens in circulation are represented by a supply of 610.000.000 tokens.",
    },
    {
      question:
        "Is your project management software suitable for teams of all sizes?",
      answer:
        "Yes, our project management software is designed to cater to teams of all sizes, from small startups to large enterprises. Whether you're managing a handful of tasks or overseeing complex projects with multiple stakeholders",
    },
    {
      question:
        "Can I customize and integrate SaaS applications with other tools?",
      answer:
        "Yes, many SaaS applications offer customization and integration options to tailor them to your business needs and workflows.",
    },
    {
      question: " Is SaaS suitable for startups and small businesses?",
      answer:
        "Yes, SaaS is well-suited for startups and small businesses due to its affordability, scalability, and accessibility.",
    },
    {
      question: "How can SaaS benefit my business?",
      answer:
        "SaaS offers benefits such as cost-effectiveness, scalability, accessibility, and security, making it an ideal choice for startups and small businesses.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className={styles.mainSection}>
        <div className={`${styles.textContainer} flex`}>
          <h1 className={styles.mainSectionTitle}>
            Dlicom Application Nothing Better
          </h1>
          <p className={styles.mainSectionPara}>
            Serving Our Community in the most secure and Private way.
          </p>
          <div className={`${styles.ImgsContainer} flex`}>
            <Image
              className={styles.dlicomAppImg}
              src="/GooglePlay.png"
              alt="GooglePlay Img"
              width={140}
              height={48}
              priority
            />
            <Image
              className={styles.dlicomAppImg}
              src="/apple.png"
              alt="apple Img"
              width={140}
              height={48}
              priority
            />
            <Image
              className={styles.dlicomAppImg}
              src="/Huwai.png"
              alt="Huwai Img"
              width={140}
              height={48}
              priority
            />
          </div>
        </div>
      </div>
      <div className={`${styles.videoSection} flex`}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/wpdJOcj6XRE?si=6Rri2u76W2ihdDA6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <p className={styles.videoPara}>
          dilcom app video example about all futures in app
        </p>
      </div>
      <div className={styles.whitePaperSection}>
        <div className={`${styles.whitePaperContainer} flex`}>
          <h1 className={styles.whitePaperTitle}>
            Download <br /> White Paper
          </h1>
          <p className={styles.whitePaperpara}>
            We create experiences that fuel connections
          </p>
          <a href="/DLI_WhitePaper.pdf" download>
            <button className={styles.whitePaperBtn}>Download</button>
          </a>
        </div>
      </div>

      <div className={styles.DlicomFeaturesSection} id="futureSection">
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1 className={styles.DlicomFeaturesTitle}>DLICOM Features</h1>
            <p className={styles.DlicomFeaturespara}>strange customs persist</p>
          </div>
          <div className={styles.DlicomFeaturesCardsConatiner}>
            <div className={styles.easyAppCard}>
              <h1 className={styles.easyAppCardTitle}>Easy App</h1>
            </div>

            <div className={styles.columncards}>
              <div className={styles.columncardsTop}>
                <div className={styles.ImgsContainer}>
                  <Image
                    className={styles.userProfileImg}
                    src="/pngprofile.png"
                    alt="appleImg"
                    width={190}
                    height={170}
                    priority
                  />
                </div>
                <h2 className={styles.columncardstopTitle}>User Profile</h2>
                <p className={styles.columncardstopPara}>
                  Typography, Effects, and Color styles.
                </p>
              </div>

              <div className={`${styles.columncardsbottom} bottomTwo`}>
                <h2>700+ Components</h2>
                <p>Buttons, Dropdowns, and more.</p>
              </div>
            </div>

            <div className={styles.columncards}>
              <div className={`${styles.columncardsbottom} `}>
                <h2>200+ Variables</h2>
                <p>Surface, Text, Outlines, and Radius.</p>
              </div>
              <div className={styles.columncardsTop}>
                <div className={styles.ImgsContainer}>
                  <Image
                    className={styles.userProfileImg}
                    src="/pngprofile.png"
                    alt="appleImg"
                    width={190}
                    height={170}
                    priority
                  />
                </div>
                <h2 className={styles.columncardstopTitle}>Sample Screens</h2>
                <p className={styles.columncardstopPara}>
                  Explore ready-to-use layout samples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.futureSection} flex`}>
        <div className={`${styles.container} flex`}>
          <div className={`${styles.futureSectionText} flex`}>
            <h3>Dlicom Application</h3>
            <p className={styles.firstPara}>
              The Future of Socializing and Trading Digital Assets
            </p>
            <p className={styles.secondPara}>
              We're consistently pushing the boundaries of innovation to create
              groundbreaking solutions that effectively meet today's challenges.
            </p>
          </div>
          <div className={`${styles.contentContainer} flex`}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.futureImg}
                src="/blockchain.png"
                alt="img"
                width={500}
                height={400}
                priority
              />
            </div>
            <div className={`${styles.textContent} flex`}>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Stay anonymous</h2>
                <p className={styles.para}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quaerat amet eum a placeat sequi ea labore magni molestiae?
                  Recusandae doloremque voluptatem sapiente vitae voluptas.z
                </p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Secure Encrypted Chat for Individuals and Groups</h2>
                <p className={styles.para}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quaerat amet eum a placeat sequi ea labore magni molestiae?
                  Recusandae doloremque voluptatem sapiente vitae voluptas.z
                </p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Multiplatform Cryptocurrency Wallet</h2>
                <p className={styles.para}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quaerat amet eum a placeat sequi ea labore magni molestiae?
                  Recusandae doloremque voluptatem sapiente vitae voluptas.z
                </p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Unique payment reference</h2>
                <p className={styles.para}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quaerat amet eum a placeat sequi ea labore magni molestiae?
                  Recusandae doloremque voluptatem sapiente vitae voluptas.z
                </p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Cryptocurrency Exchanges together with online banking</h2>
                <p className={styles.para}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quaerat amet eum a placeat sequi ea labore magni molestiae?
                  Recusandae doloremque voluptatem sapiente vitae voluptas.z
                </p>
              </div>
              <div className={styles.titleAndPara}>
                <h2 className={styles.title}>Browsing data adopting with Web 3.0</h2>
                <p className={styles.para}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                  quaerat amet eum a placeat sequi ea labore magni molestiae?
                  Recusandae doloremque voluptatem sapiente vitae voluptas.z
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.solveSection}>
        <div className={`${styles.container} flex`}>
          <div className={`${styles.solveSectionText} flex`}>
            <h3>Dlicom Application</h3>
            <p className={styles.firstPara}>What does it solve?</p>
          </div>

          <div className={`${styles.cardsContainer} flex`}>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>Centralized Control</h2>
                <p>
                  To combat the increasing trend of centralized control over
                  social media platforms, DLICOM APP may provide a
                  censorship-resistant alternative by employing a decentralized
                  network such as a blockchain.
                </p>
              </div>
            </div>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>ECO SYSTEM</h2>
                <p>
                  DLICOM App may assist to unify the disparate parts of the
                  cryptocurrency sector by integrating previously separate
                  services like social networking, messaging, and trading.
                </p>
              </div>
            </div>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>Privacy</h2>
                <p>
                  By incorporating blockchain technology, DLICOM will be able to
                  provide further privacy protections, including message-level
                  encryption and anonymous user profiles based on
                  Ethereum network.
                </p>
              </div>
            </div>
            <div className={`${styles.solveCard} flex`}>
              {/* <BsHouse className={styles.cardIcon} /> */}
              <div className={styles.cardText}>
                <h2>Exchange</h2>
                <p>
                  Cryptocurrency trading can be confusing, but this application
                  may make it simpler by connecting users to many markets and
                  streamlining the process with an intuitive design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.growthSection} flex`}>
        <div className={`${styles.container} flex`}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.growthImg}
              src="/growth.png"
              alt="img"
              width={500}
              height={400}
              priority
            />
          </div>
          <div className={`${styles.cardsContainer} flex`}>
            <div className={`${styles.growthCard} flex`}>
              <span>Token name</span>
              <button>DLICOM</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Ticker Symbol</span>
              <button>DLI</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Total Supply</span>
              <button>700,000,000</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Token ICO Distribution</span>
              <button>490,000,000</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Total Locked</span>
              <button>210,000,000</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Starting Price ICO</span>
              <button>USD 0.10</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Fundraising Goal</span>
              <button>USD 49M</button>
            </div>
            <div className={`${styles.growthCard} flex`}>
              <span>Minimum Purchase</span>
              <button>1000 DLI</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dliAllocationSection}>
        <div className={`${styles.container} flex`}>
          <div className={styles.textContainer}>
            <h3>Dlicom Application</h3>
            <h1>Dli Allocation</h1>
          </div>
          <div className={`${styles.dliAllocationCard} flex`}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.dliAllocationImg}
                src="/bubbles.png"
                alt="img"
                width={500}
                height={400}
                priority
              />
            </div>
            <div className={`${styles.cardTextContainer} flex`}>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>70.4M</h1>
                <p>Satisfaction Rate</p>
              </div>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>490M</h1>
                <p>Distrubtion</p>
              </div>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>210M</h1>
                <p>Locked</p>
              </div>
              <div className={`${styles.numberAndTitle} flex`}>
                <h1>2237+</h1>
                <p>Investors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.stackAndEarnSection}>
        <div className={`${styles.container} flex`}>
          <h1>Stake and Earn</h1>
          <p>
            To combat the increasing trend of centralized control over social
            media platforms, DLICOM APP may provide a censorship-resistant
            alternative by employing a decentralized network such as a
            blockchain.
          </p>
        </div>
      </div>

      <div className={styles.solutionsSection}>
        <h3>Dlicom Application</h3>

        <h1 className={styles.solutionsTitle}>Solutions</h1>
        <div className={`${styles.container} flex`}>
          <div className={`${styles.leftCardsContainer} flex`}>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/solutionscard1.jpg"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Centralized Control</h1>
                <p>
                  To combat the increasing trend of centralized control over
                  social media , DLICOM APP may provide a censorship-resistant
                  alternative by employing a decentralized network such as a
                  blockchain.
                </p>
              </div>
            </div>

            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/solutionscard2.jpg"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Lack of control over digital Assets</h1>
                <p>
                  Issues with third-party intervention when transacting digital
                  assets could be mitigated by DLICOM's usage of a distributed
                  ledger technology (such as a blockchain) to facilitate direct
                  user-to-user transactions.
                </p>
              </div>
            </div>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/firstCard.png"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>All in ONE!</h1>
                <p>
                  Issues arising from the need to switch between several apps
                  and websites to do various cryptocurrency-related tasks:
                  DLICOM APP's potential convenience stems from the fact that it
                  consolidates a user's social networking, messaging, and
                  trading needs into a single platform.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.rightCardsContainer} flex`}>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/secondCard.png"
                  alt="img"
                  width={2123}
                  height={1592}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>ECO SYSTEM</h1>
                <p>
                  DLICOM App may assist to unify the disparate parts of the
                  cryptocurrency sector by integrating previously separate
                  services like social networking, messaging, and trading.
                </p>
              </div>
            </div>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/thirdCard.png"
                  alt="img"
                  width={4000}
                  height={4000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Exchange</h1>
                <p>
                  Cryptocurrency trading can be confusing, but this application
                  may make it simpler by connecting users to many markets and
                  streamlining the process with an intuitive design.
                </p>
              </div>
            </div>
            <div className={`${styles.normalCard} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.solutionsImg}
                  src="/fourthCard.png"
                  alt="img"
                  width={6000}
                  height={2000}
                  priority
                />
              </div>
              <div className={styles.textContainer}>
                <h1>Privacy</h1>
                <p>
                  By incorporating blockchain technology, DLICOM will be able to
                  provide further privacy protections, including message-level
                  encryption and anonymous user profiles based on
                  Ethereum network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.fAQsSection} flex`}>
        <h1 className={styles.fAQsSectionTitle}>
          Frequently Asked Questions (FAQs)
        </h1>
        <div className={`${styles.container} flex`}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.futureImg}
              src="/blockchain.png"
              alt="img"
              width={500}
              height={400}
              priority
            />
          </div>
          <div className={`${styles.faqcontainer} flex`}>
            {questions.map((item, index) => (
              <div
                className={`${styles.question}`}
                key={index}
                onClick={() => toggleAnswer(index)}
              >
                <div className={`${styles.flexQuestion} flex`}>
                  <div className={styles.questionText}>{item.question}</div>
                  <div className="plus-minus-sign">
                    {openIndex === index ? "-" : "+"}
                  </div>
                </div>
                {openIndex === index && (
                  <div className={`${styles.answer}`}>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.ExplorerSection}>
        <div className={`${styles.container} flex`}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.ExplorerImg}
              src="/explor.png"
              alt="img"
              width={1000}
              height={1000}
              priority
            />
          </div>
          <div className={`${styles.titleAndButton} flex`}>
            <h1>Dlicom Blockchain Explorer </h1>
            <Link href="/coomingSoon">
              <button className={`${styles.btn} flex`}>Explore</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.partnersSection}>
        <div className={`${styles.container} flex`}>
          <h1 className={styles.partnersTitle}>Partners</h1>
          <div className={`${styles.contentContainer} flex`}>
            <div className={`${styles.leftCardsContainer} flex`}>
              <div className={`${styles.normalCard} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.solutionsImg}
                    src="/shlenPowerLogo.png"
                    alt="img"
                    width={1000}
                    height={800}
                    priority
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>
                    To combat the increasing trend of centralized control over
                    social media , DLICOM APP may provide a censorship-resistant
                    alternative by employing a decentralized network such as a
                    blockchain.
                  </p>
                </div>
              </div>
              <div className={`${styles.normalCard} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.solutionsImg}
                    src="/dlicomLogo.png"
                    alt="img"
                    width={1000}
                    height={800}
                    priority
                  />
                </div>
                <div className={styles.textContainer}>
                  <p>
                    To combat the increasing trend of centralized control over
                    social media , DLICOM APP may provide a censorship-resistant
                    alternative by employing a decentralized network such as a
                    blockchain.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.rightCardsContainer} flex`}>
              <h1 className={styles.rightTitle}>Smart Contract API</h1>
              <div className={`${styles.rightCards} flex`}>
                <div className={`${styles.normalCard} flex`}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.solutionsImg}
                      src="/partnerImg.png"
                      alt="img"
                      width={1000}
                      height={800}
                      priority
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>
                      To combat the increasing trend of centralized control over
                      social media , DLICOM APP may provide a
                      censorship-resistant alternative by employing a
                      decentralized network such as a blockchain.
                    </p>
                  </div>
                </div>
                <div className={`${styles.normalCard} flex`}>
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.solutionsImg}
                      src="/partnerImg.png"
                      alt="img"
                      width={1000}
                      height={800}
                      priority
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p>
                      To combat the increasing trend of centralized control over
                      social media , DLICOM APP may provide a
                      censorship-resistant alternative by employing a
                      decentralized network such as a blockchain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Email />
    </div>
  );
}
