
import Btn from '../../Molecules/Btn'
import NewsItem from './NewsItem'

import React, { useContext, useEffect, useState, useMemo } from 'react'
import { RContext } from '../../RContext'
import { DesignContext } from '../../DesignContext';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { reactLocalStorage as Ls } from 'reactjs-localstorage';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DataTable from 'react-data-table-component';
import { deleteNews } from "../actions/ajouterunjouer"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from 'react-loader-spinner'

function NewsList() {


    const dispatch = useDispatch();
    let { sex, category } = useParams();

    const { design } = useContext(DesignContext);
    const { isMedium, isSmall, isLarge, notifier, isLoggedIn } = useContext(RContext)

    let history = useHistory();
    return (
        <div>
            {isLoggedIn &&

                <Btn
                    onClick={() => {
                        history.push(`/league/add`);
                    }}
                    style={{
                        position: 'absolute',
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        top: 30,
                        right: 40,
                        textAlign: 'center',
                    }}>Ajouter un Nouveautes</Btn>
            }
            <h1 style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}>NOUVEAUTES</h1>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap" }}>
                <NewsItem
                    images={["https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/305132939_5739529759444490_4648794939971629303_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AVNHspSkgNcAX-AtS9x&tn=oa0gKaow2NGBVDM2&_nc_ht=scontent.ftun7-1.fna&oh=00_AT_7eOzknhlTSNbjE3dFbKBJSL5FMC5WYi10enrLWnkpSw&oe=632377EB",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301586531_5739530066111126_7461081147413976721_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uxUWmKMNWB4AX9YWlr-&_nc_ht=scontent.ftun7-1.fna&oh=00_AT87E0yF_sx5_pQ6r2iunorC4QqQ0ECoQoyHjtceRRku6Q&oe=632196DC",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301828995_5739530262777773_4375971248272265711_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pOlCFdMqETwAX9X1PUy&_nc_ht=scontent.ftun7-1.fna&oh=00_AT8m4JT54gM1dcFo2Qj-sDgreAriEI-FbxWhYBTkvIZ1DA&oe=63228B9B"]}
                    title="بطولة إفريقيا للأمم أكابر"
                    content={`بطولة إفريقيا للأمم أكابر و كبريات بالجزائر العاصمة
                    مراسم تتويج   🇹🇳 مرام الزغلامي ببرونزية🥉 زوجي الكبريات صحبة الجزائرية🇩🇿  ناريمان هند الصديقي.
                    💪🏓🇹🇳`}
                    date="9 septembre 2022" />
                <NewsItem
                    images={["https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/305132939_5739529759444490_4648794939971629303_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AVNHspSkgNcAX-AtS9x&tn=oa0gKaow2NGBVDM2&_nc_ht=scontent.ftun7-1.fna&oh=00_AT_7eOzknhlTSNbjE3dFbKBJSL5FMC5WYi10enrLWnkpSw&oe=632377EB",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301586531_5739530066111126_7461081147413976721_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uxUWmKMNWB4AX9YWlr-&_nc_ht=scontent.ftun7-1.fna&oh=00_AT87E0yF_sx5_pQ6r2iunorC4QqQ0ECoQoyHjtceRRku6Q&oe=632196DC",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301828995_5739530262777773_4375971248272265711_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pOlCFdMqETwAX9X1PUy&_nc_ht=scontent.ftun7-1.fna&oh=00_AT8m4JT54gM1dcFo2Qj-sDgreAriEI-FbxWhYBTkvIZ1DA&oe=63228B9B"]}
                    title="بطولة إفريقيا للأمم أكابر"
                    content={`بطولة إفريقيا للأمم أكابر و كبريات بالجزائر العاصمة
                    مراسم تتويج   🇹🇳 مرام الزغلامي ببرونزية🥉 زوجي الكبريات صحبة الجزائرية🇩🇿  ناريمان هند الصديقي.
                    💪🏓🇹🇳`}
                    date="9 septembre 2022" />
                <NewsItem
                    images={["https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/305132939_5739529759444490_4648794939971629303_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AVNHspSkgNcAX-AtS9x&tn=oa0gKaow2NGBVDM2&_nc_ht=scontent.ftun7-1.fna&oh=00_AT_7eOzknhlTSNbjE3dFbKBJSL5FMC5WYi10enrLWnkpSw&oe=632377EB",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301586531_5739530066111126_7461081147413976721_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uxUWmKMNWB4AX9YWlr-&_nc_ht=scontent.ftun7-1.fna&oh=00_AT87E0yF_sx5_pQ6r2iunorC4QqQ0ECoQoyHjtceRRku6Q&oe=632196DC",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301828995_5739530262777773_4375971248272265711_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pOlCFdMqETwAX9X1PUy&_nc_ht=scontent.ftun7-1.fna&oh=00_AT8m4JT54gM1dcFo2Qj-sDgreAriEI-FbxWhYBTkvIZ1DA&oe=63228B9B"]}
                    title="بطولة إفريقيا للأمم أكابر"
                    content={`بطولة إفريقيا للأمم أكابر و كبريات بالجزائر العاصمة
                    مراسم تتويج   🇹🇳 مرام الزغلامي ببرونزية🥉 زوجي الكبريات صحبة الجزائرية🇩🇿  ناريمان هند الصديقي.
                    💪🏓🇹🇳`}
                    date="9 septembre 2022" />
                <NewsItem
                    images={["https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/305132939_5739529759444490_4648794939971629303_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AVNHspSkgNcAX-AtS9x&tn=oa0gKaow2NGBVDM2&_nc_ht=scontent.ftun7-1.fna&oh=00_AT_7eOzknhlTSNbjE3dFbKBJSL5FMC5WYi10enrLWnkpSw&oe=632377EB",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301586531_5739530066111126_7461081147413976721_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uxUWmKMNWB4AX9YWlr-&_nc_ht=scontent.ftun7-1.fna&oh=00_AT87E0yF_sx5_pQ6r2iunorC4QqQ0ECoQoyHjtceRRku6Q&oe=632196DC",
                        "https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/301828995_5739530262777773_4375971248272265711_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pOlCFdMqETwAX9X1PUy&_nc_ht=scontent.ftun7-1.fna&oh=00_AT8m4JT54gM1dcFo2Qj-sDgreAriEI-FbxWhYBTkvIZ1DA&oe=63228B9B"]}
                    title="بطولة إفريقيا للأمم أكابر"
                    content={`بطولة إفريقيا للأمم أكابر و كبريات بالجزائر العاصمة
                    مراسم تتويج   🇹🇳 مرام الزغلامي ببرونزية🥉 زوجي الكبريات صحبة الجزائرية🇩🇿  ناريمان هند الصديقي.
                    💪🏓🇹🇳`}
                    date="9 septembre 2022" />
            </div>

        </div>
    )
}

export default NewsList