import { useState, useEffect } from "react";
import { platforms } from "../data/data";
import Image from "next/image";
import QRCode from "react-qr-code";

const ComponentDownload = () => {
  const [languages, setLanguages] = useState({});
  const [selectedLangName, setSelectedLangName] = useState(null);
  const [selectedLang, setSelectedLang] = useState(null);
  const [activeDeviceType, setActiveDeviceType] = useState(null);
  const [currentPlatform, setCurrentPlatform] = useState(null);
  // const [toggleQR, setToggleQR] = useState(false);
  const [active, setActive] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const selected = (a) => {
    console.warn(a);
    setSelectedLang(languages.set[a]);

    // if (a === "android") {
    //   setSelectedLang(languages.set[a]);
    // } else {
    //   // ios
    //   setSelectedLang(languages.set[a]);
    // }
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

    if (languages.lang) {
      selected(languages.lang[0]);
      setSelectedLangName(languages.lang[0]);
      setCurrentPlatform(languages.lang[0]);
      setActiveDeviceType(languages.lang[0]);
    }
  }, [languages]);
  return (
    <div className="container">
      <div className="Manan">
        <div className="flex flex-col">
          <h2 className="flex justify-center align-center text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <div className="flex capitalize ">
            <aside className="left">
              <div className="mt-4">
                {platforms.map((platform, index) => {
                  return (
                    <div
                      className={`pointer-cursor w-80-imp s2btnwhite Whitebtn ${
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
                <div
                  className="pointer-cursor flex justify-center align-center flex-row span w-80-imp"
                  onClick={() => {
                    resetEverything();
                  }}
                >
                  Reset
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
                </div>
              </div>
            </aside>
            <aside className="w-80 right overflow-auto">
              {downloadUrl && (
                <div className="url-qr">
                  <div
                    onClick={() => {
                      setDownloadUrl(null);
                    }}
                    className="w-screen h-screen absolute top-0 left-0 backdrop-blur-sm transition-all z-top"
                  ></div>
                  <div
                    onClick={() => {
                      setDownloadUrl(null);
                    }}
                    className="flex justify-center align-center w-screen h-screen absolute top-0 left-0"
                  >
                    <QRCode
                      className="absolute qr-svg"
                      size={200}
                      fgColor="black"
                      bgColor="white"
                      value={selectedLang[downloadUrl].url}
                    />
                  </div>
                </div>
              )}
              <div className="langs mt-4 v-mx-4 zoomIn">
                <div className="w-resp">
                  <div className={``}>
                    {/* {languages.lang && (
                    <h3 className="-ml-3 text-center w-half font-bold">
                      Select Platform
                    </h3>
                  )} */}

                    {languages.lang ? (
                      // ---------------------------------------------------------------
                      // ---------------------------------------------------------------
                      // Select Platform Type map i.e android/ios
                      // ---------------------------------------------------------------
                      // ---------------------------------------------------------------
                      <div className="w-resp flex justify-center align-center w-half gap-1 zoomIn">
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
                      <div className="flex justify-center align-center h-half font-monospace font-bold text-large">
                        Please Select a Language
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-resp-b v-p-3 mt-4 w-half zoomIn">
                  {selectedLang
                    ? Object.keys(selectedLang).map((elem, index) => {
                        // <div key={index}>{selectedLang[elem]}</div>;
                        return (
                          <>
                            {selectedLangName === "android" ? (
                              // ---------------------------------------------------------------
                              // ---------------------------------------------------------------
                              // Android Selection map
                              // ---------------------------------------------------------------
                              // ---------------------------------------------------------------
                              <div className="grid grid-cols-2 grid-rows-1 w-full place-stretch mb-2 zoomIn">
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
                                  <div className="mt-2 text-white text-center">
                                    {elem}:{" "}
                                    <b
                                      className="pointer-cursor"
                                      onClick={() => {
                                        // setToggleQR(!toggleQR);
                                        setDownloadUrl(elem);
                                      }}
                                    >
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        class="qrc_icon"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill="none"
                                          d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"></path>
                                      </svg>
                                    </b>
                                  </div>
                                )}
                                <a
                                  href={selectedLang[elem].url}
                                  target="_vdotok"
                                  className={` decoration-none ${
                                    selectedLang[elem] === "null" && "hidden"
                                  }`}
                                >
                                  <div className="s2btnwhite Whitebtn">
                                    <img
                                      src="/aa.svg"
                                      alt="manan"
                                      className="mr-2 img-resp w-32px float-left v-pt-1 v-pl-1"
                                      height={32}
                                      width={32}
                                    />
                                    <p
                                      className="mp-none text-elipses text-xs download-btn"
                                      // style={{ paddingTop: "0.75rem" }}
                                    >
                                      {selectedLang[elem].description}
                                    </p>
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
                                  <div className="grid grid-cols-2 grid-rows-1 w-full place-stretch mb-2 zoomIn">
                                    {selectedLang[elem] === "null" && (
                                      <div>
                                        there is nothin {selectedLang[elem]}
                                      </div>
                                    )}
                                    {selectedLang[elem] !== "null" && (
                                      <div className="mt-2 text-white text-center">
                                        {elem}:{" "}
                                        <b
                                          className="pointer-cursor"
                                          onClick={() => {
                                            // setToggleQR(!toggleQR);
                                            setDownloadUrl(elem);
                                          }}
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            class="qrc_icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fill="none"
                                              d="M0 0h24v24H0z"
                                            ></path>
                                            <path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"></path>
                                          </svg>
                                        </b>
                                      </div>
                                    )}
                                    <a
                                      href={selectedLang[elem].url}
                                      target="_vdotok"
                                      className={`decoration-none ${
                                        selectedLang[elem] === "null" &&
                                        "hidden"
                                      }`}
                                    >
                                      <div className="s2btnwhite Whitebtn">
                                        <img
                                          src="/aa.svg"
                                          alt="manan"
                                          className="mr-2 img-resp w-32px float-left v-pt-1 v-pl-1"
                                          height={32}
                                          width={32}
                                        />
                                        <p
                                          className="mp-none text-elipses text-xs download-btn"
                                          // style={{ paddingTop: "0.75rem" }}
                                        >
                                          {/* IOS App
                                        <br /> */}
                                          {selectedLang[elem].description}
                                          {/* <span class="big-txt">
                                          
                                        </span> */}
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                ) : (
                                  // ---------------------------------------------------------------
                                  // ---------------------------------------------------------------
                                  // Else JS Selection map
                                  // ---------------------------------------------------------------
                                  // ---------------------------------------------------------------
                                  <div className="grid grid-cols-2 grid-rows-1 w-full place-stretch mb-2 zoomIn">
                                    {selectedLang[elem] === "null" && (
                                      <div>
                                        there is nothin {selectedLang[elem]}
                                      </div>
                                    )}
                                    {selectedLang[elem] !== "null" && (
                                      <div className="mt-2 text-white text-center">
                                        {elem}:{" "}
                                        <b
                                          className="pointer-cursor"
                                          onClick={() => {
                                            // setToggleQR(!toggleQR);
                                            setDownloadUrl(elem);
                                          }}
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            class="qrc_icon"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fill="none"
                                              d="M0 0h24v24H0z"
                                            ></path>
                                            <path d="M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"></path>
                                          </svg>
                                        </b>
                                      </div>
                                    )}
                                    <a
                                      href={selectedLang[elem].url}
                                      target="_vdotok"
                                      className={`decoration-none ${
                                        selectedLang[elem] === "null" &&
                                        "hidden"
                                      }`}
                                    >
                                      <div className="s2btnwhite Whitebtn">
                                        <img
                                          src="/aa.svg"
                                          alt="manan"
                                          className="mr-2 img-resp w-32px float-left v-pt-1 v-pl-1"
                                          height={32}
                                          width={32}
                                        />
                                        <p
                                          className="mp-none text-elipses text-xs download-btn"
                                          // style={{ paddingTop: "0.75rem" }}
                                        >
                                          {selectedLang[elem].description}
                                          {/* <span class="big-txt">Link</span> */}
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                )}
                              </>
                            )}
                          </>
                        );
                      })
                    : ""}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDownload;
