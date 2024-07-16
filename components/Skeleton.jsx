import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonDefaultPage () {
    return (
        <div className="container mx-auto px-5"> <div className="mt-6"> <h1 className="font-bold text-lg"> <Skeleton /> </h1> </div> <div className="my-3"> <p className="opacity-85"> <Skeleton count={4} /> </p> </div> <div className="relative h-[500px] mb-5"> <Skeleton height={500} /> </div> </div>
    )
}