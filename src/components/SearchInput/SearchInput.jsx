import React from "react";
import "./SearchInput.scss";

export const SearchInput = ({placeholder, className, onChange, value}) => {
    return (
        <input className={className} placeholder={placeholder} onChange={onChange} value={value} />
    )
}