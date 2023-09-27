

const DonationCard = ({picture}) => {
    const { card_title, image, card_description, price, card_bg, text_bg} = picture || {}
    return (
        <div >
            <div style={{background: card_bg}}  className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border text-gray-700">
    <img 
      src={image}
      alt="image"
      className="h-full w-full object-cover "
    />
  </div>
  <div className="p-6">
    <h4 style={{background:card_bg, color:text_bg}} className=" w-[40%] rounded-lg text-center font-semibold mb-2 block font-sans text-2xl leading-snug tracking-normal text-blue-gray-900 antialiased">
      {card_title}
    </h4>
    <p className="mb-8 block font-sans text-xl font-bold leading-relaxed text-gray-700 antialiased">
      {card_description} </p>
      <h3 style={{background:card_bg, color:text_bg}} className="w-[30%] font-semibold text-center">{price}</h3>
    <a className="inline-block" href="#">
      <button style={{background:card_bg, color:text_bg}} 
        className=" px-5 rounded mt-4 font-semibold text-xl"
        type="button"
      >
        View Details
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default DonationCard;