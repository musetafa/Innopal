import { useState, useEffect, type FormEvent, type ReactNode } from "react";

const STORAGE_KEY = "innopal_auth";
const HASH = "c3R1ZGlvLWltbWVyc2lvbg=="; // base64 of password

function check(input: string) {
  return btoa(input) === HASH;
}

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (check(value.trim())) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col items-center gap-6"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">
            EY Studio<span className="text-primary">+</span>
          </h1>
          <p className="text-primary-50 text-sm">
            Veuillez entrer le mot de passe pour accéder au site
          </p>
        </div>

        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Mot de passe"
          autoFocus
          className={`w-full px-4 py-3 rounded-lg border bg-white text-primary text-sm outline-none transition-all ${
            error
              ? "border-red-400 animate-[shake_0.3s_ease-in-out]"
              : "border-black/10 focus:border-black/30"
          }`}
        />

        {error && (
          <p className="text-red-500 text-xs -mt-4">Mot de passe incorrect</p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#2E2E38] text-white text-sm font-medium hover:bg-[#3a3a46] transition-colors"
        >
          Accéder
        </button>
      </form>
    </div>
  );
}
