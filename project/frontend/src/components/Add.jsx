import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId: "",
    img_url: ""
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = () => {
    axios
      .post("http://localhost:3001/add", inputs)
      .then((response) => {
        console.log("Data added successfully:", response.data);
        navigate("/"); // Redirect to home or any other route after successful submission
      })
      .catch((error) => {
        console.error("Error adding data:", error);
        // Optionally, you could set an error state and display an error message to the user
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add New Employee
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "600px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Employee Name"
          onChange={inputHandler}
          name="EmpName"
          value={inputs.EmpName} // Fixed value binding
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Designation"
          onChange={inputHandler}
          name="designation"
          value={inputs.designation}
          multiline
          rows={4} // Set rows for better UX
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Employee Id"
          onChange={inputHandler}
          name="empId"
          value={inputs.empId}
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Photo (paste any link from the browser)"
          onChange={inputHandler}
          name="img_url"
          value={inputs.img_url}
          fullWidth
        />
        <Button variant="contained" color="secondary" onClick={addData}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Add;