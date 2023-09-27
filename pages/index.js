import React, { useEffect, useState } from "react";

// import "./downloadApplications.css";
import { platforms } from "./data";

export default (props) => {
  const [languages, setLanguages] = useState({});
  const [selectedLangName, setSelectedLangName] = useState(null);
  const [selectedLang, setSelectedLang] = useState(null);
  const [activeDeviceType, setActiveDeviceType] = useState(null);
  const [currentPlatform, setCurrentPlatform] = useState(null);
  const [active, setActive] = useState(null);

  const selected = (a) => {
    if (a === "android") {
      setSelectedLang(languages.set[a]);
    } else {
      // ios
      setSelectedLang(languages.set[a]);
    }
  };
  const selectedPlatform = (a, index) => {
    // console.log(a, "aaaaaaa");
    for (const language in a) {
      setLanguages({ lang: Object.keys(a[language]), set: a[language] });
      setSelectedLang(null);
    }
  };

  const resetEverything = () => {
    // language object
    setLanguages({});
    setSelectedLang(null);
    setActiveDeviceType(null);
    setCurrentPlatform(null);
    setActive(null);
  };

  useEffect(() => {
    // console.warn(androidPlatform);
    // console.warn(iosPlatform);
    // console.log(languages);
    // console.log(selectedLang, "selected");
    if (currentPlatform !== null) {
      console.log(currentPlatform, "currentplatformmmmmmmmmm");
      selected(currentPlatform);
    }
  }, [languages, selectedLang]);

  return (
    <>
      <div className="vdtbody">
        <nav>I am Nav</nav>
        <div className="Manan">
          <div className="flex flex-col">
            <h2 className="flex justify-center align-center text-center justify-center">
              Select Language You want to download build Application
            </h2>
            <div className="flex capitalize ">
              <aside className="w-20 left">
                <div className="mt-4">
                  {platforms.map((platform, index) => {
                    return (
                      <div
                        className={`pointer-cursor ${
                          active === index && "active"
                        }`}
                        onClick={() => {
                          selectedPlatform(platform, index);
                          setActive(index);
                        }}
                      >
                        {Object.keys(platform)}
                      </div>
                    );
                  })}
                  <span
                    className="pointer-cursor"
                    onClick={() => {
                      resetEverything();
                    }}
                  >
                    Reset Selection
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-clockwise"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                      />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                  </span>
                </div>
              </aside>
              <aside className="w-80 right overflow-auto h-screen">
                <div className="langs  ml-4">
                  <div>
                    <div
                      className={`flex flex-col justify-center align-center w-half gap-1`}
                    >
                      {languages.lang && (
                        <h3 className="-ml-3 text-center w-half font-bold">
                          Select Platform
                        </h3>
                      )}

                      {languages.lang ? (
                        // ---------------------------------------------------------------
                        // ---------------------------------------------------------------
                        // Select Platform Type map i.e android/ios
                        // ---------------------------------------------------------------
                        // ---------------------------------------------------------------
                        <div className="flex justify-center align-center w-full gap-1">
                          {languages.lang.map((elem, index) => {
                            return (
                              <div
                                className={`pointer-cursor langs_child flex font-bold justify-center align-center w-full shadow-2xl h-8 ${
                                  activeDeviceType === elem &&
                                  "active-device-type"
                                }`}
                                key={index}
                                onClick={() => {
                                  selected(elem);
                                  setSelectedLangName(elem);
                                  setCurrentPlatform(elem);
                                  setActiveDeviceType(elem);
                                }}
                              >
                                {elem}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex justify-center align-center h-half">
                          Please Select a Language
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center align-center p-3 mt-4 w-50 ">
                    {selectedLang
                      ? Object.keys(selectedLang).map((elem, index) => {
                          // <div key={index}>{selectedLang[elem]}</div>;
                          return (
                            <div
                              className="flex justify-center align-center mb-2"
                              key={index}
                            >
                              {selectedLangName === "android" ? (
                                // ---------------------------------------------------------------
                                // ---------------------------------------------------------------
                                // Android Selection map
                                // ---------------------------------------------------------------
                                // ---------------------------------------------------------------
                                <div className="grid grid-cols-2 grid-rows-1 gap-4 place-start">
                                  {/* <div
                                    className={`${
                                      selectedLang[elem] !== "null" && "hidden"
                                    }`}
                                  >
                                    
                                  </div> */}
                                  {selectedLang[elem] === "null" && (
                                    <div>
                                      there is nothin {selectedLang[elem]}
                                    </div>
                                  )}
                                  {selectedLang[elem] !== "null" && (
                                    <div className="mt-2">{elem}: &nbsp;</div>
                                  )}
                                  <a
                                    href={selectedLang[elem]}
                                    target="_vdotok"
                                    className={` decoration-none ${
                                      selectedLang[elem] === "null" && "hidden"
                                    }`}
                                  >
                                    <div className="flex p-1 justify-center align-center flex-row-reverse cbg-black text-light rounded-lg">
                                      <p className="mp-none">
                                        <span class="big-txt"> Download</span>
                                      </p>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="34"
                                        height="34"
                                        fill="currentColor"
                                        class="android-icon"
                                        viewBox="0 0 18 18"
                                      >
                                        <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              ) : (
                                <>
                                  {selectedLangName === "ios" ? (
                                    // ---------------------------------------------------------------
                                    // ---------------------------------------------------------------
                                    // IOS Selection map
                                    // ---------------------------------------------------------------
                                    // ---------------------------------------------------------------
                                    <div className="grid grid-cols-2 grid-rows-1 gap-4 place-start">
                                      {selectedLang[elem] === "null" && (
                                        <div>
                                          there is nothin {selectedLang[elem]}
                                        </div>
                                      )}
                                      {selectedLang[elem] !== "null" && (
                                        <div className="mt-2">
                                          {elem}: &nbsp;
                                        </div>
                                      )}
                                      <a
                                        href={selectedLang[elem]}
                                        target="_vdotok"
                                        className={`decoration-none ${
                                          selectedLang[elem] === "null" &&
                                          "hidden"
                                        }`}
                                      >
                                        <div className="flex p-1 justify-center align-center flex-row-reverse cbg-black text-light rounded-lg">
                                          <p className="mp-none">
                                            IOS App
                                            <br />
                                            <span class="big-txt">
                                              Download
                                            </span>
                                          </p>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="34"
                                            height="34"
                                            fill="currentColor"
                                            class="bi bi-apple"
                                            viewBox="0 0 18 18"
                                          >
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  ) : (
                                    // ---------------------------------------------------------------
                                    // ---------------------------------------------------------------
                                    // Else JS Selection map
                                    // ---------------------------------------------------------------
                                    // ---------------------------------------------------------------
                                    <div className="grid grid-cols-2 grid-rows-1 gap-4 place-start">
                                      {selectedLang[elem] === "null" && (
                                        <div>
                                          there is nothin {selectedLang[elem]}
                                        </div>
                                      )}
                                      {selectedLang[elem] !== "null" && (
                                        <div className="mt-2">
                                          {elem}: &nbsp;
                                        </div>
                                      )}
                                      <a
                                        href={selectedLang[elem]}
                                        target="_vdotok"
                                        className={`decoration-none ${
                                          selectedLang[elem] === "null" &&
                                          "hidden"
                                        }`}
                                      >
                                        <div className="flex p-1 justify-center align-center flex-row-reverse cbg-black text-light rounded-lg">
                                          <p className="mp-none">
                                            Web App
                                            <br />
                                            <span class="big-txt">
                                              Download
                                            </span>
                                          </p>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="34"
                                            height="34"
                                            fill="currentColor"
                                            class="bi bi-window"
                                            viewBox="0 0 18 18"
                                          >
                                            <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <footer>I am footer</footer>
      </div>
    </>
  );
};
