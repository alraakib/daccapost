const getLatestNews = async () => {
  const response = await fetch(
    `https://corsproxy.io/?url=${process.env.NEWS_URL}0/20`,
  );
  const data = await response.json();
  return data;
};

const LatestNews = async () => {
  const news = await getLatestNews();
  console.log(news);
  return <div>LatestNews</div>;
};

export default LatestNews;
