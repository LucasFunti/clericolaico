import backgroundImage from '@/images/background.png'
import Image from 'next/image'
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
        src={backgroundImage}
        alt=""
        width={80}
        height={80}
        priority
      />
  )
}
