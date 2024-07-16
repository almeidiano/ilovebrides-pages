"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const Header = () => {
  const [json, setJson] = useState(null);

  useEffect(() => {
    async function getNavigation() {
      // Fetch dos componentes
      let req = await fetch(`${process.env.NEXT_PUBLIC_DEPLOY_API_CMS_URL}/components/navigation`);
      let json = await req.json();

      setJson(json);
    }

    getNavigation();
  }, [])

  const Loading = () => {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  return (
    <div className="navbar bg-base-100 top-0 z-[100] relative shadow-md">
    <div className="navbar-start">
      <div className={`drawer ${json && json.navigation.position == 'right' ? 'drawer-end' : ''}`}>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            {
              json ?
              json.navigation.items.map((item, index) => {
                return item.children.length > 0 ?
                <li>
                  <details>
                  <summary>
                    {item.text}
                  </summary>
                  <ul className="p-2 bg-base-100">
                    {
                      item.children.map((child, index) => {
                        return <li key={index}><Link href={child.url}>{child.text}</Link></li>
                      })
                    }
                  </ul>
                  </details>
                </li>
                :
                <li key={index}><Link href={item.url}>{item.text}</Link></li>
              })
              :
              <li className="flex items-center justify-center h-screen">
                <Loading />
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
    <div className="navbar-center">
        <a href='/'>
            {/* <Image 
              // src={`http://localhost:8000/media/images/${navigation.logo}`}
              src={`${navigation && navigation.logo}`}
              alt="ILOVEBRIDES Logo"
              width={200}
              height={200}
            /> */}
            {
              json &&
              <Image 
              // src={`http://localhost:8000/media/images/${navigation.logo}`}
              src={`${json.logo}`}
              alt="ILOVEBRIDES Logo"
              width={200}
              height={200}
            />
            }
        </a>
    </div>
    <div className="navbar-end"></div>
  </div>
  )
}

export default Header