
"use client";

import { useState, useEffect } from "react";
import { MEMBERS_API } from "../../lib/api";
import MembersTemplate from "../../components/templates/MembersTemplate";
import type { Member } from "../../components/molecules/MemberCard";

export default function MembersPage() {

  // Estados de los miembros

  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState("");

  const [memberFilter, setMemberFilter] = useState("All");
  const [planFilter, setPlanFilter] = useState("All");
  const [batchFilter, setBatchFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Obtener miembros desde MockAPI

  useEffect(() => {
    const controller = new AbortController();

    async function loadMembers() {
      try {
        const response = await fetch(MEMBERS_API, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Error al consultar MockAPI");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Respuesta incorrecta");
        }

        const formattedMembers: Member[] = data.map(
          (member: Record<string, unknown>) => ({
            id: String(member.id),
            name: String(member.name ?? ""),
            mobile: String(member.mobile ?? ""),
            memberNo: String(member.memberNo || member.id),
            planExpiry: String(member.planExpiry ?? ""),
            plan: String(member.plan ?? ""),
            batchTime: String(member.batchTime ?? ""),
            photo: String(member.photo ?? ""),

            dueAmount:
              member.dueAmount !== null &&
              member.dueAmount !== undefined &&
              String(member.dueAmount).trim() !== "" &&
              Number.isFinite(Number(member.dueAmount))
                ? Number(member.dueAmount)
                : null,
          })
        );

        if (!controller.signal.aborted) {
          setMembers(formattedMembers);
        }

      } catch {
        if (!controller.signal.aborted) {
          setError("Could not connect to MockAPI.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadMembers();

    return () => controller.abort();

  }, []);

  // Eliminar miembro permanentemente

  async function deleteMember(member: Member) {
    if (deletingId !== null) return;

    const confirmed = window.confirm(
      `Delete ${member.name}?`
    );

    if (!confirmed) return;

    setDeletingId(member.id);
    setError("");

    try {
      const response = await fetch(
        `${MEMBERS_API}/${encodeURIComponent(member.id)}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting member");
      }

      setMembers((previous) =>
        previous.filter(
          (item) => item.id !== member.id
        )
      );

    } catch {
      setError("Could not delete the member.");
    } finally {
      setDeletingId(null);
    }
  }

  // Obtener planes disponibles

  const plans = Array.from(
    new Set(
      members.map((member) => member.plan).filter(Boolean)
    )
  );

  // Obtener horarios disponibles

  const batches = Array.from(
    new Set(
      members.map((member) => member.batchTime).filter(Boolean)
    )
  );

  // Buscador y filtros

  const filteredMembers = members.filter((member) => {

    const query = search.trim().toLowerCase();

    const matchesSearch =
      member.name.toLowerCase().includes(query) ||
      member.mobile.includes(query);

    const matchesMember =
      memberFilter === "All" ||
      (memberFilter === "Paid" &&
        member.dueAmount === 0) ||
      (memberFilter === "Pending" &&
        member.dueAmount !== null &&
        member.dueAmount > 0);

    const matchesPlan =
      planFilter === "All" ||
      member.plan === planFilter;

    const matchesBatch =
      batchFilter === "All" ||
      member.batchTime === batchFilter;

    return (
      matchesSearch &&
      matchesMember &&
      matchesPlan &&
      matchesBatch
    );
  });

  // Mostrar la plantilla

  return (
    <MembersTemplate
      members={filteredMembers}
      search={search}
      memberFilter={memberFilter}
      planFilter={planFilter}
      batchFilter={batchFilter}
      plans={plans}
      batches={batches}
      loading={loading}
      error={error}
      deletingId={deletingId}
      onSearchChange={setSearch}
      onMemberChange={setMemberFilter}
      onPlanChange={setPlanFilter}
      onBatchChange={setBatchFilter}
      onDelete={deleteMember}
    />
  );
}
