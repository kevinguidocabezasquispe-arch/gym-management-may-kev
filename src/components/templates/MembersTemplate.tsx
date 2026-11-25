
"use client";

import Link from "next/link";
import Icon from "../atoms/Icon";
import MembersHeader from "../organisms/MembersHeader";
import MemberFilters from "../molecules/MemberFilters";
import MemberList from "../organisms/MemberList";
import BottomNavigation from "../organisms/BottomNavigation";
import type { Member } from "../molecules/MemberCard";

type MembersTemplateProps = {
  members: Member[];
  search: string;
  memberFilter: string;
  planFilter: string;
  batchFilter: string;
  plans: string[];
  batches: string[];
  loading: boolean;
  error: string;
  deletingId: string | null;

  onSearchChange: (value: string) => void;
  onMemberChange: (value: string) => void;
  onPlanChange: (value: string) => void;
  onBatchChange: (value: string) => void;
  onDelete: (member: Member) => void;
};

export default function MembersTemplate({
  members,
  search,
  memberFilter,
  planFilter,
  batchFilter,
  plans,
  batches,
  loading,
  error,
  deletingId,
  onSearchChange,
  onMemberChange,
  onPlanChange,
  onBatchChange,
  onDelete,
}: MembersTemplateProps) {
  return (
    <main
      translate="no"
      className="flex h-dvh justify-center overflow-hidden bg-black text-white"
    >
      <div className="relative flex h-full w-full max-w-[390px] flex-col overflow-hidden bg-[#101010]">

        {/* Encabezado y buscador */}

        <MembersHeader
          search={search}
          onSearchChange={onSearchChange}
        />

        {/* Filtros */}

        <MemberFilters
          memberFilter={memberFilter}
          planFilter={planFilter}
          batchFilter={batchFilter}
          plans={plans}
          batches={batches}
          onMemberChange={onMemberChange}
          onPlanChange={onPlanChange}
          onBatchChange={onBatchChange}
        />

        {/* Listado de miembros */}

        <MemberList
          members={members}
          loading={loading}
          error={error}
          deletingId={deletingId}
          onDelete={onDelete}
        />

        {/* Botón para agregar miembros */}

        <Link
          href="/add-member"
          aria-label="Add Member"
          className="absolute bottom-[76px] right-3 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700"
        >
          <Icon name="plus" size={30} />
        </Link>

        {/* Menú inferior */}

        <BottomNavigation />

      </div>
    </main>
  );
}
