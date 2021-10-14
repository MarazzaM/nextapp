import styles from  '../styles/Layout.module.scss'
import Nav from './Nav'
function Layout({children}:any) {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout
