import Logo from "/public/panaverse-logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/componets/shared/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between  bg-white sticky top-0 py-2 items-center">
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
      </header>
    </Wrapper>
  );
};

export default Header;
