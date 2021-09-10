export const hRPlatform = {
  header: "People Matters COHORT",
  img: {
    src: require("@/assets/UX/mediaHRPlatform/headerImage.png"),
    alt: null,
    caption: null
  },
  section: [
    {
      header: "About",
      content: [
        {
          altText:
            "<p> < strong > Overview:</strong> <a href='https://www.peoplematters.in/' target='_blank' rel='noopener'> People Matters </a> is an HR media platform founded in 2009 and they aim to foster ideas between HR - related professionals.People Matters prints a magazine, does online publishing, conducts research and creates events focused on human resources.The goal of this project was to develop a program learning platform MVP for them a.k.a < strong > People Matters COHORT. </strong> Their team would be collaborating with various industry leaders in the future to offer specific programs/ courses for people within their established network. </p >"
        },
        {
          altText:
            "<p> < strong > Objective:</strong> To Create a Program learning platform for the People Matters. </p >"
        },
        {
          altText:
            "<p> < strong > Skills:</strong> User experience design, User interface design, Wireframing, Information Architecture </p >"
        },
        {
          altText:
            "<p> < strong > Contribution:</strong> I worked with another designer on this project.I was involved in creating user flows, defining information architecture and designing the whole user experience of the product. </p >"
        },
        {
          altText: "<p> < strong > Role:</strong> Product Designer </p >"
        },
        {
          altText: "<p> < strong > Duration:</strong> 3 Weeks </p >"
        }
      ]
    }, //sections
    {
      header: "Research",
      content: [
        {
          text:
            "We began with preliminary calls with the client in order to understand their expectations with this platform and also to be on the same page as to what will be the scope of this project.Doing these initial interviews with the client gave us a bunch of Qualitative data to work on and analyze."
        },
        {
          text:
            "Upon further discussions, we came to know that one of their competitors is an online collaborative learning learning platform by the name of NovoEd.We decided to hop on their platform and went through their whole experience along with analyzing what they have on offer."
        },
        {
          subsection: [
            {
              header: "Competitor Analysis",
              content: [
                {
                  altText:
                    "<p> After browsing through NovoEd’s platform, we found a bunch of stuff that they had on offer.Their < strong > value proposition</strong> was to “Deliver an engaging learning environment for maximum impact”. Here is list of other pointers that we saw on the platform and which acted as an inspiration for us while designing our own experience for the COHORT –"
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/competitorAnalysis.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  altText:
                    "<ol> < li > <p> <strong>Create high impact learning – </strong>They aim to deliver a high-impact collaborative learning experience that engage learners and drive deep skill development. Experiences are made relevant to the learners by integrating conversations, reflection, practice, and constructive feedback with meaningful instructional content. </p> </li > <li> <p> <strong>Build connections that sustain learning –&nbsp;</strong> Creating meaningful connections among learners and mentors is one of their core selling point. These connections promote accountability, foster a dynamic learning environment, and accelerate skill development. </p> </li> <li> <p> <strong>Drive transformation at scale – </strong> They also aim to power organizational transformation by changing mindsets, behavior, and on-the-job performance at scale. </p> </li> </ol >"
                }
              ]
            }
          ]
        }
      ]
    }, //sections
    {
      header: "Ideation and Designing",
      content: [
        {
          text:
            "After doing the competitor analysis, it was time to ideate about the features of the platform and how would the whole experience feel like. With multiple paper wireframes, brainstorming sessions and 2923 cups of coffee, we came up with the first iteration of the Dashboard."
        },
        {
          subsection: [
            {
              header: "Dashboard – The initial design",
              content: [
                {
                  text:
                    "With the dashboard design, we aimed to provide a personalized experience for every user.Hence we wanted to show things such as their current enrolled programs, recent assignment submissions as well as programs that they have completed upfront.After discussing this with the client we analyzed some problems that we had with this initial design –"
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/initialDashboard.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  altText:
                    "<ol> < li > <p> <strong>Left sidebar with a fixed width</strong> – Even though the left sidebar had all the actions in place, the only problem with it was the real estate that it was taking up on the screen because of no ability to contract it. </p> </li > <li> <p> <strong>My network</strong> – The my network segment was a good addition to drive more engagement on the platform but it was not showing enough information for a user to interact with it. </p> </li> <li> <p> <strong>Needed a revised information architecture</strong> – We figured out that to make the experience more personalized, activities like recent assignment submission and certifications should not interfere with the currently active course/program that a user is taking hence it would be a good option to club all those activities at one place. </p> </li> </ol >"
                }
              ]
            }, //subsection
            {
              header: "Dashboard – The updated/final design",
              content: [
                {
                  text:
                    "This is the updated dashboard with a cleaner look along with information arranged in a much better way.As you can see, we decided to solve the problem for the left sidebar by making it flexible that is one can expand/ contract it whenever they want.Also all the recent information can now quickly be accessed within the sidebar itself."
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/finalDashboard.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "We also updated the My Network section on the right by giving the users more information in order to drive more engagement.Showing the most active members on the platform encourages others to participate more so that they can also become a part of that elite list of people who spend more time on the platform learning new stuff."
                }
              ]
            }, //subsection
            {
              header: "Program overview",
              content: [
                {
                  altText:
                    "The program overview screen was one of the most important screens in the whole experience and hence took the most time.We had several back- and - forth discussions with the client in order to define the structure for this screen and this is what we ended up with.The screen is responsible for giving the user a complete overview about their progress in a current program.Each program is divided into multiple segments which are further divided into subSections. < strong > Actions</strong> are basically the tasks that you need to perform within a segment in order to complete that segment."
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/programOverview1.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "As discussed with the client, a segment can be a mix of audio, text &amp; video based learning.Hence we decided to put a label for time that denotes how much time will it take to complete that sub- lesson. This gives the user an overview of how much time they will be spending on learning new stuff."
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/programOverview2.png"),
                    alt: null,
                    caption: null
                  }
                }
              ]
            }, //subsection
            {
              header: "Sub-lessons",
              content: [
                {
                  altText:
                    "<p> As discussed earlier, the content in sub - lessons was a mixture of videos, audios, text, assignments etc.So we gathered all the possible type of content that their team had on offer and decided to design <strong>reusable components</strong> for each of them.This also helped the developers as they didn’t have to worry about figuring out the placement of each component on their own. </p >"
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/subLessons.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "Another addition we did was the quick menu to access all the sub- section items at one place.It saved the hassle for the user to go back to the program screen again and again.They could navigate between all the sub- lessons at one place!"
                }
              ]
            }, //subsection
            {
              header: "Submissions gallery",
              content: [
                {
                  altText:
                    "<p> A submissions gallery is something that is <strong>specific to a program</strong>.It is a place where one can explore submissions from different members who are currently enrolled in the same program.The idea behind designing a submissions gallery was to allow someone to have a look at the submissions / assignments submitted by their peers before submitting their own. </p >"
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/submissionGallery.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "One way to make it more engaging was that we allowed people to leave comments and likes on other member’s submission.This would encourage the exchange of ideas and people would get to know the thought process gone behind a submission."
                }
              ]
            }, //subsection
            {
              header: "Discussions wall",
              content: [
                {
                  text:
                    "The concept behind designing a discussion wall was to give people a place where they could interact with each other and network.We came to know that the people who would be having access to this COHORT will be the ones looking to expand their network and hence it made absolute sense to introduce a place where they could interact and share their ideas.So here are the two things that we kept in mind while creating the experience for a discussion –"
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/discussionWall.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  altText:
                    "<p> < strong > Participation</strong> - Everybody could participate in a discussion either by creating a new thread or commenting on an existing one.We wanted to give users the ability to share a wide variety of content like simple text, images along with video links as well. </p >"
                },
                {
                  altText:
                    "<strong>Topic segregation</strong> – It made sense to introduce some default topics for discussions otherwise people would have started posting random stuff and wall would have been a clutter.So we went back and forth with the client in order to decide the topics that would help learners to engage more and we came up with these five – Asking a question, Best practices, Reflection about a program, Activities & amp; Assignments and finally Additional stuff that they would like to talk about."
                }
              ]
            }, //subsection
            {
              header: "User profile",
              content: [
                {
                  text:
                    "User profile information is something that pops up when a user clicks on someone’s image within a discussion wall or for that matter anywhere on the platform.It gives them a quick sneak peak about someone’s progress and how active they are on the platform.It helps you to get information such as someone’s designation, which company do they work in, their most recent posts and assignment submissions along with all the programs that they have completed."
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/userProfile.png"),
                    alt: null,
                    caption: null
                  }
                }
              ]
            }, //subsection
            {
              header: "Login/Registration screens",
              content: [
                {
                  text:
                    "For the landing screen, we decided to go for an abstract look that would clearly inform people about virtues of the platform i.e.to Connect, Learn, Engage & amp; Network.For the initial programs, People Matters team would be sending out a 4-digit code to their possible prospects which they can use to register on the platform and finally get access to the programs that they have enrolled in.As the time goes, they will be looking to automate this thing."
                },
                {
                  img: {
                    src: require("@/assets/UX/mediaHRPlatform/loginRegistration.png"),
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
      header: "Conclusion &amp; Lessons learned",
      content: [
        {
          text:
            "It was a really interesting project to work on given the amount of time we had to finish it.As shared previously, the experience was designed keeping in mind that this is going to be a minimum viable product and as it grows, new features can be added to it in order to enhance the current experience.The client was really happy and satisfied with the overall outcome."
        },
        {
          subsection: [
            {
              header: "What could have been done differently?",
              content: [
                {
                  text:
                    "Currently there is no direct messaging feature implemented on the learning platform due to time constraints.I think it could have been a good addition as it helps learners and mentors to interact directly with each other.Direct messaging is something that would drive more engagement on the platform as it is going to be a place where people from different industry verticals gather to learn something new."
                }
              ]
            }
          ]
        }
      ]
    } //sections
  ]
};
