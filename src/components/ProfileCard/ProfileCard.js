import React from 'react'
import Profile from "../../assets/images/profileBig.png";

export default function ProfileCard() {

    let userDetails = localStorage.getItem("userData");

    if (userDetails) {
        userDetails = JSON.parse(userDetails);
        // console.log(userDetails);
    }

    let genreDetails = localStorage.getItem("genre");

    if (genreDetails) {
        genreDetails = JSON.parse(genreDetails);
        console.log(genreDetails);
    }

  return (
    <div
        style={{
            width: "30vw",
            minHeight: "40vh",
            background: "#5746EA",
            borderRadius: "12px",
            padding: "6px",
            display: "flex",
            gap: "12px",
        }}
    >
        <div>
            <img
                src={Profile}
                style={{
                    height: "38vh",
                    width: "10vw",
                    position: "relative",
                    top: "2vh",
                }}
            />
        </div>

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // gap: "12px",
            }}
        >
            <p style={{ color: "white", fontSize: "2rem" }}>
                {userDetails.name}
            </p>
            <p style={{ color: "white", fontSize: "2rem" }}>
                {userDetails.email}
            </p>
            <p style={{ color: "white", fontSize: "3rem" }}>
                {userDetails.userName}
            </p>
            <Chips categories={genreDetails} color={"#9F94FF"} />
        </div>
    </div>
  );
};

const Chips = ({ color, categories }) => {
    // console.log(categories)

    return (
        <div style={{ width: "20vw" }}>
            {categories.map((category) => (
                <button
                    style={{
                        background: `${color}`,
                        borderRadius: "12px",
                        width: "100px",
                        color: "white",
                        border: "none",
                        padding: "6px",
                        height: "30px",
                        flexShrink: 0,
                        margin: "10px",
                    }}
                >
                    {category}{" "}
                    <span style={{ color: "black", marginLeft: "4px" }}>X</span>
                </button>
            ))}
        </div>
    );
};