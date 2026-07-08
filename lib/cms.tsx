"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultContent, type SiteContent } from "@/lib/content";

const CONTENT_KEY = "mhb-content-v1";
const AUTH_KEY = "mhb-cms-auth-v1";

export const DEMO_CREDENTIALS = {
  username: "demo",
  password: "mhb2026",
};

type CmsContextValue = {
  content: SiteContent;
  setContent: (updater: (prev: SiteContent) => SiteContent) => void;
  resetContent: () => void;
  isAuthed: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  hydrated: boolean;
};

const CmsContext = createContext<CmsContextValue | null>(null);

function mergeStored(parsed: Partial<SiteContent>): SiteContent {
  return { ...defaultContent, ...parsed };
}

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(defaultContent);
  const [isAuthed, setIsAuthed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONTENT_KEY);
      if (raw) {
        setContentState(mergeStored(JSON.parse(raw)));
      }
    } catch {
      // ignore corrupt storage, keep defaults
    }
    try {
      setIsAuthed(localStorage.getItem(AUTH_KEY) === "1");
    } catch {
      // ignore
    }
    setHydrated(true);

    const onStorage = (event: StorageEvent) => {
      if (event.key === CONTENT_KEY) {
        try {
          setContentState(
            event.newValue
              ? mergeStored(JSON.parse(event.newValue))
              : defaultContent,
          );
        } catch {
          setContentState(defaultContent);
        }
      }
      if (event.key === AUTH_KEY) {
        setIsAuthed(event.newValue === "1");
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setContent = useCallback(
    (updater: (prev: SiteContent) => SiteContent) => {
      setContentState((prev) => {
        const next = updater(prev);
        try {
          localStorage.setItem(CONTENT_KEY, JSON.stringify(next));
        } catch {
          // ignore quota errors in demo
        }
        return next;
      });
    },
    [],
  );

  const resetContent = useCallback(() => {
    setContentState(defaultContent);
    try {
      localStorage.removeItem(CONTENT_KEY);
    } catch {
      // ignore
    }
  }, []);

  const login = useCallback((username: string, password: string) => {
    const ok =
      username.trim().toLowerCase() === DEMO_CREDENTIALS.username &&
      password === DEMO_CREDENTIALS.password;
    if (ok) {
      setIsAuthed(true);
      try {
        localStorage.setItem(AUTH_KEY, "1");
      } catch {
        // ignore
      }
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    setIsAuthed(false);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch {
      // ignore
    }
  }, []);

  return (
    <CmsContext.Provider
      value={{
        content,
        setContent,
        resetContent,
        isAuthed,
        login,
        logout,
        hydrated,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
}

export function useCms() {
  const ctx = useContext(CmsContext);
  if (!ctx) {
    throw new Error("useCms must be used within a CmsProvider");
  }
  return ctx;
}

export function useContent() {
  return useCms().content;
}
