import React, {useState} from 'react'

const AdultModal = () => {

    const [text, setText] = useState('Даний ресурс призначений лише для повнолітніх користувачів. Вам уже виповнилось 18 років?')
    const [red, setRed] = useState(false)

    const notAdult = () => {
        setText('На жаль, Вам відмовлено у доступі. Будемо раді Вас бачити, коли Вам виповниться 18!')
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
                    <button className={`button__no`} onClick={notAdult} disabled={red}>Ні</button>
                    <a href={'https://goodwine.com.ua/'}><button className={"button__yes"} disabled={red}>Так</button></a>
                </div>
            </div>
        </div>
    );
}



export default AdultModal