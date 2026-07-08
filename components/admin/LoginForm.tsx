"use client";

import { useState } from "react";
import { DEMO_CREDENTIALS, useCms } from "@/lib/cms";

export default function LoginForm() {
  const { login } = useCms();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(username, password);
    setError(!ok);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm rounded-card border border-teal-light bg-white p-8 shadow-soft">
        <p className="font-display text-2xl text-teal">MHB Ouders Weert</p>
        <h1 className="mt-1 font-display text-xl text-ink">Beheer — demo</h1>
        <p className="mt-2 text-sm text-sage">
          Dit is een demo-omgeving. Log in om te zien wat er aanpasbaar is.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink/80">
              Gebruikersnaam
            </span>
            <input
              type="text"
              value={username}
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-button border border-sage/40 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-teal"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-ink/80">
              Wachtwoord
            </span>
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-button border border-sage/40 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-teal"
            />
          </label>

          {error && (
            <p className="text-sm text-coral">
              Onjuiste combinatie. Gebruik de demo-gegevens hieronder.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-button bg-coral px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral/90"
          >
            Inloggen
          </button>
        </form>

        <div className="mt-6 rounded-button bg-teal-light/60 p-4 text-sm text-ink/80">
          <p className="label-text text-teal">Demo-inloggegevens</p>
          <p className="mt-2">
            Gebruikersnaam: <strong>{DEMO_CREDENTIALS.username}</strong>
            <br />
            Wachtwoord: <strong>{DEMO_CREDENTIALS.password}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
