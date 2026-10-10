import { Clock, Plus, Star } from "lucide-react";

interface dishCardProps {
    name: string;
    image:string;
    price:string;
    description:string
}

const DishCard = ({name,image,price,description}:dishCardProps) => {
  return (
        <div className="rounded-2xl card-hover">
        {/* image section */}
        <div >
            <img src={image} alt="Dish" className="w-full h-48 object-cover rounded-lg"/>
        </div>
        {/* details section */}
        <div className="px-2 py-3">
            <h3 className="text-lg font-bold text-primary">{name}</h3>
            <p className="text-xs font-light text-main">{description}</p>
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center justify-center gap-1">
                    <Star size={15} className="text-amber-500"/>
                    <p className="text-rating font-bold">4.8</p>
                </div>

                <div className="flex items-center justify-center gap-1">
                    <Clock size={15} className="text-main"/>
                    <p className="text-main font-bold">20–30 min</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <h3 className="text-main font-medium text-lg">{price}</h3>
                <div className="p-2 rounded-full bg-primary cursor-pointer">
                    <Plus size={15}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DishCard;
