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
          position: "fixed",
          left: "50%",
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
        mt={50}
        ml={12}
      >
        Loading...
      </Typography>
      
    </Box>
  );