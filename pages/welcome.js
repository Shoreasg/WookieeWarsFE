import Body from "../components/Layout/Body"
import CategoryCards from "../components/WelcomePage/CategoryCards"
import Header from "../components/Layout/Header"
import InstructionText from "../components/Layout/InstructionText"

const Welcome = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Welcome to WookieWars! Select a category!
                </InstructionText>
                <CategoryCards />
            </Body>
        </>
    )

}

export default Welcome