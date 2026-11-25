
"use client";

import Link from "next/link";
import { useState } from "react";

const initialMembers = [
  {
    id: 1,
    name: "Robert Fox",
    mobile: "70010001",
    expiry: "01 Sep 2023",
    plan: "General",
    batch: "Morning",
    due: 0,
    photo: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Jacob Jones",
    mobile: "70010002",
    expiry: "15 Sep 2023",
    plan: "General",
    batch: "Evening",
    due: 0,
    photo: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 3,
    name: "Rose Bell",
    mobile: "70010003",
    expiry: "01 Sep 2023",
    plan: "General",
    batch: "Morning",
    due: 0,
    photo: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 4,
    name: "Albert Flores",
    mobile: "70010004",
    expiry: "10 Sep 2023",
    plan: "Premium",
    batch: "Evening",
    due: 0,
    photo: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 5,
    name: "Kristin Watson",
    mobile: "70010005",
    expiry: "01 Sep 2023",
    plan: "General",
    batch: "Morning",
    due: 0,
    photo: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    mobile: "70010006",
    expiry: "12 Sep 2023",
    plan: "Golden",
    batch: "Evening",
    due: 0,
    photo: "https://i.pravatar.cc/150?img=44",
  },
];

const navigation = [
  { name: "Members", icon: "members" },
  { name: "Dashboard", icon: "dashboard" },
  { name: "Collection", icon: "collection" },
  { name: "Gym", icon: "gym" },
  { name: "Today Report", icon: "report" },
];

// ICONOS SVG SIN INSTALAR LIBRERÍAS

