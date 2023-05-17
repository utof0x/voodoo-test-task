import { Header, Content, Footer } from "components";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* @ts-expect-error Server Component */}
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
