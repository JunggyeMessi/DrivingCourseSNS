import React, { useState, useEffect } from "react";
import styles from "./HomeBanner.module.css";
import HomeBannerItem from "./HomeBannerItem";
import { HomeBannerModel } from "@/models/drivecourse";

const HomeBanner: React.FC<{item: HomeBannerModel[]}> = (props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const length: number = props.item.length;

  const bannerButtonHandler = (num: number) => {
    console.log(num);
    setCurrentIndex(num);
  };

  useEffect(() => {
    let count = currentIndex;
    const id = setInterval(() => {
      if (count === (length -1)) {
        setCurrentIndex((index) => index - (length-1));
        count -= (length -1);
        console.log("again!");
      } else {
        setCurrentIndex((index) => index + 1);
        count+=1;
      }
    }, 3000);
    return () => clearInterval(id);
  }, [currentIndex]);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount((c) => c + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <div className={styles.window}>
      <div
        className={styles.items}
        style={{
          width: `${props.item.length * 110}rem`,
          transform: `translateX(${-110 * currentIndex}rem)`,
        }}
      >
        {props.item.map((item, index) => (
          <HomeBannerItem
            item={item}
            key={index}
          ></HomeBannerItem>
        ))}
      </div>
      <div className={styles.buttons}>
        {props.item.map((item, index) => (
          <svg
            className={`${styles.button} ${
              index == currentIndex ? styles.selected : ""
            }`}
            onClick={() => bannerButtonHandler(index)}
            key={index}
          >
            <circle cx="5" cy="5" r="5" fill="#FFFFFF" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
