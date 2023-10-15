"use client";
import { Team } from "@/gql/graphql";
import { Menu2Icon } from "@/icons/home";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NProgress from "nprogress";

interface SidebarProps {
  teams: Team[];
}
export default function OverallResults(props: SidebarProps) {
  const [sortedTeams, setSortedTeams] = useState<Team[]>(props.teams);
  const [chunks, setChunks] = useState<Team[][]>([]);
  const [routerButtonClicked, setRouterButtonClicked] = useState(false);
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    routerButtonClicked ? NProgress.start() : null;
  }, [routerButtonClicked]);
  // change the array to chunks of 2 * 2

  useEffect(() => {
    console.log(props.teams);
    // sort )

    const sorted = props.teams.sort((a, b) => {
      return (b?.totalPoint as number) - (a?.totalPoint as number);
    });
    setSortedTeams(sorted);

    // delete the forth element from the array
    sorted.splice(4, 1);

    // change the sorted to chunks of 2 * 2
    const chunked = [];
    for (let i = 0; i < sorted.length; i += 2) {
      chunked.push(sorted.slice(i, i + 2));
    }
    console.log(chunked);

    setChunks(chunked);
  }, []);

  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="h-full">
      <div onClick={togglePopup}>
        <Menu2Icon className="w-6 h-6 fixed right-4 top-4 fill-white lg:hidden" />
      </div>
      <div className="w-full flex justify-start items-center flex-col pt-2">
        <h1 className="text-xl bigphone:text-4xl font-bold text-primary">
          Overall Results
        </h1>
      </div>
      <div className="w-full h-[80%] flex flex-col mt-5">
        {chunks.length > 0 ? (
          chunks.map((chunk, index) => {
            return (
              <div className="flex h-1/2 w-full">
                <div className="h-full w-1/2">
                  <div className="w-full h-1/4 flex">
                    <div className="h-full w-1/3 px-2 flex">
                      <h1 className="text-3xl font-bold">
                        #0{index == 0 ? index + 1 : index + 2}
                      </h1>
                    </div>
                    <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                      <div className="flex items-center gap-2">
                        <span className="bg-green-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">
                          Arts : {chunk[0].totalPoint}
                        </h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">
                          Sports : {chunk[0].totalSportsPoint}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-3/4 px-2 pt-3">
                    <h1 className="text-7xl font-bold">
                      {chunk[0].totalPoint}
                    </h1>
                    <div
                      style={{ background: `${chunk[0].color}` }}
                      className="bg-black h-1/4 rounded-lg flex justify-center items-center"
                    >
                      <h1 className="text-white font-semibold text-2xl">
                        {chunk[0].name}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="h-full w-1/2">
                  <div className="w-full h-1/4 flex">
                    <div className="h-full w-1/3 px-2 flex">
                      <h1 className="text-3xl font-bold">
                        #0{index == 0 ? index + 2 : index + 3}
                      </h1>
                    </div>
                    <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                      <div className="flex items-center gap-2">
                        <span className="bg-green-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">
                          Arts : {chunk[1].totalPoint}
                        </h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">
                          Sports : {chunk[1].totalSportsPoint}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-3/4 px-2 pt-3">
                    <h1 className="text-7xl font-bold">
                      {chunk[1]?.totalPoint}
                    </h1>
                    <div
                      style={{ background: `${chunk[1]?.color}` }}
                      className=" bg-black h-1/4 rounded-lg flex justify-center items-center"
                    >
                      <h1 className="text-white font-semibold text-2xl">
                        {chunk[1]?.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <>
            {" "}
            <div className="flex h-1/2 w-full">
              <div className="h-full w-1/2">
                <div className="w-full h-1/4 flex">
                  <div className="h-full w-1/3 px-2 flex">
                    <h1 className="text-3xl font-bold">#01</h1>
                  </div>
                  <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Arts : ###</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Sports : ###</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/4 px-2 pt-3">
                  <h1 className="text-7xl font-bold">###</h1>
                  <div className="bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                    <h1 className="text-white font-semibold text-2xl">###</h1>
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2">
                <div className="w-full h-1/4 flex">
                  <div className="h-full w-1/3 px-2 flex">
                    <h1 className="text-3xl font-bold">#02</h1>
                  </div>
                  <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Arts : ###</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Sports : ###</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/4 px-2 pt-3">
                  <h1 className="text-7xl font-bold">###</h1>
                  <div className=" bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                    <h1 className="text-white font-semibold text-2xl">###</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 w-full">
              <div className="h-full w-1/2">
                <div className="w-full h-1/4 flex">
                  <div className="h-full w-1/3 px-2 flex">
                    <h1 className="text-3xl font-bold">#03</h1>
                  </div>
                  <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Arts : ###</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Sports : ###</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/4 px-2 pt-3">
                  <h1 className="text-7xl font-bold">###</h1>
                  <div className="bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                    <h1 className="text-white font-semibold text-2xl">###</h1>
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2">
                <div className="w-full h-1/4 flex">
                  <div className="h-full w-1/3 px-2 flex">
                    <h1 className="text-3xl font-bold">#04</h1>
                  </div>
                  <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Arts : ###</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Sports : ###</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/4 px-2 pt-3">
                  <h1 className="text-7xl font-bold">###</h1>
                  <div className=" bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                    <h1 className="text-white font-semibold text-2xl">###</h1>
                  </div>
                </div>
              </div>
            </div>{" "}
          </>
        )}

        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 transition-all duration-500  ${
            !showPopup ? "-translate-y-[100vh]" : "translate-y-0"
          } `}
        >
          <div className="bg-white p-8 rounded shadow-md relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={togglePopup}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-secondary absolute right-2 top-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-center">
              <h1 className="text-4xl font-black text-secondary">
                <span className="font-nexa">Realia</span>&apos;
                <span className="font-nexa">23</span>
              </h1>

              <h2 className="text-lg leading-4 font-nexa">DHIU Arts Fest</h2>
            </div>
            <nav>
              <ul className="mt-8 transition-all duration-400">
                <li
                  onClick={() => {
                    setRouterButtonClicked(true);
                    router.push("/");
                  }}
                  className=" text-secondary font-semibold border-theme border px-4 py-1 rounded-3xl hover:text-white hover:bg-secondary "
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    setRouterButtonClicked(true);
                    router.push("/result");
                  }}
                  className="text-secondary px-4 py-1 rounded-3xl hover:text-white hover:bg-secondary"
                >
                  Result
                </li>
                <li
                  onClick={() => {
                    setRouterButtonClicked(true);
                    router.push("/gallery");
                  }}
                  className="text-secondary px-4 py-1 rounded-3xl hover:text-white hover:bg-secondary"
                >
                  Gallery
                </li>
                <li
                  onClick={() => {
                    setRouterButtonClicked(true);
                    router.push("/candidate");
                  }}
                  className="text-secondary px-4 py-1 rounded-3xl hover:text-white hover:bg-secondary"
                >
                  Profile
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
