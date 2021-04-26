import React from 'react'
import '../Profile/profile.css'

function Profile({handleLogout}) {
    return (
        <section className="profile">
            <nav>
                <h2>Bem Vindo</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Profile
