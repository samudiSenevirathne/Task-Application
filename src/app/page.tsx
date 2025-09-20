import Card from "@/components/Card/Card";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="p-8">
        <Card/>
      </main>
    </div>
  );
} 