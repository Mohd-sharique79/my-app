import GreetingForm from "./components/GreetingForm"
import ExplanationSection from "./components/ExplanationSection"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Next.js Server Action Demo</h1>
      <GreetingForm />
      <ExplanationSection />
    </main>
  )
}

