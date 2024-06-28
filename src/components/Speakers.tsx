'use client';

import { useEffect, useId, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { useTranslation } from 'react-i18next'
import { i18nType } from '@/@types/resources'

interface TablesType {
  name:  i18nType
  nickname:  i18nType
  dateTime: i18nType
  speakers: Array<{
    items: Array<{
      title: i18nType
      text: i18nType
    }>
  }>
}
const TABLES: TablesType[] = [
  {
    name: 'tables.helenic.name',
    nickname: 'tables.helenic.nickname',
    dateTime: 'tables.helenic.datetime',
    speakers: [
      {
        items: [
          {
            title: 'tables.helenic.speakers.items.0.title',
            text: 'tables.helenic.speakers.items.0.text'
          },
          {
            title: 'tables.helenic.speakers.items.1.title',
            text: 'tables.helenic.speakers.items.1.text',
          },
          {
            title: 'tables.helenic.speakers.items.2.title',
            text: 'tables.helenic.speakers.items.2.text',
          },
          {
            title: 'tables.helenic.speakers.items.3.title',
            text: 'tables.helenic.speakers.items.3.text',
          },
          {
            title: 'tables.helenic.speakers.items.4.title',
            text: 'tables.helenic.speakers.items.4.text',
          }
      ]
      },
    ],
  },
  {
    name: 'tables.culture.name',
    date: 'tables.culture.nickname',
    dateTime: 'tables.culture.datetime',
    speakers: [
      {
        items: [
          {
            title: 'tables.culture.speakers.items.0.title',
            text: 'tables.culture.speakers.items.0.text'
          },
          {
            title: 'tables.culture.speakers.items.1.title',
            text: 'tables.culture.speakers.items.1.text',
          },
          {
            title: 'tables.culture.speakers.items.2.title',
            text: 'tables.culture.speakers.items.2.text',
          },
          {
            title: 'tables.culture.speakers.items.3.title',
            text: 'tables.culture.speakers.items.3.text',
          }
      ]
      },
    ],
  },
  {
    name: 'tables.youth.name',
    date: 'tables.youth.nickname',
    dateTime: '2022-04-06',
    speakers: [
      {
        items: [
          {
            title: 'tables.youth.speakers.items.0.title',
            text: 'tables.youth.speakers.items.0.text'
          },
          {
            title: 'tables.youth.speakers.items.1.title',
            text: 'tables.youth.speakers.items.1.text',
          },
          {
            title: 'tables.youth.speakers.items.2.title',
            text: 'tables.youth.speakers.items.2.text',
          },
          {
            title: 'tables.youth.speakers.items.3.title',
            text: 'tables.youth.speakers.items.3.text',
          },
          {
            title: 'tables.youth.speakers.items.4.title',
            text: 'tables.youth.speakers.items.4.text',
          }
      ]
      },
    ],
  },
  {
    name: 'tables.orthodoxy.name',
    date: 'tables.orthodoxy.nickname',
    dateTime: '2022-04-06',
    speakers: [
      {
        items: [
          {
            title: 'tables.orthodoxy.speakers.items.0.title',
            text: 'tables.orthodoxy.speakers.items.0.text'
          },
          {
            title: 'tables.orthodoxy.speakers.items.1.title',
            text: 'tables.orthodoxy.speakers.items.1.text',
          },
          {
            title: 'tables.orthodoxy.speakers.items.2.title',
            text: 'tables.orthodoxy.speakers.items.2.text',
          },
          {
            title: 'tables.orthodoxy.speakers.items.3.title',
            text: 'tables.orthodoxy.speakers.items.3.text',
          },
          {
            title: 'tables.orthodoxy.speakers.items.4.title',
            text: 'tables.orthodoxy.speakers.items.4.text',
          }
      ]
      },
    ],
  },
]

export function Speakers() {
  let id = useId();
  const { t } = useTranslation();
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            {t("speakers.title")}
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            {t("speakers.description")}          
          </p>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {TABLES.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {t(day.name)}
                          </Tab>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {TABLES.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-2"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <>
                    <ul key={`${speaker}_${speakerIndex}`} role="list" className="mt-2 space-y-8 text-slate-500">
                      {speaker.items.map(({title, text})=> {
                          return <>
                          <li className="flex flex-wrap gap-x-3">
                            <svg className="mt-1 h-5 w-5 flex-none text-blue-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                      
                            <strong className="font-semibold text-slate-900">{t(title)}</strong> 
                            <span>{t(text)}</span>
                          </li>
                          </>
                      })}
                    </ul>
                  </>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
