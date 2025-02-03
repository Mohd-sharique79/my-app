import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ExplanationSection() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              Server Actions process the input on the server-side. When the form is submitted, the &apos;greetUser&apos; 
              called, which takes the FormData, extracts the name, and returns a greeting message.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              This demo uses Shadcn UI components such as Input, Button, Card, and Accordion for consistent styling and
              improved user experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              This demo showcases Next.js 15.1 features like Server Actions, the useActionState hook for handling form
              submissions, and the App Router for simplified routing and layouts.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

