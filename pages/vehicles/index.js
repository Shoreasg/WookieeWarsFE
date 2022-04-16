import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/InstructionText"
import BackButton from "../../components/BackButton"
import VehiclesCard from "../../components/VehiclesPage/VehiclesCard"
const Vehicles = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a Vehicle to find out more!
                </InstructionText>
                <VehiclesCard />
                <BackButton backTo={"welcome"} />
            </Body>
        </>
    )
}

export default Vehicles