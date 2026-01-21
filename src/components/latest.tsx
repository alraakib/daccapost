import Image from "next/image";
import Link from "next/link";

export interface NewsResponse {
  model: Model[];
  totalPages: number;
  currentPage: number;
  totalElements: number;
}

export interface Model {
  id: number;
  mainTitle: string;
  subTitle: string;
  fileName: string;
  alt: string;
  caption: string;
  authorAlias: string;
  datePublished: string;
  passedTime: string;
  banglaDate: string;
  canonicalUrl: string;
  ampUrl: string;
  isLive: boolean;
  isVideo: boolean;
}

const getLatestNews = async () => {
  const response = await fetch(
    `https://api.rtvonline.com/api/story/view/latest?page=1&size=5`,
    { cache: "force-cache", next: { revalidate: 60 } },
    // https://api.rtvonline.com/api/category/view/50/stories?page=0&size=10
    // https://rtvonline.com/api/category/get-all?lang=bangla
  );
  const data = await response.json();
  return data;
};

const LatestNews = async () => {
  const news: NewsResponse = await getLatestNews();

  return (
    <div className="p-5 bg-white shadow">
      <h3 className="text-lg font-bold">সর্বশেষ</h3>
      <div className="flex gap-0">
        <div className="w-2/12 h-0.5 mt-2 mb-4 bg-black" />
        <div className="w-10/12 h-0.5 mt-2 mb-4 bg-gray-300" />
      </div>
      <div className="grid gap-5">
        {news.model.map((item: Model) => (
          <Link
            key={item.id}
            href={`/news/${item.id.toString()}`}
            className="flex flex-col gap-3 group xl:flex-row"
          >
            <div className="relative w-full overflow-hidden bg-gray-100 xl:w-1/3 aspect-video">
              <Image
                src={item.fileName}
                alt={item.alt || item.mainTitle}
                fill
                className="object-cover transition duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            <h4 className="font-bold leading-tight xl:w-2/3 group-hover:text-gray-600">
              {item.mainTitle}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
