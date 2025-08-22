import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <Loader className="size-12 animate-spin text-primary" />
    </div>
  );
};

export default loading;
