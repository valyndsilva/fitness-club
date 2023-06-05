import Image from "next/image";
import React from "react";
import logo from "app/assets/logo-dark.png";

type Props = {};

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="logo"
        width={60}
        height={30}
        className="bg-black rounded-lg object-contain"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
