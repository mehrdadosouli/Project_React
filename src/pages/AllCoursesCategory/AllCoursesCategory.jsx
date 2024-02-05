import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getToken } from "../../utils/funcs";

export default function AllCoursesCategory() {
  const [category, setCategory] = useState([]);
  const { allcourses } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/v1/courses/category/${allcourses}`, {
      headers: { Authorization: `Bearer ${getToken("user")}` },
    })
      .then((res) =>
        console.log(res)
      )
      .catch((error) => console.log(error));
  }, [allcourses]);

  return (<>
  <h1>category</h1>
  </>);
}
