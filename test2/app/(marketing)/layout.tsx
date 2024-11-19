export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#f0f8ff' }}>
        <nav>
          <a href="/home" style={{ marginRight: '10px' }}>Home</a>
          <a href="/about">About</a>
        </nav>
        <main>{children}</main>
      </div>
    );
  }