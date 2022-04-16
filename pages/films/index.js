import FilmsCard from "../../components/FilmsPage/FilmsCard"
import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/InstructionText"
import BackButton from "../../components/BackButton"
const Films = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a Film to find out more!
                </InstructionText>
                <FilmsCard />
                <BackButton backTo={"welcome"}/>
            </Body>
        </>
    )
}

export default Films