import React, { useState } from 'react'
import Input from '../Molecules/Input'
import LineContest from './LineContest'

export default function Contest({ player1, player2, player1Order, player2Order, contestIndex, matches, setMatches, setScores }) {

    // const [matches, setMatches] = useState([
    //     {
    //         player1Score: 0,
    //         player2Score: 0
    //     },
    //     {
    //         player1Score: 0,
    //         player2Score: 0
    //     },
    //     {
    //         player1Score: 0,
    //         player2Score: 0
    //     },
    //     {
    //         player1Score: 0,
    //         player2Score: 0
    //     },
    //     {
    //         player1Score: 0,
    //         player2Score: 0
    //     }
    // ])

    const setMatch = (index, newMatch) => {

        let temp = matches;
        let score1 = 0;
        let score2 = 0;

        temp[index] = newMatch;

        for (const item of temp) {
            if (item.player1Score == 11) {
                score1++;
            }
        }

        for (const item of temp) {
            if (item.player2Score == 11) {
                score2++;
            }
        }


        setMatches([...temp], contestIndex, score1, score2);
    }

    const playerScore = (array, side) => {

        let score = 0;

        if (side == 1) {
            for (const item of array) {
                if (item.player1Score == 11) {
                    score++;
                }
            }

        } else {
            for (const item of array) {
                if (item.player2Score == 11) {
                    score++;
                }
            }
        }

        return score;

    }

    return (
        <div style={{ width: "45%", backgroundColor: "#fff", marginBottom: 10, padding: 10, borderRadius: 15, display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>

            <div style={{ width: 200, height: "100%" }} ><b>{player1Order} </b> - {player1.firstName} {player1.lastName}</div>
            <div style={{ width: 50, height: "100%" }} ><b>{playerScore(matches, 1)}</b></div>

            <div style={{ backgroundColor: "#ddd", width: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10, borderRadius: 15 }} >
                <LineContest match={matches[0]} setMatch={(newMatch) => { setMatch(0, newMatch) }} />
                <LineContest match={matches[1]} setMatch={(newMatch) => { setMatch(1, newMatch) }} />
                <LineContest match={matches[2]} setMatch={(newMatch) => { setMatch(2, newMatch) }} />
                <LineContest match={matches[3]} setMatch={(newMatch) => { setMatch(3, newMatch) }} />
                <LineContest match={matches[4]} setMatch={(newMatch) => { setMatch(4, newMatch) }} />
            </div>

            <div style={{ width: 50, height: "100%" }} ><b>{playerScore(matches, 2)}</b></div>
            <div style={{ width: 200, height: "100%" }} >{player2.firstName} {player2.lastName} - <b> {player2Order}</b></div>

        </div>
    )
}