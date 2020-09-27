import React from "react";
import Day from "./Day";
import "./Summit.css";

const days = {
  day1: {
    dayName: "FirstDay",
    dayTitle: "Business",
    dayDescription:
      "Business can help you truly broaden your horizons and pursue your passions successfully. Besides, business will force you to look at things globally, especially in today’s international economy. This is great for those who want to work towards having a more global perspective and outlook. And of course, when you study business, you’ll also have plenty of opportunities to study abroad.",
    firstSession: {
      beforeSession:
        "Therefore, There will be a session and workshops about business sponsored by Shell Egypt, and given by;",
      instructorImage: "images/sessions/Moataz Darwish.jpg",
      instructorName: "Mr.Moataz Darwish",
      aboutInstructor:
        "Communication and information Engineering student in zewail city of Science of technology. He trained the assistants to be highly qualified to help the participants during the online workshops.",
      linkedIn: "https://www.linkedin.com/in/moataz-darwish-5325833/",
      moreInfo: "For more info about shell Egypt,",
      moreInfoLink: "https://www.shell.eg/en_eg/sustainability.html",
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
  day2: {},
  day3: {},
};

function Summit() {
  return (
    <div className="summit">
      <h3 className="summit__header">The Summit</h3>
      <p className="summit__description">
        It will be from 10th to 12th October. It will include intensive
        workshops in the fields of Environment, business, and technology,
        including a Crash Course, an Exhibition, Technology and Industry, and
        lectures given by university professors and experts in various fields,
        in addition to small competitions in the form of Trivia contests in
        various engineering, technology, and scientific fields.
      </p>
      <Day day={days.day1} />
      <Day day={days.day1} />
      <Day day={days.day1} />
    </div>
  );
}

export default Summit;
