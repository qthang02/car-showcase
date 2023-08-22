'use client';

import Image from "next/image";

const Avatar = () => {
  return (
      <Image
          height={30}
          width={30}
          className={"rounded-full"}
          src={"/image/placeholder.jpg"}
          alt={"Avatar"}
      />
  )
}

export default Avatar;