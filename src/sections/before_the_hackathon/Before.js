import React from "react";
import "./Before.css";
import InstructorCard from "./InstructorCard";

function Before() {
  return (
    <div className="before">
      <h2 className="before__header" data-aos="fade-down">
        Before the hackathon
      </h2>
      <p className="before__description" data-aos="fade-in">
        IEEE Zewail City provided the participants with online workshops in the
        fields of IOT, Cyber Security, and unity on the days from 20 to 22
        September. The workshops are given by professional instructors with some
        assistants to help the participants understand the whole concepts of
        technology to be able to use them to face real-life problems.
      </p>
      <div className="before__instructors" data-aos="fade-up">
        <InstructorCard
          imageUrl="images/instructors/Nader ElSayed.png"
          instructorName="Mr.Nader Elsayed"
          aboutInstructor="Communication and information Engineering student in zewail city of Science of technology. He trained the assistants to be highly qualified to help the participants during the online workshops."
        />
        <InstructorCard
          imageUrl="images/instructors/Ahmed Sami.jpg"
          instructorName="Mr.Ahmed Sami"
          aboutInstructor="(Communication and information Engineering student in UST in Zewail City) & Mr. Ezat Eldohimi (Aerospace Engineering student  in UST in Zewail City)  : They gave a workshop in the field of Unity (Game Engine) to help the participants develop their own professional development goals related to  programming and  software design."
        />
        <InstructorCard
          imageUrl="images/instructors/Ezzat Eldohimi.jpg"
          instructorName=" Mr. Ezat Eldohimi"
          aboutInstructor="(Aerospace Engineering student  in UST in Zewail City) & Mr.Ahmed Sami (Communication and information Engineering student in UST in Zewail City) : They gave a workshop in the field of Unity (Game Engine) to help the participants develop their own professional development goals related to  programming and  software design."
        />
        <InstructorCard
          imageUrl="images/instructors/Eslam Hefny.jpg"
          instructorName="Mr.Eslam Hefny"
          aboutInstructor="(A graduate from faculty of computer science and information systems, Ain Shams University) : He gave a workshop in the field of IOT (Internet Of Things) as it becomes the talk of the town. In the near future, it is soon going to grab a strong foothold for all of us and our lives will totally be transformed. Therefore, it gives the participants the chance to grow and develop."
        />
        <InstructorCard
          imageUrl="images/instructors/Ahmed AbdElAzeem.jpg"
          instructorName="Mr.Ahmed AbdelAzeem"
          aboutInstructor="(Graduate from faculty of science Assiut University, and Information Security Engineer with a solid knowledge in the field of Cyber Security ) : He gave a workshop in Cyber Security to help the participants catch up with the latest technology in the current digital age."
        />
      </div>
    </div>
  );
}

export default Before;
