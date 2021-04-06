import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some awesome title!"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today..."
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
                        alt="Image"
                    />
                </div>
            </div>
        </div>
    )
}
