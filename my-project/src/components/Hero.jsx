import logo from "../assets/Leonardo_Creative_logo_summarizer_2_prev_ui.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <a href="" className="cursor-pointer">
          <img src={logo} alt="sumz_logo" className="w-16 object-contain" />
        </a>

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/mmnsrti/gpt-summarizer", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
