import Link from 'next/link'

const Header = () => {
  return (
    <>
    <Link href="/">
      <a href="/">Home</a>
    </Link>
    <Link href="/about">
      <a href="/about">About</a>
    </Link>
    </>
  );
};

export default Header;