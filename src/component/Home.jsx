import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import Modal from "./Modal";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "./Home.css";
import { SiNetflix } from "react-icons/si";
import { SiAppletv } from "react-icons/si";

import action_01 from "../asset/imgs/action/action_01.png";
import action_02 from "../asset/imgs/action/action_02.png";
import action_03 from "../asset/imgs/action/action_03.png";
import action_04 from "../asset/imgs/action/action_04.png";
import action_05 from "../asset/imgs/action/action_05.png";
import action_06 from "../asset/imgs/action/action_06.png";

import comic_01 from "../asset/imgs/comic/comic_01.png";
import comic_02 from "../asset/imgs/comic/comic_02.png";
import comic_03 from "../asset/imgs/comic/comic_03.png";
import comic_04 from "../asset/imgs/comic/comic_04.png";

import melo_01 from "../asset/imgs/melo/melo_01.png";
import melo_02 from "../asset/imgs/melo/melo_02.png";
import melo_03 from "../asset/imgs/melo/melo_03.png";
import melo_04 from "../asset/imgs/melo/melo_04.png";

import thriller_01 from "../asset/imgs/thriller/thriller_01.png";
import thriller_02 from "../asset/imgs/thriller/thriller_02.png";
import thriller_03 from "../asset/imgs/thriller/thriller_03.png";
import thriller_04 from "../asset/imgs/thriller/thriller_04.png";

import ani_01 from "../asset/imgs/ani/ani_01.png";
import ani_02 from "../asset/imgs/ani/ani_02.png";
import ani_03 from "../asset/imgs/ani/ani_03.png";
import ani_04 from "../asset/imgs/ani/ani_04.png";

