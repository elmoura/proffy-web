import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [weekday, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(event: FormEvent) {

        event.preventDefault();

        const availableClasses = await api.get('/classes', {
            params: { subject, weekday, time }
        });

        setTeachers(availableClasses.data.classes);

    }

    return (
        <div id='page-teacher-list' className='container'>

            <PageHeader title='Estes são os proffys disponíveis.'>
                <form id='search-teachers' onSubmit={searchTeachers}>

                    <Select
                        name='subject'
                        label='Matéria'
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { value: 'brega-funk', label: 'Brega-Funk' },
                            { value: 'sarrada-no-ar', label: 'Sarrada no ar' },
                            { value: 'passinho-do-romano', label: 'Passinho do romano' },
                            { value: 'grau-de-moto', label: 'Grau de moto' },
                            { value: 'futzinho-naquele-pique', label: 'Futzin naquele pique' },
                        ]}
                    />

                    <Select
                        name='weekday'
                        label='Dia da semana'
                        value={weekday}
                        onChange={e => setWeekday(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input
                        type='time'
                        name='time'
                        label='Hora'
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type='submit'>Buscar</button>

                </form>
            </PageHeader>

            <main>

                {teachers.map((teacher:Teacher) => {

                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    );

                })}

            </main>

        </div>
    );
}

export default TeacherList;