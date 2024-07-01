'use client';

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'
import { useTranslation } from 'react-i18next'
import type {i18nType} from '@/@types/resources'

interface Day {
  date: React.ReactNode | i18nType
  dateTime: i18nType
  summary: i18nType
  timeSlots: Array<{
    name: i18nType
    description: i18nType | null
    start: i18nType
    end: i18nType
  }>
}

const schedule: Array<Day> = [
  {
    date: 'schedule.date.firstDay',
    dateTime: 'schedule.date.firstDay.datetime',
    summary: 'schedule.date.firstDay.summary',
    timeSlots: [
      {
        name: 'schedule.date.firstDay.timeSlots.0.name',
        description: 'schedule.date.firstDay.timeSlots.0.description',
        start: 'schedule.date.firstDay.timeSlots.0.start',
        end: 'schedule.date.firstDay.timeSlots.0.end',
      },
      {
        name: 'schedule.date.firstDay.timeSlots.1.name',
        description: 'schedule.date.firstDay.timeSlots.1.description',
        start: 'schedule.date.firstDay.timeSlots.1.start',
        end: 'schedule.date.firstDay.timeSlots.1.end',
      },
      {
        name: 'schedule.date.firstDay.timeSlots.2.name',
        description: 'schedule.date.firstDay.timeSlots.2.description',
        start: 'schedule.date.firstDay.timeSlots.2.start',
        end: 'schedule.date.firstDay.timeSlots.2.end',
      },
      {
        name: 'schedule.date.firstDay.timeSlots.3.name',
        description: 'schedule.date.firstDay.timeSlots.3.description',
        start: 'schedule.date.firstDay.timeSlots.3.start',
        end: 'schedule.date.firstDay.timeSlots.3.end',
      },
      {
        name: 'schedule.date.firstDay.timeSlots.4.name',
        description: 'schedule.date.firstDay.timeSlots.4.description',
        start: 'schedule.date.firstDay.timeSlots.4.start',
        end: 'schedule.date.firstDay.timeSlots.4.end',
      },
    ],
  },
  {
    date: 'schedule.date.secondDay',
    dateTime: 'schedule.date.secondDay.datetime',
    summary: 'schedule.date.secondDay.summary',
    timeSlots: [
      {
        name: 'schedule.date.secondDay.timeSlots.0.name',
        description: 'schedule.date.secondDay.timeSlots.0.description',
        start: 'schedule.date.secondDay.timeSlots.0.start',
        end: 'schedule.date.secondDay.timeSlots.0.end',
      },
      {
        name: 'schedule.date.secondDay.timeSlots.1.name',
        description: 'schedule.date.secondDay.timeSlots.1.description',
        start: 'schedule.date.secondDay.timeSlots.1.start',
        end: 'schedule.date.secondDay.timeSlots.1.end',
      },
      {
        name: 'schedule.date.secondDay.timeSlots.2.name',
        description: 'schedule.date.secondDay.timeSlots.2.description',
        start: 'schedule.date.secondDay.timeSlots.2.start',
        end: 'schedule.date.secondDay.timeSlots.2.end',
      },
    ],
  },
  {
    date: 'schedule.date.thirdDay',
    dateTime: 'schedule.date.thirdDay.datetime',
    summary: 'schedule.date.thirdDay.summary',
    timeSlots: [
      {
        name: 'schedule.date.thirdDay.timeSlots.0.name',
        description: 'schedule.date.thirdDay.timeSlots.0.description',
        start: 'schedule.date.thirdDay.timeSlots.0.start',
        end: 'schedule.date.thirdDay.timeSlots.0.end',
      },
      {
        name: 'schedule.date.thirdDay.timeSlots.1.name',
        description: 'schedule.date.thirdDay.timeSlots.1.description',
        start: 'schedule.date.thirdDay.timeSlots.1.start',
        end: 'schedule.date.thirdDay.timeSlots.1.end',
      },
    ],
  },
]

function ScheduleTabbed() {
  const { t } = useTranslation();
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  const {t} = useTranslation();
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <p>{t(day.date as i18nType)}</p>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {t(day.summary)}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  const { t } = useTranslation();
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {t(timeSlot.name)}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {t(timeSlot.description)}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {t(timeSlot.start)}
            </time>
            -
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {t(timeSlot.end)}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  const {t} = useTranslation();
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            {t("schedule.subtitle")}
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            {t("schedule.subtitle.paragraph")}
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
