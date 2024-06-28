"use client";
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import { useTranslation } from "react-i18next";

import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

const solutions = [
  { name: 'Ingles', key: 'en' },
  { name: 'Español', key: 'es'  },
  { name: 'Portugues', key: 'br'  },
  { name: 'Griego', key: 'gr'  },
]

export function Header() {
  const { t } = useTranslation("ns1")
  const headerInitDate = t("header.init.date");
  const headerEndDate = t("header.end.date");
  const headerLocation = t("header.location");
  const headerRegistration = t("header.registration");

  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              {headerInitDate} - {headerEndDate}
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>{headerLocation}</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <LanguageDropDown />
          <Button target='_blank' href="https://forms.gle/fyuZRRMdEu3FgPBH9">{headerRegistration}</Button>
        </div>
      </Container>
    </header>
  )
}


export default function LanguageDropDown() {
  const { i18n } = useTranslation("ns1")
  const [language, setLanguage] = useState("EN")
  return (
    <Popover className="relative flex mr-4">
      <PopoverButton className="inline-flex items-center gap-x-1 leading-6 font-mono text-sm text-blue-600">
        <span>{language}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
        {({ close }) => (
                    <div className="w-max	 max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-2">
                      {solutions.map((item) => (
                        <div 
                          onClick={()=> {
                              changeLanguage(item.key) 
                              close()
                            }} 
                            key={item.name} 
                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                          <div>
                            <button  className="font-mono text-sm text-blue-600">
                              {item.name}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
        
        )}
        </PopoverPanel>
      </Transition>
    </Popover>
  )

  function changeLanguage(item: string){
    setLanguage(item.toUpperCase());
    i18n.changeLanguage(item)    
  }
}