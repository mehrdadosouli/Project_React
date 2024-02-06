import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function AllCourses() {
  const [allcourses, setAllCourses] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:4000/v1/courses")
        .then((res) => setAllCourses(res.data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Navbar text="black" />
      <div className="flex flex-wrap xl:gap-10 md:gap-8 container py-10">
        {allcourses.map((item) => (
          <CourseBox {...item} key={item._id} />
        ))}
      </div>
      <Footer />
    </>
  );
}
