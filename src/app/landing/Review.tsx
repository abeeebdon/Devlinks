import { ReviewType } from "@/components/types";
import { IoIosStar } from "react-icons/io";

export const Review = ({ author, text, rating }: ReviewType) => {
  return (
    <div className="flex-col text-left bg-lgray shadow p-3 rounded-md max-w-[350px]">
      <h3 className="text-lg text-gray">{author}</h3>
      <p className=" my-2 text-dgrap">{text}</p>
      <Rating rating={rating} />
    </div>
  );
};

const Rating = (prop: any) => {
  const { rating } = prop;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<IoIosStar key={i} color="gold" />);
    } else {
      stars.push(<IoIosStar key={i} color="butter" />);
    }
  }

  return <div className="flex items-center">{stars}</div>;
};
