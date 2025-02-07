"use client";
import { useRouter } from "next/navigation";

export const NavBar = ({ children }) => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <div>
      <div className="icon">
        <div className="home" onClick={goHome}>
          <img
            className="pic"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          />
          HOME
        </div>
        {/* <div className="createPost">
          <img
            className="pic"
            src="https://static.thenounproject.com/png/214735-200.png"
          />
          CREATE POST
        </div> */}
      </div>
      {children}
    </div>
  );
};
