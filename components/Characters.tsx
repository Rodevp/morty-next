import Character from "@/components/Character"

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