function Icon({
  name,
  size = 20,
}: {
  name: string;
  size?: number;
}) {
  const paths: Record<string, React.ReactNode> = {
    trash: (
      <>
        <path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15" />
        <path d="M10 10v7M14 10v7" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19 19 0 0 1 3 5.2 2 2 0 0 1 5 3h3l2 5-3 2a16 16 0 0 0 7 7l2-3z" />
    ),
    whatsapp: (
      <>
        <path d="M4 19l1-4a9 9 0 1 1 4 5l-5 1z" />
        <path d="M9 8c-2 4 3 8 6 7l1-2-3-1-1 1-2-2 1-1z" />
      </>
    ),
    renew: (
      <>
        <path d="M20 7a9 9 0 1 0 1 9" />
        <path d="M20 2v6h-6" />
      </>
    ),
    message: (
      <>
        <path d="M3 3h18v14H8l-5 4z" />
        <path d="M7 7h10M7 11h10" />
      </>
    ),
    block: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M6 18L18 6" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="M15 15l5 5" />
      </>
    ),
    members: (
      <>
        <circle cx="8" cy="6" r="3" />
        <circle cx="17" cy="6" r="3" />
        <path d="M2 21v-6a6 6 0 0 1 12 0v6M16 12a5 5 0 0 1 6 5v4" />
      </>
    ),
    dashboard: (
      <>
        <path d="M3 21V13h4v8M10 21V8h4v13M17 21V3h4v18" />
      </>
    ),
    collection: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M5 12h1M18 12h1" />
      </>
    ),
    gym: (
      <>
        <path d="M2 9v6M6 5v14M18 5v14M22 9v6M6 12h12" />
      </>
    ),
    report: (
      <>
        <path d="M5 2h9l5 5v15H5zM14 2v6h5M8 12h8M8 16h8" />
      </>
    ),
    menu: (
      <path d="M3 6h18M3 12h18M3 18h18" />
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function MembersPage() {
  const [members, setMembers] = useState(initialMembers);

  const [search, setSearch] = useState("");
  const [memberFilter, setMemberFilter] = useState("All");
  const [planFilter, setPlanFilter] = useState("All");
  const [batchFilter, setBatchFilter] = useState("All");

  // ELIMINAR MIEMBRO

  function deleteMember(id: number) {
    setMembers((previous) =>
      previous.filter((member) => member.id !== id)
    );
  }

  // BUSCADOR Y FILTROS

  const filteredMembers = members.filter((member) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      member.name.toLowerCase().includes(query) ||
      member.mobile.includes(query);

    const matchesMember =
      memberFilter === "All" ||
      (memberFilter === "Paid" && member.due === 0) ||
      (memberFilter === "Pending" && member.due > 0);

    const matchesPlan =
      planFilter === "All" || member.plan === planFilter;

    const matchesBatch =
      batchFilter === "All" || member.batch === batchFilter;

    return (
      matchesSearch &&
      matchesMember &&
      matchesPlan &&
      matchesBatch
    );
  });

  const filterStyle =
    "w-full min-w-0 rounded-md border border-[#9bd900] bg-black px-1 py-1.5 text-[10px] text-[#9bd900] outline-none";

  return (
    <main
      translate="no"
      className="flex h-dvh justify-center overflow-hidden bg-black text-white"
    >
      <div className="relative flex h-full w-full max-w-[390px] flex-col overflow-hidden bg-[#101010]">

        {/* ENCABEZADO */}

        <header className="shrink-0 bg-[#9bd900] px-3 pb-3 pt-2">

          <div className="relative mb-2 flex h-9 items-center justify-center">

            <button
              type="button"
              disabled
              aria-label="Menu"
              className="absolute left-0 text-white"
            >
              <Icon name="menu" size={20} />
            </button>

            <div className="flex items-center gap-2 text-black">
              <Icon name="gym" size={26} />
              <span className="text-xs font-extrabold">
                GYM MANAGEMENT
              </span>
            </div>

          </div>

          {/* BUSCADOR */}

          <div className="flex gap-2">

            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-black px-2.5 py-2">

              <Icon name="search" size={16} />

              <input
                type="search"
                aria-label="Search members"
                placeholder="Name / Mobile"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="min-w-0 w-full bg-transparent text-xs text-white outline-none placeholder:text-gray-300"
              />

            </div>

            <button
              type="button"
              disabled
              className="rounded-lg bg-black px-4 text-xs font-bold text-white"
            >
              SMS
            </button>

          </div>

        </header>

        {/* FILTROS */}

        <section className="grid shrink-0 grid-cols-3 gap-1.5 px-3 py-2">

          <select
            aria-label="Filter members"
            value={memberFilter}
            onChange={(e) => setMemberFilter(e.target.value)}
            className={filterStyle}
          >
            <option value="All">All Member</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>

          <select
            aria-label="Filter plans"
            value={planFilter}
            onChange={(e) => setPlanFilter(e.target.value)}
            className={filterStyle}
          >
            <option value="All">All Plans</option>
            <option value="General">General</option>
            <option value="Premium">Premium</option>
            <option value="Golden">Golden</option>
          </select>

          <select
            aria-label="Filter schedules"
            value={batchFilter}
            onChange={(e) => setBatchFilter(e.target.value)}
            className={filterStyle}
          >
            <option value="All">Select Batch</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>

        </section>

        {/* LISTADO DE MIEMBROS */}

        <section className="min-h-0 flex-1 overflow-y-auto px-3 pb-16">

          <div className="grid grid-cols-2 gap-2">

            {filteredMembers.map((member) => (

              <article
                key={member.id}
                className="relative min-w-0 rounded-lg border border-[#9bd900] bg-black p-2"
              >

                {/* BOTÓN ELIMINAR */}

                <button
                  type="button"
                  onClick={() => deleteMember(member.id)}
                  aria-label={`Delete ${member.name}`}
                  title="Delete member"
                  className="absolute right-1.5 top-1.5 rounded p-1 text-white transition-colors hover:text-red-500"
                >
                  <Icon name="trash" size={19} />
                </button>

                {/* FOTOGRAFÍA */}

                <div className="flex justify-center">

                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                </div>

                {/* DATOS DEL MIEMBRO */}

                <div className="mt-1.5 space-y-1 text-[11px] leading-tight">

                  <p className="text-center">

                    <span className="text-[#9bd900]">
                      Name:
                    </span>{" "}

                    {member.name}

                  </p>

                  <p>

                    <span className="text-[#9bd900]">
                      M ID:
                    </span>{" "}

                    {member.id}

                  </p>

                  <p>

                    <span className="text-[#9bd900]">
                      Plan Expiry:
                    </span>{" "}

                    {member.expiry}

                  </p>

                  <p>

                    <span className="text-[#9bd900]">
                      Due Amount:
                    </span>{" "}

                    {member.due}

                  </p>

                </div>

                {/* ICONOS INFERIORES DE LA TARJETA */}

                <div className="mt-2 flex items-start justify-between gap-0.5">

                  {[
                    { icon: "phone", label: "Call" },
                    { icon: "whatsapp", label: "WhatsApp" },
                    { icon: "renew", label: "Renew Plan" },
                    { icon: "message", label: "Message" },
                    { icon: "block", label: "Block" },
                  ].map((action) => (

                    <button
                      key={action.label}
                      type="button"
                      disabled
                      aria-label={action.label}
                      className="flex min-w-0 flex-col items-center gap-1 text-white"
                    >

                      <Icon name={action.icon} size={17} />

                      <span className="whitespace-nowrap text-[6px] text-[#9bd900]">
                        {action.label}
                      </span>

                    </button>

                  ))}

                </div>

              </article>

            ))}

          </div>

          {filteredMembers.length === 0 && (

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

        {/* BOTÓN ROJO PARA AGREGAR MIEMBROS */}

        <Link
          href="/add-member"
          aria-label="Add Member"
          className="absolute bottom-[76px] right-3 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-4xl font-light text-white shadow-lg transition-colors hover:bg-red-700"
        >
          +
        </Link>

        {/* MENÚ INFERIOR */}

        <footer className="z-30 shrink-0 border-t border-[#333] bg-[#292929] pb-[env(safe-area-inset-bottom)]">

          <nav
            aria-label="Bottom navigation"
            className="grid h-[62px] grid-cols-5"
          >

            {navigation.map((item, index) => (

              <button
                key={item.name}
                type="button"
                disabled={index !== 0}
                aria-current={index === 0 ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 ${
                  index === 0
                    ? "text-[#9bd900]"
                    : "text-white"
                }`}
              >

                <Icon name={item.icon} size={23} />

                <span className="text-[9px]">
                  {item.name}
                </span>

              </button>

            ))}

          </nav>

        </footer>

      </div>
    </main>
  );
}
