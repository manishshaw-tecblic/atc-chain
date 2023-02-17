import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { getAllMainCategory } from "../../../fetchers/universalFetch";
import { parts } from "../../../utils/data";
import PartsPopOver from "../../Ui/PopOver/PartsPopOver";

const ProductHoverOverView = () => {
  //getting Maincategory product deatils
  const { isLoading, isError, data, error, isIdle, onSuccess } = useQuery({
    queryKey: ["productOverview"],
    queryFn: getAllMainCategory,
  });
  //setting the slider products
  const productData = data?.data?.response?.primary_products;
  console.log("productData-----------", productData);
  return (
    <div className="relative flex flex-wrap-reverse">
      <Image
        className="w-full h-full   "
        src="/assets/icons/svg/Main-Poster.svg"
        width={500}
        height={500}
      />
      {parts?.map((part, i) => (
        <div
          key={i}
          style={{
            top: part.top,
            left: part.left,

            opacity: part.opacity,
          }}
          className=" rounded-full z-0 absolute"
        >
          <PartsPopOver title={part.title} imageUrl={part.imageUrl} />
        </div>
      ))}
    </div>
  );
};

export default ProductHoverOverView;
