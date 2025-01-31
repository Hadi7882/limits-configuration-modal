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
} from "@mui/material";
import Switch from "@mui/material/Switch";
import React, { useState } from "react";

function App() {
  const [switchState, setSwitchState] = useState(true);
  const [switchState1, setSwitchState1] = useState(false);
  const [switchState2, setSwitchState2] = useState(false);
  const [switchState3, setSwitchState3] = useState(true);
  const [switchState4, setSwitchState4] = useState(false);
  const [switchState5, setSwitchState5] = useState(false);

  const [selectedSensor, setSelectedSensor] = useState("Vibration Sensor");

  const handleSensorTypeChange = (event) => {
    setSelectedSensor(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
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
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{
            textTransform: "uppercase",
            color: "DarkBlue",
            fontWeight: "bold",
            fontSize: "large",
          }}
        >
          Config For Site
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue="Vibration Sensor"
          name="row-radio-buttons-group"
          onChange={handleSensorTypeChange}
          // align="center"
        >
          <FormControlLabel
            value="Vibration Sensor"
            control={<Radio />}
            label="Vibration Sensor"
          />
          <FormControlLabel
            value="Wind Sensor"
            control={<Radio />}
            label="Wind Sensor"
          />
        </RadioGroup>

        {selectedSensor === "Vibration Sensor" && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                padding: "10px",
              }}
            >
              <FormControl
                sx={{
                  width: "80%",
                }}
              >
                <InputLabel>Vibration sensor</InputLabel>
                <Select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Vibration Speed"
                >
                  <MenuItem value={10}>Vibration speed</MenuItem>
                  <MenuItem value={20}>Vibration Displacement</MenuItem>
                  <MenuItem value={30}>Vibration Frequency</MenuItem>
                  <MenuItem value={30}>Vibration Amplitude</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // gap: "100px",
                padding: "5px",
              }}
            >
              <Switch
                defaultChecked
                value="checkedA"
                inputProps={{ "aria-label": "Switch A" }}
                onChange={() => setSwitchState(!switchState)}
              />
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                row
                sx={{
                  fontWeight: "bold",
                }}
              >
                Green alert level
              </FormLabel>
            </Box>
            {switchState && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min X"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max X"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min Y"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max Y"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min Z"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max Z"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>
              </>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // gap: "100px",
                padding: "5px",
              }}
            >
              <Switch
                value="checkedA"
                inputProps={{ "aria-label": "Switch A" }}
                onChange={() => setSwitchState1(!switchState1)}
              />
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Yellow alert level
              </FormLabel>
            </Box>

            {switchState1 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min X"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max X"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min Y"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max Y"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min Z"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max Z"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>
              </>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <Switch
                value="checkedA"
                inputProps={{ "aria-label": "Switch A" }}
                onChange={() => setSwitchState2(!switchState2)}
              />
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Red alert level
              </FormLabel>
            </Box>

            {switchState2 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min X"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max X"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min Y"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max Y"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "50px",
                    padding: "10px",
                  }}
                >
                  <TextField
                    label="min Z"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="max Z"
                    variant="outlined"
                    type="number "
                    sx={{ width: 100 }}
                  />
                </Box>
              </>
            )}
          </>
        )}

        {selectedSensor === "Wind Sensor" && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "50px",
              }}
            >
              <FormControl
                sx={{
                  width: "80%",
                }}
              >
                <InputLabel>Wind Speed</InputLabel>
                <Select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Vibration Speed"
                >
                  <MenuItem value={10}>Wind speed</MenuItem>
                  <MenuItem value={20}>Tempreature</MenuItem>
                  <MenuItem value={30}>Humidity</MenuItem>
                  <MenuItem value={40}>Wind Direction</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // gap: "100px"
                padding: "5px",
              }}
            >
              <Switch
                defaultChecked
                value="checkedA"
                inputProps={{ "aria-label": "Switch A" }}
                onChange={() => setSwitchState3(!switchState3)}
              />
              <FormLabel>Green Alert level</FormLabel>
            </Box>

            {switchState3 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <TextField
                    label="Green min"
                    variant="outlined"
                    type="number"
                    sx={{ width: 120 }}
                  />
                  <TextField
                    label="Green max"
                    variant="outlined"
                    type="number"
                    sx={{ width: 120, gap: "10px" }}
                  />
                </Box>{" "}
              </>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // gap: "100px"
                padding: "5px",
              }}
            >
              <Switch
                value="checkedA"
                inputProps={{ "aria-label": "Switch A" }}
                onChange={() => setSwitchState4(!switchState4)}
              />
              <FormLabel>Yellow Alert level</FormLabel>
            </Box>

            {switchState4 && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <TextField
                    label="Yellow min"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                  <TextField
                    label="Yellow max"
                    variant="outlined"
                    type="number"
                    sx={{ width: 100 }}
                  />
                </Box>
              </>
            )}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                // gap: "120px"
              }}
            >
              <Switch
                value="checkedA"
                inputProps={{ "aria-label": "Switch A" }}
                onChange={() => setSwitchState5(!switchState5)}
              />
              <FormLabel>Red Alert level</FormLabel>
            </Box>

            {switchState5 && (
              <>
                <Grid2
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <TextField
                    label=" Red min"
                    variant="outlined"
                    inputProps={{
                      inputMode: "numeric", // for mobile devices
                      pattern: "[0-9]*", // regex pattern to allow only digits
                    }}
                    padding="10px"
                    sx={{
                      width: 100,
                    }}
                  />
                  <TextField
                    label="Red max"
                    variant="outlined"
                    inputProps={{
                      inputMode: "numeric", // for mobile devices
                      pattern: "[0-9]*", // regex pattern to allow only digits
                    }}
                    sx={{ width: 100 }}
                  />
                </Grid2>
              </>
            )}
          </>
        )}
      </FormControl>

      <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Grid2>
  );
}
export default App;
