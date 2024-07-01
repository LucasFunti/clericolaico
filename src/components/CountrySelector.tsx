import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export type CountryType = {
    id: number,
    name: string,
    avatar: string
}
export type PropCountrySelector = {
    country: CountryType,
    setSelected: React.Dispatch<React.SetStateAction<CountryType>>,
}
export default function CountrySelector({country, setSelected}: PropCountrySelector) {
    const countries: CountryType[] = [
        { id: 1, name: 'Argentina', avatar: 'fi-ar', },
        { id: 2, name: 'Brasil', avatar: 'fi-br', }, 
        { id: 3, name: 'Bolivia', avatar: 'fi-bo', },
        { id: 4, name: 'Chile', avatar: 'fi-cl', },
        { id: 5, name: 'Ecuador', avatar: 'fi-ec', },
        { id: 6, name: 'Paraguay', avatar: 'fi-py', },
        { id: 7, name: 'Perú', avatar: 'fi-pe', },
        { id: 7, name: 'Venezuela', avatar: 'fi-ve', },
        { id: 8, name: 'Uruguay', avatar:'fi-uy', },
    ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Listbox value={country} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
              <span className={`fi ${country.avatar} h-5 w-5 flex-shrink-0 rounded-full`} ></span>
              <span className="ml-3 block truncate">{country.name}</span>
                 

              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {countries.map((person) => (
                  <ListboxOption
                    key={person.id}
                    className={({ focus }) =>
                      classNames(
                        focus ? 'bg-blue-600 text-white' : '',
                        !focus ? 'text-blue-900' : '',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={person}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center">
                          <span className={`fi ${person.avatar} h-5 w-5 flex-shrink-0 rounded-full`} ></span>
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              focus ? 'text-white' : 'text-blue-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

  
  