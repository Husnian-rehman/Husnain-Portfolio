import { useState } from "react";
import Cardimage from "../7hop.png";
import Chat from "../42chat.png";
import Mindandmetrics from "../min$metrics.png";
import Tangibleimage from "../tangiblewords.png";
import Natureimage from "../naturekast.png";
import Skillsimage from "../skills2evolve.png";
import Trendimage from "../Trend.png";

const data = [
  {
    id: 1,
    category: ["Shopify", "UI/UX Design"],
    title: "7osPlus",
    videos: "10 Videos",
    level: "Intermediate",
    description: "",
    image: Cardimage,
    link: "https://7ohplus.com/",
  },
    {
    id: 2,
    category: ["UI/UX Design", "HUbspot"],
    title: "42Chat",
    videos: "5 Videos",
    level: "Advanced",
    description: "",
    image: Chat,
    link: "https://www.42chat.com/",
  },
    {
    id: 2,
    category: ["UI/UX Design", "HUbspot"],
    title: "Mindandmetrics",
    videos: "5 Videos",
    level: "Advanced",
    description: "",
    image: Mindandmetrics,
    link: "https://www.mindandmetrics.com/",
  },
    {
    id: 2,
    category: ["UI/UX Design", "HUbspot"],
    title: "Tangiblewords",
    videos: "5 Videos",
    level: "Advanced",
    description: "",
    image: Tangibleimage ,
    link: "https://tangiblewords.com/",
  },
    {
    id: 2,
    category: ["UI/UX Design", "HUbspot"],
    title: "Naturekast",
    videos: "5 Videos",
    level: "Advanced",
    description: "",
    image: Natureimage,
    link: "https://www.naturekast.com/",
  },
    {
    id: 2,
    category: ["UI/UX Design", "React & Tailwind"],
    title: "Skills2Evolve",
    videos: "5 Videos",
    level: "Advanced",
    description: "",
    image: Skillsimage ,
    link: "https://skills2evolve.netlify.app/",
  },
    {
    id: 2,
    category: ["UI/UX Design", "React & Tailwind"],
    title: "Trend",
    videos: "5 Videos",
    level: "Advanced",
    description: "",
    image: Trendimage,
    link: "https://trendsmarket.netlify.app/",
  },
  // Add more projects with their own unique `link`
];

export default function Courcestabs() {
  const [activeTab, setActiveTab] = useState("UI/UX Design");

 const filteredData = data.filter((item) => item.category.includes(activeTab));

  return (
    <div className="px-5 max-w-[1400px] m-auto md:pb-[70px] md:pt-[50px] py-10">
      <h2 className="block text-center md:mb-10 mb-5 md:text-[40px] text-[20px] font-bold  text-white">Our Projects</h2>
      <div className="flex gap-6 justify-center mb-[30px] pb-[15px] flex-wrap ">
        {['UI/UX Design', 'Shopify', 'HUbspot', 'React & Tailwind'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-[27px] py-[8px] border rounded-[6px] font-medium transition hover:bg-default hover:text-white ease-in-out duration-500 ${
              activeTab === category ? 'bg-default text-white border ' : 'bg-bgblack border text-txtblack border-txtblack'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <div key={index} className="bg-bgblack hover:bg-default  overflow-hidden group transition-all ease-in-out duration-700 rounded-lg border border-[#E3E3E3]">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="h-96 overflow-hidden flex">
              <img
                src={item.image}
                alt="thumbnail"
                className="w-full h-full object-cover object-top  transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <div className="px-4 pb-[17px] pt-[7px] flex justify-between">
              <h3 className="font-semibold text-[18px] leading-[26px] text-txtblack group-hover:text-white transition-all ease-in-out duration-700">
                {item.title}
              </h3>
              <p className="mb-5 text-[14px] font-normal leading-[20px] text-[#707070] line-clamp-3 group-hover:text-white transition-all ease-in-out duration-700">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
