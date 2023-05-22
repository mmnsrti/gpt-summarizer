import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useLazyGetSummaryQuery } from "../services/article";
import { AiFillCopy,AiOutlineCopy } from "react-icons/ai";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [copied, setCopied] = useState("");
  const [allarticles, setAllarticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      const updatedAllArticles = [newArticle, ...allarticles];
      setAllarticles(updatedAllArticles);
      localStorage.setItem("article", JSON.stringify(updatedAllArticles));
    }
  };
  useEffect(() => {
    const articleFromLocalStorage = JSON.parse(localStorage.getItem("article"));
    if (articleFromLocalStorage) {
      setArticle(articleFromLocalStorage);
    }
  }, []);
  const handleCopy = (cp) => {
    setCopied(cp);
    navigator.clipboard.writeText(cp);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img src={linkIcon} className="absolute left-0 my-2 ml-3 w-5" />
          <input
            type="url"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            placeholder="Enter URL"
            required
            className="url_input peerd"
          />
          <button
            className="submit_btn cursor-pointer peer-focus:border-gray-700  peer-focus:text-gray-700"
            type="submit"
          >
            <TiLocationArrowOutline />
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allarticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
              {copied===item.url ?<AiFillCopy /> : <AiOutlineCopy/>}
                
              </div>
              <p className="flex-1 font-satoshi text-blue-900 text-sm font-medium truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
