import Header from "@/components/header";
import LatestNews from "@/components/latest";
import Main from "@/components/main";
import Opinions from "@/components/opinion";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="container grid w-full gap-4 px-4 mx-auto md:grid-cols-3 lg:grid-cols-8">
        {/* Left sidebar */}
        <div className="flex-col hidden gap-5 lg:flex lg:col-span-2">
          <LatestNews />
          <Opinions />
        </div>
        {/* Main Section */}
        <div className="md:col-span-2 lg:col-span-4">
          <Main />
        </div>
        {/* Right Sidebar */}
        <div className="lg:col-span-2"></div>
      </main>
    </div>
  );
}
