import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center gap-6">
      <Link href="/champions">Champions</Link>
      <Link href="/items">Items</Link>
      <Link href="/rotation">Rotation</Link>
    </div>
  );
};

export default Header;
