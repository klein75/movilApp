import React, { useState } from "react";

const HomeViewModel = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: values });
  };

  return {
    ...values,
    onChange,
  };
};

export default HomeViewModel;
