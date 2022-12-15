import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <Box>
      <CircularLoading />
      <Content />
    </Box>
  );
}

const CircularLoading = () => (
    <>
      <CircularProgress
        size={70}
        sx={{
          margin: 0,
          position: "fixed",
          left: "49%",
          top: "40%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: "text.secondary"
        }}
      />
    </>
  );


const Content = () => (
    <Box sx={{ p: 1 }}>
      <Typography 
        color="text.secondary"
        variant="h4"
        align="center"
        sx={{
          position: "fixed",
          left: "47.5%",
          top: "60%"
        }}
      >
        Loading...
      </Typography>
      
    </Box>
  );