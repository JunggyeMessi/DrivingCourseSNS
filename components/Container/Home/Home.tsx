import React from "react";
import CenterAlign from "../../UI/CenterAlign";
import HomeBanner from "./HomeBanner";
import HomeDriveCourse from "./HomeDriveCourse";
import { HomeBannerModel } from "@/models/drivecourse";
import BannerExample from "@/public/assets/images/BannerExample.png";

const Home = () => {
  const DummyBanner: HomeBannerModel[] = [
    {
      id: "1",
      image: BannerExample,
      title: "선선한 가을,\n당신을 위한\n동해안 드라이브",
      button: "지금 보러가기",
    },
    {
      id: "2",
      image: BannerExample,
      title: "선선한 가을,\n당신을 위한\n동해안 드라이브",
      button: "지금 보러가기",
    },
    {
      id: "3",
      image: BannerExample,
      title: "선선한 가을,\n당신을 위한\n동해안 드라이브",
      button: "지금 보러가기",
    },
    {
      id: "4",
      image: BannerExample,
      title: "선선한 가을,\n당신을 위한\n동해안 드라이브",
      button: "지금 보러가기",
    },
    {
      id: "5",
      image: BannerExample,
      title: "선선한 가을,\n당신을 위한\n동해안 드라이브",
      button: "지금 보러가기",
    },
  ];

  return (
    <CenterAlign>
      <HomeBanner item={DummyBanner}/>
      <HomeDriveCourse />
    </CenterAlign>
  );
};

export default Home;
