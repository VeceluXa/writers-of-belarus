import { About } from '../components/About'
import { Authors } from '../components/Authors'
import { WriterOfTheDay } from '../components/WriterOfTheDay'
import MainContainer from '../components/MainContainer';

export function HomePage() {
    return (
        <MainContainer>
            <About />
            <WriterOfTheDay />
            <Authors />
        </MainContainer>
    )
}