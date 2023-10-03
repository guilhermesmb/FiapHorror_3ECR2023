
"use client"
import { serverLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const { push } = useRouter();

    function handleLogout() {
        serverLogout();
        push("/login");
    }

    return (
        <nav className='flex p-4 bg-sky-800'>
        <ul className='flex gap-20'>
          <li>
            <a href='#'>
              <h1>Fiap Horror</h1>  
            </a>
          </li>
          <li>
            <a href='#suspense'>
              Suspense
            </a>
          </li>
          <li>
            <a href='#terror'>
              Terror
            </a>
          </li>
          <li>
            <a href='#scifi'>
              Sci-Fi
            </a>
          </li>
          <li>
          <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    )
}