interface projectType {
  type: string,
  value: {
    id: Number,
    portfolio: Boolean,
    title: string,
    img: string,
    tags: string[],
    description: string | null,
    component: string | null,
    blog: string | null
  }[]
};


export const projects: projectType[] = [
  {
    type: "User Experience (UX)",
    value: [
      {
        id: 1,
        portfolio: false,
        title: "Mobile App Redesign",
        img: require("@/assets/UX/dictionary/header.png"),
        tags: [
          "User Research",
          "UID",
          "Case Study",
          "IA",
          "IBM - Carbon"
        ],
        description:
          "Redesigned an English dictionary app from google play to make it more usable, intuitive and a desirable experience that is more engaging to its users.",
        component: "dictionaryCaseStudy",
        blog: require("@/store/project/ux/dictionaryCaseStudy")
      },
      {
        id: 2,
        portfolio: true,
        title: "Online Learning Platform",
        img: require("@/assets/UX/crowdCo/header.png"),
        tags: [
          "User Research",
          "IA",
          "Competitive Analysis",
          "User Flow",
          "WireFrame"
        ],
        description:
          "Designed a program learning platform for People Matters. People Matters is an HR Media Platform aimed to help foster ideas between HR-related professioals.",
        component: "HRPlatform",
        blog: require("@/store/project/ux/hRPlatform")
      },
      {
        id: 3,
        portfolio: false,
        title: "Digital Mobile Wallet",
        img: require("@/assets/UX/rupay/header.png"),
        tags: [
          "Digital Wallet",
          "UID",
          "Fintech"
        ],
        description:
          "Rupay is a mobile bankig app designed to fulfill basic services offered by a bank (access bank account, apply for aloan, check progress of existing requests, pay bills,  check transactin history etc.).",
        component: "rupay",
        blog: require("@/store/project/ux/rupay")
      },
      {
        id: 4,
        portfolio: true,
        title: "Digital Journal Redesign",
        img: require("@/assets/UX/tinyThoughts/header.jpg"),
        tags: [
          "Case Study",
          "IA",
          "Competitive Analysis",
          "User Story",
          "Wireframe",
          "Google - Material Design"
        ],
        description:
          "Tiny Thoughts is a personal Journal mobile app. The redesign was intended to make the app more modern and reduce clutter.",
        component: "tinyThoughts",
        blog: require("@/store/project/ux/tinyThoughts")
      },
      {
        id: 5,
        portfolio: false,
        title: "Bank Website Redesign",
        img: require("@/assets/UX/kudaBank/header.png"),
        tags: [
          "UID",
          "Case Study",
          "Google - Material Design",
          "Fintech"
        ],
        description:
          "Redesign for Kuda Bank website. It lacked effort in terms of making the website trendy and eye catching. The website homapage was made more easy to read and comprehend by the use of illustrations and precise text headings.",
        component: "kudaBankCaseStudy",
        blog: require("@/store/project/ux/kudaBank")
      },
      {
        id: 6,
        portfolio: false,
        title: "Cosmetic Product App",
        img: require("@/assets/UX/skinSafe/header.png"),
        tags: [
          "Case Study",
          "WireFrame",
          "User Research"
        ],
        description:
          "A brief case study of a multi-phase redesign ofSkinSAFE, an IOS app. The redesign was intended to make the application with added functionality(personalisation) as well as to make it more user friendly.",
        component: "skinSafe",
        blog: require("@/store/project/ux/skinSafe")
      },
      {
        id: 7,
        portfolio: false,
        title: "Crowd Funding App",
        img: require("@/assets/UX/mediaHRPlatform/header.png"),
        tags: [
          "Case Study",
          "IOS HID",
          "Competitive Analysis",
          "Empathy Mapping",
          "Persona",
          "User Story",
          "WireFrame"
        ],
        description:
          "CrowdCo. is a basic croudfunding mobile app aimed to spread awareness about crowdfunding for the general non-tech audience as a means for funding projects and needs of individuals/group od people.",
        component: "crowdCo",
        blog: require("@/store/project/ux/crowdCo")
      },
      {
        id: 8,
        portfolio: false,
        title: "Venmo Case Study",
        img: require("@/assets/UX/venmo/header.jpg"),
        tags: [
          "Case Study",
          "IOS HID"
        ],
        description:
          "Case study of Venmo, a popular fintech app used to transfer money ffrom one entity to another. The case study highlights the decisions made by the the Venmo team and the possible reasons behind the decisions.",
        component: "venmoCaseStudy",
        blog: require("@/store/project/ux/venmoCaseStudy")
      },
      {
        id: 9,
        portfolio: false,
        title: "Google vs Waze Case Study",
        img: require("@/assets/UX/maps/header.jpg"),
        tags: [
          "Case Study"
        ],
        description:
          "This is  a case study comparing two very popular navigation platforms, the different approaches taken by them to solve problems based on their user research and how people use their platforms",
        component: "mapsCaseStudy",
        blog: require("@/store/project/ux/mapCaseStudy")
      }
    ]
  },
  {
    type: "User Interface (UI)",
    value: [
      {
        id: 1,
        portfolio: false,
        title: "Onboarding Screen",
        img: require("@/assets/mobile/PlantIt boardHeader.png"),
        tags: [
          "Onboarding"
        ],
        description:
          "Plant IT! is an Onboarding screen for an IOS application for a concept website which specializes in selling household plants and decorative pots that go along with those plants.",
        component: "plantIt",
        blog: require("@/store/project/ui/plantIt")
      },
      {
        id: 3,
        portfolio: true,
        title: "Medical Appointment UI",
        img: require("@/assets/mobile/medical researchHeader.png"),
        tags: [
          "UID",
          "Style Guide"
        ],
        description:
          "MedCo is an mobile aimed towards the medical industry.\
              <br />\
              Users can look up details of services offered by various hospitals and the cost associated with those services.",
        component: "medCo",
        blog: require("@/store/project/ui/medCo")
      },
      {
        id: 4,
        portfolio: false,
        title: "Fitness Watch App",
        img: require("@/assets/mobile/fitness friendHeader.png"),
        tags: [
          "Wearable",
          "Wireframe",
          "Style Guide",
          "UCD"
        ],
        description:
          "A Fitness tracker app for smart watch.\
              <br />\
              It helps its users keep track of their daily activity and vitals.",
        component: "fitnessFriend",
        blog: require("@/store/project/ui/fitnessFriend")
      },
      {
        id: 5,
        portfolio: false,
        title: "Authentication Concept Screens",
        img: require("@/assets/mobile/login screenHeader.png"),
        tags: [
          "Login Screen"
        ],
        description: "Login/SignUp screen for a mobile app.",
        component: "appSignUp",
        blog: require("@/store/project/ui/appSignUp")
      },
      {
        id: 6,
        portfolio: false,
        title: "Enterprise Web App",
        img: require("@/assets/packstation/PackStationheader.png"),
        tags: [
          "Golden Ratio",
          "Google - Material Design",
          "UCD"
        ],
        description:
          "The pack station allows users to pack and ship orders.\
          <br />\
          Simple Pack supports orders with original packaging and default box items.",
        component: "packStation",
        blog: require("@/store/project/ui/packStation")
      },
      {
        id: 7,
        portfolio: false,
        title: "RSVP",
        img: require("@/assets/webApp/wedding-1937022_1280.jpg"),
        tags: [
          "UID"
        ],
        description:
          "The RSVP app allows a user to kleep track of their invites that they have sent to their friend.",
        component: "rsvpApp",
        blog: null
      },
      {
        id: 10,
        portfolio: true,
        title: "Recipie Concept App",
        img: require("@/assets/UX/skinSafe/header.png"),
        tags: [
          "Styleguide",
          "Personas",
          "Style Guide",
          "IA",
          "Task Flow",
          "Competitive Analysis",
          "WireFrame"
        ],
        description:
          "The Cullinarian App is an mobile aimed targetted towards individuals who like to cook.\
              <br />\
              The app walks users towards cooking home made cusines and thus promoting a healthy lifestyle.",
        component: "culinarian",
        blog: require("@/store/project/ui/culinarian")
      }
    ]
  },
  {
    type: "Logo",
    value: [
      {
        id: 32,
        portfolio: false,
        title: "Dentistry",
        img: require("@/assets/logo/dentArtistry.svg"),
        tags: [],
        description: "Dentistry is a dental Clinic owned by a local dentist who is known for his creativity.",
        component: null,
        blog: null
      },
      {
        id: 34,
        portfolio: false,
        title: "HexaTees",
        img: require("@/assets/logo/hexaTees.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 35,
        portfolio: false,
        title: "Medicare",
        img: require("@/assets/logo/medicare.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 36,
        portfolio: false,
        title: "MV Events",
        img: require("@/assets/logo/MvEvents.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 37,
        portfolio: false,
        title: "Innovation Circuit",
        img: require("@/assets/logo/innovativeCircuits.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 1,
        portfolio: false,
        title: "kkiokio",
        img: require("@/assets/logo/kkiokio.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 2,
        portfolio: false,
        title: "Weego",
        img: require("@/assets/logo/Weego.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 3,
        portfolio: false,
        title: "KkiokioBg",
        img: require("@/assets/logo/kkiokioBg.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 4,
        portfolio: false,
        title: "Wander Sane Global",
        img: require("@/assets/logo/wanderSaneGlobe.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 5,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneBadge.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 6,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneHelmet.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 7,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/metered.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 8,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/prideSwag.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 9,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/learningTree.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 10,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/tentFire.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 11,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/tentPalace.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 12,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/mountain.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 13,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/beach.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 14,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/rider.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 15,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneStamp.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 16,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/natureStamp.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      // {
      //   id: 17,
      // title: "wanderSaneBadge",
      //   img: require("@/assets/logo/fireLog.svg"),
      // tags: [],
      // description: null,
      // component: null,
        // blog: null
      // },
      {
        id: 18,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/deer.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 19,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/bird.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 20,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/biceps.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 21,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/tent.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      // {
      //   id: 22,
      // title: "wanderSaneBadge",
      //   img: require("@/assets/logo/electron.svg"),
      // tags: [],
      // description: null,
      // component: null,
        // blog: null
      // },
      {
        id: 23,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/sandyGlobe.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 24,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/biker.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 25,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/hexa.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 26,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneVlogs.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 27,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wonderWheel.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 28,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/electroWheel.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 29,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wrenchWheel.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      {
        id: 30,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/unison.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
      // {
      //   id: 31,
      // title: "wanderSaneBadge",
      //   img: require("@/assets/logo/Artboard 27.svg"),
      // tags: [],
      // description: null,
      // component: null,
        // blog: null
      // },
      {
        id: 33,
        portfolio: false,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/anglePlus.svg"),
        tags: [],
        description: null,
        component: null,
        blog: null
      },
    ]
  },
  {
    type: "JavaScript",
    value: [
      {
        id: 1,
        portfolio: false,
        title: "DrumKit",
        img: require("@/assets/js/drumKitHeader.png"),
        tags: [
          "audio playback"
        ],
        description:
          "Play your favorite tune on our virtual drums.<br />\
          The DrumKit lets you play your favorite tune ",
        component: "drumKit",
        blog: null
      },
      {
        id: 2,
        portfolio: false,
        title: "AnalogCLock",
        img: require("@/assets/js/clock.png"),
        tags: [],
        description:
          "The analogue clock was a good way of putting my CSS skills to test.<br />\
        The clock also has date and a digital timer in it.",
        component: "analogClock",
        blog: null
      },
      {
        id: 3,
        portfolio: false,
        title: "Array Cardio",
        img: require("@/assets/js/array cardio.jpeg"),
        tags: [],
        description:
          "Playing with Array functions was a good way of getting acquaintanced with them.<br />\
          Array Functions used were as follows",
        component: "arrayCardio",
        blog: null
      },
      {
        id: 4,
        portfolio: false,
        title: "Image Gallery",
        img: require("@/assets/js/imageGallery.jpg"),
        tags: [],
        description:
          "An image gallery is a way to display parts of an image or information. The users can click on the section to view more info on thje selecetd topic without having to scroll.",
        component: "imageGalery",
        blog: null
      },
      {
        id: 5,
        portfolio: false,
        title: "Fetch API",
        img: require("@/assets/js/fetch API.png"),
        tags: [
          "API"
        ],
        description:
          "Fetch data from Sttudio Ghibli API and use it to simulatte an IMDB like data driven website.",
        component: "fetchApi",
        blog: null
      },
      {
        id: 6,
        portfolio: false,
        title: "Canvas",
        img: require("@/assets/js/canvas.jpg"),
        tags: [
          "HTML Canvas"
        ],
        description: "Simulates an empty canvas where users can draw.",
        component: "canvasExample",
        blog: null
      },
      {
        id: 7,
        portfolio: false,
        title: "CheckboxChallange",
        img: require("@/assets/js/checkbox challange.png"),
        tags: [
          "keyboard Shortcuts"
        ],
        description:
          "Simulates a checkbox input field where users can use keyboard shortcuts to select/deselect multiple checkbox inputs at once. Pressing and holding shift while checking/unckecking checkboxes triggers the checkboxes in between.",
        component: "checkboxChallange",
        blog: null
      },
      {
        id: 8,
        portfolio: false,
        title: "KonamiCode",
        img: require("@/assets/js/konami.jpeg"),
        tags: [
          "Gamification"
        ],
        description:
          "A Konami code is a cheat code that appears in many konami video games and some non-Konami games. The user can press the following sequence of buttons/keyboard keys to enable a cheat or an effect.",
        component: "konamiCode",
        blog: null
      },
      {
        id: 9,
        portfolio: false,
        title: "ScrollIn",
        img: require("@/assets/js/scrollIn.jpg"),
        tags: [
          "Navigation"
        ],
        description:
          "ScrollIn is a scroll indicator which segments the webpage into segments using the sections html tag and disp[lays a page content menu on the right so that yusers can jump between different sections of the page.",
        component: "scrollIn",
        blog: null
      },
      {
        id: 10,
        portfolio: false,
        title: "UserMedia",
        img: require("@/assets/js/userMedia.png"),
        tags: [
          "HTML5 Media"
        ],
        description:
          "Uses the video html5 tag to simulate a webcam, saves screenshots and applies different effects to the image",
        component: "userMedia",
        blog: null
      },
      {
        id: 11,
        portfolio: false,
        title: "Speech Recognition",
        img: require("@/assets/js/speech recognition.png"),
        tags: [
          "Speech Recognition"
        ],
        description:
          "Uses the built in speech recognition to convert user speech into text and displays it on the page.",
        component: "speechRecognition",
        blog: null
      },
      {
        id: 12,
        portfolio: false,
        title: "Link Follower",
        img: require("@/assets/js/linkfollower.png"),
        tags: [
          "Gamification"
        ],
        description:
          "The linkfollower is a way of styling links such that the style travels through the page ot the next link during mouise hover",
        component: "linkFollower",
        blog: null
      },
      {
        id: 13,
        portfolio: false,
        title: "Geo Location",
        img: require("@/assets/js/geoLocation.jpg"),
        tags: [
          "Geo Location",
          "Gamification"
        ],
        description:
          "the GeoLocation uses the geoLocation   browser functionality not jusdt to locate the device but also to calculate spee dif the device is travelling",
        component: "geoLocation",
        blog: null
      },
      {
        id: 14,
        portfolio: false,
        title: "Follow Along Navigation Dropdown",
        img: require("@/assets/js/followAlongDropDown.png"),
        tags: [],
        description:
          "Building on the link follower, the Follow Along NAvigation simulates a navigation where the self adjusting navigtion background travels along different navigation links and displays the sub-content ion a fun way.",
        component: "FollowNav",
        blog: null
      },
      {
        id: 15,
        portfolio: false,
        title: "Click and Drag",
        img: require("@/assets/js/click and drag.jpg"),
        tags: [],
        description: "click and Drag simulates a slidable/draggable slider",
        component: "clickDrag",
        blog: null
      },
      {
        id: 16,
        portfolio: false,
        title: "Control video speed",
        img: require("@/assets/js/videoSpeed.jpg"),
        tags: [
          "HTML5 video"
        ],
        description:
          "Uses a range/slider bar to control the speed of the video being played.",
        component: "videoControl",
        blog: null
      }
    ]
  },
  {
    type: "CSS",
    value: [
      {
        id: 1,
        portfolio: false,
        title: "Pulse Animation",
        img: require("@/assets/css/pulse.jpg"),
        tags: [],
        description:
          "Pulse animation is a circle that pulses every few seconds.<br />\
        It was a good exercise in writting css for the sake of eesthetics.",
        component: "pulseAnimation",
        blog: null
      },
      {
        id: 2,
        portfolio: false,
        title: "Card Slider",
        img: require("@/assets/css/cardslider.jpg"),
        tags: [],
        description: "A horizontal card/content slider",
        component: "cardSlider",
        blog: null
      },
      {
        id: 3,
        portfolio: false,
        title: "Automated infinite Scroll",
        img: require("@/assets/css/infinite scroll.png"),
        tags: [],
        description: "does not work rite now.",
        component: "infiniteScroll",
        blog: null
      }
    ]
  }
];
