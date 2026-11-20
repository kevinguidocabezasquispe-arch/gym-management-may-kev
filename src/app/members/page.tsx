
import Link from "next/link";
import {
  UsersRound,
  ChartNoAxesCombined,
  Banknote,
  Building2,
  Files,
  Plus,
} from "lucide-react";
const members = [
  {
    id: 1,
    name: "Robert Fox",
    expiry: "01 Sep 2023",
    plan: "General (800)",
    photo: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Jacob Jones",
    expiry: "15 Sep 2023",
    plan: "General (800)",
    photo: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 3,
    name: "Rose Bell",
    expiry: "01 Sep 2023",
    plan: "General (800)",
    photo: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 4,
    name: "Albert Flores",
    expiry: "10 Sep 2023",
    plan: "General (800)",
    photo: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 5,
    name: "Kristin Watson",
    expiry: "01 Sep 2023",
    plan: "General (800)",
    photo: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    expiry: "12 Sep 2023",
    plan: "General (800)",
    photo: "https://i.pravatar.cc/150?img=44",
  },
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative mx-auto min-h-screen max-w-[390px] bg-black pb-24">
        <header className="bg-[#9bd900] p-4 text-center text-black">
          <h1 className="font-bold">Gym Management</h1>
        </header>

        <div className="p-3">
          <input
            type="search"
            placeholder="Name / Mobile"
            className="w-full rounded-lg bg-[#171717] p-3 text-sm text-white"
          />

          <div className="my-3 flex gap-2">
            {["All Member", "All Plans", "Select Batch"].map((filter) => (
              <span
                key={filter}
                className="rounded-lg border border-[#9bd900] px-2 py-1 text-[10px] text-[#9bd900]"
              >
                {filter}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {members.map((member) => (
              <div
                key={member.id}
                className="rounded-lg border border-[#9bd900] p-2 text-[10px]"
              >
                <div className="flex justify-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>

                <p className="mt-2 text-center">
                  <span className="text-[#9bd900]">Name: </span>
                  {member.name}
                </p>

                <p>
                  <span className="text-[#9bd900]">ID: </span>
                  {member.id}
                </p>

                <p>
                  <span className="text-[#9bd900]">Plan Expiry: </span>
                  {member.expiry}
                </p>

                <p>
                  <span className="text-[#9bd900]">Due Amount: </span>0
                </p>

                <p>
                  <span className="text-[#9bd900]">Plan: </span>
                  {member.plan}
                </p>

                <div className="mt-2 flex justify-around text-sm">
                  <span>☎</span>
                  <span>◉</span>
                  <span>▣</span>
                  <span>✉</span>
                </div>
              </div>
            ))}
          </div>
        </div>

       
    {/* Barra inferior del gimnasio */}
<div className="fixed bottom-0 left-1/2 z-50 w-full max-w-[390px] -translate-x-1/2 bg-black">

  {/* Botón rojo para agregar miembro */}
  <Link
    href="/add-member"
    aria-label="Agregar miembro"
    className="absolute -top-14 right-3 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
  >
    <Plus size={36} strokeWidth={3} />
  </Link>

  <nav className="grid grid-cols-5 rounded-t-2xl bg-[#302c2c] px-1 py-4">

    <Link href="/members" className="flex flex-col items-center gap-1 text-[#9bd900]">
      <UsersRound size={26} />
      <span className="text-[10px]">Members</span>
    </Link>

    <div className="flex flex-col items-center gap-1 text-white">
      <ChartNoAxesCombined size={26} />
      <span className="text-[10px]">Dashboard</span>
    </div>

    <div className="flex flex-col items-center gap-1 text-white">
      <Banknote size={26} />
      <span className="text-[10px]">Collection</span>
    </div>

    <div className="flex flex-col items-center gap-1 text-white">
      <Building2 size={26} />
      <span className="text-[10px]">Gym</span>
    </div>

    <div className="flex flex-col items-center gap-1 text-white">
      <Files size={26} />
      <span className="text-[10px] text-center">
        Today Report
      </span>
    </div>

  </nav>

  <div className="flex h-6 items-center justify-center bg-black">
    <div className="h-1 w-28 rounded-full bg-white" />
  </div>
</div> 
      </div>
    </main>
  );
}
