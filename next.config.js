/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  // i18n: {
  //   locales: [
  //     "ara",
  //     "chi",
  //     "cz",
  //     "en",
  //     "es",
  //     "ta",
  //     "fr",
  //     "ge",
  //     "gr",
  //     "he",
  //     "hi",
  //     "in",
  //     "it",
  //     "ja",
  //     "ko",
  //     "fa",
  //     "pol",
  //     "por",
  //     "ro",
  //     "ru",
  //     "sp",
  //     "tur",
  //     "ur",
  //     "vi",
  //   ],
  //   defaultLocale: "en",
  //   localeDetection: true,
  // },
  images: {
    domains: [
      "buy1.bigeyes.space",
      "claim.bigeyes.space",
      "zoon-games.s3.us-west-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
