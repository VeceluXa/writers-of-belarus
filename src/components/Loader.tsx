import { Typography } from "@mui/material";
import MainContainer from "./MainContainer";

export default function Loader() {
    return(
        <MainContainer>
            <Typography
                variant="h3"
            >
                Loading...
            </Typography>
        </MainContainer>
    )
}