import React from "react";

function Avatar({
  character,
  className,
}: {
  character: string;
  className?: string;
}) {
  return (
    <div>
      <div
        className={`rounded-full flex justify-center items-center bg-accentcolor text-white size-10 text-xl font-semibold ${className}`}
      >
        {character[0].toUpperCase()}
      </div>
    </div>
  );
}

export default Avatar;
