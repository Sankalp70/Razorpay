import { useState } from "react";
import Carouselstyle from "./Carousel.module.css";
import tablee from "../../assets/tablee.webp";
import addon2 from "../../assets/adon2.avif";
import addon3 from "../../assets/addon3.avif";
import addon4 from "../../assets/addon4.avif";
import addon1 from "../../assets/addon1.avif";
import plugin3 from "../../assets/plugin3.jpg";
import plugin2 from "../../assets/plugin2.jpg";
import plugin1 from "../../assets/plugin1.webp";
import pos from "../../assets/pos.webp";
import qrcode from "../../assets/qrcode.jpeg";
import styles from "./Feat.module.css";


const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    {
      title: "Top Products",
      content: "Content for Top Products",
      images: [
        { heading: "Heading 1", paragraph: "Paragraph 1", imageUrl: addon1 },
        { heading: "Heading 2", paragraph: "Paragraph 2", imageUrl: addon2 },
        { heading: "Heading 3", paragraph: "Paragraph 3", imageUrl: addon4 },
        { heading: "Heading 4", paragraph: "Paragraph 4", imageUrl: pos },
      ],
    },
    {
      title: "On Website/App",
      content: "Content for On Website/App",
      images: [
        { heading: "Heading 1", paragraph: "Paragraph 1", imageUrl: plugin1 },
        { heading: "Heading 2", paragraph: "Paragraph 2", imageUrl: plugin2 },
        { heading: "Heading 3", paragraph: "Paragraph 3", imageUrl: plugin3 },
        { heading: "Heading 4", paragraph: "Paragraph 4", imageUrl: tablee },
      ],
    },
    {
      title: "Plugins",
      content: "Content for Plugins",
      images: [
        { heading: "Heading 1", paragraph: "Paragraph 1", imageUrl: qrcode },
        { heading: "Heading 2", paragraph: "Paragraph 2", imageUrl: addon3 },
        { heading: "Heading 3", paragraph: "Paragraph 3", imageUrl: addon1 },
        { heading: "Heading 4", paragraph: "Paragraph 4", imageUrl: pos },
      ],
    },
    {
      title: "On Social Media",
      content: "Content for On Social Media",
      images: [
        { heading: "Heading 1", paragraph: "Paragraph 1", imageUrl: addon1 },
        { heading: "Heading 2", paragraph: "Paragraph 2", imageUrl: addon2 },
        { heading: "Heading 3", paragraph: "Paragraph 3", imageUrl: addon4 },
        { heading: "Heading 4", paragraph: "Paragraph 4", imageUrl: pos },
      ],
    },
    {
      title: "In-store",
      content: "Content for In-store",
      images: [
        { heading: "Heading 1", paragraph: "Paragraph 1", imageUrl: plugin1 },
        { heading: "Heading 2", paragraph: "Paragraph 2", imageUrl: plugin2 },
        { heading: "Heading 3", paragraph: "Paragraph 3", imageUrl: plugin3 },
        { heading: "Heading 4", paragraph: "Paragraph 4", imageUrl: tablee },
      ],
    },
    {
      title: "International",
      content: "Content for International",
      images: [
        { heading: "Heading 1", paragraph: "Paragraph 1", imageUrl: qrcode },
        { heading: "Heading 2", paragraph: "Paragraph 2", imageUrl: addon3 },
        { heading: "Heading 3", paragraph: "Paragraph 3", imageUrl: addon1 },
        { heading: "Heading 4", paragraph: "Paragraph 4", imageUrl: pos },
      ],
    },
    {
      title: "With Smart Add-ons",
      content: "Content for With Smart Add-ons",
      images: [
        { heading: "Heading 1", paragraph: "Paragraph 1", imageUrl: addon1 },
        { heading: "Heading 2", paragraph: "Paragraph 2", imageUrl: addon2 },
        { heading: "Heading 3", paragraph: "Paragraph 3", imageUrl: addon4 },
        { heading: "Heading 4", paragraph: "Paragraph 4", imageUrl: pos },
      ],
    },
  ];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else {
      setActiveCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };
                        /*Code Updated*/ 
  return (
    <div className={Carouselstyle.wrapper}>
      <div className={Carouselstyle.cards}>
        <div className={styles.card}>
          <h2>Accept Payments</h2>
          <div className={styles.cardHeader}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${styles.cardOption} ${
                  index === activeCard ? styles.active : ""
                }`}
                onClick={() => setActiveCard(index)}
              >
                {card.title}
              </div>
            ))}
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardImages}>
              {cards[activeCard].images.map((image, index) => (
                <div key={index} className={styles.imageContainer}>
                  <img src={image.imageUrl} alt={`Image ${index + 1}`} />
                  <h3>{image.heading}</h3>
                  <p>{image.paragraph}</p>
                </div>
              ))}
            </div>
            <div className={styles.cardArrows}>
              <button onClick={() => handleArrowClick("left")}>&#8592;</button>
              <button onClick={() => handleArrowClick("right")}>&#8594;</button>
            </div>
          </div>
        </div>
      </div>
      {/*****************************************1st Containeer****************************************/}
      <div className={Carouselstyle.cards}>
        <h2>Make Payouts</h2>

        <div className={styles.insideCard}>
          <div className={styles.insidecardContent}>
            <div className={styles.image}>
              <img src={addon1} alt="Image 1" />
              <h3>Forex Management</h3>
              <p>
                Get effortless foreign funding management with expert support
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon2} alt="Image 2" />
              <h3>Account Integration</h3>
              <p>Easy integration with your accounting software</p>
            </div>
            <div className={styles.image}>
              <img src={addon3} alt="Image 3" />
              <h3>Payroll for startup</h3>
              <p>
                Master payroll and compliance with a solution built just for
                startups
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon4} alt="Image 4" />
              <h3>Payroll for CAs</h3>
              <p>
                Transform payroll and compliance for your clients with RazorpayX
              </p>
            </div>
          </div>
        </div>
        {/*****************************************2nd Containeer****************************************/}
      </div>
      <div className={Carouselstyle.cards}>
        <h2>Start Business Banking</h2>

        <div className={styles.insideCard}>
          <div className={styles.insidecardContent}>
            <div className={styles.image}>
              <img src={addon1} alt="Image 1" />
              <h3>Forex Management</h3>
              <p>
                Get effortless foreign funding management with expert support
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon2} alt="Image 2" />
              <h3>Account Integration</h3>
              <p>Easy integration with your accounting software</p>
            </div>
            <div className={styles.image}>
              <img src={addon3} alt="Image 3" />
              <h3>Payroll for startup</h3>
              <p>
                Master payroll and compliance with a solution built just for
                startups
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon4} alt="Image 4" />
              <h3>Payroll for CAs</h3>
              <p>
                Transform payroll and compliance for your clients with RazorpayX
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*****************************************3rd Containeer****************************************/}
      <div className={Carouselstyle.cards}>
        <h2>Automate Payroll</h2>
        <div className={styles.insideCard}>
          <div className={styles.insidecardContent}>
            <div className={styles.image}>
              <img src={addon1} alt="Image 1" />
              <h3>Forex Management</h3>
              <p>
                Get effortless foreign funding management with expert support
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon2} alt="Image 2" />
              <h3>Account Integration</h3>
              <p>Easy integration with your accounting software</p>
            </div>
            <div className={styles.image}>
              <img src={addon3} alt="Image 3" />
              <h3>Payroll for startup</h3>
              <p>
                Master payroll and compliance with a solution built just for
                startups
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon4} alt="Image 4" />
              <h3>Payroll for CAs</h3>
              <p>
                Transform payroll and compliance for your clients with RazorpayX
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*****************************************4th Containeer****************************************/}
      <div className={Carouselstyle.cards}>
        <h2>Get Credit & Loans</h2>
        <div className={styles.insideCard}>
          <div className={styles.insidecardContent}>
            <div className={styles.image}>
              <img src={addon1} alt="Image 1" />
              <h3>Forex Management</h3>
              <p>
                Get effortless foreign funding management with expert support
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon2} alt="Image 2" />
              <h3>Account Integration</h3>
              <p>Easy integration with your accounting software</p>
            </div>
            <div className={styles.image}>
              <img src={addon3} alt="Image 3" />
              <h3>Payroll for startup</h3>
              <p>
                Master payroll and compliance with a solution built just for
                startups
              </p>
            </div>
            <div className={styles.image}>
              <img src={addon4} alt="Image 4" />
              <h3>Payroll for CAs</h3>
              <p>
                Transform payroll and compliance for your clients with RazorpayX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
