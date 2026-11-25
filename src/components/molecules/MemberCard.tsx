
"use client";

import Icon from "../atoms/Icon";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";

// Estructura de los datos del miembro

export type Member = {
  id: string;
  name: string;
  mobile: string;
  memberNo: string;
  planExpiry: string;
  plan: string;
  batchTime: string;
  dueAmount: number | null;
  photo: string;
};

type MemberCardProps = {
  member: Member;
  onDelete: (member: Member) => void;
  deleting: boolean;
};

const actions = [
  { icon: "phone", label: "Call" },
  { icon: "whatsapp", label: "WhatsApp" },
  { icon: "renew", label: "Renew Plan" },
  { icon: "message", label: "Message" },
  { icon: "block", label: "Block" },
];

export default function MemberCard({
  member,
  onDelete,
  deleting,
}: MemberCardProps) {
  return (
    <article className="relative min-w-0 rounded-lg border border-[#9bd900] bg-black p-2">

      {/* Botón para eliminar */}

      <Button
        title="Delete member"
        aria-label={`Delete ${member.name}`}
        disabled={deleting}
        onClick={() => onDelete(member)}
        className="absolute right-1 top-1 rounded p-1 text-white hover:text-red-500 disabled:opacity-40"
      >
        <Icon name="trash" size={20} />
      </Button>

      {/* Fotografía del miembro */}

      <div className="flex justify-center">
        <Avatar
          photo={member.photo}
          name={member.name}
        />
      </div>

      {/* Información personal */}

      <div className="mt-2 space-y-1 text-[11px] leading-tight">

        <p className="break-words text-center">
          <span className="text-[#9bd900]">
            Name:
          </span>{" "}
          {member.name || "Unnamed"}
        </p>

        <div className="flex items-center gap-1">

          <Icon name="id" size={15} />

          <span className="text-[#9bd900]">
            M ID:
          </span>

          <span>{member.memberNo}</span>

        </div>

        <p className="break-words">
          <span className="text-[#9bd900]">
            Plan Expiry:
          </span>{" "}
          {member.planExpiry || "-"}
        </p>

        <p>
          <span className="text-[#9bd900]">
            Due Amount:
          </span>{" "}
          {member.dueAmount ?? "-"}
        </p>

      </div>

      {/* Acciones inferiores */}

      <div className="mt-3 flex items-start justify-between gap-0.5">

        {actions.map((action) => (

          <Button
            key={action.label}
            disabled
            aria-label={action.label}
            className="flex min-w-0 flex-col items-center gap-1 text-white"
          >

            <Icon name={action.icon} size={17} />

            <span className="whitespace-nowrap text-[6px] text-[#9bd900]">
              {action.label}
            </span>

          </Button>

        ))}

      </div>

    </article>
  );
}
