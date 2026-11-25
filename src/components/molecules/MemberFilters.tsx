
"use client";

type MemberFiltersProps = {
  memberFilter: string;
  planFilter: string;
  batchFilter: string;
  plans: string[];
  batches: string[];
  onMemberChange: (value: string) => void;
  onPlanChange: (value: string) => void;
  onBatchChange: (value: string) => void;
};

export default function MemberFilters({
  memberFilter,
  planFilter,
  batchFilter,
  plans,
  batches,
  onMemberChange,
  onPlanChange,
  onBatchChange,
}: MemberFiltersProps) {
  const filterStyle =
    "w-full min-w-0 rounded-md border border-[#9bd900] bg-black px-1 py-2 text-[10px] text-[#9bd900] outline-none";

  return (
    <section className="grid shrink-0 grid-cols-3 gap-1.5 px-3 py-2">

      <select
        aria-label="Filter members"
        value={memberFilter}
        onChange={(e) => onMemberChange(e.target.value)}
        className={filterStyle}
      >
        <option value="All">All Member</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
      </select>

      <select
        aria-label="Filter plans"
        value={planFilter}
        onChange={(e) => onPlanChange(e.target.value)}
        className={filterStyle}
      >
        <option value="All">All Plans</option>

        {plans.map((plan) => (
          <option key={plan} value={plan}>
            {plan}
          </option>
        ))}
      </select>

      <select
        aria-label="Filter schedules"
        value={batchFilter}
        onChange={(e) => onBatchChange(e.target.value)}
        className={filterStyle}
      >
        <option value="All">Select Batch</option>

        {batches.map((batch) => (
          <option key={batch} value={batch}>
            {batch}
          </option>
        ))}
      </select>

    </section>
  );
}
