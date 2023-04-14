import Avatar from "./Avatar"
import Logo from "@/assets/logo.png"

function Header() {
  return (
    <header
        className="flex flex-row justify-evenly items-center md:justify-center"
    >
        <Avatar
            img={Logo}
            size={80}
        />
        <h1
            className="
                py-8 text-center w-6/12 text-xl font-semibold uppercase
                md:text-3xl md:text-left md:w-1/4 md:px-6
            "
        >
            Rick and morty
        </h1>
    </header>
  )
}

export default Header