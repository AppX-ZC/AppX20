import React from "react";
import Day from "./Day";
import "./Summit.css";

const days = {
  day1: {
    dayName: "First Day",
    dayTitle: "Business",
    dayDescription:
      "Business can help you truly broaden your horizons and pursue your passions successfully. Besides, business will force you to look at things globally, especially in today’s international economy. This is great for those who want to work towards having a more global perspective and outlook. And of course, when you study business, you’ll also have plenty of opportunities to study abroad.",
    firstSession: {
      beforeSession:
        "Therefore, There will be a session and workshops about business sponsored by Shell Egypt, and given by;",
      instructorImage: "images/sessions/Moataz Darwish.jpg",
      instructorName: "Mr.Moataz Darwish",
      aboutInstructor:
        "(Vice Chairman, External & Government Relations Manager at Shell Egypt. He spent the last 14 years with Royal Dutch Shell. He was the Country Commercial Director, Executive Team Member and a Non-Executive Board Director for the NATGAS and Nubariya companies. He acted in the capacity of Commercial Manager for the UK Southern North Sea in NAM. He has more than 25 years of experience in commercial negotiations, strategy & business development and corporate affairs.) ",
      linkedIn: "https://www.linkedin.com/in/moataz-darwish-5325833/",
      moreInfo: "For more info about shell Egypt,",
      moreInfoLink: "https://www.shell.eg/en_eg/sustainability.html",
    },
    secondSession: {
      beforeSession: "There will be another session given by;",
      instructorImage: "images/sessions/Jana Elbaba.jpg",
      instructorName: "Jana El Baba",
      aboutInstructor:
        "(Programme Specialist for Social and Human Sciences at the United Nations Educational, Scientific and Cultural Organization (UNESCO) – Regional Office in Cairo. She is responsible for a number of regional and national programmes in the area of youth civic engagement and capacity-development, inter-cultural dialogue, prevention of violent extremism, inclusive urban development, gender empowerment, sport for sustainable development, bioethics and the ethics of science and technology in the Arab region.)",
      linkedIn: "https://www.linkedin.com/in/jana-el-baba-039694ab/",
    },
    moreInfo:
      "At the end of the day there will be a workshop about natural disasters.",
  },
  day2: {
    dayName: "Second Day",
    dayTitle: "Environment",
    dayDescription:
      "Our environment is a vital part of our everyday lives. It affects everything we do, from climates to animal survival, to air quality, and much more. So, Being aware of surroundings helps us take the right measures to protect it. In order to adapt to the environment living things constantly change to enhance survival in the various environments they get exposed to, everyone needs to come up with better ways of using his tools to ensure that the environment remains protected.",
    firstSession: {
      beforeSession:
        "Therefore, There will be a session about Environment sponsored by Greenish Egypt, and given by;",
      instructorImage: "images/sessions/Shady Khalil.jpg",
      instructorName: "Mr.Shady Khalil",
      aboutInstructor:
        " (Managing partner of Greenish Egypt. He was the project manager for a project that collectively compiled street performances with residences of 8 villages around Minya, Upper Egypt. He was project Coordinator, workshop facilitator, and storyteller at BuSSy that performs arts projects/movements that document and gives voice to censored untold stories about gender in different communities in Egypt.)",
      linkedIn: "https://www.linkedin.com/in/shadyakhalil/",
    },
    secondSession: {
      beforeSession: "There will be another session given by;",
      instructorImage: "images/sessions/Yasmeen Nagaty.jpg",
      instructorName: "Yasmine Nagaty",
      aboutInstructor:
        "(Acceleration Manager at AUC Venture Lab. She was a Senior Project Manager, and Project Management Officer at Mavericks international school. She was a Training Innovation Associate, and Training Coordinator at Education for Employment Egypt | EFE Egypt)",
      linkedIn: "https://www.linkedin.com/in/yasmine-nagaty-7a566684/",
      moreInfo: "For more info about AUC Venture Lab,",
      moreInfoLink: "https://business.aucegypt.edu/centers/vlab",
    },
    moreInfo:
      "At the end of the day, there will also be a workshop about business.",
  },
  day3: {
    dayName: "Third Day",
    dayTitle: "Technology",
    dayDescription:
      "Society has been dramatically changed with the evolution of technology. Before the advent of modern day technology, life was burdensome and everyday tasks consumed too much of our time. Tremendous opportunities are being provided by technologies which play an important role in human life. The access to education, medicine, industry, transportation has been simplified due to modern day technology. Due to the convenience and efficiency provided by technology, our lives have improved significantly.",
    firstSession: {
      beforeSession:
        "Therefore, There will be a session about technology given by;",
      instructorImage: "images/sessions/Elsayed Hemayed.jpg",
      instructorName: "Dr.Elsayed Hemayed",
      aboutInstructor:
        "(Professor and Director, Communication and Information Engineering, University of Science and Technology, Zewail City. He has more than 25 years’ experience of research and teaching in the area of computer science and engineering with focus in Computer Vision, Machine Learning, Data Analytics, Software and Data Engineering).",
      linkedIn: "https://www.linkedin.com/in/elsayed-hemayed-27813a7/",
    },

    moreInfo:
      "At the end of the day, There will be also workshops about IOT, Unity, Cyber Security, machine learning, and data science ",
  },
};

function Summit() {
  return (
    <div className="summit">
      <h3 className="summit__header" data-aos="fade-in">
        The Summit
      </h3>
      <p className="summit__description" data-aos="fade-in">
        It will be from 10th to 12th October. It will include intensive
        workshops in the fields of Environment, business, and technology,
        including a Crash Course, an Exhibition, Technology and Industry, and
        lectures given by university professors and experts in various fields,
        in addition to small competitions in the form of Trivia contests in
        various engineering, technology, and scientific fields.
      </p>
      <Day day={days.day1} />
      <Day day={days.day2} />
      <Day day={days.day3} />
    </div>
  );
}

export default Summit;
