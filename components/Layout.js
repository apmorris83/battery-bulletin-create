import Head from 'next/head';
import Header from './Header';
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const router = useRouter();
  const renderTitle = () => {
    const pathname = router.pathname.substring(1);
    const page = !pathname ? 'Home' : `${pathname[0].toUpperCase()}${pathname.substring(1).toLowerCase()}`;
    return `Zeta Electrical - ${page}`;
  }
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <title>{renderTitle()}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {children}
    </>
  );
};

export default Layout;
