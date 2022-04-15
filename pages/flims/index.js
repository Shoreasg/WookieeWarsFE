import FlimsCard from "../../components/FlimsPage/FlimsCard"
import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/Layout/InstructionText"
const Flims = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a Flim to find out more!
                </InstructionText>
                <FlimsCard/>
            </Body>
        </>
    )
}

export default Flims