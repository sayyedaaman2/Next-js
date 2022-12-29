import Link from 'next/link'
export default function NavBar(){
    return(
        <nav className="nav-bar flex bg-slate-500 h-12 p-0 border-black border-2 rounded-br-2xl rounded-bl-2xl justify-end  bg-gradient-to-t from-slate-600 to-slate-900">
            <ul className="flex mx-h-max items-center md:mx-h4" >
                <li className='nav-button bg-cyan-300  mx-2 box-border  border-black border-2 rounded-2xl flex items-center h-3/4  bg-gradient-to-r from-purple-500 to-pink-500'>
                    <Link  className="m-0 p-4 h-full w-full flex items-center justify-center" href="/">Home</Link>
                </li>
                <li className='nav-button bg-cyan-300  mx-2 box-border  border-black border-2 rounded-2xl flex items-center h-3/4  bg-gradient-to-r from-purple-500 to-pink-500'>
                    <Link  className="m-0 p-4 h-full w-full flex items-center justify-center" href="/about">About Us</Link>
                </li>
                <li className='nav-button bg-cyan-300  mx-2 box-border  border-black border-2 rounded-2xl flex items-center h-3/4  bg-gradient-to-r from-purple-500 to-pink-500'>
                    <Link  className="m-0 p-4 h-full w-full flex items-center justify-center" href="/auth/login">Login</Link>
                </li>
                <li className='nav-button bg-cyan-300  mx-2 box-border  border-black border-2 rounded-2xl flex items-center h-3/4  bg-gradient-to-r from-purple-500 to-pink-500'>
                    <Link  className="m-0 p-4 h-full w-full flex items-center justify-center" href="/auth/signup">Signup</Link>
                </li>
                
            </ul>
        </nav>
    )
}