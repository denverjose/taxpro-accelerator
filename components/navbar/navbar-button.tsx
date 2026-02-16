import Link from "next/link";

const NavbarButton = () => {
  return (
    <Link
      className="block text-sm p-2 md:text-base rounded-full md:py-4 md:px-4 bg-primary text-dark font-semibold hover:scale-110 transition duration-300 mr-4 hover:bg-background-navbar-button-hover hover:text-primary"
      href="https://tax-pro-accelerator.teachable.com/"
      target="_blank"
      rel="noreferrer"
    >
      <span className="block md:hidden">Academy</span>
      <span className="hidden md:block">Training Academy</span>
    </Link>
  );
};

export default NavbarButton;
