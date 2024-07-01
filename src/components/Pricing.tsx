"use client";
import { i18nType } from '@/@types/resources';
import { t } from 'i18next';
import { Fragment, useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import CountrySelector, { CountryType } from './CountrySelector';

export const includedFeaturesAdults: Array<i18nType> = [
  'pricing.item.cocktail',
  'pricing.item.debate.table',
  'pricing.item.paniguiri',
  'pricing.item.gala.dinner',
  'pricing.item.last.cocktail',
]
export const includedFeaturesYouth: Array<i18nType> = [
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
    const BANK_OPTIONS: Record<string, Array<Record<string,string>>> = {
      'Argentina': [
        {
          'Banco': "Banco Galicia",
          'Cuenta': "000904120251",
          'CUIT': "30-52859827-3",
          'CBU': "0070025220000009041217",
          'Alias': "Colectividad.Hele",
          'Razón Social': "Asociación La Colectividad Helénica",
          'Moneda': "ARG"
        },
        {
          'Banco': "Banco Galicia",
          'Cuenta': "975009120259",
          'CUIT': "30-52859827-3",
          'CBU': "0070025231009750091290",
          'Alias': "Colectividad.Hele",
          'Razón Social': "Asociación La Colectividad Helénica",
          'Moneda': "USD"
        }
      ],
      'Uruguay': [
        {
          'Banco': "Banco Santander",
          'Cuenta': "4069838",
          'Sucursal': "61 - Ciudad Vieja",
          'Cuenta otros bancos': "0061000004069838",
          'Moneda': "UYU"
        },
        {
          'Banco': "Banco Santander",
          'Cuenta': "4069838",
          'Sucursal': "61 - Ciudad Vieja",
          'Cuenta otros bancos': "0061000004069838",
          'Moneda': "USD"
        }
      ],
      other: [
        {
          'Banco': "Banco Bradesco",
          'Agencia': "0054-BRAS-URB-SP",
          'Conta': "0016049/0",
          'CGC/CPF': '046792657/0001-30',
          'Correntista': 'Arquidiocese O.E.T.B-.P.E.',
        }
      ]
    }
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
                            {(BANK_OPTIONS[selected.name] ?? BANK_OPTIONS['other']).map((hash, index)=> {
                                const entries = Object.entries(hash);
                                return <Fragment key={`${hash}_${index}`}>
                                  {
                                    entries.map(([key, value], index) => 
                                      (
                                        <Fragment key={`${key}_${value}_${index}`}>
                                          <p className="mt-1 tracking-tight text-blue-900">
                                            {key}: {value}
                                          </p>
                                        </Fragment>
                                      )
                                    )
                                  }
                                  ----------
                                </Fragment>
                            })}
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


