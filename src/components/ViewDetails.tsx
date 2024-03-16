"use client";

import {Button} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ViewDetails = ({carId}: {carId: string}) => {
  return (
    <Button as={Link} fullWidth variant="faded" href={`/cars/${carId}`}>
      View Details
    </Button>
  );
};

export default ViewDetails;
