import React from "react"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image'

const useStyles = makeStyles({
    root: {},
    img: {

    }
})

const selectedImgStyle = {
    transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
}

type ContOption = {
    backgroundColor: string;
    cursor: string;
    overflow: string;
    position: "relative" | "absolute";
    left: number;
    top: number;
}

const cont: ContOption = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    left: 0,
    top: 0
}

const GridGalleryItem = ({
    index,
    photo,
    margin,
    direction,
    top,
    left,
}: any) => {
    const classes = useStyles()
    // calculate x,y scale
    const sx = (100 - (30 / photo.width) * 100) / 100;
    const sy = (100 - (30 / photo.height) * 100) / 100;
    selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

    if (direction === "column") {
        cont.position = 'absolute';
        cont.left = left;
        cont.top = top;
    }

    const handleOnClick = () => {

    }

    return (
        <div
            style={{ margin, height: photo.height, width: photo.width, ...cont }}
        >
            <Image
                key={index}
                alt={photo.title}
                src={photo.src}
                className={clsx(classes.img)}
                onClick={handleOnClick}
            />
            <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
        </div>
    );
};

export default GridGalleryItem;
