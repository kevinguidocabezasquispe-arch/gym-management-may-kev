
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const API_URL =
  "https://6b0049897fc363ccff0a01ff.mockapi.io/members";

const inputStyle =
  "w-full min-w-0 border-b border-dotted border-gray-600 bg-transparent px-1 py-1 text-sm text-white outline-none focus:border-[#9bd900]";

const labelStyle = "text-sm font-semibold text-[#9bd900]";

export default function AddMemberPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    gender: "Male",
    memberNo: "7",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    dateOfBirth: "",
    address: "",
    training: "Trainer",
    plan: "General | 800",
    batchTime: "6:00am to 7:00am",
    joiningDate: "",
    planExpiry: "",
    paidAmount: "",
    dueAmount: "",
    paymentMethod: "Cash",
    photo: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof typeof form, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  function handlePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Selecciona una imagen válida.");
      return;
    }

    if (file.size > 500_000) {
      setError("La fotografía debe pesar menos de 500 KB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      update("photo", String(reader.result));
      setError("");
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          dueAmount: Number(form.dueAmount || 0),
          paidAmount: Number(form.paidAmount || 0),
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar el miembro.");
      }

      router.push("/members");
      router.refresh();
    } catch {
      setError("Error al guardar en MockAPI. Intenta de nuevo.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto min-h-screen max-w-[390px] bg-black">
        <header className="flex items-center bg-[#9bd900] px-4 py-3 text-black">
          <Link href="/members" className="text-2xl" aria-label="Volver">
            ←
          </Link>
          <h1 className="flex-1 text-center font-bold">
            Add Member
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <div>
            <label className={labelStyle}>Name *</label>
            <input
              className={inputStyle}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
            />
          </div>

          <div>
            <label className={labelStyle}>Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhoto}
              className="mt-2 block w-full text-xs"
            />
            {form.photo && (
              <img
                src={form.photo}
                alt="Vista previa"
                className="mt-2 h-14 w-14 rounded-full object-cover"
              />
            )}
          </div>

          <div>
            <label className={labelStyle}>Mobile No. *</label>
            <input
              type="tel"
              className={inputStyle}
              value={form.mobile}
              onChange={(e) => update("mobile", e.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-4">
            <span className={labelStyle}>Gender:</span>
            {["Male", "Female"].map((gender) => (
              <label key={gender} className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  checked={form.gender === gender}
                  onChange={() => update("gender", gender)}
                  className="accent-[#9bd900]"
                />
                {gender}
              </label>
            ))}
          </div>

          <div>
            <label className={labelStyle}>Member No.</label>
            <input
              className={inputStyle}
              value={form.memberNo}
              onChange={(e) => update("memberNo", e.target.value)}
            />
          </div>

          <div>
            <p className={labelStyle}>Measurement</p>
            <div className="grid grid-cols-2 gap-3">
              {(["height", "weight", "chest", "waist"] as const).map(
                (field) => (
                  <input
                    key={field}
                    placeholder={field}
                    className={inputStyle}
                    value={form[field]}
                    onChange={(e) => update(field, e.target.value)}
                  />
                )
              )}
            </div>
          </div>

          <div>
            <label className={labelStyle}>Date of Birth</label>
            <input
              type="date"
              className={inputStyle}
              value={form.dateOfBirth}
              onChange={(e) => update("dateOfBirth", e.target.value)}
            />
          </div>

          <div>
            <label className={labelStyle}>Address</label>
            <input
              className={inputStyle}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className={labelStyle}>Training:</span>
            {["Trainer", "Personal"].map((training) => (
              <label key={training} className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  checked={form.training === training}
                  onChange={() => update("training", training)}
                  className="accent-[#9bd900]"
                />
                {training}
              </label>
            ))}
          </div>

          <div>
            <label className={labelStyle}>Plan</label>
            <select
              className={inputStyle}
              value={form.plan}
              onChange={(e) => update("plan", e.target.value)}
            >
              <option value="General | 800">General | 800</option>
              <option value="Premium | 1000">Premium | 1000</option>
              <option value="Golden | 1200">Golden | 1200</option>
            </select>
          </div>

          <div>
            <label className={labelStyle}>Batch Time</label>
            <select
              className={inputStyle}
              value={form.batchTime}
              onChange={(e) => update("batchTime", e.target.value)}
            >
              <option>6:00am to 7:00am</option>
              <option>7:00am to 8:00am</option>
              <option>5:00pm to 6:00pm</option>
              <option>6:00pm to 7:00pm</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelStyle}>Joining Date</label>
              <input
                type="date"
                className={inputStyle}
                value={form.joiningDate}
                onChange={(e) => update("joiningDate", e.target.value)}
              />
            </div>
            <div>
              <label className={labelStyle}>Plan Expiry</label>
              <input
                type="date"
                className={inputStyle}
                value={form.planExpiry}
                onChange={(e) => update("planExpiry", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className={labelStyle}>Paid Amount</label>
            <input
              type="number"
              min="0"
              className={inputStyle}
              value={form.paidAmount}
              onChange={(e) => update("paidAmount", e.target.value)}
            />
          </div>

          <div>
            <label className={labelStyle}>Due Amount</label>
            <input
              type="number"
              min="0"
              className={inputStyle}
              value={form.dueAmount}
              onChange={(e) => update("dueAmount", e.target.value)}
            />
          </div>

          <div>
            <label className={labelStyle}>Payment Method</label>
            <select
              className={inputStyle}
              value={form.paymentMethod}
              onChange={(e) => update("paymentMethod", e.target.value)}
            >
              <option>Cash</option>
              <option>Card</option>
              <option>Transfer</option>
            </select>
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-lg border border-[#9bd900] py-2 font-bold text-[#9bd900] disabled:opacity-50"
          >
            {saving ? "Guardando..." : "Save"}
          </button>
        </form>
      </div>
    </main>
  );
}
