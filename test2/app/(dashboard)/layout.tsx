// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <aside style={{ width: '200px', backgroundColor: '#ddd', padding: '10px' }}>
          <nav>
            <a href="/profile" style={{ display: 'block', marginBottom: '10px' }}>Profile</a>
            <a href="/settings">Settings</a>
          </nav>
        </aside>
        <main style={{ flex: 1, padding: '20px' }}>{children}</main>
      </div>
    );
  }
  