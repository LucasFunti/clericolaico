'use client';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import CountrySelector, { CountryType } from './CountrySelector';
import { useState } from 'react';

export type PropModalPreRegister = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FORM_PER_COUNTRY: Record<string,string> = {
    Argentina: "https://forms.gle/atAewEEnzcLs7s6VA",
    Uruguay: "https://forms.gle/i1Lsd8wt2umQwKrn6",
    other: "https://forms.gle/7uRrWvKRUNnC9jgr9",
}

export default function ModalPreRegister(props: PropModalPreRegister) {
  const { open, setOpen } = props;
  const { t } = useTranslation();
  const [selected, setSelected] = useState<CountryType>({ id: 1, name: 'Argentina', avatar: 'fi-ar', });
  const headerRegistration = t("modal.pre.registration.button");

  return (
    <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            // transition
            className="relative transform overflow-visible rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-blue-900">
                        {t("modal.pre.registration.title")}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        {t("modal.pre.registration.body")}
                    </p>
                  </div>
                  <CountrySelector country={selected} setSelected={setSelected} />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button onClick={handleRegistration}>{headerRegistration}</Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
  
  function handleRegistration() {
    let url = FORM_PER_COUNTRY[selected.name];
    if (!url) url = FORM_PER_COUNTRY['other']
    window.open(url,'_blank')
    setOpen(false)
  }
}
