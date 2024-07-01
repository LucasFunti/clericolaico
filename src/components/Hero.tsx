"use client";
import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalPreRegister from './ModalPreRegister';

export function Hero() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("ns1")
  const heroTitle = t("hero.title");
  const heroSubTitle1 = t("hero.subtitle.paragraph.1");
  const heroSubTitle2 = t("hero.subtitle.paragraph.2");
  const heroRegistration = t("hero.registration");
  const heroMetricsMeets = t("hero.metrics.meets");
  const heroMetricsParticipants = t("hero.metrics.participants");
  const heroMetricsPlace = t("hero.metrics.place");
  const heroMetricsLocation = t("hero.metrics.location");
  const METRICS = [
    [heroMetricsMeets, '4'],
    [heroMetricsParticipants, '600'],
    [heroMetricsPlace, 'Colectividad Helenica'],
    [heroMetricsLocation, 'Buenos Aires']
  ]
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">ECL - </span>{heroTitle}
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              {heroSubTitle1}
            </p>
            <p>
              {heroSubTitle2}
            </p>
          </div>
          <Button className="mt-10 w-full sm:hidden" onClick={handleRegister}>{heroRegistration}</Button>
          <ModalPreRegister open={open} setOpen={setOpen} />
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {METRICS.map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )

  function handleRegister() {
    setOpen(true)
  }
}
