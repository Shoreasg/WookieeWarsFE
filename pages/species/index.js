import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/InstructionText"
import BackButton from "../../components/BackButton"
import SpeciesCard from "../../components/SpeciesPage/SpeciesCard"
const Species = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a Species to find out more!
                </InstructionText>
                <SpeciesCard />
                <BackButton backTo={"welcome"} />
            </Body>
        </>
    )
}

export default Species