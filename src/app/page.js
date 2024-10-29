"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Home from "@/components/Home";
import { NavBar } from "@/components/Navbar";
const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const fetchData = async () => {
    const jsonData = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${pageNumber}`
    );
    const data = await jsonData.json();
    setBlogs(data);
    setFilteredBlogs(data);
  };
  const router = useRouter();
  // router.push.`https://dev.to/api/articles?${blog.id}`

  // const onclck = (blog) => {
  //   router.push(blog);
  // };
  const filterBlogsByTitle = () => {
    const filtered = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredBlogs(filtered);
  };
  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  const minus = () => {
    setPageNumber(pageNumber - 1);
  };
  const add = () => {
    setPageNumber(pageNumber + 1);
  };
  const home = () => {};
  return (
    <NavBar>
      <div className="all2">
        <div className="idk">
          <h1 className="header">All Blog post</h1>
          <div className="searchAndButton">
            <input
              className="searchInput"
              placeholder="Search..."
              onChange={(e) => {
                if (e.target.value === "") {
                  setFilteredBlogs(blogs);
                }
                setSearchInput(e.target.value);
                filterBlogsByTitle();
              }}
            />
          </div>
        </div>

        <div className="all3">
          {filteredBlogs.map((blog, index) => {
            return <Home key={index} blog={blog} />;
          })}
        </div>
        <div className="buttons">
          {pageNumber !== 1 && (
            <button className="button" onClick={() => minus()}>
              {"<"}
            </button>
          )}
          <div className="page">{pageNumber}</div>
          <button className="button" onClick={() => add()}>
            {">"}
          </button>
        </div>
      </div>
    </NavBar>
  );
};
export default Page;
