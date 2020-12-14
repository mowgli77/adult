import React, {useState} from 'react'

const AdultModal = () => {

    const [text, setText] = useState('Вам уже исполнилось 18 лет?')
    const [red, setRed] = useState(false)

    const notAdult = () => {
        setText('К сожалению, Вам отказано в доступе. Будем рады Вас видеть, когда Вам исполниться 18 лет!')
        setRed(true)
    }

    return (
        <div className={'modal__overlay'}>
            <div className={'modal__window'}>
                <div className={`modal__header ${red ? 'red' : 'white'}`}>
                    <div className={'modal__title'}>
                        {text}
                    </div>
                </div>
                <div className={'modal__footer'}>
                    <button className={`button__no`} onClick={notAdult} disabled={red}>Нет</button>
                    <a href={'https://ad.admitad.com/g/7764x0k6264d3a075c5ecf883ae00d/?ulp={lpurl}&pt=1'}><button className={"button__yes"} disabled={red}>Да</button></a>
                </div>
            </div>
        </div>
    );
}



export default AdultModal