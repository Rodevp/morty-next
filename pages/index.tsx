import Characters from "@/components/Characters";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="
              md:container lg:container mx-4 md:mx-auto lg:mx-auto pt-2 h-screen
            "
          >
      <Header />
      <Characters />
    </main>
  )
}
