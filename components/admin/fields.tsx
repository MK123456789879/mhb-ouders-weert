"use client";

type BaseProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function TextField({ label, value, onChange, placeholder }: BaseProps) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-ink/80">{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-button border border-sage/40 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-teal"
      />
    </label>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: BaseProps & { rows?: number }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-ink/80">{label}</span>
      <textarea
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-button border border-sage/40 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-teal"
      />
    </label>
  );
}

export function EditorCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-card border border-teal-light bg-white p-6 shadow-soft">
      <h2 className="font-display text-2xl text-teal">{title}</h2>
      {description && <p className="mt-1 text-sm text-sage">{description}</p>}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function ItemBox({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-button border border-sage/30 bg-cream/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="label-text text-sage">{title}</span>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="rounded-button px-2 py-1 text-xs font-medium text-coral transition-colors hover:bg-coral-light"
          >
            Verwijderen
          </button>
        )}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function AddButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-button border border-dashed border-teal/50 px-3 py-2 text-sm font-medium text-teal transition-colors hover:bg-teal-light"
    >
      + {label}
    </button>
  );
}
