const creators = [
    {
      "channelName": "CodeCraft",
      "profilePhoto": "https://i.pravatar.cc/150?img=1",
      "videos": [
        {
          "title": "Learn JavaScript in 10 Minutes",
          "thumbnail": "https://i.pinimg.com/1200x/64/e6/d2/64e6d26520b95e8b1c42099a89a036fa.jpg"
        },
        {
          "title": "React Hooks Explained",
          "thumbnail": "https://i.pinimg.com/736x/fb/58/c7/fb58c789d9017de269b1457e9347cf00.jpg"
        },
        {
          "title": "Build a Todo App with Node.js",
          "thumbnail": "https://i.pinimg.com/736x/9c/ec/b6/9cecb69b42cb7470a03323a0720e5f81.jpg"
        }
      ]
    },
    {
      "channelName": "TechWorld",
      "profilePhoto": "https://i.pravatar.cc/150?img=2",
      "videos": [
        {
          "title": "Top 10 Gadgets of 2026",
          "thumbnail": "https://i.pinimg.com/736x/cd/00/09/cd0009206e4da47a0931562b518a7d9c.jpg"
        },
        {
          "title": "Laptop Buying Guide",
          "thumbnail": "https://i.pinimg.com/736x/57/9f/a7/579fa740f59c51c83bdfa7cfeb98ed76.jpg"
        },
        {
          "title": "Best Smartphones Right Now",
          "thumbnail": "https://i.pinimg.com/736x/22/48/3f/22483f0a90317f24db284c0852a5351f.jpg"
        },
        {
          "title": "Future of AI Devices",
          "thumbnail": "https://i.pinimg.com/736x/eb/89/26/eb892679a9733c8c8895ceb125f1d144.jpg"
        }
      ]
    },
    {
      "channelName": "TravelScope",
      "profilePhoto": "https://i.pravatar.cc/150?img=3",
      "videos": [
        {
          "title": "Exploring Bali in 5 Days",
          "thumbnail": "https://i.pinimg.com/1200x/a9/a9/14/a9a914b3f579c222dd5db08ce0f77a4b.jpg"
        },
        {
          "title": "Hidden Places in Europe",
          "thumbnail": "https://i.pinimg.com/1200x/13/77/52/13775251ff9eaad0c719664de73b927b.jpg"
        }
      ]
    },
    {
      "channelName": "FoodieBites",
      "profilePhoto": "https://i.pravatar.cc/150?img=4",
      "videos": [
        {
          "title": "Street Food in India",
          "thumbnail": "https://i.pinimg.com/736x/81/32/27/81322759e5d3b9537c2648556a48faab.jpg"
        },
        {
          "title": "Easy Pasta Recipe",
          "thumbnail": "https://i.pinimg.com/736x/81/32/27/81322759e5d3b9537c2648556a48faab.jpg"
        },
        {
          "title": "Best Burgers Ever",
          "thumbnail": "https://i.pinimg.com/736x/81/32/27/81322759e5d3b9537c2648556a48faab.jpg"
        }
      ]
    },
    {
      "channelName": "GameVerse",
      "profilePhoto": "https://i.pravatar.cc/150?img=5",
      "videos": [
        {
          "title": "Top 10 Games of the Year",
          "thumbnail": "https://source.unsplash.com/400x225/?gaming"
        },
        {
          "title": "Minecraft Survival Tips",
          "thumbnail": "https://source.unsplash.com/400x225/?minecraft"
        },
        {
          "title": "Best FPS Games",
          "thumbnail": "https://source.unsplash.com/400x225/?fps-game"
        },
        {
          "title": "Gaming Setup Tour",
          "thumbnail": "https://source.unsplash.com/400x225/?gaming-setup"
        }
      ]
    },
    {
      "channelName": "FitLife",
      "profilePhoto": "https://i.pravatar.cc/150?img=6",
      "videos": [
        {
          "title": "10 Minute Home Workout",
          "thumbnail": "https://source.unsplash.com/400x225/?workout"
        },
        {
          "title": "Morning Yoga Routine",
          "thumbnail": "https://source.unsplash.com/400x225/?yoga"
        }
      ]
    },
    {
      "channelName": "MusicHub",
      "profilePhoto": "https://i.pravatar.cc/150?img=7",
      "videos": [
        {
          "title": "Relaxing Piano Music",
          "thumbnail": "https://source.unsplash.com/400x225/?piano"
        },
        {
          "title": "Top Pop Songs Playlist",
          "thumbnail": "https://source.unsplash.com/400x225/?music"
        },
        {
          "title": "Guitar Tutorial for Beginners",
          "thumbnail": "https://source.unsplash.com/400x225/?guitar"
        }
      ]
    },
    {
      "channelName": "StudySmart",
      "profilePhoto": "https://i.pravatar.cc/150?img=8",
      "videos": [
        {
          "title": "How to Study Effectively",
          "thumbnail": "https://source.unsplash.com/400x225/?study"
        },
        {
          "title": "Productivity Tips for Students",
          "thumbnail": "https://source.unsplash.com/400x225/?productivity"
        },
        {
          "title": "Time Management Guide",
          "thumbnail": "https://source.unsplash.com/400x225/?planning"
        }
      ]
    },
    {
      "channelName": "AutoDrive",
      "profilePhoto": "https://i.pravatar.cc/150?img=9",
      "videos": [
        {
          "title": "Supercars You Must See",
          "thumbnail": "https://source.unsplash.com/400x225/?supercar"
        },
        {
          "title": "Electric Cars Explained",
          "thumbnail": "https://source.unsplash.com/400x225/?electric-car"
        }
      ]
    },
    {
      "channelName": "NatureView",
      "profilePhoto": "https://i.pravatar.cc/150?img=10",
      "videos": [
        {
          "title": "Amazing Forest Documentary",
          "thumbnail": "https://source.unsplash.com/400x225/?forest"
        },
        {
          "title": "Ocean Life in 4K",
          "thumbnail": "https://source.unsplash.com/400x225/?ocean"
        },
        {
          "title": "Wild Animals Compilation",
          "thumbnail": "https://source.unsplash.com/400x225/?wildlife"
        }
      ]
    }
  ]

export const setLocalStorage = () => {
  localStorage.setItem("creators",JSON.stringify(creators));
}

export const getLocalStorage = () => {
  const creators = JSON.parse(localStorage.getItem("creators"))
  return {creators}
}