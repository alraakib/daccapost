import Link from "next/link";

export interface OpinionResponse {
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

const getOpinions = async () => {
  const response = await fetch(
    `https://api.rtvonline.com/api/category/view/13/stories?page=0&size=10`,
    { cache: "force-cache", next: { revalidate: 60 } },
    // https://api.rtvonline.com/api/category/view/50/stories?page=0&size=10
    // https://rtvonline.com/api/category/get-all?lang=bangla
  );
  const data = await response.json();
  return data;
};

const Opinions = async () => {
  const news: OpinionResponse = await getOpinions();

  return (
    <div className="p-5 bg-white shadow">
      <h3 className="text-lg font-bold">মতামত</h3>
      <div className="flex gap-0">
        <div className="w-2/12 h-0.5 mt-2 mb-4 bg-black" />
        <div className="w-10/12 h-0.5 mt-2 mb-4 bg-gray-300" />
      </div>
      <div className="grid divide-y">
        {news.model.map((item, index) => (
          <Link
            key={index}
            href={`/news/${item.id.toString()}`}
            className="flex gap-2 py-2 transition duration-300 hover:opacity-60"
          >
            <span className="text-[9px] mt-1">▶</span>
            {item.mainTitle}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Opinions;
