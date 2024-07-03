import styled from "styled-components";
// import courseImage1 from "../Assets/courseImage1.webp";
// import courseImage2 from "../Assets/courseImage2.webp";
// import courseImage3 from "../Assets/courseImage3.webp";
import courseFeatureBackground from "../Assets/courseFeatureBackground.jpg";
import blanckBackground from "../Assets/blanckBackground.png";
import { useEffect, useRef } from "react";
// import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

const cardContent = [
  {
    heading: "Beginner’s Guide to Stock Market Investing",
    desc: "Understand the basics, start investing, and manage risks",
    image:
      "https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/happy-manager-leads-a-meeting-in-the-office-640x427.jpg",
  },
  {
    heading: "Beginner’s Guide to Stock Market Investing",
    desc: "Understand the basics, start investing, and manage risks",
    image:
      "https://www.shutterstock.com/image-photo/happy-mid-aged-business-woman-600nw-2353012835.jpg",
  },
  {
    heading: "Beginner’s Guide to Stock Market Investing",
    desc: "Understand the basics, start investing, and manage risks",
    image:
      "https://cdn.sanity.io/images/xmpcmhrn/production/f363771ad3c072ec71f1ea5e8f3868d18de231a6-1200x800.jpg?rect=0,62,1200,674&w=436&h=245&q=80&fit=max&auto=format",
  },
];

const FeatureCardSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const scrollContent = scrollContainer.firstElementChild;

      const scrollLeft =
        (scrollContent.scrollWidth - scrollContainer.clientWidth) / 2;

      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: "smooth", // Optional: adds a smooth scrolling effect
      });
    }
  }, []);
  return (
    <>
      <Container>
        <div className="mb-10 sm:mb-44">
          <div className="my-10">
            <h1
              style={{ fontFamily: "Alegreya" }}
              className="text-5xl	sm:text-8xl text-center sm:my-6 font-semibold sm:pb-20"
            >
              Our Feature Course
            </h1>
            {/* container */}
            <div
              ref={scrollRef}
              className="makeScrollable lg:flex justify-center"
            >
              <div className="feature-container gap-x-20 sm:gap-16 md:gap-5 grow flex justify-center xl:max-w-screen-xl lg:w-full flex-wrap xl:grid-cols-3 md:max-lg:grid md:grid-cols-1 lg:grid-cols-3 justify-items-center items-center md:w-full md:gap-y-16 ">
                {cardContent.map((card) => (
                  <>
                    <CardContainer className="">
                      <CardBody className="bg-neutral-100 relative lg:min-w-[20rem] lg:max-w-[23rem] md:w-[25rem] w-[90vw] max-w-96 h-auto rounded-xl px-[4vw] sm:px-6 py-[2vw] sm:py-10 ">
                        <CardItem
                          translateZ={50}
                          className="text-2xl font-bold text-neutral-600 text-black"
                        >
                          {/* Make things float in air */}
                          {card.heading}
                        </CardItem>
                        <CardItem
                          translateZ={150}
                          className="w-full mt-4 sm:my-10"
                        >
                          <img
                            src={card.image}
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
                            alt="thumbnail"
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-5">
                          <CardItem
                            translateZ={20}
                            to="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 rounded-xl text-xl font-semibold text-black"
                          >
                            {card.desc}
                          </CardItem>
                        </div>
                      </CardBody>
                    </CardContainer>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default FeatureCardSection;

const Container = styled.div`
  .feature-course-page {
    background-image: url(${courseFeatureBackground}); /* Placeholder URL */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    flex-wrap: wrap;
  }
  .feature-course-page > div {
    background-image: url(${blanckBackground}); /* Placeholder URL */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 1000px;
    animation: slideGradient 15s forwards;
  }
  @keyframes slideGradient {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: 15000px;
    }
  }

  .feature-container > div > div:nth-child(1),
  .course-page {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .feature-container .course-feature {
    padding: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 0px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 2px;
    animation: 1.5s fadeInUp;
    /* width: 24rem; */
  }
  @keyframes fadeInUp {
    0% {
      transform: translateY(40%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  .course-feature:hover {
    scale: 1.01;
    box-shadow: rgba(0, 0, 0, 0.12) 8px 9px 14px,
      rgba(0, 0, 0, 0.24) 0px 7px 9px;
    transition: all 0.6s;
  }

  @media screen and (max-width: 855px) {
    .feature-container .course-feature {
      /* width: 20rem; */
      gap: 0;
    }
  }
  @media screen and (max-width: 600px) {
    .makeScrollable {
      overflow: scroll;
      /* transform: translateX(0); */
    }
    .feature-container .course-feature {
      width: 18rem;
      gap: 0;
    }
    .feature-course-page {
      background-image: none;
    }
    .feature-container .course-feature > div:nth-child(1) {
      height: 18rem;
    }
    .feature-container {
      /* flex-wrap: nowrap; */
      width: max-content;
      overflow: scroll;
    }
    .course-feature {
      margin: 0 50px;
    }
  }
`;
