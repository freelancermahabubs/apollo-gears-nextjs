import Image from "next/image";
import React from "react";

const CarDetailPage = async (props: any) => {
  const res = await fetch(
    `https://0915ef4e-862d-4055-943f-303ac199da3d.mock.pstmn.io/cars/${props.params.carId}`
  );
  const {data} = await res.json();
  console.log(data);
  return (
    <div>
      CarDetailPage
      <h1>Car No. {props.params.carId}</h1>
      <Image
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        width={450}
        height={450}
        src={data[0].image}
      />
    </div>
  );
};

export async function generateStaticParams() {
  const res = await fetch(
    "https://0915ef4e-862d-4055-943f-303ac199da3d.mock.pstmn.io/cars"
  );
  const {data} = await res.json();
  return data.map((car: any) => ({
    carId: car.id,
  }));
}

export default CarDetailPage;
