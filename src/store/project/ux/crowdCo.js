export const crowdCo = {
  header: "CrowdCo",
  content: [
    {
      img: {
        src: require("@/assets/UX/crowdCo/headerImage.jpg"),
        alt: null,
        caption: null
      },
    }
  ],
  section: [
    {
      header: "About",
      content: [
        {
          altText:
            "<p> <strong> Overview:</strong> The project was a part of VUE + Electron UpLabs Challenge.The end goal of the experience was to develop a functioning iOS and Android app using the VUE + Electron framework. <br /> Since there was no specific theme defined for the app within the challenge, I went on to build a reward based crowdfunding application. The main aim here was to spread awareness of this product concept among general audience. </p>"
        },
        {
          altText: "<p> <strong> Duration:</strong> 3 + Weeks </p>"
        },
        {
          altText:
            "<p> <strong> Role:</strong> Product design & amp; App development </p>"
        },
        {
          altText:
            "<p> <strong> Skills:</strong> User research, User experience design, User interface design, App development using VUE + Electron framework </p>"
        },
        {
          altText:
            "<p> <strong> Solution:</strong> A functional iOS and Android app that can demonstrate the crowdfunding concept to general audience.The app development is in progress. </p>"
        }
      ]
    }, //sections
    {
      header: "Research and user empathy",
      content: [
        {
          text:
            "Crowdfunding means relying on the contributions of many to fund charity, social or business projects.It offers an alternative to traditional funding opportunities for innovative entrepreneurs.Crowdfunding seems to work because it eliminates distance- related economic issues such as financing and monitoring progress."
        },
        {
          text:
            "I started my research by doing a Competitor Analysis in order to prepare a list of current reward based crowdfunding players in the market and what were the features that they had on offer."
        },
        {
          subSection: [
            {
              header: "Competitor Analysis",
              content: [
                {
                  text:
                    "After some browsing and online research, I came to know that there are currently two players in the market who are dominating the reward based crowdfunding concept – one is Kickstarter and the other one is Indiegogo.So I made a list of features that both of them support and how they differ from each other."
                },
                {
                  img: {
                    src: require("@/assets/UX/crowdCo/competitor.jpg"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "Probably the biggest difference between the two platforms is their approach to money and when you get it.Kickstarter releases funds only after the campaign reaches its funding goal(fixed funding), Indiegogo provides you with an opportunity to choose between receiving funding as it comes in(flexible funding) or waiting to see if you hit your target(fixed funding)."
                }
              ]
            }, //subSection
            {
              header: "App reviews",
              content: [
                {
                  text:
                    "After doing the Competitor analysis, I needed more research data on these current market players.So I went on Play Store & amp; App Store to find out what the daily users of these applications think? After all they are the people who are using these apps almost everyday and must be knowing what exactly is missing and how to make the current platform more usable for them."
                },
                {
                  text:
                    "Unfortunately, I could not do research on Indiegogo app as it was not available in my country so I went on Kickstarter to see what could be found."
                },
                {
                  img: {
                    src: require("@/assets/UX/crowdCo/reviews.jpg"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  altText:
                    "<p> I saw so many reviews regarding the comments section within the app and how it needs to be improved.But this did not end here, the list of<b>pain points</b> mentioned by users in their reviews is summarized below: </p>"
                },
                {
                  altText:
                    "<ol> <li> Content is not well organized.App needs to have a better navigation </li> <li> New users could not find a way to see the list of campaign backers in the app. They would like to see it in order to interact with the recent backers and ask them whether the campaign is legit. </li> <li>App needs better way to display campaign categories.</li> <li> Need better ways to interact with other members on the platform. </li> </ol>"
                }
              ]
            } //subSection
          ]
        }
      ]
    }, //sections
    //sections
    {
      header: "Define",
      content: [
        {
          quote: "State your users’ needs and problems"
        },
        {
          text:
            "Based on the competitor analysis &amp; the app reviews that I got from play store, I went on to create proto personas as it incorporates the needs, goals, and observed behavior patterns of my target audience."
        },
        {
          subSection: [
            {
              header: "Persona",
              content: [
                {
                  text:
                    "I decided to create two investor personas. Each persona varied in crowdfunding investing experience and as a result they required very different pieces of information in order to make their final decision."
                },
                {
                  img: {
                    src: require("@/assets/UX/crowdCo/persona.jpg"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "The first persona was for an inexperienced investor named Greg who is new to reward based crowdfunding and wants someone to help him on how to invest."
                },
                {
                  img: {
                    src: require("@/assets/UX/crowdCo/persona2.jpg"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "The second persona was for a professional investor named Jennie. She has been working as an Angel Investor for the past 10 years and likes to help startups who are looking for financial support in order to scale their products."
                }
              ]
            }, //subSection
            {
              header: "User Stories",
              content: [
                {
                  text:
                    "In order to relate to the life of my personas, I ended up writing user stories as they would allow me to articulate the user’s perspective and generate ideas that fit into the user’s life."
                },
                {
                  img: {
                    src: require("@/assets/UX/crowdCo/userStory.jpg"),
                    alt: null,
                    caption: null
                  }
                }
              ]
            } //subSection
          ]
        }
      ]
    }, //sections
    {
      header: "Ideation and Prototyping",
      content: [
        {
          text:
            "After defining the needs of my users and documenting what exactly was needed to build this product, the next step was to pick up my tools.I enjoy this phase because I get to see all my research data getting converted into something that people would be able to visualize and then provide feedback of what could be done better."
        },
        {
          subSection: [
            {
              header: "Paper Wireframes",
              content: [
                {
                  img: {
                    src: require("@/assets/UX/crowdCo/sketch.jpg"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  altText:
                    "<p> Keeping the information of both user personas in mind I decided that the campaign details displayed on the home screen can be divided into three sub- categories: <b>Popular, New &amp; Ending soon</b>.The aim of choosing this segregation was to serve both the inexperienced and professional investor as per their needs.The campaign description screen would display a wide variety of information which all kinds of users can explore. </p>"
                },
                {
                  img: {
                    src: require("@/assets/UX/crowdCo/sketch2.jpg"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "A better comments section was also the main priority as per the research so I took some inspiration from some social networking apps in order to see how they handle the comments.Being an active Instagram user, I find its comments section to be really neat and well organized.So I tried to take some hints and implement it in my app."
                }
              ]
            }, //subSection
            {
              header: "High fidelity design",
              content: [
                {
                  altText:
                    "<p> Usually after paper prototyping I hop on to a digital wireframing tool in order to create some low fidelity wireframes.Doing this gives me a bird’s eye view of how to structure the information within the application and it is easy to iterate quickly.But due to <b>time constraints</b> of this project I jumped straight into high fidelity design. </p>"
                },
                {
                  img: [
                    {
                      src: require("@/assets/UX/crowdCo/homePage.jpg"),
                      alt: null,
                      caption: null
                    }, {
                      src: require("@/assets/UX/crowdCo/categoryPage.jpg"),
                      alt: null,
                      caption: null
                    }, {
                      src: require("@/assets/UX/crowdCo/productPage.jpg"),
                      alt: null,
                      caption: null
                    }, {
                      src: require("@/assets/UX/crowdCo/productDetailPage.jpg"),
                      alt: null,
                      caption: null
                    }
                  ]
                },
              ]
            } //subSection
          ]
        }
      ]
    },
    {
      header: "Development &amp; Testing",
      content: [
        {
          text:
            "I spent almost 2 weeks to do all the research and designing and this meant that I was left with only 1 week to code and set up a basic functioning app.The problem was that the app had to be coded using VUE + Electron and I had never used it to code an app before so I had to learn the fundamentals as quickly as possible."
        },
        {
          text:
            "This is where my software development skills came into picture. Whenever a developer is stuck with something and cannot figure out how to move ahead, there is this messiah on the internet which goes by the name of Stack Overflow 😛.The VUE + Electron community there helped me a lot in building and iterating on the app quickly."
        },
        {
          altText:
            "<p> While developing the app it came to my notice that I unknowingly skipped one of the most basic design concept mentioned in <a href = 'https://developer.apple.com/design/tips/' target = '_blank' rel = 'noopener noreferrer'>iOS HIG</a>. </p>"
        },
        // {
        //   img: {
        //     src: require("@/assets/UX/crowdCo/app.png"),
        //     alt: null,
        //     caption: null
        //   }
        // },
        {
          text:
            "Apple expects you to keep the text size to be at least 11 pts in your apps so that it is easily readable by everyone.I discovered that some of the text in my design was less than the default size so I fixed that during my development."
        }
      ]
    }, //sections
    {
      header: "Conclusion &amp; Lessons learned",
      content: [
        {
          text:
            "To be honest the app development is still under progress but I am glad I took this challenge as it taught me how to manage my time more than anything else."
        },
        // {
        //   img: {
        //     src: require("@/assets/UX/crowdCo/conclusion.png"),
        //     alt: null,
        //     caption: null
        //   }
        // },
        {
          subSection: [
            {
              header: "What could have been done differently?",
              content: [
                {
                  altText:
                    "<ul> <li> As you can see in my research, I did not conduct any user interviews or surveys.This was due to the time constraints for this challenge. I was initially planning to do a survey with a specific audience in order to get some <b>Quantitative data</b> as it should have given me more research insights.But the survey itself could have taken some time so instead of doing that I went for the Competitive analysis. </li> <li> While making design decisions like app navigation and displaying campaign categories, I just went with one option/idea and implemented that. Given a chance to do this again, I would think of multiple solutions before deciding a single one. Also a proper usability testing could have been done before jumping straight into development. </li> </ul>"
                }
              ]
            }
          ]
        }
      ]
    } //sections
  ]
};
