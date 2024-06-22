
import {SignedIn, SignedOut, UserButton, SignInButton, SignUpButton} from "@clerk/clerk-react"


export const Auth = () => {
    return (
        <div>
            <SignedIn>
                <UserButton></UserButton>
            </SignedIn>


            <SignedOut>
                <SignInButton mode = "modal"></SignInButton>
                <SignUpButton mode = "modal"></SignUpButton>
            </SignedOut>
        </div>
    );
}