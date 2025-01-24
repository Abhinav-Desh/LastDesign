import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { grey, deepOrange, lightBlue, pink, green,red, blue } from '@mui/material/colors';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
 function StepperComponent() {
  return (
    <Stepper
      orientation="vertical"
      sx={(theme) => ({
        '--Stepper-verticalGap': '1.5rem',
        '--StepIndicator-size': '2rem',
        '--Step-gap': '1rem',
        '--Step-connectorInset': '0rem',
        '--Step-connectorRadius': '1rem',
        '--Step-connectorThickness': '3px',
        '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
        [`& .${stepClasses.completed}`]: {
          '&::after': { bgcolor: 'success.solidBg' },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            border: '4px solid',
            borderColor: '#fff',
            boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: 'neutral.softDisabledColor',
        },
        [`& .${typographyClasses['title-sm']}`]: {
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontSize: '10px',
        },
      })}
    >
      <Step
        
        indicator={
          <StepIndicator variant="solid" sx={{ bgcolor: green[500],height:'30px',width:'30px' }}>
            <NotificationsIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography sx={{ fontSize: '16px',fontWeight:'700',color:'rgb(52, 71, 103)' }}>$2400, Design changes</Typography>
          <Typography sx={{ fontSize: '12px' }}>22 DEC 7:20 PM</Typography>
        </div>
      </Step>

      <Step
        
        indicator={
          <StepIndicator variant="solid" sx={{ bgcolor: red[700],height:'30px',width:'30px' }}>
            <SimCardDownloadIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography sx={{ fontSize: '16px',fontWeight:'700',color:'rgb(52, 71, 103)'}}>New order #1832412</Typography>
          <Typography sx={{ fontSize: '12px' }}>22 DEC 7:20 PM</Typography>
        </div>
      </Step>

      <Step
        
        indicator={
          <StepIndicator variant="solid" sx={{ bgcolor: blue[500],height:'30px',width:'30px'}}>
            <ShoppingCartIcon />
          </StepIndicator>
        }
      >
        <div>
          <Typography sx={{  fontSize: '16px',fontWeight:'700',color:'rgb(52, 71, 103)'}}>Server payments for April</Typography>
          <Typography sx={{ fontSize: '12px' }}>22 DEC 7:20 PM</Typography>
        </div>
      </Step>
          
      <Step
        
        indicator={
          <StepIndicator variant="solid" sx={{ bgcolor: deepOrange[500],height:'30px',width:'30px'}}>
            <CreditCardIcon/>
          </StepIndicator>
        }
      >
        <div>
          <Typography sx={{ fontSize: '16px',fontWeight:'700',color:'rgb(52, 71, 103)'}}>New card added for order #4395133</Typography>
          <Typography sx={{ fontSize: '12px' }}>22 DEC 7:20 PM</Typography>
        </div>
      </Step>
      <Step
        
        indicator={
          <StepIndicator variant="solid" sx={{ bgcolor: pink[500],height:'30px',width:'30px' }}>
            <VpnKeyIcon/>
          </StepIndicator>
        }
      >
        <div>
          <Typography sx={{  fontSize: '16px',fontWeight:'700',color:'rgb(52, 71, 103)'}}>New card added for order #4395133</Typography>
          <Typography sx={{ fontSize: '12px' }}>22 DEC 7:20 PM</Typography>
        </div>
      </Step>
    </Stepper>
  );
}

export default StepperComponent;
