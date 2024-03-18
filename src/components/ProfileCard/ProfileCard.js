import React from 'react'

export default function ProfileCard() {

    let userDetails = localStorage.getItem("userData");

    if (userDetails) {
        userDetails = JSON.parse(userDetails);
        console.log(userDetails)
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
                // src={Profile}
                style={{
                    height: "32vh",
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
                gap: "12px",
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
            {/* <Chips categories={"genre"} color={"#9F94FF"} /> */}
        </div>
    </div>
  );
};
