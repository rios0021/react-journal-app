import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth">
                        <AuthRouter />
                    </Route>
                    <Route exact path="/">
                        <JournalScreen />
                    </Route>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
