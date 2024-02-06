import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Article from "../../Components/Article/Article";

export default function AllArticles() {
    const [allarticles, setAllarticles] = useState([]);
    useEffect(() => {
        try {
          axios
            .get("http://localhost:4000/v1/articles")
            .then((res) => setAllarticles(res.data));
        } catch (error) {
          console.log(error);
        }
      }, []);
  return (
    <>
      <Navbar text="black" />
      <div className="flex flex-wrap container gap-5 py-10">
        {allarticles.map((item) => <div className="rounded-2xl shadow-lg p-10 lg:w-[31%] md:w-[48%] w-[100%]"><Article data={item} />
        </div>)}
      </div>
      <Footer />
    </>
  )
}
