"use client";
import { NavBar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
const Page = () => {
  const [datas, setDatas] = useState(null);
  const path = usePathname();
  const data = async () => {
    const fetchData = await fetch("https://dev.to/api/articles" + path);
    const jsonData = await fetchData.json();
    setDatas(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    data();
  }, []);
  console.log(datas);
  if (datas === null) return "loading";
  return (
    <NavBar>
      <div className="description">
        <img className="image2" src={datas.cover_image} />
        <div className="user">
          <img className="upi" src={datas.user.profile_image} />
          <div>{datas.user.name}</div>
          <div className="date">{datas.readable_publish_date}</div>
        </div>

        {/* <div>{datas.id}</div> */}
        <div className="title2">{datas.title}</div>
        <div className="type">{datas.type_of}</div>

        <div className="about">{datas.description}</div>
      </div>
    </NavBar>
  );
};
export default Page;
