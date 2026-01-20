import Header from "@/components/header";
import LatestNews from "@/components/latest";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="grid w-full gap-4 px-4 mx-auto md:grid-cols-3 lg:grid-cols-8 md:px-10 lg:px-20">
        {/* Left sidebar */}
        <div className="hidden lg:block lg:col-span-2">
          <LatestNews />
        </div>
        {/* Main Section */}
        <div className="md:col-span-2 lg:col-span-4"></div>
        {/* Right Sidebar */}
        <div className="lg:col-span-2"></div>
      </main>
    </div>
  );
}
