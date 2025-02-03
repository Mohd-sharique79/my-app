"use server"

export async function greetUser(
  prevState: { message: string }, 
  formData: FormData
): Promise<{ message: string }> {
  const name = formData.get("name");

  if (typeof name !== "string" || name.trim() === "") {
    return { message: "Please enter a valid name." };
  }

  return { message: `Hello, ${name}!` };
}
