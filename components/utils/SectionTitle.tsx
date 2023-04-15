import { sectionTitle } from "@/data/main"
import { SectionInterface } from "@/interface/Interface"
import React from "react"

export default function SectionTitle({ type }: any) {
  const [data, setData] = React.useState<SectionInterface>()

  React.useEffect(() => {
    setData(sectionTitle.find((el) => el.type === type))
  }, [type])
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-blue-800 uppercase">- {data?.sub}</h3>
      <h2 className="text-4xl font-extrabold text-blue-950">{data?.title}</h2>
    </div>
  )
}
