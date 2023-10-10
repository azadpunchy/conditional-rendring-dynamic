import ComponentDownload from "@/components/ComponentDownload";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <nav className="">
        <div className="flex justify-around align-center fixed w-full h-7 top-0">
          <div className="logo">
            <Image src="/aa.svg" width={32} height={32} />
          </div>
          <div className="search-bar flex justify-center align-center gap-1">
            <div>icon</div>
            <div className="">
              <input type="text" />
            </div>
          </div>
          <div className="links flex justify-center align-center">
            <ul className="list-none flex justify-center align-center gap-1">
              <li>
                <a className="text-white decoration-none" href="#home">
                  home
                </a>
              </li>
              <li>
                <a className="text-white decoration-none" href="#about">
                  about
                </a>
              </li>
              <li>
                <a className="text-white decoration-none" href="#services">
                  services
                </a>
              </li>
              <li>
                <a className="text-white decoration-none" href="#contact">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ComponentDownload />
    </div>
  );
};

export default index;
