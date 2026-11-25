
"use client";

import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-black px-3 py-2">
      <Icon name="search" size={16} />

      <Input
        type="search"
        placeholder="Name / Mobile"
        aria-label="Search members"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
