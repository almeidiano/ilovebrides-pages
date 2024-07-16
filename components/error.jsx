'use client'

import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Error() {
  return (
    <div className="flex justify-center items-center container h-screen relative top-[-67px]">
      <div className="flex justify-center items-center flex-col w-[500px] gap-[10px]">
        <div><FontAwesomeIcon icon={faCircleExclamation} size="lg" /><span className="font-bold ml-1">Este conteúdo não está disponível no momento.</span></div>
        <span className="text-center">Quando isso acontece, geralmente é porque ocorreu um erro com esta página ou não existe.</span>
        <a href="/" className="btn btn-neutral">Voltar ao inicio</a>           
      </div>
    </div>
  )
}
