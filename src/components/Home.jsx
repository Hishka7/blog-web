"use client";
import { useRouter } from "next/navigation";
const Home = (props) => {
  const router = useRouter();
  const blog = props.blog;

  const onclck = () => {
    router.push(String(blog.id));
  };
  return (
    <div onClick={onclck} className="all">
      <img className="image" src={blog.cover_image} />
      {/* <div className="type">{blog.type_of}</div> */}
      <div className="title">{blog.title} </div>

      <div className="details">
        <img className="pfp" src={blog.user.profile_image} />
        <div className="name">{blog.user.name} </div>
        <div className="date">{blog.readable_publish_date}</div>
      </div>
    </div>
  );
};
export default Home;
