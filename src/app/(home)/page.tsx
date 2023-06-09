import styles from '@/styles/Home.module.sass'

import { ReferFriendSection } from '@/components/refer-friends-section'
import { StoresSection } from '@/components/stores-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <ReferFriendSection />
      <StoresSection />
      <Footer />
    </main>
  )
}
