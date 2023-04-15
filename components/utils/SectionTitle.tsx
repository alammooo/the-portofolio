import { sectionTitle } from "@/data/main"
import { SectionInterface, TypeProps } from "@/interface/Interface"
import React from "react"



export default function SectionTitle({ type }: TypeProps) {
  const [data, setData] = React.useState<SectionInterface>()

  React.useEffect(() => {
    setData(sectionTitle.find((el) => el.type === type))
  }, [type])
  return (
    <div className="flex flex-col gap-4">
      <h3 className="uppercase text-blue-800">- {data?.sub}</h3>
      <h2 className="text-4.5xl font-extrabold text-blue-950">{data?.title}</h2>
    </div>
  )
}
