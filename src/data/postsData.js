import post1 from "../assets/posts/post1.jpg";
import post2 from "../assets/posts/post2.jpg";
import post3 from "../assets/posts/post3.jpg";
import post4 from "../assets/posts/post4.jpg";
import post5 from "../assets/posts/post5.jpg";
import avatar1 from "../assets/posts/avatar1.jpg";
import avatar2 from "../assets/posts/avatar2.jpg";
import avatar3 from "../assets/posts/avatar3.jpg";
import avatar4 from "../assets/posts/avatar4.jpg";
import avatar5 from "../assets/posts/avatar5.jpg";
import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { BadgeCheck } from "lucide-react";

const postsData = [
  {
    id: 1,
    avatar: avatar1,
    username: "max_ovcharenko",
    post: post1,
    caption: "Winter forest at sunset",
    icons: [ Heart, MessageCircle ],
    VerifIcon: BadgeCheck,
  },

  {
    id: 2,
    avatar: avatar5,
    username: "max_ovcharenko",
    post: post2,
    caption: "Tall trees and calm surroundings",
    icons: [ Heart, MessageCircle ],
    VerifIcon: BadgeCheck,
  },

  {
    id: 3,
    avatar: avatar2,
    username: "max_ovcharenko",
    post: post3,
    caption: "A classic view of the city",
    icons: [ Heart, MessageCircle ],
    VerifIcon: BadgeCheck,
  },

  {
    id: 4,
    avatar: avatar3,
    username: "max_ovcharenko",
    post: post4,
    caption: "City streets in motion",
    icons: [ Heart, MessageCircle ],
    VerifIcon: BadgeCheck,
  },

  {
    id: 5,
    avatar: avatar4,
    username: "max_ovcharenko",
    post: post5,
    caption: "Parked and ready to ride",
    icons: [ Heart, MessageCircle ],
    VerifIcon: BadgeCheck,
  },
];

export default postsData;