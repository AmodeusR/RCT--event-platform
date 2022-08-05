import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <header className="flex py-5 justify-center bg-gray-700 border-b border-gray-600">
        <Logo />
      </header>
    </>
  );
};

export default Header;
