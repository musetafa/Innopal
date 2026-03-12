import React from "react";
import { IconoirPlus } from "@ey-xd/motif-icon";
import MotifIcon from "../MotifIcon";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className = "", logos, ...props }: LogoCloudProps) {
  const cardClasses = [
    "relative border-r border-b", // 1
    "border-b md:border-r", // 2
    "relative border-r border-b", // 3
    "relative border-b", // 4
    "relative border-r border-b md:border-b-0", // 5
    "border-b md:border-r md:border-b-0", // 6
    "border-r", // 7
    "", // 8 (if we had 8)
  ];

  const getToneClass = (index: number) => {
    const columns = 4;
    const row = Math.floor(index / columns);
    const col = index % columns;
    return (row + col) % 2 === 0 ? "bg-white" : "bg-slate-100/70";
  };

  return (
    <div
      className={`relative grid grid-cols-2 border-x border-white/10 md:grid-cols-4 ${className}`}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/10" />

      {logos.map((logo, i) => {
        const isFirst = i === 0;
        const isThird = i === 2;
        const isFifth = i === 4;

        return (
          <LogoCard
            key={i}
            className={`${cardClasses[i % cardClasses.length]} ${getToneClass(i)}`}
            logo={logo}
          >
            {isFirst && (
              <MotifIcon
                icon={IconoirPlus}
                size="24"
                fill="#656579"
                strokeWidth="1"
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10"
              />
            )}
            {isThird && (
              <>
                <MotifIcon
                  icon={IconoirPlus}
                  size="24"
                  fill="#656579"
                  strokeWidth="1"
                  className="-right-[12.5px] -bottom-[12.5px] absolute z-10"
                />
                <MotifIcon
                  icon={IconoirPlus}
                  size="24"
                  fill="#656579"
                  strokeWidth="1"
                  className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden md:inline-flex"
                />
              </>
            )}
            {isFifth && (
              <MotifIcon
                icon={IconoirPlus}
                size="24"
                fill="#656579"
                strokeWidth="1"
                className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 md:hidden"
              />
            )}
          </LogoCard>
        );
      })}

      {/* If fewer than 8 logos are provided, we keep the grid balanced with an empty slot */}
      {logos.length === 7 && (
        <div
          className={`flex items-center justify-center px-4 py-8 md:p-8 ${cardClasses[7]} ${getToneClass(7)}`}
        />
      )}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/10" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className = "", children, ...props }: LogoCardProps) {
  return (
    <div
      className={`flex items-center justify-center px-4 py-8 md:p-12 border-white/10 ${className}`}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-10 md:h-12 object-contain select-none"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
