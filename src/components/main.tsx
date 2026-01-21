import type { NewsResponse } from "@/components/latest";
import Image from "next/image";

const getNews = async () => {
  const response = await fetch(
    `https://api.rtvonline.com/api/story/view/latest?page=0&size=5`,
    { cache: "force-cache", next: { revalidate: 60 } },
  );
  const data = await response.json();
  return data;
};

const Main = async () => {
  const news: NewsResponse = await getNews();
  return (
    <div className="w-full bg-white">
      <div className="relative overflow-hidden aspect-video">
        <Image
          className="object-cover transition duration-300"
          src={news.model[0].fileName}
          alt={news.model[0].alt}
          loading="lazy"
          fill
        />
      </div>
      <div className="relative mx-5 -top-20">
        <div className="flex flex-col gap-3 px-8 py-5 bg-white">
          <h2 className="text-3xl font-bold">{news.model[0].mainTitle}</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
              </svg>
              <p className="text-sm text-gray-500">
                {news.model[0].banglaDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
