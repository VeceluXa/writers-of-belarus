import { About } from "../components/About"
import { Authors } from "../components/Authors"
import MainContainer from "../components/MainContainer"

export function AboutPage() {
    return(
        <MainContainer>
            <About/>
            <Authors/>
        </MainContainer>
    )
}