const getLatestNews = async () => {
  const response = await fetch(
    `https://api.rtvonline.com/api/story/view/latest?limit=5`,
    // https://api.rtvonline.com/api/category/view/50/stories?page=0&size=10
    // https://rtvonline.com/api/category/get-all?lang=bangla
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
