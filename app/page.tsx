import * as React from "react"
import { Button } from "@/registry/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A clean, minimal registry starting with our custom Button component.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-6 min-h-[150px] relative">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h2 className="text-sm font-semibold text-muted-foreground">
              Custom Button Component
            </h2>
          </div>
          <div className="flex items-center justify-center min-h-[100px]">
            <Button>Custom Button</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
