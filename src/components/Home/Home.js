import React from 'react'
import ProfileCard from "../ProfileCard/ProfileCard"
import Notes from '../Notes/Notes'


export default function Home() {
  return (
    <div style={{display:"flex"}}>
        <ProfileCard />
        <Notes />
    </div>
  )
}
