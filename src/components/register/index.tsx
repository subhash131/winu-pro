"use client";
import React, { useState } from "react";
import Logo from "../ui/logo";
import InputField from "./input-field";

const Register = () => {
  const [displayname, setDisplayname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-fit h-fit pt-4 pb-10 px-10 rounded-lg bg-active flex flex-col gap-4">
        <div className="size-full flex items-center justify-center flex-col py-2 gap-1">
          <div className="flex gap-1 items-center justify-center">
            <h3>Create your account</h3>
            <Logo size={18} />
          </div>
          <p className="text-xs">
            Welcome! Please fill in the details to get started.
          </p>
        </div>
        <form className="size-full flex items-center justify-center flex-col gap-4">
          <InputField
            placeholder="Subhash"
            value={displayname}
            setValue={setDisplayname}
            fieldName="Display Name"
          />
          <InputField
            placeholder="realSubhash123"
            value={username}
            setValue={setUsername}
            fieldName="Username"
          />
          <InputField
            placeholder="sub@gmail.com"
            value={email}
            setValue={setEmail}
            fieldName="Email"
            type="email"
          />
          <InputField
            placeholder="*******"
            value={password}
            setValue={setPassword}
            fieldName="Password"
            type="password"
          />
          <button
            className="w-full bg-white text-black rounded-lg py-1.5 font-semibold mt-4 active:scale-95 transition-transform"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
