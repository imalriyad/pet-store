"use client";
import { Button } from "keep-react";
import love from "../assets/love.png";
const Card = () => {
  return (
    <div className="p-4">
      <div className="bg-[#EEEBE5] rounded-md">
        <img
          src="https://i.ibb.co/qDG1h4N/dog.png"
          className="w-[240px] object-cover h-[180px]"
          alt=""
        />
      </div>

      <div className="pt-3 space-y-2">
        <h1 className="font-semibold text-[#636262]">Grey Hoodie</h1>

        

        <h1 className="text-xl text-[#eca952]">$18.00</h1>
        <div className="flex items-center justify-between">
          <Button
            color="secondary"
            className="border uppercase border-[#b3b3b0] rounded-sm"
            size="xs"
            variant="outline"
          >
            Add to cart
          </Button>
          <Button
            color="secondary"
            className="border border-[#b3b3b0] rounded-sm "
            size="xs"
            variant="outline"
          >
            <img src={love} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
