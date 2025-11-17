// Custom candle-themed icons
export function CandleIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="8" y="10" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="10" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="11" y="6" width="2" height="4" fill="currentColor"/>
      <path d="M12 2C12 2 10 4.5 10 6C10 7 11 8 12 8C13 8 14 7 14 6C14 4.5 12 2 12 2Z"
        fill="currentColor" opacity="0.7"/>
    </svg>
  );
}

export function FlameIcon({ className = "w-6 h-6", animated = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C12 2 6 10 6 14C6 18 9 22 12 22C15 22 18 18 18 14C18 10 12 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? "animate-pulse" : ""}
      />
      <path
        d="M12 8C12 8 9 12 9 14C9 16 10.5 18 12 18C13.5 18 15 16 15 14C15 12 12 8 12 8Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

export function ScentIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M8 16C8 16 6 14 6 11C6 8 8 6 8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M12 16C12 16 10 13 10 10C10 7 12 4 12 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M16 16C16 16 14 12 14 9C14 6 16 3 16 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandmadeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 11V7C7 5.9 7.9 5 9 5H15C16.1 5 17 5.9 17 7V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 11H19C20.1 11 21 11.9 21 13V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V13C3 11.9 3.9 11 5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="14" r="1" fill="currentColor"/>
    </svg>
  );
}

export function NaturalIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 22V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 7C17 9.8 14.8 12 12 12C9.2 12 7 9.8 7 7C7 4.2 12 2 12 2C12 2 17 4.2 17 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 17C8 17 9 16 12 16C15 16 16 17 16 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
