
import {SignedIn, SignedOut, UserButton, SignInButton, SignUpButton} from "@clerk/clerk-react"
import { Navigate } from "react-router-dom";


export const Auth = () => {
    return (
        <div>
            <SignedOut>
                <SignInButton mode = "modal" />
                <SignUpButton mode = "modal" />
            </SignedOut>

            <SignedIn>
                <Navigate to = "/"/>
            </SignedIn>
        </div>
    );
}