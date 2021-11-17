export const crowdCo = {
  header: "English Dictionary app redesign",
  content: [
    {
      img: {
        src: require("@/assets/UX/dictionary/disctionaryAppRe.png"),
        alt: null,
        caption: null
      }
    }
  ],
  section: [
    {
      header: "About",
      content: [
        {
          altText:
            "<p> <strong> Overview:</strong> Everyone has a list of favorite apps installed on their phones which helps them in some way or the other. <a href = 'https://play.google.com/store/apps/details?id=livio.pack.lang.en_US&hl=en_IN'> English Dictionary </a> is one such app that helps its users enhance their vocabulary.The users can look up words that they have previously never heard of and the best part is that you don’t even need to be connected to the internet in order to use this as it stores everything offline. </p>"
        },
        {
          altText:
            "<p> <strong> Objective:</strong> To provide a more usable, intuitive and desirable experience for the app so that the experience is more engaging for the user. </p>"
        },
        {
          altText:
            "<p> <strong> Target audience:</strong> The target users were between 18 - 44 and mostly in USA.Around 75 % of their user base are women. </p>"
        },
        {
          altText:
            "<p> <strong> Skills:</strong> User Research, Interface Design(IxD), Information Architecture(IA). </p>"
        },
        {
          altText: "<p> <strong> Role:</strong> UI / UX design </p> "
        },
        {
          altText: "<p> <strong> Duration:</strong> 2 Days </p>"
        }
      ]
    }, //sections
    {
      header: "Why redesign?",
      content: [
        {
          text:
            "The original app has almost all the functionality that a dictionary application needs along with a few more added tweaks here and there, But I feel like the user experience is not that good.While using it I noticed a couple of controls that seem misplaced thus requiring the user to make an effort to locating some of these functionalities."
        },
        {
          text:
            "Here are some of the problems I though needed be addressed as a part of the redesign."
        },
        {
          altText:
            "<ol> <li> Cluttered UI elements.</li> <li>Pretty bad color scheme.</li> <li> Some really good functionalities are present within the app but the developer has done the bare minimum to implement it. </li> <li>Reuse of a lot of controls which are unnecessary.</li> </ol>"
        },
        {
          text:
            "Let us now dive straight into the app mockups and try to figure out what’s wrong with the current version and what has been done to fix it:"
        },
        {
          subSection: [
            {
              header: "Home screen",
              content: [
                {
                  img: {
                    src: require("@/assets/UX/dictionary/homeScreen.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "First, look at the app and you see a lot of duplicate elements used. The app drawer uses the same call to actions that are present on the home screen.There’s actually no need of an app drawer here as it leads to nothing but redundancy."
                },
                {
                  text:
                    "Another thing that you will notice is the presence of an exit app button within the app drawer.While the exit button is a good touch, its not widely used in todays world due to the development in how people use their devices in 2020, thus serving little to no purpose."
                },
                {
                  text: "Below is the recomended home screen for the app:"
                },
                {
                  img: [
                    {
                      src: require("@/assets/UX/dictionary/homeScreenRe1.svg"),
                      alt: null,
                      caption: null
                    }, {
                      src: require("@/assets/UX/dictionary/homeScreenRe2.svg"),
                      alt: null,
                      caption: null
                    }, {
                      src: require("@/assets/UX/dictionary/wordOfTheDay.svg"),
                      alt: null,
                      caption: null
                    }
                  ]
                },
                {
                  text:
                    "As proposed above, I removed the app drawer and replaced it with a Pop Up menu on the right.The home screen looks a lot cleaner after this change.As search is the most important action that is needed to be performed within the app, it’s placement matters the most and hence the change from the original app bar location is implemented."
                },
                {
                  text:
                    "After this change, the redundant elements are gone. Also, that floating action button with the share icon is removed as it didn’t serve any purpose other than sharing the app link, which I believe can be added to the app settings itself if required."
                }
              ]
            }, //subSection
            {
              header: "Search screen",
              content: [
                {
                  img: {
                    src: require("@/assets/UX/dictionary/searchScreen.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "The next redesign that took place is for the search screen. This one is the most important screen within our app because it spits out search result for a word that has been queried by the user.The pain point on this screen is that bottom bar along with a floating action button(share).Once again you can see the redundancy coming back into action.There’s also a button located in the bottom bar which can be utilized to take notes within our app, this will be discussed later in this case study."
                },
                {
                  text: "Here’s the fix for our search screen:"
                },
                {
                  img: [
                    {
                      src: require("@/assets/UX/dictionary/searchScreenRe1.svg"),
                      alt: null,
                      caption: null
                    }, {
                      src: require("@/assets/UX/dictionary/wordSearchRe.svg"),
                      alt: null,
                      caption: null
                    }
                  ]
                },
                {
                  text:
                    "There’s a great feature implemented in the original app called — Word of the day.If you go back and take a look at the original home screen, word of the day is implemented as a specified call to action. In my redesign, I tried to incorporate this feature in our search screen i.e.whenever a user tries to search for a word, he/ she is greeted by this subtle feature."
                },
                {
                  text:
                    "The next addition to this screen is the notes feature that I was talking about before.This is implemented with a floating action button."
                }
              ]
            }, //subSection
            {
              header: "Notes screen",
              content: [
                {
                  img: {
                    src: require("@/assets/UX/dictionary/noteScreen.png"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "Once again a great feature but poor implementation. This feature allows you to take notes whenever you want to save additional information for a word.This one is actually my favorite feature in the app because you can take down notes for a specific word which helps you recall that word most of the times."
                },
                {
                  text: "Here’s the redesigned version:"
                },
                {
                  img: {
                    src: require("@/assets/UX/dictionary/NotesScreenRe.svg"),
                    alt: null,
                    caption: null
                  }
                },
                {
                  text:
                    "Same functionality, but with a cleaner design. Don’t know why the developer is obsessed with that share functionality.It’s plugged in at almost every screen.I get it “sharing is caring” but that’s not true for every situation."
                }
              ]
            } //subSection
          ]
        }
      ]
    }, //sections
    {
      header: "Color and Typography",
      content: [
        {
          img: {
            src: require("@/assets/UX/dictionary/colorTypeface.png"),
            alt: null,
            caption: null
          }
        }
      ]
    }, //sections
    {
      header: "Whats Next?",
      content: [
        {
          text:
            "Through this project, I tried my best to improve the existing user experience of this app.There are more screens in this app like app settings and bookmarks which I believe needs to be redesigned as well. Another thing that I can implement is a proper brand identity for this app along with a fully functional interactive prototype."
        },
        {
          text:
            "I learned a lot from this project especially the fact that it’s not easy to redesign a well- established app with more than 300k downloads.You need to manage all the existing functionality present within the original app through your redesign."
        }
      ]
    } //section
  ]
};
