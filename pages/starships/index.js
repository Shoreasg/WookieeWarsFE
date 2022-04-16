import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/InstructionText"
import BackButton from "../../components/BackButton"
import StarShipsCard from "../../components/StarShipsPage/StarShipsCard"
const StarShips = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a StarShip to find out more!
                </InstructionText>
                <StarShipsCard />
                <BackButton backTo={"welcome"} />
            </Body>
        </>
    )
}

export default StarShips