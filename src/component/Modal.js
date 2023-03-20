import React from "react";
import dummy from "../db/data.json";
import YouTube from "react-youtube";
import { AiFillStar } from "react-icons/ai";

const Modal = ({ youtubeURL, idNum, open, onClose }) => {
  if (!open) return null;
  const id = idNum;
  const movieInfo = dummy.names.filter((name) => name.id === id);
  console.log(movieInfo);
  return (
    <div id="overlay" className="fixed top-0 left-0 z-50 w-screen h-screen">
      <div className="" style={{ width: "100%", height: "100%" }}>
        <div
          id="modalContainer"
          className="flex items-center justify-center min-h-screen"
          // style={{ marginLeft: "40%", marginTop: "15%", width: "400px" }}
        >
          <div
            className="bg-black rounded-lg "
            style={{ height: "650px", width: "600px" }}
          >
            <div className="mt-3">
              <YouTube
                //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                videoId={youtubeURL}
                //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                //밑에서 더 설명하겠습니다.

                opts={{
                  width: "100%",
                  height: "315",
                  playerVars: {
                    autoplay: 1, //자동재생 O
                    rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
                //이벤트 리스너
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </div>
            <div className="">
              <div className="flex ml-5 text-white">
                <p className="mt-3 text-5xl italic font-bold list_movie">
                  {movieInfo.map((names) => (
                    <li key={names.id}> {names.name}</li>
                  ))}
                </p>
                <p className="ml-3 mt-7">
                  {movieInfo.map((names) => (
                    <li key={names.id}> {names.year}</li>
                  ))}
                </p>
              </div>
              <div className="flex mt-5 ml-5 h-96">
                <div className="w-2/4 text-white ">
                  <p className="text-xl">
                    {" "}
                    {movieInfo.map((names) => (
                      <li key={names.id}> {names.info}</li>
                    ))}{" "}
                  </p>
                </div>
                <div className="ml-10 mr-5">
                  <div className="flex">
                    <p className="text-xl text-gray-300">감독 :</p>
                    <p className="ml-2 text-xl text-white">
                      {movieInfo.map((names) => (
                        <li key={names.id}> {names.director}</li>
                      ))}
                    </p>
                  </div>
                  <div className="flex mt-3">
                    <p className="text-xl text-gray-300">배우 :</p>
                    <p className="ml-2 text-xl text-white">
                      {movieInfo.map((names) => (
                        <li key={names.id}> {names.actor}</li>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <p
                  className="p-1 text-2xl font-bold text-center text-white duration-500 bg-white cursor-pointer bg-opacity-10 hover:bg-opacity-0 hover:text-red-400"
                  onClick={onClose}
                  id="closeBtn"
                >
                  close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
