import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Basic information",
        "Contact Information",
        "Personal Information",
        "Final Submit",
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        placeholder="Enter Your Name"
                        fullWidth
                        margin="normal"
                        name="name"
                    />
                    <TextField
                        id="mobile"
                        label="Mobile"
                        variant="outlined"
                        placeholder="Enter Your Mobile Number"
                        fullWidth
                        margin="normal"
                        name="mobile"
                    />
                    <TextField
                        id="address"
                        label="Current Address"
                        variant="outlined"
                        placeholder="Enter Your Current Location"
                        fullWidth
                        margin="normal"
                        name="address"
                    />
                </>
            );

        case 1:
            return (
                <>
                    <TextField
                        id="jobprofile"
                        label="Job Profile"
                        variant="outlined"
                        placeholder="Enter Your Job Profile"
                        fullWidth
                        margin="normal"
                        name="jobprofile"
                    />
                    <TextField
                        id="dob"
                        label="D.O.J"
                        variant="outlined"
                        placeholder="Enter Date of Joining"
                        fullWidth
                        margin="normal"
                        name="dob"
                    />
                    <TextField
                        id="organization"
                        label="Company Name"
                        variant="outlined"
                        placeholder="Enter Your Current Organization Name"
                        fullWidth
                        margin="normal"
                        name="organization"
                    />
                    <TextField
                        id="socialmedia"
                        label="Social Media Link"
                        variant="outlined"
                        placeholder="Enter Your Social Media Contact Information"
                        fullWidth
                        margin="normal"
                        name="socialmedia"
                    />
                </>
            );
        case 2:
            return (
                <>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        placeholder="Enter Your Name"
                        fullWidth
                        margin="normal"
                        name="name"
                    />
                    <TextField
                        id="father"
                        label="Father"
                        variant="outlined"
                        placeholder="Enter Your Father Name"
                        fullWidth
                        margin="normal"
                        name="father"
                    />
                    <TextField
                        id="mother"
                        label="Mother"
                        variant="outlined"
                        placeholder="Enter Your Mother Name"
                        fullWidth
                        margin="normal"
                        name="policestation"
                    />
                    <TextField
                        id="paddress"
                        label="Permanent Address"
                        variant="outlined"
                        placeholder="Enter Your Permanent Address"
                        fullWidth
                        margin="normal"
                        name="paddress"
                    />
                    <TextField
                        id="state"
                        label="State"
                        variant="outlined"
                        placeholder="Enter Your State Name"
                        fullWidth
                        margin="normal"
                        name="state"
                    />
                    <TextField
                        id="pincide"
                        label="PinCode"
                        variant="outlined"
                        placeholder="Enter Your PinCode Name"
                        fullWidth
                        margin="normal"
                        name="pincode"
                    />
                </>
            );
        case 3:
            return (
                <>
                    <TextField
                        id="submit"
                        label="Declaration"
                        variant="outlined"
                        placeholder="Enter Your Final Declaration Here"
                        fullWidth
                        margin="normal"
                        name="submit"
                    />
                </>
            );
        default:
            return "unknown step";
    }
}

const MultiPage = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >

                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Submitted Successfuly
                </Typography>
            ) : (
                <>
                    <form>{getStepContent(activeStep)}</form>
                    <Button
                        className={classes.button}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        back
                    </Button>
                    {isStepOptional(activeStep) && (
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={handleSkip}
                        >
                            skip
                        </Button>
                    )}
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>

                </>
            )}
        </div>
    );
};

export default MultiPage;