import video from "../asset/videos/video.mp4";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [idNum, setIdNum] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  return (
    <BrowserRouter>
      <div className="">
        <div className="fixed w-screen h-40 duration-500" id="header">
          {/* <div className="flex items-center mt-6 ">
            <div className="flex items-center justify-center ml-52">
              {/* <TbMovie className="text-3xl text-red-700" /> */}
          {/* <SiNetflix className="text-red-700 text-8xl" /> */}
          {/* <SiAppletv className="text-gray-200 text-9xl" /> */}
          {/* </div> */}
          {/* <div className="ml-10 ">
              <p className="font-bold text-white text-3xlg">
                내가 본 영화 추천
              </p>
              <div className="mt-3">
                <button className="px-4 py-1 mr-4 text-xl text-white bg-blue-600 rounded-md">
                  액션
                </button>
                <button className="px-4 py-1 mr-4 text-xl text-white bg-blue-600 rounded-md">
                  코믹
                </button>
                <button className="px-4 py-1 mr-4 text-xl text-white bg-blue-600 rounded-md">
                  멜로
                </button>
                <button className="px-4 py-1 mr-4 text-xl text-white bg-blue-600 rounded-md">
                  스릴러
                </button>
                <button className="px-4 py-1 mr-4 text-xl text-white bg-blue-600 rounded-md">
                  애니메이션
                </button>
              </div>
            </div>
          </div> */}
        </div>
        <div className="relative flex items-center justify-center w-screen overflow-hidden brightness-60">
          <video muted autoPlay loop playsInline className="w-screen">
            <source src={video}></source>
          </video>
        </div>
        <Modal
          idNum={idNum}
          youtubeURL={youtubeURL}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
        <div className="z-20" style={{ margin: "auto", width: "80%" }}>
          {/* ACTION */}
          {/* <div>
            <button
              onClick={() => {
                setOpenModal(true);
                setIdNum(1);
              }}
              id="modalBtn"
              className="bg-white"
            >
              OPEN
            </button>
          </div> */}

          <div className="container" id="action">
            <a className="flex justify-center mt-10 text-4xl text-white">
              {" "}
              액션{" "}
            </a>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slideToClickedSlide={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(1);
                    setYoutubeURL("Mrj9XACVJ8U");
                  }}
                >
                  <img src={action_01} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(2);
                    setYoutubeURL("aM0OUNRwlL8");
                  }}
                >
                  <img src={action_02} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(3);
                    setYoutubeURL("XK9zL0ze9O4");
                  }}
                >
                  <img src={action_03} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(4);
                    setYoutubeURL("gNJgMo14XWU");
                  }}
                >
                  <img src={action_04} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(5);
                    setYoutubeURL("pxR6cKkPzNo");
                  }}
                >
                  <img src={action_05} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(6);
                    setYoutubeURL("VnFsZbHfpeE");
                  }}
                >
                  <img src={action_06} alt="slide_image" />
                </div>
              </SwiperSlide>

              <div className="slider-controler">
                {/* <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div> */}
                <div className="opacity-100 swiper-pagination "></div>
              </div>
            </Swiper>
          </div>

          {/* COMIC */}

          <div className="container" id="comic">
            <a className="flex justify-center mt-10 text-4xl text-white">
              {" "}
              코믹{" "}
            </a>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slideToClickedSlide={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(7);
                    setYoutubeURL("5uu1ys5xssI");
                  }}
                >
                  <img src={comic_01} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(8);
                    setYoutubeURL("0wmjt0rDzNg");
                  }}
                >
                  <img src={comic_02} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(9);
                    setYoutubeURL("2FxmZcAUrE0");
                  }}
                >
                  <img src={comic_03} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(10);
                    setYoutubeURL("E4rqi6Q0mV0");
                  }}
                >
                  <img src={comic_04} alt="slide_image" />
                </div>
              </SwiperSlide>

              <div className="slider-controler">
                {/* <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div> */}
                <div className="opacity-100 swiper-pagination "></div>
              </div>
            </Swiper>
          </div>

          {/* melo */}

          <div className="container" id="melo">
            <a className="flex justify-center mt-10 text-4xl text-white">
              {" "}
              멜로{" "}
            </a>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slideToClickedSlide={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(11);
                    setYoutubeURL("Dt5hFexM5BI");
                  }}
                >
                  <img src={melo_01} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(12);
                    setYoutubeURL("VU1ah3RxIww");
                  }}
                >
                  <img src={melo_02} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(13);
                    setYoutubeURL("Ugmu8HOdpdo");
                  }}
                >
                  <img src={melo_03} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(14);
                    setYoutubeURL("Ceoe2wf-bbo");
                  }}
                >
                  <img src={melo_04} alt="slide_image" />
                </div>
              </SwiperSlide>

              <div className="slider-controler">
                {/* <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div> */}
                <div className="opacity-100 swiper-pagination "></div>
              </div>
            </Swiper>
          </div>

          {/* THRILLER */}

          <div className="container" id="thriller">
            <a className="flex justify-center mt-10 text-4xl text-white">
              {" "}
              스릴러{" "}
            </a>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slideToClickedSlide={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(15);
                    setYoutubeURL("f2fsY1GONCU");
                  }}
                >
                  <img src={thriller_01} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(16);
                    setYoutubeURL("Ej25zrnaTXk");
                  }}
                >
                  <img src={thriller_02} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(17);
                    setYoutubeURL("bz2GpORaNEg");
                  }}
                >
                  <img src={thriller_03} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(18);
                    setYoutubeURL("Fxm72hmhdXU");
                  }}
                >
                  <img src={thriller_04} alt="slide_image" />
                </div>
              </SwiperSlide>

              <div className="slider-controler">
                {/* <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div> */}
                <div className="opacity-100 swiper-pagination "></div>
              </div>
            </Swiper>
          </div>

          {/* ANI */}

          <div className="container" id="ani">
            <a className="flex justify-center mt-10 text-4xl text-white">
              {" "}
              애니메이션{" "}
            </a>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slideToClickedSlide={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(19);
                    setYoutubeURL("lwrG3HQXTFw");
                  }}
                >
                  <img src={ani_01} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(20);
                    setYoutubeURL("sdFIv-yogIY");
                  }}
                >
                  <img src={ani_02} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(21);
                    setYoutubeURL("0GtEGZv1_Os");
                  }}
                >
                  <img src={ani_03} alt="slide_image" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  onClick={() => {
                    setOpenModal(true);
                    setIdNum(22);
                    setYoutubeURL("CZ1CATNbXg0");
                  }}
                >
                  <img src={ani_04} alt="slide_image" />
                </div>
              </SwiperSlide>

              <div className="slider-controler">
                {/* <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div> */}
                <div className="opacity-100 swiper-pagination "></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

// window.addEventListener("scroll", () => {
//   const test = document.querySelector("#header");
//   if (window.scrollY > 100) {
//     test.style.backgroundColor = "rgba(0, 0, 0, .8)";
//   } else {
//     test.style.backgroundColor = "#00ff0000";
//   }
// });
