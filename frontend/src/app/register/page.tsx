"use client";
import React, { useState } from "react";
import RegisterForm from "@/components/register/RegisterForm";

const SellerRegisterPage = () => {

  return (
    <div className="max-w-2xl mx-auto p-6 bg-background rounded-lg shadow-md mt-8 mb-16">
      <RegisterForm />
    </div>
  );
};

export default SellerRegisterPage;
