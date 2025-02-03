"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { greetUser } from "../actions"

export default function GreetingForm() {
  const initialState = { message: "" }

  const [state, formAction] = useActionState(greetUser, initialState)

  return (
    <div className="mb-8">
      <form action={formAction} className="space-y-4">
        <Input type="text" name="name" placeholder="Enter your name" required />
        <Button type="submit">Submit</Button>
      </form>
      {state.message && <p className="mt-4 text-lg font-semibold">{state.message}</p>}
    </div>
  )
}
