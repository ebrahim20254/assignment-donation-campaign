import { Link } from "react-router-dom";

const PictureCard = ({picture}) => {
    const {id, card_title, image, card_description, card_bg, text_bg} = picture || {}
    return (
       <div>
         <Link to={`/pictures/${id}`}>
         <div style={{background:card_bg}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={image} alt="ui/ux review check"/>
        </div>
        <div className="p-6">
         <h4 style={{background:card_bg, color:text_bg}} className="w-[30%] text-center font-semibold rounded ">
       {card_title}</h4>
       <p style={{color:text_bg}} className="mt-3 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
        {card_description}
        </p>
       </div>
     </div>
         </Link>
       </div>
    );
};

export default PictureCard;