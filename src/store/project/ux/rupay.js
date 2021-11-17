export const rupay = {
  header: "Rupay",
  content: [
    {
      img: {
        src: require("@/assets/UX/rupay/header.png"),
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
            "<p> <strong> Overview:</strong> A growing Nigerian Bank wants to expand on their buisness and is in need of a mobile applicatin so they can offer services.Most customer registered with them has a maximum of 2 accounts.Among other things, the app needs the ability to top up their accounts, make payments using their mobile app, be able to request for refunds and apply for loan. </p>"
        },
        {
          altText:
            "<p> <strong> Objective:</strong> To Create a Finech mobile appliation that keeping in mind the following; functionality </p>"
        },
        {
          altText:
            "<ol> <li> Switch between his accounts</li> <li>See recent transactions sorted by recent Date</li> <li>See his Wallet Balance</li> <li>Know how to fund/top up his account</li> <li>Apply for loan</li> <li>Pay bills</li> <li> Allow user to request for a refund (this feature should not be too obvious but visible) </li> <li>Option to Save Card</li> <li>Link to refer a friend</li> </ol>"
        },
        {
          altText: "<p> <strong> Skills:</strong> Fintech UX </p>"
        },
        {
          altText: "<p> <strong> Role:</strong> UI Designer </p>"
        },
        {
          altText: "<p> <strong> Duration:</strong> 2 Days </p>"
        }
      ]
    }, //sections
    {
      header: "Research",
      content: [
        {
          text:
            "I started out solving this task by conducting a research on apps that offer a service similar to this to give me a general idea and serve as a form of inspiration.I decided to use the color blue as the primary color because blue represents trust.For an app that deals with money, the most important thing for users is security, they need to know they can put their money into the app and it will be secure.I laid out the structure based on the features in the brief on paper and decided on how the features will connect."
        },
        {
          text:
            "Researching on apps that offer a similar service, I was able to conclude that users are able to topup their wallets by using their debit cards which have been saved on the app or adding a new card and by bank transfer"
        }
      ]
    }, //sections
    {
      header: "App Screens",
      content: [
        {
          text:
            "I put the most important features of the app directly on the homescreen so the users don’t have to go through multiple screens to do different things.Most of what they need is right there at a glance once they open the app.Also, they are able to see their most recent transactions.The space for the google ad was also added directly on the homescreen so as to be able to reach the users as they open the app rather than put it on a separate screen which they might not interact with."
        },
        {
          img: {
            src: require("@/assets/UX/rupay/homePageRe.svg"),
            alt: null,
            caption: null
          }
        },
        {
          text:
            "Here the users can see both accounts(Naira and Dollar) and their respective amounts.The plus icon on each account lets the users know they can add(topup) more money to the respective accounts."
        },
        {
          text:
            "The next set of screens are the Top up, Pay bills and apply for loan screens"
        },
        {
          img: [
            {
              src: require("@/assets/UX/rupay/addToWalleCardtRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/addToWalletBankRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/addToWalletAddBankRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/creditCardRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/creditCardManualRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/creditCardAddRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/creditCardQRRe.svg"),
              alt: null,
              caption: null
            }
          ]
        },
        {
          text:
            "They are a number of bills (utility, subscribtions etc.) that could be directly paid using a mobile application, so I put them on a seperate screen called Bill Pay.I broke them down into their different categories to make it easier for the users to pay bills rather than scrolling through ten's of options."
        },
        {
          img: [
            {
              src: require("@/assets/UX/rupay/LoanRequestRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/payBillsRe.svg"),
              alt: null,
              caption: null
            }
          ]
        },
        {
          text:
            "Then the loan request page, the users are asked for the amount they want and the duration.Based on the process it takes to give a user a loan, I added a note to the users to let them know the loan process will take up to 6 hours as the information they will be asked to provide will have to be verified so they don’t get frustrated.It’s always good practice to let different processes take and why."
        },
        {
          text:
            "Since we were asked to add a feature that enables the users to request for a refund but not to make it too obvious, I decided to add it to the Profile settings page in the “Help & amp; Support screen”.Also included in the Profile settings page is a tab named “Refer and Earn” which enables the users to share a link to friends and family to sign up on the app and also earn a small token on each successful sign up as an incentive to the users."
        },
        {
          img: [
            {
              src: require("@/assets/UX/rupay/profileSettingRe.svg"),
              alt: null,
              caption: null
            }, {
              src: require("@/assets/UX/rupay/helpAndSupportRe.svg"),
              alt: null,
              caption: null
            }
          ]
        },
      ]
    }, //sections
    {
      header: "Conclusion",
      content: [
        {
          text:
            "I would not say the user experience fits a description of the “fun” mobile application Rupay has tried to position itself as.Some of its aesthetics are obviously echoing its competitors, but it is certainly more engaging than your run- of - the - mill fintech apps."
        },
        {
          text:
            "It will be interesting to see how Rupay evolves, especially with major institutions now integrating Rupay’s fundamental functionality into their platforms.To combat the tech behemoth entering their space, Rupay may have to embrace their social media roots further to differentiate, or keep improving on their user experience."
        }
      ]
    } //section
  ]
};
