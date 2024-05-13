import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max md:hidden" />
        <span className="orange_gradient">AI-powered  Prompts</span>
      </h1>
      <p className="desc text-center ">
        Create and share AI prompts to inspire your next project or to help
        others get started.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
