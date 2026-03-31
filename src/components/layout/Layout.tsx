import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-brand-navy-dark">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
