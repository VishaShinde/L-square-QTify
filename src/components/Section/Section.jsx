import Card from "../Card/card";
import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({ title, data, filterSource, type }){
    const [filter, setFilter] = useState([{key: "all", label: "All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }

    useEffect(() => {
        if(filterSource){
            filterSource().then((response) => {
                const {data} = response;
                setFilter([...filter, ...data]);
            });
        }
    }, []);

    const showFilter = filter.length > 1;
    const cardsToRender = data.filter((card) =>
         showFilter && selectedFilterIndex !== 0
           ? card.genre.key === filter[selectedFilterIndex].key
           : card);

    return(
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 
                  className={styles.toggleText}
                  onClick={handleToggle}
                  >
                    {!carouselToggle ? "Collapse All" : "Show All"}
              </h4>
            </div>
            {showFilter && (
              <div className={styles.filterWrapper}>
                <Filters
                  filter={filter}
                  selectedFilterIndex={selectedFilterIndex}
                  setSelectedFilterIndex={setSelectedFilterIndex}
                />
              </div>
            )}
            {data.length === 0 ? (
                <CircularProgress/>
            ): (
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele) => (
                                <Card data={ele} type={type} />
                            ))}
                        </div>
                    ): (
                        <Carousel
                           data={cardsToRender}
                           renderComponent={(data) => <Card data={data} type={type}/>}
                        />
                    )}
                </div>
            )}
        </div>
    )
}