import { useParams } from "react-router-dom"
import { toast } from "sonner"

import amaLogo from '../assets/ama-logo.svg'
import { ArrowRight, Share2 } from "lucide-react"
import { Message } from "../components/message"

export function Room() {
  const { room_id } = useParams()

  function handleShareRoom() {
    const url = window.location.href.toString()

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url })
    } else {
      navigator.clipboard.writeText(url)

      toast.info('The room URL was copied to your clipboard!')
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-4 px-3">
        <img src={amaLogo} alt="AMA" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-zinc-300">{room_id}</span>
        </span>

        <button 
          type='button' 
          onClick={handleShareRoom}
          className='ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-zinc-700'
        >
          Compartilhar
          <Share2 className='size-4' />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form
        className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1'
      >
        <input
          type="text"
          name='theme'
          placeholder='Qual a sua pergunta?'
          autoComplete='off'
          className='flex-1 text-sm bg-transparent mx-2  outline-none text-zinc-100 placeholder:text-zinc-500'
        />

        <button type='submit' className='bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500'>
          Criar Pergunta
          <ArrowRight className='size-4' />
        </button>
      </form>

      <ol className="list-decimal list-inside px-3 space-y-8">
        <Message 
          text="O que é golang e qual a vantegem dele sobre o javascript?"
          amountOfReactions={30}
          answered
        />
        <Message 
          text="O que é golang e qual a vantegem dele sobre o javascript?"
          amountOfReactions={30}
        />
      </ol>
    </div>
  )
}