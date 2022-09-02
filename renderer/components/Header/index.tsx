import {Button} from '@nextui-org/react'
import styles from './index.module.scss'
import AddIcon from "@/assets/svg/add";
import {useEffect} from "react";

const Header = () => {

    useEffect(() => {
        // Example POST method implementation:
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }

        postData('https://music-psi-orpin.vercel.app/playlist/highquality/tags', {answer: 42})
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
    }, [])

    return (
        <div className={styles.headerWrap}>
            <div className={styles.content}></div>
            <div className={styles.right}>
                <Button color="secondary" flat icon={<AddIcon/>} size={'xs'} auto>
                    NEW
                </Button>
            </div>
        </div>
    )
}

export default Header