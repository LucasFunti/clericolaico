"use client";
import { i18nType } from '@/@types/resources';
import { t } from 'i18next';
import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const includedFeaturesAdults: Array<i18nType> = [
  'pricing.item.cocktail',
  'pricing.item.debate.table',
  'pricing.item.paniguiri',
  'pricing.item.gala.dinner',
  'pricing.item.last.cocktail',
]
const includedFeaturesYouth: Array<i18nType> = [
  'pricing.item.cocktail',
  'pricing.item.debate.table',
  'pricing.item.paniguiri',
  'pricing.item.greek.dance',
  'pricing.item.youth.dinner',
  'pricing.item.gala.dinner',
  'pricing.item.last.cocktail',
]
  
export function Pricing() {
    const common = {
        cardData: "Datos de la cuenta",
        cardWhatsIncluded: t("pricing.adult.whats.inlcuded"),
        pretext: t("pricing.adult.price.pre.text"),
        currency: "USD"
    }
    const prices = [
        {
            ...common,
            cardTitle: t("pricing.adult.title"),
            includedFeatures: includedFeaturesAdults,
            amount: "100",
        },
        {
            ...common,
            cardTitle: t("pricing.youth.title"),
            includedFeatures: includedFeaturesYouth,
            amount: "35",
        },
    ]
    const [selected, setSelected] = useState<CountryType>({ id: 1, name: 'Argentina', avatar: 'fi-ar', });

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                        {t("pricing.title")}
                    </h2>
                    <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
                        {t("pricing.subtitle")}
                    </p>
                    <CountrySelector country={selected} setSelected={setSelected} />
                </div>
                {prices.map(({amount,cardData,cardTitle,cardWhatsIncluded,currency,includedFeatures,pretext})=> (
                    <div key="" className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-blue-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                                {cardTitle}
                            </h3>
                            <p className="mt-1 tracking-tight text-blue-900">
                                {cardData}
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 mt-1 tracking-tight text-blue-900">
                                    {cardWhatsIncluded}
                                </h4>
                            <div className="h-px flex-auto bg-blue-100" />
                            </div>
                            <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-blue-600 sm:grid-cols-2 sm:gap-6"
                            >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3 mt-1 tracking-tight text-blue-900">
                                <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                                {t(feature)}
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="h-full rounded-2xl bg-blue-50 py-10 text-center ring-1 ring-inset ring-blue-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-blue-600">{pretext}</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-blue-900">{amount}</span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-blue-600">{currency}</span>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


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
        { id: 7, name: 'Perú', avatar: 'fi-pu', },
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

  
  