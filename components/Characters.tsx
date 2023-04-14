import { Character as CharacterType } from "@/types"
import Image from "next/image"
import { AiTwotoneHeart } from "react-icons/ai";

interface Props extends CharacterType { }

function Character(props: Props) {

  const { image, name, species, status, origin } = props

  return (
    <article
      className="
          w-[150px] rounded-sm shadow-md flex flex-col items-center mb-2 mx-2
        "
    >
      <div
        className="w-11/12 rounded-md mb-2 bg-slate-200"
      >
        <Image
          src={image}
          alt={`image of ${name}`}
          height={80}
          width={120}
        />
      </div>
      <h2
        className="flex items-center justify-evenly"
      >
        <p
          className="mx-2 text-green-400"
        >
          {name}
        </p>
        <AiTwotoneHeart color="black" className="cursor-pointer" />
      </h2>
      <div
        className="w-[90%] flex justify-evenly"
      >
        <p>{status}</p>
        <p>{species}</p>
      </div>
      <p
        className="mb-4"
      >
        {origin?.name}
      </p>
    </article>
  )

}


function Characters() {
  return (
    <section
      className="flex flex-wrap"
    >
      <Character
        name="Rick Sanchez"
        species="Human"
        origin={{ name: "Earth (C-137)", url: "" }}
        status="Alive"
        image=""
      />
       <Character
        name="Rick Sanchez"
        species="Human"
        origin={{ name: "Earth (C-137)", url: "" }}
        status="Alive"
        image=""
      />
      <Character
        name="Rick Sanchez"
        species="Human"
        origin={{ name: "Earth (C-137)", url: "" }}
        status="Alive"
        image=""
      />
    </section>
  )
}

export default Characters