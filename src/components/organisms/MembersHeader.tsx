
"use client";

import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import SearchBar from "../molecules/SearchBar";

type MembersHeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function MembersHeader({
  search,
  onSearchChange,
}: MembersHeaderProps) {
  return (
    <header className="shrink-0 bg-[#9bd900] px-3 pb-3 pt-2">

      {/* Encabezado principal */}

      <div className="relative mb-2 flex h-9 items-center justify-center">

        <Button
          disabled
          aria-label="Menu"
          className="absolute left-0 text-white"
        >
          <Icon name="menu" size={20} />
        </Button>

        <div className="flex items-center gap-2 text-black">

          <Icon name="gym" size={28} />

          <h1 className="text-xs font-extrabold">
            GYM MANAGEMENT
          </h1>

        </div>

      </div>

      {/* Buscador y botón SMS */}

      <div className="flex gap-2">

        <SearchBar
          value={search}
          onChange={onSearchChange}
        />

        <Button
          disabled
          className="rounded-lg bg-black px-4 text-xs font-bold text-white"
        >
          SMS
        </Button>

      </div>

    </header>
  );
}
