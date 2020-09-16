import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import "./Challenges.css";

function Challenges() {
  let data = [
    {
      image: "images/bg-image.png",
      title: "Environment",
      description:
        "The aim of this category is to have a cleaner and sustainable environment. The category targets various aspects of the environment wither how to improve it or how to fix the flaws caused by the human race.",
      challenges: [
        {
          image: "images/bg-image.png",
          title: "More blue",
          description:
            "The oceans have become the giant waste dumps for plastic,  By 2050, there will be more plastic than fish in the oceans. What's more, there are other serious environmental problems related to the oceans, such as damage to ecosystems due to overfishing, global warming, dumping of pollutants, wastewater, and fuel spills. The UN calls for improved management of protected areas, giving them sufficient resources, and reducing overfishing, pollution, and acidification of the ocean caused by the increase in the earth's temperature.",
        },
        {
          image: "images/bg-image.png",
          title: "Against the Wall-E planet!",
          description:
            "With the fast peak of human's advancement, the human couldn't keep up with the best suitable solutions for his living requirements. Therefore, he has taken by-destructive strategies to provide their needs. Air, water, and soil pollution are three main of these strategies' byproducts. The World Health Organization (WHO) estimates that 90% of humanity breathes polluted air. Contaminated water causes major health problems and five million deaths a year according to Oxfam Intermón.   The United Nations organization expects the world population to exceed 8.5 billion by 2030, forcing us to considerably reduce the amount of waste we generate through prevention, reduction, reuse, and recycling as part of the circular economy, with the aim of minimizing the impact on health and on the environment.",
        },
        {
          image: "images/bg-image.png",
          title: "Clean streets",
          description:
            "For a healthy environment and a smart city, there should not be any pollution as it should come with the least outcome possible. Garbage pollutes air and water and it makes streets dirty with un-acceptable smells and sights. For environmental aspects, problems are related to each other from garbage to water to air to other sources. The best way to solve it is to find the origin and deal with it rather than to deal with other types to make sure it will not return again.",
        },
      ],
    },
    {
      image: "images/bg-image.png",
      title: "Smart cities",
      description:
        "The aim of this category is to build smarter and sustainable cities. This will be fulfilled through developing the subsystems inside it. Building smarter systems by coupling information and communication technology with numerous physical devices connected to the IoT network, we can develop new solutions for current challenges we encounter as individuals or optimizing the city operations to address the urbanization problems. And since information will be the new currency, then information security will be more important than it is now. You may develop a software solution or may develop a simulation (hint: you can use game engines such as Unity for simulation or software solutions).",
      challenges: [
        {
          image: "images/bg-image.png",
          title: "Educating & Engaging the Community",
          description:
            "For a Smart City to truly exist and thrive, it needs “smart” citizens who are engaged and actively taking advantage of new technologies. With any new city-wide tech project, part of the implementation process must involve educating the community on its benefits. This can be done through making a game that aims to increase the engagement of the community, as well as an online education platform that keeps citizens engaged and up-to-date.When a community feels like it’s playing a part in the overall decisions that affect daily life, and is being communicated to in a clear and thoughtful manner, it’s more apt to use the technology and encourage others to use it as well. This is key to a Smart City’s success.",
        },
        {
          image: "images/bg-image.png",
          title: "I am stuck!",
          description:
            "People usually wake up in the morning going to their workplaces using their cars, while others try to get the kids to school using the metro. And there’s a 60-year-old grandpa taking a taxi just to go to a nearby street to sit with his old friend from the high school. Egypt is an overpopulated country that suffers from traffic jams daily due to its roads and population. So people may waste a lot of time trying to reach their needed places. But in smart cities, it would be different!",
        },
        {
          image: "images/bg-image.png",
          title: "Save my water!",
          description:
            "There are a lot of challenges that come up all over the world every day. The most important one is the huge problem of water. According to the world health organization, 2.1 billion people lack clean water. In Egypt we face a lot of problems; lack of water in many areas, misuse of water, ineffective irrigation techniques, and water pollution issues that render water unusable. The challenge is to develop a technology that provides a solution for one of the problems stated above to reach the best use of water techniques. The Nile is the backbone of Egypt. each drop of it really matters.",
        },
        {
          image: "images/bg-image.png",
          title: "The Cyber Knight Rises",
          description:
            "Day after day, a drastic and agile progression in the process of founding the Smart City dream. Recent technological developments in many fields as AI, IoT, and communication technologies (5G and Wi-Fi 6) made the road ready. But the fast progression in those aspects made new valuable assets appear in the security field, and even such small assets became great attack vectors and high-risk threats. However, security development is also rapidly progressing, but the sustainability of this development is what should be considered as a challenge.",
        },
        {
          image: "images/bg-image.png",
          title: "Security and privacy",
          description:
            "Security and privacy concerns are highly demanded in all modern devices from toasters and refrigerators to TVs and cars especially the automated connected ones in a smart city. The revolution of IoT connected smart devices magnifies the risk of leaving privacy and security vulnerabilities open to hackers. Come up with a secure access mechanism to reduce this risk significantly and provide more secure systems.",
        },
        {
          image: "images/bg-image.png",
          title: "Connected Devices",
          description:
            "According to Gartner, Inc., by 2020 there will be nearly 20.8 billion devices on the IoT. IoT devices will be used in nearly every field. Develop a complete automated system that connects multiple devices together in a way that establishes, secures and manages the communication and data transfer between the devices in order to get some benefits from one device to the others to facilitate the human interaction with these devices, another approach is to find reliable IoT data standards and ways of connection and recognition between different platforms to provide sustainability between them in a scale of an infrastructural grid of a smart city.",
        },
        {
          image: "images/bg-image.png",
          title: "IoT Power Consumption and Management",
          description:
            "Power management is one of the most active topics in different science and engineering disciplines as power is almost the most precious resource especially in any technology. To make any IoT system it should be portable so it is supposed that it will work on battery. Hence, create a technique to make a powerful system that consumes low power.",
        },
      ],
    },
    {
      image: "images/bg-image.png",
      title: "Natural disasters",
      description:
        "In a time of a disaster, poor infrastructure leads to the death of thousands of people and the destruction of most of the utilities. Sustainable infrastructure and applications that help in saving people’s lives in such times are our aims from this category.",
      challenges: [
        {
          image: "images/bg-image.png",
          title: "Run, Before the Storm !!  (The silence before the hurricane)",
          description:
            "Natural disasters cause death to a large number of people. Globally, over the past decade, natural disasters accounted for an average of 0.1% of total deaths which refer to an average 60,000 people per year. Saving people’s lives is the first priority in such an event. The challenge is to design creative solutions that help save more people in an event of natural disasters such as earthquakes, tsunami, … etc.",
        },
        {
          image: "images/bg-image.png",
          title: "Catch the Fire !!",
          description:
            "Forest fire is a natural hazard that can lead to large destruction of natural areas and livelihoods. It has a negative effect on the weather, human activity…etc. Design a simulation or software application that analyzes the last forest fires dates, places, and weather conditions around the world and predicts the next forest fires.",
        },
      ],
    },
    {
      image: "images/bg-image.png",
      title: "Renewable energy",
      description:
        "The aim of this category is to have a cleaner, sustainable, and more energy. Part of this will be achieved through enhancing our energy utilization methods and another part will be dedicated to thoroughly understand the energy flow and how to harvest more renewable energy.",
      challenges: [
        {
          image: "images/bg-image.png",
          title: "Battery Low!!",
          description:
            "Today is a sunny day. You decide to travel to another city that you have never been to before to visit a friend. You are using your mobile's GPS to reach your destination. Your mobile battery is going low. Suddenly, your mobile runs out of battery, your power bank is empty, and you are all alone. This is an issue that often happens to many of us; Your mobile's battery dies when you need it the most! Very annoying, isn’t it?",
        },
        {
          image: "images/bg-image.png",
          title: "Utilize our strengths!",
          description:
            "Egypt's location is crucial as it connects the red sea with the Mediterranean sea, along with the fact that it has got a very wide range of unused space and multiple other unnoticed specs. Use any of those specs to your advantage and design a tailored renewable solution that would make the best use of either Egypt's location, climatology, or even topology. You do not have to reinvent the wheel, you can just reutilize profound solutions and accommodate them to our environment, or you can merge two or more ideas together. It's totally up to you how you'll do it, one rule, be creative!",
        },
        {
          image: "images/bg-image.png",
          title: "Play and light it up! / Power up your mind!",
          description:
            "This challenge arrives to take a spotlight in the row of cool challenges. In the games world, we have a lot of games giving a full experience about many jobs and workflows. You can get through a whole work experience of being a doctor, teacher, architect, engineer and even a plumber. So now it is the renewable engineer time, and it is your role to introduce this experience to the world.",
        },
        {
          image: "images/bg-image.png",
          title: "Don’t let the Battery Die !",
          description:
            "We come across batteries on a daily basis but hardly realize their importance. These sources of energy power up most of the things we use everyday like our alarm clocks, mobile phones, and laptops . Therefore keeping the battery work for a long time without recharging or replacing is a very high demand. Your role is to Utilize renewable energy efficiently through a simulation, application, or hardware to increase the lifespan of our batteries or by powering up our devices for longer periods.",
        },
      ],
    },
  ];

  const [showChallenges, setShowChallenges] = useState(data);
  const [nestedData, setNestedData] = useState(false);

  return (
    <div className="challenges">
      <h3 data-aos="fade" className="challenges__header">
        Challenges
      </h3>
      <div data-aos="fade" className="challenges__divider">
        <div className="challenges__divider--thick"></div>
        <div className="challenges__divider--thin"></div>
      </div>
      <div data-aos="fade" className="challenges__description">
        <p>
          a competition between creative thinkers to come up and build ideas
          that help our environment thrive and evolve to be cleaner and greener.
          The Theme aims to clarify and encourage students to study the factors
          of sustainability and develop applications to achieve it: sustainable
          environment, sustainable cities, sustainable energy, and finally,
          sustainable infrastructure in a time of a disaster.
        </p>
      </div>

      <div className="challegens__cards">
        {showChallenges.map((e) => (
          <ChallengeCard
            image={e.image}
            title={e.title}
            description={e.description}
            key={e.title}
            onClick={() => {
              if (!nestedData) {
                setShowChallenges(e.challenges);
                setNestedData(true);
              }
            }}
          />
        ))}
      </div>
      {nestedData && (
        <Button
          color="primary"
          style={{ backgroundColor: "white", margin: "20px" }}
          onClick={() => {
            setShowChallenges(data);
            setNestedData(false);
          }}
        >
          Back
        </Button>
      )}
    </div>
  );
}

export default Challenges;
