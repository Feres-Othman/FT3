import React, { useContext, useEffect, useState } from 'react'
import { RContext } from '../RContext'
import { DesignContext } from '../DesignContext';
import PlayerItem from './PlayerItem';

import axios from 'axios'
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
import { useParams } from 'react-router-dom';

export default function PlayersByFilter() {


    let { sex, category } = useParams();

    const { design } = useContext(DesignContext);
    const { isMedium, isSmall, isLarge, notifier } = useContext(RContext)

    const [items, setItems] = useState([])

    const getProducts = async () => {

        var session = Ls.getObject('session', { 'isLoggedIn': false });
        let config = {
            headers: {
                "auth-token": session.token,
            }
        }

        axios.post("/api/player/read/all", { sex: sex, category: category }, config)
            .then((response) => {
                let res = response.data;
                if (res.success) {
                    console.log(res)


                    setItems(res.players);
                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


    useEffect(() => {
        getProducts();
    }, [])


    return (
        <>
            <h1 style={{ textAlign: 'center', margin: 20 }} >{sex.toUpperCase() == "M" ? "Homme" : "Femme"} : {category.toLowerCase()[0].toUpperCase() + category.toLowerCase().substring(1)}</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
                width: "90%",
                height: "75vh",
                backgroundColor: design.backgroundColor,
                marginLeft: "5%",
                textAlign: 'center',
                overflowY: "scroll"
            }} >

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: 'center', color: design.mainTextColor, backgroundColor: design.accentColor, width: "100%", height: 50, marginBottom: 10 }} >

                    <div style={{ width: "10%" }} >rang</div>
                    <div style={{ width: "10%" }} >Num</div>
                    <div style={{ width: "15%" }} >Nom</div>
                    <div style={{ width: "15%" }} >Prenom</div>
                    <div style={{ width: "15%" }} >Club</div>
                    <div style={{ width: "10%" }} >Points</div>

                </div>
                {items.map((item, index) => {
                    // remove the last filtered item
                    return <PlayerItem isByFilter={true} key={item._id} rang={index} {...item} filteredScore={item[`${category}Score`]} filteredScore={item[`score`]} />
                })}



            </div >
        </>
    )
}