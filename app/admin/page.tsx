"use client";

import ContentEditor from "@/components/admin/ContentEditor";
import LoginForm from "@/components/admin/LoginForm";
import { useCms } from "@/lib/cms";

export default function AdminPage() {
  const { isAuthed, hydrated } = useCms();

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <p className="text-sage">Laden…</p>
      </div>
    );
  }

  if (!isAuthed) {
    return <LoginForm />;
  }

  return <ContentEditor />;
}
