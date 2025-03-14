"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </main>
  );
}
