import "./App.css";
import {
  Grid2,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Box,
  Button,
  Switch,
  Modal,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";

function App() {
  const [selectedSensor, setSelectedSensor] = useState("Vibration Sensor");
  const [selectedOption, setSelectedOption] = useState("");
  const [activeSwitch, setActiveSwitch] = useState("green");
  const [open, setOpen] = useState(false);

  const handleSensorTypeChange = (event) => {
    setSelectedSensor(event.target.value);
    setActiveSwitch("green"); // Reset to green alert level on sensor switch
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <ToggleButton variant="contained" onClick={() => setOpen(true)}> Open Modal</ToggleButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Grid2
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <FormControl sx={{ minWidth: 400 }}>
            <FormLabel sx={{ textTransform: "uppercase", color: "DarkBlue", fontWeight: "bold", fontSize: "large" }}>
              Config For Site
            </FormLabel>
            <RadioGroup row value={selectedSensor} onChange={handleSensorTypeChange}>
              <FormControlLabel value="Vibration Sensor" control={<Radio />} label="Vibration Sensor" />
              <FormControlLabel value="Wind Sensor" control={<Radio />} label="Wind Sensor" />
            </RadioGroup>

            {/* Common Select Field */}
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", padding: "10px" }}>
              <FormControl sx={{ width: "80%" }}>
                <InputLabel>{selectedSensor} </InputLabel>
                <Select value={selectedOption} onChange={handleOptionChange}>
                  {selectedSensor === "Vibration Sensor" ? (
                    <>
                      <MenuItem value={"speed"} >Vibration Speed</MenuItem>
                      <MenuItem value={"displacement"}>Vibration Displacement</MenuItem>
                      <MenuItem value={"frequency"}>Vibration Frequency</MenuItem>
                      <MenuItem value={"amplitude"}>Vibration Amplitude</MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem value={"wind_speed"}>Wind Speed</MenuItem>
                      <MenuItem value={"temperature"}>Temperature</MenuItem>
                      <MenuItem value={"humidity"}>Humidity</MenuItem>
                      <MenuItem value={"wind_direction"}>Wind Direction</MenuItem>
                    </>
                  )}
                </Select>
              </FormControl>
            </Box>

            {/* Alert Levels */}
            {selectedSensor === "Vibration Sensor" ? (
              ["green", "yellow", "red"].map( (level) => (
                <Box key={level} sx={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                  <FormControlLabel
                    control={<Switch checked={activeSwitch === level} onChange={() => setActiveSwitch(level)} />}
                    label={`${level.charAt(0).toUpperCase() + level.slice(1)} Alert Level`}
                  />
                  {activeSwitch === level && (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px" }}>
                      {["X", "Y", "Z"].map((axis) => (
                        <Box key={axis} sx={{ display: "flex", gap: "10px" }}>
                          <TextField label={`Min ${axis}`} variant="outlined" type="number" sx={{ width: 150 }} />
                          <TextField label={`Max ${axis}`} variant="outlined" type="number" sx={{ width: 150 }} />
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              ))
            ) : (
              ["green", "yellow", "red"].map((level) => (
                <Box key={level} sx={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                  <FormControlLabel
                    control={<Switch checked={activeSwitch === level} onChange={() => setActiveSwitch(level)} />}
                    label={`${level.charAt(0).toUpperCase() + level.slice(1)} Alert Level`}
                  />
                  {activeSwitch === level && (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "10px" }}>
                      <TextField label={`${level.charAt(0).toUpperCase() + level.slice(1)} Min`} variant="outlined" type="number" sx={{ width: 150 }} />
                      <TextField label={`${level.charAt(0).toUpperCase() + level.slice(1)} Max`} variant="outlined" type="number" sx={{ width: 150 }} />
                    </Box>
                  )}
                </Box>
              ))
            )}
          </FormControl>

          <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" color="primary">Save</Button>
          </Box>
        </Grid2>
      </Modal>
    </>
  );
}

export default App;
