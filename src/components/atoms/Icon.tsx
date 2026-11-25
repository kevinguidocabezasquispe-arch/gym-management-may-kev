
import type { ReactNode } from "react";

type IconProps = {
  name: string;
  size?: number;
};

export default function Icon({
  name,
  size = 20,
}: IconProps) {
  const paths: Record<string, ReactNode> = {
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
      <path d="M3 21V13h4v8M10 21V8h4v13M17 21V3h4v18" />
    ),
    collection: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M5 12h1M18 12h1" />
      </>
    ),
    gym: (
      <path d="M2 9v6M6 5v14M18 5v14M22 9v6M6 12h12" />
    ),
    report: (
      <path d="M5 2h9l5 5v15H5zM14 2v6h5M8 12h8M8 16h8" />
    ),
    menu: (
      <path d="M3 6h18M3 12h18M3 18h18" />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22v-3a8 8 0 0 1 16 0v3" />
      </>
    ),
    id: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <circle cx="8" cy="10" r="2" />
        <path d="M4 16h8M14 9h5M14 13h5" />
      </>
    ),
    plus: (
      <path d="M12 4v16M4 12h16" />
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
