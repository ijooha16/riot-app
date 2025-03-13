import Link from "next/link";

const Header = () => {
  return (
    <div className="z-50 bg-black fixed top-0 w-screen h-[120px] flex justify-center items-center gap-6">
      <Link href="/champions">Champions</Link>
      <Link href="/items">Items</Link>
      <Link href="/rotation">Rotation</Link>
    </div>
  );
};

export default Header;
