import Logo from "/public/panaverse-logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/componets/shared/Wrapper";
const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white ">
      <Wrapper>
        <div className="flex justify-between py-2 items-center">
          {/* Panaverse Logo  */}
          <Link href="/">
            <Image src={Logo} alt="Panaverse Logo" />
          </Link>
          {/* Nav Bar */}
          <ul className="flex space-x-10 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Courses">Courses</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
