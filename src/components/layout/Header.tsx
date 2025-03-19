import Link from "next/link";

const Header = () => {
  return (
    <div className="z-50 bg-black fixed top-0 w-screen h-[120px] flex justify-center items-center gap-12">
      <Link className="font-bold" href="/">Home</Link>
      <Link className="font-bold" href="/champions">Champions</Link>
      <Link className="font-bold" href="/items">Items</Link>
      <Link className="font-bold" href="/rotation">Rotation</Link>
    </div>
  );
};

export default Header;
