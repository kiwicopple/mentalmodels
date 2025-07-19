"use client";

import { useState } from "react";
import { MentalModel } from "../types/mental-models";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface SuggestionFormProps {
  model: MentalModel;
}

export function SuggestionForm({ model }: SuggestionFormProps) {
  const [suggestion, setSuggestion] = useState("");

  return (
    <form
      action="https://formspree.io/feedback@mentalmodels.co"
      method="POST"
      className="mt-12 space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="suggestion">Suggest an improved description</Label>
        <Textarea
          id="suggestion"
          name="suggestion"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="min-h-[100px]"
          placeholder="Your suggestion..."
        />
      </div>
      <input type="hidden" name="category" value={model.category} />
      <input type="hidden" name="model" value={model.name} />
      <div className="flex justify-end">
        <Button type="submit" className="min-w-[80px]">
          Send
        </Button>
      </div>
    </form>
  );
}
