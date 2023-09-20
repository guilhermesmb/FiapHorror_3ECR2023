import Image from "next/image";
import loginimage from "@/images/login.jpg"

export default function Login(){
    return(
        <div className="flex">
            <aside className="hidden lg:flex h-screen">
                <Image src={loginimage} className="h-auto w-auto object-cover"/>
            </aside>
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2>Fiap Horror</h2>
                <form action="" className="flex flex-col gap-2">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" />
                    <button>Entrar</button>
                </form>
            </main>
        </div>
    )
}