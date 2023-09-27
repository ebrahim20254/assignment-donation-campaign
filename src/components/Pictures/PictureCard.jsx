import { Link } from "react-router-dom";

const PictureCard = ({picture}) => {
    const {id, card_title, image, card_description,} = picture || {}
    return (
       <div>
         <Link to={`/pictures/${id}`}>
         <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={image} alt="ui/ux review check"/>
        </div>
        <div className="p-6">
         <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
       {card_title}</h4>
       <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
        {card_description}
        </p>
       </div>
     </div>
         </Link>
       </div>
    );
};

export default PictureCard;