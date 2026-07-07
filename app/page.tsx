import { site } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="font-display text-3xl text-teal">{site.wordmark}</p>
      <p className="mt-4 text-sage">Coming soon</p>
    </main>
  );
}
