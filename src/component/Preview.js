import React from "react";
import YouTube from "react-youtube";
import dummy from "../db/data.json";

export default function Preview() {
  console.log(dummy);
  return (
    <div>
      <ul className="list_movie">
        {dummy.genre.map((genre) => (
          <li key={genre.id}>장르 {genre.genre}</li>
        ))}
      </ul>

      <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"Mrj9XACVJ8U"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.

        opts={{
          width: "560",
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
  );
}
