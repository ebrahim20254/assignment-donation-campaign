import swal from "sweetalert";


const PictureImage = ({picture}) => {
    
    const {id, donation_name, donation_image, donation_description, price} = picture || {}

   const handleAddToDonation = ()=>{
    const addDonationArray = []
    const donationItems = JSON.parse(localStorage.getItem('donation'))
    if(!donationItems) {
      addDonationArray.push(picture)
      localStorage.setItem('donation', JSON.stringify(addDonationArray))
      swal("Good job!", "picture clicked!", "success");
    }
    else{
      const isExits = donationItems.find(picture => picture.id === id)
      if(!isExits){
         addDonationArray.push(...donationItems, picture)
         localStorage.setItem('donation', JSON.stringify(addDonationArray))
         swal("Good job!", "picture clicked!", "success");
      }
      else{
        swal("error!", "picture clicked!", "success");
      }

    }

      //  console.log(picture);

      //  localStorage.setItem('test',[1,2,3,4])
   }

    return (
        <div className="w-[80%]">
        <div className="card card-compact">
          <img src={donation_image} alt="" />
          <div className="">
          <button
          onClick={handleAddToDonation}
           className="text-2xl font-bold bg-red-500 rounded text-white -my-16">donate {price}</button>
          </div>
       <h2 className="card-title text-4xl font-bold">
        {donation_name}</h2>
       <p className="text-xl">{donation_description}</p>
        </div>
         </div>
    );
};

export default PictureImage;