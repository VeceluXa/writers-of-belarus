import { Container } from '@mui/system'
import { useTheme } from '@mui/material/styles';

import { About } from '../components/About'
import { Authors } from '../components/Authors'
import { WriterOfTheDay } from '../components/WriterOfTheDay'
import MainContainer from '../components/MainContainer';

export function HomePage() {
    const theme = useTheme()
    return(
        <MainContainer>
            <About/>
            <WriterOfTheDay/>
            <Authors/>
        </MainContainer>
    )
}