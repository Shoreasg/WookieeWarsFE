import Body from "../../components/Layout/Body"
import Header from "../../components/Layout/Header"
import InstructionText from "../../components/InstructionText"
import BackButton from "../../components/BackButton"
import PeopleCard from "../../components/PeoplePage/PeopleCard"
const People = () => {
    return (
        <>
            <Header Loggedin={true} />
            <Body>
                <InstructionText>
                    Select a Person to find out more!
                </InstructionText>
                <PeopleCard />
                <BackButton backTo={"welcome"} />
            </Body>
        </>
    )
}

export default People