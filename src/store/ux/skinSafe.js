export const skinSafe = {
  header: "Skin Safe",
  img: {
    src: require("@/assets/UX/skinSafe/headerImage.png"),
    alt: null,
    caption: null
  },
  section: [
    {
      header: "About",
      content: [
        {
          altText:
            "<p> < strong > Overview:</strong> SkinSAFE is a startup that aims to provide expert knowledge with the world’s most comprehensive skin product ingredient database brought to you by Mayo Clinic and HER Inc.They rank all products based on how free they are from the top most common allergy causing ingredients identified by Mayo Clinic. < br /> I took the liberty of work on the redesign of their platform.The redesign was planned to take place in a couple of phases and this case study covers the first one. </p >"
        },
        {
          altText:
            "<p> < strong > Objective</strong> To develop version 2.0 of SkinSAFE iOS app that provides greater engagement through better usability and personalisation. </p >"
        },
        {
          altText:
            "<p> < strong > Target audience:</strong> The target users were between 18 - 44 and mostly in USA.Around 75 % of their user base are women. </p >"
        },
        {
          altText:
            "<p> < strong > Skills:</strong > User research, User experience design, User interface design, Graphic; design, Wireframing </p >"
        },
        {
          altText: "<p> < strong > Role:</strong > UI / UX design </p >"
        },
        {
          altText: "<p> < strong > Duration:</strong > 2 Weeks </p >"
        },
        {
          altText:
            "<p> < strong > Solution:</strong > My aim was to provide a more usable and desirable experience for the app so that it could be more valuable for both the users as well as the company.This phase revolved around a redesigned experience for the home, product description, similar products, favorite skincare products, product categories and product scan flows. </p >"
        }
      ],
      section: [
        {
          header: "Research",
          content: [
            {
              text:
                "I was in constant touch with a couple of my instagram friends who are social media influencers and promote skincare products during the whole redesign and they helped me gain a lot of insights about the how the current product was positioned in the market along with its core functionality."
            }
          ]
        }, //section
        {
          header: "Interviews",
          content: [
            {
              text:
                "Conducting interviews and being in touch with him almost everyday, I came to know that the current version was outdated and overall reviews were not great due to look and feel and lacking functionality.But regardless many users were still very dependent on it to find products that meets their criteria."
            },
            {
              text:
                "I also came to know that it was the go to place to see how products are rated before being purchased.The current app had not kept pace with their website which had far more advance functionality.The team wanted the app to look & amp; feel in a certain way and already set a list of criteria for me to be implemented during redesign.Here is an overview of the expectations:"
            },
            {
              img: {
                src: require("@/assets/UX/skinSafe/expectations.jpg"),
                alt: null,
                caption: null
              }
            }
          ]
        }, //section
        {
          header: "Analysis &amp; Ideation",
          content: [
            {
              text:
                "The next step was to review the current app and analyze what mistakes were made from usability perspective.I did not own an iOS device at the time of this writing so I analyzed the Android app as both of them had the same functionality.I had to put my research data into perspective by analyzing the app itself."
            },
            {
              img: {
                src: require("@/assets/UX/skinSafe/ideation.png"),
                alt: null,
                caption: null
              }
            },
            {
              text:
                "The product scan flow within the app needed to be redesigned as well because a large amount of users scan the product barcode in order to retrieve information from the Skinsafe database.If a product is not found in their database, users can help them by adding it within the app which can then be used for future scans.Here is a redesigned task flow:"
            },
            {
              img: {
                src: require("@/assets/UX/skinSafe/ideation2.jpg"),
                alt: null,
                caption: null
              }
            },
            {
              subsection: [
                {
                  header: "Reviews",
                  content: [
                    {
                      text:
                        "App store/Play store reviews are also a good place to gather some research insights because all of the feedback comes from users who are actually using the app in their daily life.I was told that currently both the iOS & amp; Android app have the same functionality so I decided to look at some recent reviews in order to collect more data. Play store had some recent reviews as compared to App store(which were really old)."
                    },
                    {
                      img: {
                        src: require("@/assets/UX/skinSafe/review.jpg"),
                        alt: null,
                        caption: null
                      }
                    },
                    {
                      text:
                        "I went through almost all the reviews. Here is a short summary of most of the pain points that came out during the interviews along with my analysis:"
                    },
                    {
                      altText:
                        "<ol> < li > The current version of<b>Home Screen</b> hides key part of the functionality that is most important to the user.It does not recommend products based on user needs. </li > <li> There is no way to see products similar to the current selected item that the user is viewing. Users need to see <b>similar products</b> in order to compare them with each other. </li> <li> People can scan for a product within the app and there are instances when it is not in SkinSafe’s database. People can help them by scanning the product which is then approved by their team and added to the database. The current <b>scan flow</b> is not very intuitive so it needed to be fixed. </li> <li> No way to filter the product based on allergens throughout the app. These filters only appear when searching through product categories. </li> <li> The product description was not as in-depth as given on their official website. </li> </ol >"
                    }
                  ]
                }
              ]
            }
          ]
        }, //section
        {
          header: "Prototype",
          content: [
            {
              text:
                "After gathering all the research information and analysis of the current app, I went on to design low fidelity wireframes.Doing this gives me a bird’s eye view of how to structure the information within the application and it is easy to iterate quickly"
            },
            {
              sunsection: [
                {
                  header: "Wireframes",
                  content: [
                    {
                      img: {
                        src: require("@/assets/UX/skinSafe/wireframe.png"),
                        alt: null,
                        caption: null
                      }
                    }
                  ]
                },
                {
                  header: "Testing &amp; Iterating",
                  content: [
                    {
                      text:
                        "I got the feedback that an icon for similar products was needed to be shown along with the product card.This is because the team wanted to keep everything consistent and hence wanted to duplicate the functionality provided on the home screen."
                    },
                    {
                      img: {
                        src: require("@/assets/UX/skinSafe/iteration.png"),
                        alt: null,
                        caption: null
                      }
                    },
                    {
                      text:
                        "I got the feedback that an icon for similar products was needed to be shown along with the product card.This is because the team wanted to keep everything consistent and hence wanted to duplicate the functionality provided on the home screen."
                    }
                  ]
                },
                {
                  header: "High fidelity designs",
                  content: [
                    {
                      text:
                        "It was time to push some pixels. A tint of orange was chosen as the primary color for the app because it represented the brand by being associated with things like friendliness, enthusiasm, creativity & fun."
                    },
                    {
                      img: {
                        src: require("@/assets/UX/skinSafe/hifi.png"),
                        alt: null,
                        caption: null
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }, //section
        {
          header: "Conclusion",
          content: [
            {
              text:
                "It was an amazing project to work on and I learned a lot from it. It was my very first experience working in the skincare/ beauty industry so I gained a lot of info on how it operates and how the end user make their final choices.This project is currently under development phase."
            },
            {
              text:
                "Collaborating &amp; working remotely with a team that is present on the other side of the globe is not easy due to time zone differences.But I am glad that I got timely feedback from the team that allowed us to take unified decisions."
            },
            {
              subSection: [
                {
                  header: "Importance of Usability Testing",
                  content: [
                    {
                      text:
                        "Usability testing is the practice of testing how easy a design is to use on a group of representative users.It usually involves observing users as they attempt to complete tasks and can be done for different types of designs, from user interfaces to physical products.I feel like one should try not to stick to a single design decision.A designer should iterate on the feedback provided by the end users and what suits them the most.At the end it’s your target audience who is going to use your final product and if they are not satisfied then what is the point of designing it in the first place!"
                    },
                    {
                      img: {
                        src: require("@/assets/UX/skinSafe/usability.png"),
                        alt: null,
                        caption: null
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
