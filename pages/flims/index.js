import FlimsCard from "../../components/FlimsPage/FlimsCard"
import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/InstructionText"
import BackButton from "../../components/BackButton"
const Flims = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a Flim to find out more!
                </InstructionText>
                <FlimsCard />
                <BackButton backTo={"welcome"}/>
            </Body>
        </>
    )
}

export default Flims