import { useState } from "react";

import { ArrowUp } from "lucide-react";

interface MessageProps  {
  text: string;
  amountOfReactions: number;
  answered?: boolean;
}

export function Message({ text, amountOfReactions, answered = false }: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false)

  function handleReactToMessage() {
    setHasReacted(true)
  }

  return (
    <li data-answered={answered} className="ml-2 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
      {text}

      {hasReacted ? (
        <button className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500">
          <ArrowUp className="size-4" />
          Curtir pergunta ({amountOfReactions})
        </button>

      ) : (
        <button
          onClick={handleReactToMessage} 
          className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
        >
          <ArrowUp className="size-4" />
          Curtir pergunta ({amountOfReactions})
        </button>
      )}

    </li>
  )
}