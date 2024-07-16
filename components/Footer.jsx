'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons"

import Image from "next/image"

import { useState, useEffect } from "react"

const GoogleStoreModal = () => {
  return (
    <dialog id="my_modal_google" className="modal">
      <div className="modal-box text-black">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        <h3 className="font-bold text-lg">
          <FontAwesomeIcon height={20} icon={faGooglePlay} className="mr-1" />
          Google Store
        </h3>

        <div className="flex">
          <div className="w-1/2">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=pt.ilovebrides.publico" className="btn btn-ghost h-full py-4">
              <Image alt="App public icon" height={260} width={260} src='/assets/icons/app_pub_icon.png' />
            </a>
          </div>
          <div className="w-1/2">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=pt.ilovebrides.negocios" className="btn btn-ghost h-full py-4">
              <Image alt="App pro icon" height={260} width={260} src='/assets/icons/app_pro_icon.png' />
            </a>
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Fechar</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

const AppleStoreModal = () => {
  return (
    <dialog id="my_modal_apple" className="modal">
      <div className="modal-box text-black">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">
          <FontAwesomeIcon width={20} icon={faApple} />
          Apple Store
        </h3>

        <div className="flex">
          <div className="w-1/2">
            <a target="_blank" href="https://apps.apple.com/us/app/i-love-brides/id1490875267" className="btn btn-ghost h-full py-4">
              <Image alt="App public icon" height={260} width={260} src='/assets/icons/app_pub_icon.png' />
            </a>
          </div>
          <div className="w-1/2">
            <a target="_blank" href="https://apps.apple.com/us/app/i-love-brides-neg%C3%B3cios/id1490904667" className="btn btn-ghost h-full py-4">
              <Image alt="App pro icon" height={260} width={260} src='/assets/icons/app_pro_icon.png' />
            </a>
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Fechar</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

const Loading = () => {
  return <span className="loading loading-spinner loading-lg"></span>
}

const Footer = () => {
  const [json, setJson] = useState(null);

  useEffect(() => {
    async function getFooter() {
      // Fetch dos componentes
      let req = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_API_CMS_URL}/components/footer`);
      let json = await req.json();

      setJson(json);
    }

    getFooter();
  }, [])

  return (
    <footer className="footer p-10 text-white bg-black flex flex-col">
      {
        json ?
          <>
            <div>
              {
                json && 
                <Image 
                  src={json.logo}
                  // src={`${process.env.NEXT_PUBLIC_DEPLOY_ROOT_URL}/uploads/images/main-logo-inverse.svg`}
                  height={150}
                  width={150}
                  alt="ILOVEBRIDES Logo"
                />
              }
            </div>
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="font-bold text-md">{json && json.weddingDistricties.text}</label>
              <ul tabIndex={0} className="z-50 h-[250px] overflow-auto bg-white divide-y divide-gray-100 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-100">
                {
                  json && json.weddingDistricties.children.map((item, index) => {
                    return <li key={index}><a href={item.url}>{item.text}</a></li>
                  })
                }
              </ul>
            </div>
            <div className="flex justify-center w-full justify-between grid grid-cols-4 max-[850px]:grid-cols-2 gap-y-10">
              {
                json && json.navigation.map((item, index) => {
                  return <div key={index} className="flex flex-col">
                    <h3 className="text-lg mb-2">{item.text}</h3> 
                    <div className="flex flex-col space-y-3">
                      {
                        item.children.map((child, index) => {
                          return <a key={index} href={child.url} className="link opacity-75 link-hover">{child.text}</a>
                        })
                      }
                    </div>
                  </div>
                })
              }
            </div>

            <div className="flex justify-between w-full items-center max-[850px]:flex-col items-start space-y-5">
              <div className="flex space-x-4">
                {
                  json && json.socialMedia.map((item, index) => {
                    return <a className="flex items-center opacity-75 px-1" key={index} target="_blank" href={item.url}> <Image className="invert" alt="Social media icon" src={item.icon} height={13} width={13} /> </a>
                  })
                }
              </div>
              <div className="flex space-x-4">

                {/* <div className="flex items-center">
                  <FontAwesomeIcon height={20} width={20} icon={faPhone} />
                  {footer && footer.phone}
                </div>

                <div className="flex items-center">
                  <FontAwesomeIcon height={20} width={20} icon={faEnvelope} />
                  {footer && footer.email}
                </div> */}

              </div>
              {/* <div className="flex space-x-2">
                <Image className="cursor-pointer" onClick={()=> {if (document) {document.getElementById('my_modal_google').showModal()}}} alt="GooglePlay Logo" src='/assets/images/GooglePlayBadge.png' width={130} height={20} />
                <Image className="cursor-pointer" onClick={()=> {if (document) {document.getElementById('my_modal_apple').showModal()}}} alt="AppStore Logo" src='/assets/images/AppStoreBadge.png' width={120} height={20} />
                
                <GoogleStoreModal />
                <AppleStoreModal />
              </div> */}
            </div>

            <div className="flex justify-between w-full opacity-70 text-xs max-[530px]:flex-col">
              {/* direitos reservados */}
              {json && <a href={json.rights.url}>{json.rights.text}</a>}

              {/* politicas legais */}
              <div className="flex space-x-2">
                { 
                  json && json.legal.map((item, index) => {
                    return <a key={index} href={item.url}>{item.text}</a>
                  })
                }
              </div>
            </div>
          </>
        :
        <div className="h-screen w-full flex justify-center"><Loading/></div>
      }

    </footer>
  )
}

export default Footer