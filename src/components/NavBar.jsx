
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
            <a href='#'>
              Favoritos
            </a>
          </li>
          <li>
            <a href='#'>
              Monstros
            </a>
          </li>
          <li>
            <a href='#'>
              Assombrações
            </a>
          </li>
          <li>
            <a href='#'>
              Serial Killers
            </a>
          </li>
        </ul>

        <button onClick={handleLogout}>adoraria sair desse site</button>
      </nav>
    )
}