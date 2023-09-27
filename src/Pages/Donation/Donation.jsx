import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([])
    const [noFound, setNoFound] = useState(0)
    const [isShow, setIsShow] = useState(false)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if(donationItems){
            setDonation(donationItems)


            let sum = 0
            donationItems.forEach(element => { sum += Number(element.price)

                localStorage.setItem('sum', JSON.stringify(donationItems))
            });
              setTotalPrice(sum)
            // const total = donationItems.reduce((currentValue) =>{ console.log(currentValue);})

            // setTotalPrice(total)
        }
        else{
            setNoFound('No Data found')
        }
    },[])

    console.log(isShow);
    console.log(donation);
    return (
        <div>
            <h2>Total price: {totalPrice}</h2>
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> 
                : <div>
                    <div className="grid grid-cols-2 "> 
                        {
                            isShow ? donation.map(picture => <DonationCard  key={picture.id} picture={picture}></DonationCard> ) :
                            donation.slice(0,4).map(picture => <DonationCard  key={picture.id} picture={picture}></DonationCard> )
                        }
                    </div>

                    {
                        donation.length > 4 && <button onClick={()=>setIsShow(!isShow)}
                        className="text-2xl bg-[#009444] px-4 rounded-xl block mx-auto text-white my-12 "
                        >{isShow ? "": "Show All"}
                        </button>
                    }
                </div>
            }
        </div>
    );
};

export default Donation;