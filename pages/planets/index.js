import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/InstructionText"
import BackButton from "../../components/BackButton"
import PlanetCard from "../../components/PlanetsPage/PlanetsCard"
const Planets = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a Planet to find out more!
                </InstructionText>
                <PlanetCard />
                <BackButton backTo={"welcome"} />
            </Body>
        </>
    )
}

export default Planets