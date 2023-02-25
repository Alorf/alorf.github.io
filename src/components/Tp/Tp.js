import React, { useEffect, useState } from 'react'
import json from '../../json/data.json';


export default function Tp() {
    const tps = json.tp;
    var [userAnswer, setUserAnswer] = useState({ infinitif: '', past_simple: '', past_participle: '', traduction: '' });
    var [before, setBefore] = useState({ infinitif: '', past_simple: '', past_participle: '', traduction: '' });
    const [current, setCurrent] = useState({ infinitif: '', past_simple: '', past_participle: '', traduction: '' });
    const [remaining, setRemaining] = useState(tps.length);
    const [correct, setCorrect] = useState(-1);

    function getRandomTp() {
        if (tps.length > 0) {
            const randomIndex = Math.floor(Math.random() * tps.length);
            return tps[randomIndex];
        }
        return null;
    }

    function loadTp() {
        const nextTp = getRandomTp();
        if (nextTp != null) {
            setBefore(current);
            setCurrent(nextTp);
            setUserAnswer({ traduction: current.traduction });

        }
    }

    function valider() {
        if (userAnswer.infinitif == current.infinitif && userAnswer.past_participle == current.past_participle && userAnswer.past_simple == current.past_simple) {
            setCorrect(1);
            if (remaining == 1) {
                setRemaining('Aucun');
                document.getElementById("submit").disabled = true;
                setCorrect(2);

                return;
            }
            setRemaining(remaining - 1);

            //Supprimer le tp de la liste en retrouvant sa place
            const index = tps.indexOf(current);
            if (index > -1) {
                tps.splice(index, 1);
            }

            loadTp();
        } else {
            setCorrect(0);
            loadTp();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        valider();
        document.getElementById("infinitif").focus();

    }


    useEffect(() => {
        loadTp();
    }, []);

    const handleChange = (e) => {
        setUserAnswer({ ...userAnswer, [e.target.id]: e.target.value });

    }

    return (
        <article className='prose min-h-full min-w-fit mx-auto py-10'>
            <h1 className='text-center'>Entrainement TP</h1>

            <form className='flex items-center h-96' onSubmit={handleSubmit}>
                <div className='grid gap-4 grid-cols-4'>
                    <label className="input-group input-group-vertical">
                        <span className='justify-center'>Infinitif</span>
                        <input type="text" id="infinitif" placeholder="Infinitif" autoComplete="off" className="input input-bordered" onChange={handleChange} autoFocus />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='justify-center'>Past Simple</span>
                        <input type="text" id="past_simple" placeholder="Past Simple" autoComplete="off" className="input input-bordered" onChange={handleChange} />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='justify-center'>Past Participle</span>
                        <input type="text" id="past_participle" placeholder="Past Participle" autoComplete="off" className="input input-bordered" onChange={handleChange} />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className='justify-center'>Traduction</span>
                        <input type="text" placeholder="Traduction" autoComplete="off" className="input input-bordered input-success" defaultValue={current.traduction} disabled />
                    </label>
                    <div className="divider col-span-4">Valider</div>

                    <button id="submit" className='btn w-full btn-primary col-span-4' type="submit" onClick={handleSubmit}>Valider</button>
                    <div className="divider col-span-4">{remaining}</div>

                </div>
            </form>

            <div id="success-alert" className={`alert alert-success shadow-lg ${correct === 1 ? '' : 'hidden'}`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Correct !</span>
                </div>
            </div>

            <div id="error-alert" className={`alert alert-error shadow-lg ${correct === 0 ? '' : 'hidden'}`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                        <span>Raté ! Dommage.</span>
                        <div>{before.infinitif} | {before.past_simple} | {before.past_participle} | {before.traduction}</div>
                    </div>

                </div>
            </div>

            <div className={`alert alert-warning shadow-lg ${correct === 2 ? '' : 'hidden'}`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Plus de tp 🎈🎈🎈</span>
                </div>
            </div>
        </article>
    )
}