import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const leagues = [
    "Select League",
    "Men's Comp League",
    "Women's Comp League",
    "Men's Rec League",
    "Women's Rec League",
    "Coed League"
];

const leaguePricesIndividual = {
    "Men's Comp League": 100,
    "Women's Comp League": 100,
    "Men's Rec League": 100,
    "Women's Rec League": 100,
    "Coed League": 100
};

const leaguePricesTeam = {
    "Men's Comp League": 1000,
    "Women's Comp League": 1000,
    "Men's Rec League": 800,
    "Women's Rec League": 800,
    "Coed League": 600
    
};

export default function Register() {
    const [tab, setTab] = useState('individual'); 
    const [players, setPlayers] = useState(Array(5).fill('')); 

    const addPlayer = () => setPlayers([...players, '']);



    const [selectedLeagueIndividual, setSelectedLeagueIndividual] = useState("");
    const [selectedLeagueTeam, setSelectedLeagueTeam] = useState("");
    const [totalIndividual, setTotalIndividual] = useState(0);
    const [totalTeam, setTotalTeam] = useState(0);

    useEffect(() => {
        setTotalIndividual(leaguePricesIndividual[selectedLeagueIndividual] || 0);
        setTotalTeam(leaguePricesTeam[selectedLeagueTeam] || 0);
    }, [selectedLeagueIndividual, selectedLeagueTeam]);



    const { t } = useTranslation();
    return (
        <div className="register-container">
            <div className="tab-selector">
                <button className={tab === 'individual' ? 'active' : ''} onClick={() => setTab('individual')}>
                {t('RegisterIndividually')}
                </button>
                <button className={tab === 'team' ? 'active' : ''} onClick={() => setTab('team')} >
                {t('RegisterTeam')}
                </button>
            </div>
            {tab === 'individual' ? (
                <div className="register-individual">
                    
                    <form>
                        <input type="text" placeholder={t('ContactName')} />
                        <input type="email" placeholder={t('ContactEmail')} />
                        <input type="tel" placeholder={t('ContactPhone')} />
                        <select value={selectedLeagueIndividual} onChange={(e) => setSelectedLeagueIndividual(e.target.value)}>
                            {leagues.map((league, index) => (
                                <option key={index}>{league}</option>
                            ))}
                        </select>
                        <input type="text" placeholder={t('CreditCard')}  />
                        <input type="text" placeholder="CVV" />
                        <input type="text" placeholder={t('ExpiryDate')} />
                        <input type="text" placeholder="Total" value={totalIndividual} disabled />
                        
                        
                        <Link to="/RegisterThankYou" style={{ 
                            display: 'inline-block', 
                            textAlign: 'center', 
                            color: '#fff', 
                            backgroundColor: 'black', 
                            textDecoration: 'none', 
                            border: 'none', 
                            padding: '15px 32px', 
                            fontSize: '16px', 
                            margin: '4px 2px', 
                            cursor: 'pointer', 
                            transition: '0.3s' 
                        }}>Submit</Link>
                    </form>
                </div>
            ) : (
                <div className="register-team">

                        <form >
                            <input type="text" placeholder={t('ContactName')} />
                            <input type="email" placeholder={t('ContactEmail')} />
                            <input type="tel" placeholder={t('ContactPhone')} />
                            <select value={selectedLeagueTeam} onChange={(e) => setSelectedLeagueTeam(e.target.value)}>
                            {leagues.map((league, index) => (
                                <option key={index}>{league}</option>
                            ))}
                            </select>

                            <input type="text" placeholder={t('TeamName')} />
                            {players.map((player, index) => (
                                <input key={index} type="text" placeholder={t('PlayerName', { index: index + 1 })} />
                            ))}
                            <button type="button" onClick={addPlayer}>+</button>


                            <input type="text" placeholder={t('CreditCard')} />
                            <input type="text" placeholder="CVV" />
                            <input type="text" placeholder={t('CreditCard')}/>
                            <input type="text" placeholder="Total" value={totalTeam} disabled />
                            <div className="checkbox-container">
                                <input type="checkbox" id="accept" name="accept" value="accept"/>
                                <label htmlFor="accept">{t('CheckBox')}</label>
                            </div>


                            <Link to="/RegisterThankYou" style={{ 
                            display: 'inline-block', 
                            textAlign: 'center', 
                            color: '#fff', 
                            backgroundColor: 'black', 
                            textDecoration: 'none', 
                            border: 'none', 
                            padding: '15px 32px', 
                            fontSize: '16px', 
                            margin: '4px 2px', 
                            cursor: 'pointer', 
                            transition: '0.3s' 
                        }}>{t('ContactSubmit')}</Link>
                        </form>
                        </div>
                    )}

        </div>
    );
}
