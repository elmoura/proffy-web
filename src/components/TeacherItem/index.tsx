import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">

            <header>

                <img src="https://pbs.twimg.com/profile_images/1277322008381083648/YTnOxZM-_400x400.jpg" alt="Gabriel Moura" />

                <div>
                    <strong>Gabriel Moura</strong>
                    <span>Brega-Funk</span>
                </div>

            </header>

            <p>
                Entusiasta de sarradas no ar
            <br /><br />
            Apaixonado por dançar brega-funk sozinho sem mostrar seu verdadeiro talento para o mundo
        </p>

            <footer>
                <p>
                    Preço/hora <strong>R$ 1 pastel</strong>
                </p>

                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>

            </footer>
        </article>
    )
}

export default TeacherItem;