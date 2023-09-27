
const Banner = () => {
    return (
            <div className="relative  ">
            <img src="https://i.ibb.co/rFZbKTf/Rectangle-4281.png" className="opacity-60" alt="" />
             <div className="flex absolute flex-col  ml-48" >
                <h2  className="text-xl md:text-4xl lg:text-6xl -mt-48 font-bold   ">I Grow By Helping People In Need</h2>
                <div className=" flex my-4">
                <input type="text" placeholder="Search here...." className="input input-bordered input-primary w-full max-w-xs px-16 ml-48" />
                <button className="text-2xl bg-red-400 px-5 rounded py-2 text-white">search</button>  
                </div>
             </div>       
            </div>
    );
};

export default Banner;