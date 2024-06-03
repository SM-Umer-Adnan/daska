import Cards from "@/components/SoftwareCompany/Cards";
import Interface from "@/components/SoftwareCompany/Interface";
import Front from "@/components/SoftwareCompany/Front";
import Hell from "@/components/SoftwareCompany/Hell";
import Review from "@/components/SoftwareCompany/Review";
import Store from "@/components/SoftwareCompany/Store";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="overflow-hidden">
      
        <Front />
        <Cards />
        <Interface />
        <Hell />
        <Review />
        <Store />
      </div>
    </div>
  );
};

export default page;
