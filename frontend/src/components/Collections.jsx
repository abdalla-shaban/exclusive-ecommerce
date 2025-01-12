import gamesCollection from "../assets/images/games-collection.png";
import womenCollection from "../assets/images/women-collection.png";
import speakersCollection from "../assets/images/speakers-collection.png";
import perfumeCollection from "../assets/images/perfume-collection.png";

export default function Collections() {
  return (
    <section className="my-5 py-5">
      <div className="tb-container">
        <div className="flex flex-col gap-6">
          <h2 className="text-[#DB4444] font-semibold flex items-center gap-3 xl">
            <span className="block w-5 h-10 bg-[#DB4444] rounded"></span>
            Featured
          </h2>
          <h3 className="text-4xl font-semibold">New Arrival</h3>
        </div>

        <div className="grid grid-cols-8 grid-rows-4 gap-4 mt-10">
          <div className="flex items-end col-span-8 row-span-1 lg:col-span-4 lg:row-span-4 bg-black pt-10 px-5 pb-0 relative">
            <img
              className="mx-auto max-w-full"
              src={gamesCollection}
              alt="Black and White version of the PlayStation 5"
            />
            <div className="absolute w-full start-0 px-5 md:px-8 bottom-10 text-white">
              <h4 className="font-semibold text-2xl">PlayStation 5</h4>
              <p className="text-sm my-3">
                Black and White version of the PS5 <br /> coming out on sale.
              </p>
              <a
                href=""
                className="w-fit font-medium pb-1 border-b border-b-slate-300/30"
              >
                Shop Now
              </a>
            </div>
          </div>
          <div className="flex  items-end col-span-8 row-span-1 lg:col-span-4 lg:row-span-2 p-4 pb-0 bg-[#0D0D0D] ">
            <div className="flex flex-col lg:flex-row items-end">
              <div className="self-center lg:self-auto text-white pb-5">
                <h4 className="font-semibold text-2xl">Women's Collections</h4>
                <p className="text-sm my-3">
                  Featured woman collections that <br /> give you another vibe.
                </p>
                <a
                  href=""
                  className="w-fit font-medium pb-1 border-b border-b-slate-300/30"
                >
                  Shop Now
                </a>
              </div>
              <div>
                <img
                  className="mx-auto max-w-full"
                  src={womenCollection}
                  alt="Wommen with Hat"
                />
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center col-span-8 row-span-1 lg:col-span-2 lg:row-span-2 p-5 bg-gradient-to-t to-black from-black via-[#333] ">
            <div className="absolute w-full start-0 px-5 md:px-8 bottom-5 text-white">
              <h4 className="font-semibold text-2xl">Speakers</h4>
              <p className="text-sm my-2">Amazon Wireless speakers</p>
              <a
                href=""
                className="block w-fit font-medium pb-1 border-b border-b-slate-300/30"
              >
                Shop Now
              </a>
            </div>
            <img
              className="mx-auto max-w-full"
              src={speakersCollection}
              alt="Amazon wireless Speakers"
            />
          </div>
          <div className="relative flex items-center justify-center col-span-8 row-span-1 lg:col-span-2 lg:row-span-2 p-5 bg-gradient-to-t to-black from-black via-[#333] ">
            <div className="absolute w-full start-0 px-5 md:px-8 bottom-5 text-white">
              <h4 className="font-semibold text-2xl">Perfume</h4>
              <p className="text-sm my-2">GUCCI INTENSE OUD EDP</p>
              <a
                href=""
                className="block w-fit font-medium pb-1 border-b border-b-slate-300/30"
              >
                Shop Now
              </a>
            </div>
            <img
              className="mx-auto max-w-full"
              src={perfumeCollection}
              alt="GUCCI INTENSE OUD EDP"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
