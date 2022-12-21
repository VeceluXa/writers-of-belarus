import { About } from '../components/About'
import { Authors } from '../components/Authors'
import { WriterOfTheDay } from '../components/WriterOfTheDay'
import MainContainer from '../components/MainContainer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function HomePage() {
    const { i18n } = useTranslation()

    useEffect(() => {
        i18n.on('languageChanged', () => {
            window.location.reload()
        })
        return () => {
            i18n.off('languageChanged');
        };
    });

    return (
        <MainContainer>
            <About />
            <WriterOfTheDay />
            <Authors />
        </MainContainer>
    )
}