import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="flex w-full flex-col items-center border-6 border-red-600  ">
      <div className="">
        <h1 className=" text-center head_text ">Discover & Share
        <br className="max-sm:hidden"/>
        <span className="orange_gradient">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>

      </div>
      <Feed />
    </section>
  )
}

export default Home;