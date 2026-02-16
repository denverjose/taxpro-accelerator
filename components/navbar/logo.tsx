import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-3 px-2">
      <Link href="/">
        <Image
          className="hover:scale-110 hover:opacity-85 transition duration-300 h-auto w-auto  rounded-lg"
          src="/images/taxpro-logo.webp"
          width={100}
          height={100}
          alt="jappy logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
