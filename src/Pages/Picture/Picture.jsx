import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PictureImage from "./PictureImage";


const Picture = () => {

    const [picture, setPicture] = useState({})

    const {id} = useParams()
    console.log(id);

    const pictures= useLoaderData()
    console.log(pictures);

    useEffect(()=>{
        console.log("id,phones");

        const findPicture =  pictures?.find(picture => picture.id === id)
        console.log(findPicture);

        setPicture(findPicture)
    },[id, pictures])

    console.log(picture);
    return (
        <div>
            <PictureImage picture={picture}></PictureImage>
        </div>
    );
};

export default Picture;