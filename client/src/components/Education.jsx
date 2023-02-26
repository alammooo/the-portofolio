export default function Education({ education, experience }) {
  if (education) {
    return (
      <>
        <div className="w-1/2">
          <h1 className="font-semibold text-2xl mb-7">Education</h1>
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-10">
              <h1 className="bg-stone-100 rounded-full px-5 py-2 min-w-fit w-32 text-center">
                2015
              </h1>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-lg">
                  Goethe Institute Surabaya
                </h1>
                <h1 className="text-stone-500">Zeugnis über die Feststellungsprüfung</h1>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <h1 className="bg-stone-100 rounded-full px-5 py-2 min-w-fit w-32">
                2016 - 2017
              </h1>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-lg">
                  Internationales Studienkolleg Kaiserslautern
                </h1>
                <h1 className="text-stone-500">Zeugnis über die Feststellungsprüfung</h1>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <h1 className="bg-stone-100 rounded-full px-5 py-2 min-w-fit w-32">
                2019 - 2021
              </h1>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-lg">Technische Hochschule Bingen</h1>
                <h1 className="text-stone-500">Informatik</h1>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <h1 className="bg-stone-100 rounded-full px-5 py-2 min-w-fit w-32 text-center">
                2022
              </h1>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-lg">Hacktiv8</h1>
                <h1 className="text-stone-500">Full Stack JavaScript</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  if (experience) {
    return (
      <div className="w-1/2">
        <h1 className="font-semibold text-2xl mb-7">Experience</h1>
        <div className="flex flex-col gap-16">
          <div className="flex items-center justify-between gap-10">
            <h1 className="bg-stone-100 rounded-full px-5 py-2 min-w-fit w-32">
              2016 - 2017
            </h1>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg">
                Internationales Studienkolleg Kaiserslautern
              </h1>
              <h1 className="text-stone-500">Zeugnis über die Feststellungsprüfung</h1>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <h1 className="bg-stone-100 rounded-full px-5 py-2 min-w-fit w-32">
              2019 - 2021
            </h1>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg">Technische Hochschule Bingen</h1>
              <h1 className="text-stone-500">Informatik</h1>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <h1 className="bg-stone-100 rounded-full px-5 py-2 min-w-fit w-32 text-center">
              2022
            </h1>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-lg">Hacktiv8</h1>
              <h1 className="text-stone-500">Full Stack JavaScript</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
