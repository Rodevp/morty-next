import Image from "next/image"

interface Props {
    img: String | any  
    size?: number
}

function Avatar( { img, size = 100 }: Props ) {
  return (
    <div
        style={{height: size, width: size}}
        className="rounded-full bg-green-400 flex items-center justify-center"
    >
        <Image
            src={img}
            alt=""
            className="rounded-full bg-white"
            style={{ width: "90%", height: "90%" }}
        />
    </div>
  )
}

export default Avatar