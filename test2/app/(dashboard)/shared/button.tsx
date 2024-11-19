// app/(shared)/button.tsx
export default function Button({ label }: { label: string }) {
    return (
      <button style={{ padding: '10px', backgroundColor: '#0070f3', color: '#fff', border: 'none' }}>
        {label}
      </button>
    );
  }
  