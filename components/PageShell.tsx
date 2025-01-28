// components/PageShell.tsx
export function PageShell({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-purple-50" />
        {children}
      </div>
    )
  }