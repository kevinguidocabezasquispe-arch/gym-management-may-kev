
"use client";

import Icon from "./Icon";

type AvatarProps = {
  photo: string;
  name: string;
};

export default function Avatar({
  photo,
  name,
}: AvatarProps) {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#282828] text-gray-400">

      <Icon name="user" size={26} />

      {/^(https?:\/\/|data:image\/)/i.test(photo) && (
        <img
          src={photo}
          alt={name}
          className="absolute inset-0 h-full w-full rounded-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}

    </div>
  );
}
