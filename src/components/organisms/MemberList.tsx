
"use client";

import MemberCard from "../molecules/MemberCard";
import type { Member } from "../molecules/MemberCard";

type MemberListProps = {
  members: Member[];
  loading: boolean;
  error: string;
  deletingId: string | null;
  onDelete: (member: Member) => void;
};

export default function MemberList({
  members,
  loading,
  error,
  deletingId,
  onDelete,
}: MemberListProps) {
  return (
    <section className="min-h-0 flex-1 overflow-y-auto px-3 pb-20">

      {/* Estado de carga */}

      {loading && (
        <p className="py-8 text-center text-sm text-[#9bd900]">
          Loading members...
        </p>
      )}

      {/* Mensaje de error */}

      {error && (
        <p
          role="alert"
          className="py-4 text-center text-xs text-red-500"
        >
          {error}
        </p>
      )}

      {/* Listado de tarjetas */}

      <div className="grid grid-cols-2 gap-2">

        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onDelete={onDelete}
            deleting={deletingId !== null}
          />
        ))}

      </div>

      {/* Cuando no existen miembros */}

      {!loading && !error && members.length === 0 && (
        <div className="py-12 text-center">

          <p className="text-sm text-[#9bd900]">
            No members found.
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Add a new member or change the filters.
          </p>

        </div>
      )}

    </section>
  );
}
