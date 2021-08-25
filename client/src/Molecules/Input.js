import React, { useState, useContext, useEffect, useRef } from "react";
import { RContext } from "../RContext";
import { DesignContext } from "../DesignContext";

export default function Input({ name, label, type = "text", placeholder, value, onChange, onKeyPress, disabled = false , width= "65%"}) {

    const { isMedium, isSmall, isLarge, notifier } = useContext(RContext)
    const { design } = useContext(DesignContext)

    return (
        <div style={{ display: 'flex', flexDirection: isSmall ? 'column' : 'row', justifyContent: 'space-between', alignItems: isSmall ? '' : 'center', alignContent: 'right' }}>
            <div style={{ fontSize: isSmall ? 13 : 15 }}>{label}</div>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => { onChange(e.target.value); }}
                style={{ borderRadius: 15, height: 45, width: isSmall ? '' : width, backgroundColor: 'white' }}
                onKeyPress={onKeyPress}
                className='form-control'
                disabled={disabled}
            />
        </div>
    )
}
