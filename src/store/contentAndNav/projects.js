export const projects = [
  {
    type: "User Experience (UX)",
    value: [
      {
        id: 1,
        title: "Mobile App Redesign",
        img: require("@/assets/UX/dictionary/header.png"),
        tags: ["User Research", "Case Study", "IBM - Carbon", "UID", "IA"],
        description:
          "Redesigned an English dictionary app from google play to make it more usable, intuitive and a desirable experience that is more engaging to its users.",
        component: "dictionaryCaseStudy",
        blog: require("@/store/projectux/dictionaryCaseStudy")
      },
      {
        id: 2,
        title: "Online Learning Platform",
        img: require("@/assets/UX/crowdCo/header.png"),
        tags: [
          "User Research",
          "Competitive Analysis",
          "User Flow",
          "WireFrame",
          "IA"
        ],
        description:
          "Designed a program learning platform for People Matters. People Matters is an HR Media Platform aimed to help foster ideas between HR-related professioals.",
        component: "HRPlatform",
        blog: require("@/store/projectux/hRPlatform")
      },
      {
        id: 3,
        title: "Digital Mobile Wallet",
        img: require("@/assets/UX/rupay/header.png"),
        tags: ["UID", "Fintech", "Digital Wallet", "Mobile Banking"],
        description:
          "Rupay is a mobile bankig app designed to fulfill basic services offered by a bank (access bank account, apply for aloan, check progress of existing requests, pay bills,  check transactin history etc.).",
        component: "rupay",
        blog: require("@/store/projectux/rupay")
      },
      {
        id: 4,
        title: "Digital Journal Redesign",
        img: require("@/assets/UX/tinyThoughts/header.jpg"),
        tags: [
          "Case Study",
          "Competitive Analysis",
          "User Story",
          "Wireframe",
          "IA",
          "Google - Material Design"
        ],
        description:
          "Tiny Thoughts is a personal Journal mobile app. The redesign was intended to make the app more modern and reduce clutter.",
        component: "tinyThoughts",
        blog: require("@/store/projectux/tinyThoughts")
      },
      {
        id: 5,
        title: "Bank Website Redesign",
        img: require("@/assets/UX/kudaBank/header.png"),
        tags: ["UID", "Case Study", "Google - Material Design", "Fintech"],
        description:
          "Redesign for Kuda Bank website. It lacked effort in terms of making the website trendy and eye catching. The website homapage was made more easy to read and comprehend by the use of illustrations and precise text headings.",
        component: "kudaBankCaseStudy",
        blog: require("@/store/projectux/kudaBank")
      },
      {
        id: 6,
        title: "Cosmetic Product App",
        img: require("@/assets/UX/skinSafe/header.png"),
        tags: ["Case Study", "User Research", "WireFrame"],
        description:
          "A brief case study of a multi-phase redesign ofSkinSAFE, an IOS app. The redesign was intended to make the application with added functionality(personalisation) as well as to make it more user friendly.",
        component: "skinSafe",
        blog: require("@/store/projectux/skinSafe")
      },
      {
        id: 7,
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
        blog: require("@/store/projectux/crowdCo")
      },
      {
        id: 8,
        title: "Venmo Case Study",
        img: require("@/assets/UX/venmo/header.jpg"),
        tags: ["Case Study", "IOS HID"],
        description:
          "Case study of Venmo, a popular fintech app used to transfer money ffrom one entity to another. The case study highlights the decisions made by the the Venmo team and the possible reasons behind the decisions.",
        component: "venmoCaseStudy",
        blog: require("@/store/projectux/venmoCaseStudy")
      },
      {
        id: 9,
        title: "Google vs Waze Case Study",
        img: require("@/assets/UX/maps/header.jpg"),
        tags: ["Case Study"],
        description:
          "This is  a case study comparing two very popular navigation platforms, the different approaches taken by them to solve problems based on their user research and how people use their platforms",
        component: "mapsCaseStudy",
        blog: require("@/store/projectux/mapCaseStudy")
      }
    ]
  },
  {
    type: "User Interface (UI)",
    value: [
      {
        id: 1,
        title: "Onboarding Screen",
        img: require("@/assets/mobile/PlantIt boardHeader.png"),
        tags: ["Onboarding"],
        description:
          "Plant IT! is an Onboarding screen for an IOS application for a concept website which specializes in selling household plants and decorative pots that go along with those plants.",
        component: "plantIt",
        blog: require("@/store/projectui/plantIt")
      },
      {
        id: 3,
        title: "Medical Appointment UI",
        img: require("@/assets/mobile/medical researchHeader.png"),
        tags: ["UID", "Style Guide"],
        description:
          "MedCo is an mobile aimed towards the medical industry.\
              <br />\
              Users can look up details of services offered by various hospitals and the cost associated with those services.",
        component: "medCo",
        blog: require("@/store/projectui/medCo")
      },
      {
        id: 4,
        title: "Fitness Watch App",
        img: require("@/assets/mobile/fitness friendHeader.png"),
        tags: ["Wearable", "Wireframe", "Style Guide", "UCD"],
        description:
          "A Fitness tracker app for smart watch.\
              <br />\
              It helps its users keep track of their daily activity and vitals.",
        component: "fitnessFriend",
        blog: require("@/store/projectui/fitnessFriend")
      },
      {
        id: 5,
        title: "Login/SignUp Concept Screens",
        img: require("@/assets/mobile/login screenHeader.png"),
        tags: ["Login Screen"],
        description: "Login/SignUp screen for a mobile app.",
        component: "appSignUp",
        blog: require("@/store/projectui/appSignUp")
      },
      {
        id: 6,
        title: "Enterprise Web App",
        img: require("@/assets/packstation/PackStationheader.png"),
        tags: ["Golden Ratio", "Google - Material Design", "UCD"],
        description:
          "The pack station allows users to pack and ship orders.\
          <br />\
          Simple Pack supports orders with original packaging and default box items.",
        component: "packStation",
        blog: require("@/store/projectui/packStation")
      },
      {
        id: 7,
        title: "RSVP",
        img: require("@/assets/webApp/wedding-1937022_1280.jpg"),
        tags: ["UID"],
        description:
          "The RSVP app allows a user to kleep track of their invites that they have sent to their friend.",
        component: "rsvpApp",
        blog: null
      },
      {
        id: 10,
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
        blog: require("@/store/projectui/culinarian")
      }
    ]
  },
  {
    type: "Logo",
    value: [
      {
        id: 32,
        title: "Dentistry",
        img: require("@/assets/logo/dentArtistry.svg"),
        tags: [],
        description: "Dentistry is a dental Clinic owned by a local dentist who is known for his creativity.",
        component: null
      },
      {
        id: 34,
        title: "HexaTees",
        img: require("@/assets/logo/hexaTees.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 35,
        title: "Medicare",
        img: require("@/assets/logo/medicare.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 36,
        title: "MV Events",
        img: require("@/assets/logo/MvEvents.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 37,
        title: "Innovation Circuit",
        img: require("@/assets/logo/innovativeCircuits.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 1,
        title: "kkiokio",
        img: require("@/assets/logo/kkiokio.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 2,
        title: "Weego",
        img: require("@/assets/logo/Weego.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 3,
        title: "KkiokioBg",
        img: require("@/assets/logo/kkiokioBg.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 4,
        title: "Wander Sane Global",
        img: require("@/assets/logo/wanderSaneGlobe.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 5,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneBadge.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 6,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneHelmet.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 7,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/metered.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 8,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/prideSwag.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 9,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/learningTree.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 10,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/tentFire.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 11,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/tentPalace.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 12,
        img: require("@/assets/logo/mountain.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 13,
        img: require("@/assets/logo/beach.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 14,
        img: require("@/assets/logo/rider.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 15,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneStamp.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 16,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/natureStamp.svg"),
        tags: [],
        description: null,
        component: null
      },
      // {
      //   id: 17,
      // title: "wanderSaneBadge",
      //   img: require("@/assets/logo/fireLog.svg"),
      // tags: [],
      // description: null,
      // component: null
      // },
      {
        id: 18,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/deer.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 19,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/bird.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 20,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/biceps.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 21,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/tent.svg"),
        tags: [],
        description: null,
        component: null
      },
      // {
      //   id: 22,
      // title: "wanderSaneBadge",
      //   img: require("@/assets/logo/electron.svg"),
      // tags: [],
      // description: null,
      // component: null
      // },
      {
        id: 23,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/sandyGlobe.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 24,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/biker.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 25,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/hexa.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 26,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wanderSaneVlogs.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 27,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wonderWheel.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 28,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/electroWheel.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 29,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/wrenchWheel.svg"),
        tags: [],
        description: null,
        component: null
      },
      {
        id: 30,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/unison.svg"),
        tags: [],
        description: null,
        component: null
      },
      // {
      //   id: 31,
      // title: "wanderSaneBadge",
      //   img: require("@/assets/logo/Artboard 27.svg"),
      // tags: [],
      // description: null,
      // component: null
      // },
      {
        id: 33,
        title: "wanderSaneBadge",
        img: require("@/assets/logo/anglePlus.svg"),
        tags: [],
        description: null,
        component: null
      },
    ]
  },
  {
    type: "JavaScript",
    value: [
      {
        id: 1,
        title: "DrumKit",
        img: require("@/assets/js/drumKitHeader.png"),
        tags: ["audio playback"],
        description:
          "Play your favorite tune on our virtual drums.<br />\
          The DrumKit lets you play your favorite tune ",
        component: "drumKit",
        blog: null
      },
      {
        id: 2,
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
        title: "Fetch API",
        img: require("@/assets/js/fetch API.png"),
        tags: ["API"],
        description:
          "Fetch data from Sttudio Ghibli API and use it to simulatte an IMDB like data driven website.",
        component: "fetchApi",
        blog: null
      },
      {
        id: 6,
        title: "Canvas",
        img: require("@/assets/js/canvas.jpg"),
        tags: ["HTML Canvas"],
        description: "Simulates an empty canvas where users can draw.",
        component: "canvasExample",
        blog: null
      },
      {
        id: 7,
        title: "CheckboxChallange",
        img: require("@/assets/js/checkbox challange.png"),
        tags: ["keyboard Shortcuts"],
        description:
          "Simulates a checkbox input field where users can use keyboard shortcuts to select/deselect multiple checkbox inputs at once. Pressing and holding shift while checking/unckecking checkboxes triggers the checkboxes in between.",
        component: "checkboxChallange",
        blog: null
      },
      {
        id: 8,
        title: "KonamiCode",
        img: require("@/assets/js/konami.jpeg"),
        tags: ["Gamification"],
        description:
          "A Konami code is a cheat code that appears in many konami video games and some non-Konami games. The user can press the following sequence of buttons/keyboard keys to enable a cheat or an effect.",
        component: "konamiCode",
        blog: null
      },
      {
        id: 9,
        title: "ScrollIn",
        img: require("@/assets/js/scrollIn.jpg"),
        tags: ["Navigation"],
        description:
          "ScrollIn is a scroll indicator which segments the webpage into segments using the sections html tag and disp[lays a page content menu on the right so that yusers can jump between different sections of the page.",
        component: "scrollIn",
        blog: null
      },
      {
        id: 10,
        title: "UserMedia",
        img: require("@/assets/js/userMedia.png"),
        tags: ["HTML5 Media"],
        description:
          "Uses the video html5 tag to simulate a webcam, saves screenshots and applies different effects to the image",
        component: "userMedia",
        blog: null
      },
      {
        id: 11,
        title: "Speech Recognition",
        img: require("@/assets/js/speech recognition.png"),
        tags: ["Speech Recognition"],
        description:
          "Uses the built in speech recognition to convert user speech into text and displays it on the page.",
        component: "speechRecognition",
        blog: null
      },
      {
        id: 12,
        title: "Link Follower",
        img: require("@/assets/js/linkfollower.png"),
        tags: ["Gamification"],
        description:
          "The linkfollower is a way of styling links such that the style travels through the page ot the next link during mouise hover",
        component: "linkFollower",
        blog: null
      },
      {
        id: 13,
        title: "Geo Location",
        img: require("@/assets/js/geoLocation.jpg"),
        tags: ["Geo Location", "Gamification"],
        description:
          "the GeoLocation uses the geoLocation   browser functionality not jusdt to locate the device but also to calculate spee dif the device is travelling",
        component: "geoLocation",
        blog: null
      },
      {
        id: 14,
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
        title: "Click and Drag",
        img: require("@/assets/js/click and drag.jpg"),
        tags: [],
        description: "click and Drag simulates a slidable/draggable slider",
        component: "clickDrag",
        blog: null
      },
      {
        id: 16,
        title: "Control video speed",
        img: require("@/assets/js/videoSpeed.jpg"),
        tags: ["HTML5 video"],
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
        title: "Card Slider",
        img: require("@/assets/css/cardslider.jpg"),
        tags: [],
        description: "A horizontal card/content slider",
        component: "cardSlider",
        blog: null
      },
      {
        id: 3,
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
