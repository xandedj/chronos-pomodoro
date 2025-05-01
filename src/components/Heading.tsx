import type React from 'react';
import styles from './Heading.module.css'

type HeadingProps = {
    children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
    // const { children } = props;
    return (
        <div>
            <h1 className={styles.heading}>{children}</h1>
        </div>
    )
}