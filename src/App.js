import "./App.css";
import {
  Grid2,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Box,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import React, { useState } from "react";

function App() {
  const [switchState, setSwitchState] = useState( true);
  const [switchState1, setSwitchState1] = useState(false);
  const [switchState2, setSwitchState2] = useState(false);
  const [switchState3, setSwitchState3] = useState(true);
  const [switchState4, setSwitchState4] = useState(false);
  const [switchState5, setSwitchState5] = useState(false);

  const [selectedSensor, setSelectedSensor] =useState("Vibration Sensor");


  const paperStyle = { padding: 20, width: 350, margin: "20px auto" };

  const handleSensorTypeChange = (event) => {
    setSelectedSensor(event.target.value);
  };
  const [selectedOption, setSelectedOption] =useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="container">
      <form>
        <Grid2 container spacing={1} padding={10}>
          <Paper elevation={10} style={paperStyle}>
            <FormControl sx={{ minWidth: 400,
             }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  textTransform: "uppercase",
                  color: "DarkBlue",
                  fontWeight: "bold",
                  fontSize: "large",
                }}
              >
                Sensor Type
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
                }}
              >
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  row
                  sx={{
                    padding: "10px 0px 10px 0px",
                    // color: "black",
                     fontWeight: "bold",
                    // fontSize: "small",
                    margin: "10px 0px 10px 0px",
                  }}
                >
                  Vibration Sensor
                </FormLabel>
                <FormControl
                  sx={{
                    minWidth: 200,
                  }}
                  size="small"
                >
                  <InputLabel>
                    Vibration Speed
                  </InputLabel>
                  <Select 
                    value={selectedOption}
                    onChange={handleOptionChange}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Vibration Speed"
                    size="small"
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
                  gap: "100px",
                }}
              >
                <FormLabel id="demo-row-radio-buttons-group-label" row
                sx={{
                  fontWeight: "bold",
                }}>
                  Green alert level
                </FormLabel>
                
                <Switch defaultChecked
                  value="checkedA"
                  inputProps={{ "aria-label": "Switch A" }}
                  onChange={() => setSwitchState(!switchState)}
                />
              </Box>
              {switchState && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio X:
                    </FormLabel>
                    <TextField 
                    label="min"
                     variant="outlined" 
                     size="small"
                     type="number"
                    sx={{width: 70,
                    }} />
                    <TextField 
                    label="max" 
                    variant="outlined" 
                    size="small"
                    type="number"
                    sx={{width: 70}} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio Y:
                    </FormLabel>
                    <TextField 
                    label="min" 
                    variant="outlined" 
                    size="small"
                    type="number"
                    sx={{width: 70,
                    }} />
                    <TextField 
                    label="max" 
                    variant="outlined" 
                    size="small"
                    type="number"
                    sx={{width: 70}} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio Z:
                    </FormLabel>
                    <TextField 
                    label="min" 
                    variant="outlined" 
                    size="small"
                    type="number"
                    sx={{width: 70,
                    }} />
                    <TextField label="max" variant="outlined" size="small"
                    sx={{width: 70}} />
                  </Box>
                </>
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "100px",
                }}
              >
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{
                    padding: "10px 0px 10px 0px",
                    margin: "10px 0px 10px 0px",
                    fontWeight: "bold",
                  }}
                >
                  Yellow alert level
                </FormLabel>
                <Switch
                  value="checkedA"
                  inputProps={{ "aria-label": "Switch A" }}
                  onChange={() => setSwitchState1(!switchState1)}
                />
              </Box>

              {switchState1 && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio X:
                    </FormLabel>
                    <TextField label="min" variant="outlined" size="small" type="number"
                    sx={{width: 70,
                    }} />
                    <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 70}} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio Y:
                    </FormLabel>
                    <TextField label="min" variant="outlined" size="small"  type="number"
                    sx={{width: 70,
                    }} />
                    <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 70}} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio Z:
                    </FormLabel>
                    <TextField label="min" variant="outlined" size="small" type="number"  
                    sx={{width: 70,
                    }} />
                    <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 70}} />
                  </Box>
                </>
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "116px",
                 
                }}
              >
                <FormLabel id="demo-row-radio-buttons-group-label"
                sx={{
                  fontWeight: "bold",
                }}>
                  Red alert level
                </FormLabel>
                <Switch
                  value="checkedA"
                  inputProps={{ "aria-label": "Switch A" }}
                  onChange={() => setSwitchState2(!switchState2)}
                />
              </Box>

              {switchState2 && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio X:
                    </FormLabel>
                    <TextField label="min" variant="outlined" size="small" type="number"
                    sx={{width: 70,
                    }} />
                    <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 70}} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio Y:
                    </FormLabel>
                    <TextField label="min" variant="outlined" size="small" type="number"
                    sx={{width: 70,
                    }} />
                    <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 70}} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{
                        padding: "10px 0px 10px 0px",
                        margin: "10px 0px 10px 0px",
                        fontWeight: "bold",
                      }}
                    >
                      Alert Ratio Z:
                    </FormLabel>
                    <TextField label="min" variant="outlined" size="small" type="number"
                    sx={{width: 70,
                    }} />
                    <TextField label="max" variant="outlined" size="small" type="number "
                    sx={{width: 70}} />
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
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  row
                  sx={{
                    padding: "10px 0px 10px 0px",
                    // color: "black",
                     fontWeight: "bold",
                    // fontSize: "small",
                    margin: "10px 0px 10px 0px",
                    
                  }}
                >
                  Wind Sensor
                </FormLabel>
                <FormControl
                  sx={{
                    minWidth: 200,
                  }}
                  size="small"
                >
                  <InputLabel>
                    Wind Speed
                  </InputLabel>
                  <Select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Vibration Speed"
                    size="small"
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
                  gap: "100px"
                }}>
                  <FormLabel>Green Alert level</FormLabel>
                  <Switch defaultChecked
                  value="checkedA"
                  inputProps={{"aria-label": "Switch A"}}
                  onChange={() => setSwitchState3(!switchState3)}
                  />
              </Box>

              {switchState3 && (
                <>
              <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "90px"
              }}>
                <FormLabel
                sx={{padding: "10px 0px 10px 0px",
                  margin: "10px 0px 10px 0px"
                }}
                >Values:</FormLabel>
                <TextField label="min" variant="outlined" size="small" type="number"
                    sx={{width: 55}}/>
                <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 55,
                      gap: "10px"
                    }}/>
              </Box> </>
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "100px"
                }}>
                  <FormLabel>Yellow Alert level</FormLabel>
                  <Switch 
                  value="checkedA"
                  inputProps={{"aria-label": "Switch A"}}
                  onChange={() => setSwitchState4(!switchState4)}
                  />
              </Box>


              {switchState4 && (
                <>
              <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "90px"
              }}>
                <FormLabel
                sx={{padding: "10px 0px 10px 0px",
                  margin: "10px 0px 10px 0px"
                }}
                >Values:</FormLabel>
                <TextField label="min" variant="outlined" size="small" type="number"
                    sx={{width: 55}}/>
                <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 55}}/>
              </Box>

              </>
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "120px"
                }}>
                  <FormLabel>Red Alert level</FormLabel>
                  <Switch 
                  value="checkedA"
                  inputProps={{"aria-label": "Switch A"}}
                  onChange={() => setSwitchState5(!switchState5)}
                  />
              </Box>


              {switchState5 && (
                <>
              <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "90px"
              }}>
                <FormLabel
                sx={{padding: "10px 0px 10px 0px",
                  margin: "10px 0px 10px 0px",
                }}
                >Values:</FormLabel>
                <TextField label="min" variant="outlined" size="small" type="number"
                    sx={{width: 55, gap: "20px"}}/>
                <TextField label="max" variant="outlined" size="small" type="number"
                    sx={{width: 55}}/>
              </Box>
              </>
                )}

              </>
              )}
              
            </FormControl>
          </Paper>
        </Grid2>
      </form>
    </div>
  );
}

export default App;
