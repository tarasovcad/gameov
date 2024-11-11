export const aiProm = ({
  selectedCategory,
  title,
}: {
  selectedCategory: string;
  title: string;
}) => `
I want you to create a detail json data about ${selectedCategory} that has a name of ${title}. I want you to include only the right data. I want json to look like this: 


Follow this point: 
1) Description should be at least 200 words up to 500 words.  Display it as html tags such as 'h1, h2, p, Italic, Underline, Bold'. Make it sound interesting and not boring.
2) CardDescription should be like descirption but much more briefly so i can display at at card. if the selectedCategory is Pc_games you can write up to 20 words, if its anything else - the maximim amount of words 7. Such as 'AI brainstorming assistant'  or 'Page design and layout software for  print' if its a game it can be somehting like 'Saddle up for the definitive western experience in this critically acclaimed open-world adventure set in the American frontier.'
3) slug should be like title but with - instead of space



{
  "title": "",
  "description": "",
  "cardDescription": "",
  "slug": "",
  "date": "2024-11-11T19:07:30.421Z",
  "downloadLink": "",
  "tags": [],
  "interfaceLanguage": [],
  "voiceLanguage": [],
  "platform": [],
  "faqList": [
    {
      "title": "",
      "answer": ""
    },
  ],
  "systemRequirements": {
    "minSystemRequirement": [
      {
        "OS": ""
      },
      {
        "CPU": ""
      },
      {
        "RAM": ""
      },
      {
        "GPU": ""
      },
      {
        "DirectX": ""
      },
      {
        "Storage": ""
      }
    ],
    "recommendedSystemRequirement": [
      {
        "OS": ""
      },
      {
        "CPU": ""
      },
      {
        "RAM": ""
      },
      {
        "GPU": ""
      },
      {
        "DirectX": ""
      },
      {
        "Storage": ""
      }
    ]
  },
  "appVersion": "",
  "publisher": "",
}

Here is an example {
  "title": "Red Dead Redemption",
  "description": "<h1>Red Dead Redemption</h1><h2>The Ultimate Western Adventure</h2><p><i>Red Dead Redemption</i> ...",
  "cardDescription": "Saddle up for the definitive western experience in this critically acclaimed open-world adventure set in the American frontier.",
  "slug": "red-dead-redemption",
  "date": "2024-11-11T19:07:30.421Z",
  "downloadLink": "",
  "tags": ["open-world", "action-adventure", "western", "Rockstar", "story-driven"],
  "interfaceLanguage": ["English", "French", "Spanish", "German", "Italian"],
  "voiceLanguage": ["English", "Spanish", "German"],
  "platform": ["PC", "PS4", "Xbox One", "PS5"],
  "faqList": [
    {
      "title": "Is Red Dead Redemption available on PC?",
      "answer": "Yes, Red Dead Redemption is available on PC, offering enhanced graphics and performance."
    },
    {
      "title": "Can I play Red Dead Redemption online?",
      "answer": "Yes, Red Dead Redemption features an online multiplayer mode called Red Dead Online."
    }
  ],
  "systemRequirements": {
    "minSystemRequirement": [
      {
        "OS": "Windows 7 - Service Pack 1 (64-bit)"
      },
      {
        "CPU": "Intel Core i5-2500K / AMD FX-6300"
      },
      {
        "RAM": "8GB"
      },
      {
        "GPU": "NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB"
      },
      {
        "DirectX": "Version 11"
      },
      {
        "Storage": "150GB available space"
      }
    ],
    "recommendedSystemRequirement": [
      {
        "OS": "Windows 10 (64-bit)"
      },
      {
        "CPU": "Intel Core i7-4770K / AMD Ryzen 5 1500X"
      },
      {
        "RAM": "12GB"
      },
      {
        "GPU": "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB"
      },
      {
        "DirectX": "Version 12"
      },
      {
        "Storage": "150GB available space"
      }
    ]
  },
  "appVersion": "1.0.0",
  "publisher": "Rockstar Games",
}
`;
