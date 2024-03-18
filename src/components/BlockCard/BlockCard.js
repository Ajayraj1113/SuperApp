import React, { useState, useEffect } from "react";

export default function BlockCard(props) {
    // console.log(props)
    const[isSelected, setIsSelected] = useState(false)

    const addValueToCategory = (value) => {
        const existingValue = props.categoriesList.filter((category) => category ===value );
        // console.log(existingValue)

        if (!existingValue.length){
            props.setCategories([ ...props.categoriesList, value])
        } else {
            const newCategoriesList = props.categoriesList.filter((category) => category !== value);

            props.setCategories(newCategoriesList);
        }
    };

    useEffect(() => {
        const isExists =
            props.categoriesList.includes(props.genreDetails.id) === true;
            
        setIsSelected(isExists);
    });

    return (
        <div
            onClick={() => {
                addValueToCategory(props.genreDetails.id);
                setIsSelected(!isSelected);
            }}
            style={{
                background: props.genreDetails["color"],
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                cursor: "pointer",
                border: `${isSelected ? "4px solid green" : "4px solid white"}`,
            }}
        >
            <p style={{ marginBottom: "4px", fontSize: "18px" }}>
                {props.genreDetails.id}
            </p>
            {props.genreDetails.image}
        </div>
    );
}
