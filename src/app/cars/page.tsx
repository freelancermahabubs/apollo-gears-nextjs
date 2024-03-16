import ViewDetails from "@/components/ViewDetails";
import {Card, CardHeader} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const CarsPage = async (props: any) => {
  const res = await fetch(
    "https://0915ef4e-862d-4055-943f-303ac199da3d.mock.pstmn.io/cars"
  );
  const {data} = await res.json();

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {data?.map((item: any) => {
        return (
          <Card key={item?.id} className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {item?.model}
              </p>
              <h4 className="text-white font-medium text-large">
                {item?.name}
              </h4>
            </CardHeader>
            <Image
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              width={450}
              height={450}
              src={item?.image}
            />
            <ViewDetails carId={item?.id} />
          </Card>
        );
      })}
    </div>
  );
};

export default CarsPage;
