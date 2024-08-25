import React from 'react'
 
import styled from 'styled-components'
import LastSixMonth from './LastSixMonth'  
import WeeklySpendingPattern from './WeeklySpendingPattern' 
import CategorywiseSpendingPattern from './CategorywiseSpendingPattern' 

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button'; 
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

  function DotsMobileStepper({onchangeCallMe}:any) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  onchangeCallMe(activeStep);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
	onchangeCallMe(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
	onchangeCallMe(activeStep);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }} 
	  nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}

function Insights() { 
	const [activeStep, setActiveStep] = React.useState(0);
    return (
        <Section>
		  <DotsMobileStepper className="stepper" onchangeCallMe={setActiveStep}/> 
             <LastSixMonth activeStep={activeStep}/>   
			  <CategorywiseSpendingPattern activeStep={activeStep} />  
			 <WeeklySpendingPattern activeStep={activeStep} />  
		 	 
        </Section>
    )
}

export default Insights 
const Section = styled.section ` 

.css-11syc77-MuiPaper-root-MuiMobileStepper-root  {
	float:right; 
}
margin-bottom:120px;
`;