
import styles from './layout.module.css'


const name = '[SAYAN BANERJEE]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }: {children: any}) {
  return (
    <div className={`grid grid-cols-12 ${styles.container}`}>
      <div className="col-span-2"></div>
      <div className='col-span-8'>{children}</div>
      <div className="col-span-2"></div>
        {/* <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div> */}
    </div>
  )
}
