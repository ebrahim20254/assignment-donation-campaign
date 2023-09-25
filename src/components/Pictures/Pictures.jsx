import PictureCard from "./PictureCard";

const Pictures = ({pictures}) => {
    console.log(pictures);
    return (
        <div className="">
            <h2 className="py-6 text-4xl font-bold text-center">All Donation Pictures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    pictures?.map((picture => <PictureCard key={picture.id} picture={picture}></PictureCard>))
                }
            </div>
        </div>
    );
};

export default Pictures;