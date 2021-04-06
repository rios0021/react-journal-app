import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690)'
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day!
                </p>
                <p className="journal__entry-content">
                    Deserunt cupidatat reprehenderit aliqua labore qui esse et occaecat aliquip qui pariatur cillum.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
