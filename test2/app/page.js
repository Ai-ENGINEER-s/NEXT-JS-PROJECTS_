import Image from "next/image";
import Users from "./users/[id]/page"

export default function Home() {
  
  console.log("what am i ? -- Server/Client ? ")
  return (
  <>
  <Users/>
  </>
  );
}
