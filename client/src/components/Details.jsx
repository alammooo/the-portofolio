export default function Details() {
  return (
    <div className="flex">
      <div className="grid grid-cols-3 w-1/2">
        <div className="text-base font-semibold flex flex-col gap-1">
          <h1>Birthday:</h1>
          <h1>Address:</h1>
          <h1>Email:</h1>
          <h1>Phone:</h1>
        </div>
        <div className="text-base font-semibold flex flex-col gap-1">
          <h1 className="font-light">11 November 1996</h1>
          <h1 className="font-light">Semarang, Indonesia</h1>
          <h1 className="font-light">abdullah.alamm@outlook.de</h1>
          <h1 className="font-light">(+49) 17661087908</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 w-1/2">
        <div className="flex flex-col gap-1 text-base font-semibold">
          <h1>Nationality:</h1>
          <h1>Interest:</h1>
          <h1>Freelance:</h1>
          <h1>Study:</h1>
        </div>
        <div className="flex flex-col gap-1 text-base font-semibold col-span-2">
          <h1 className="font-light">Indonesian</h1>
          <h1 className="font-light">Sport, Technology</h1>
          <h1 className="font-light">Available</h1>
          <h1 className="font-light">Technische Hochschule Bingen</h1>
        </div>
      </div>
    </div>
  )
}
