import React from "react";

export default function Intro() {
  return (
    <div className="intro mt-[300px] sm:mt-[200px] 2xl:mt-0  px-4 md:!px-[60px] ">
      <h2 className="mb-6 mt-6 md:mt-1 font-bold text-center text-[24px] sm:text-[48px]">
        <span className="text-white ">Generate the </span>
        <span className="text-tourquise ml-4 font-bold">Hottest Memes</span>
      </h2>
      <p className="text-center my-6 text-white text-[14px] md:text-[20px]  font-inder ">
        The AiDoge platform provides an AI-driven meme generation experience for
        users, adapting to the ever-changing crypto world. It employs advanced
        AI technology for creating relevant memes based on user-provided text
        prompts. Key aspects include the AI-powered meme generator, text-based
        prompts, and $AI tokens for purchasing credits.
      </p>
      <p className="text-center my-6 text-white text-[14px] md:text-[20px]  font-inder ">
        AiDoge's generator uses cutting-edge AI algorithms to create
        contextually relevant memes, trained on extensive meme datasets and
        crypto news. This ensures high-quality, up-to-date memes.
      </p>
    </div>
  );
}
