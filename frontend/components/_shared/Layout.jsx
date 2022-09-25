import { useRouter } from "next/router";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-between w-full h-screen">
        <div
          className={`${
            router.pathname === "/welcome" ? "hidden 2xl:block" : ""
          }`}
        >
          <NavBar />
        </div>
        <div className="w-full h-full overflow-auto scroll-smooth">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
