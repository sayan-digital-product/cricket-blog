import Paper from '@mui/material/Paper';
import React, { FormEvent, useRef } from 'react';
import emailjs from "@emailjs/browser";

import style from './contact.module.css';
import Box from '@mui/material/Box';
import { useForm, Controller } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {

  const form = useRef<HTMLFormElement>();
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor>('success');
  const { register, handleSubmit, control, formState: {errors}, reset } = useForm();

  const onSubmit = (data: any) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    const current = form.current || '';
    emailjs
      .sendForm(
        serviceId,
        templateId,
        current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setSeverity('success');
          setOpen(true);
          reset();
        },
        (error) => {
          setSeverity('error');
          setOpen(true)
          reset();
        }
      );
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    return(
        <>
            <section className={`contact-container grid grid-cols-12 gap-4 m-8`}>
                <div className="col-span-3"></div>
                <Paper elevation={0} className={`grid col-span-6 border border-solid border-pegasus-200 ${style.formContainer}`}>
                    <div className='contact-form-container'>
                        <div className=''>
                            <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '96%' },
                            }}
                            noValidate
                            autoComplete="off"
                            className={`m-4 ${style.formWrapper}`}
                            ref={form}
                            onSubmit={handleSubmit(onSubmit)}
                            >
                                    <div className='grid justify-center'>
                                        <Typography variant='h6' className='secondary-text'>
                                            *Please fill in the below details
                                        </Typography>
                                    </div>
                                    <div className='mt-12'>
                                      <Controller
                                        control={control}
                                        name="name"
                                        defaultValue=""
                                        rules={{
                                            required: {value: true, message: 'This is a mandatory field'}
                                        }}
                                        render={({ field }) => 
                                          <TextField
                                            {...field}
                                            id="user-name"
                                            placeholder="User name"
                                            label="Name"
                                            error={!!errors.name}
                                            helperText={errors.name ? 'This is a mandatory field' : ''}
                                            required
                                            />
                                        }
                                      />
                                      <Controller
                                        control={control}
                                        name="email"
                                        defaultValue=""
                                        rules={{
                                          required: {value: true, message: 'This is a mandatory field'}
                                        }}
                                        render={({ field }) => 
                                        <TextField
                                        {...field}
                                        id="user-email"
                                        label="Email"
                                        placeholder="example@test.com"
                                        error={!!errors.email}
                                        type="email"
                                        helperText={errors.email ? "This is a mandatory field" : ''}
                                        required
                                        />
                                      } />
                                      <Controller 
                                        name={'reason'}
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                          required: {value: true, message: 'This is a mandatory field'}
                                        }}
                                        render={({field}) => 
                                        <>
                                          <FormControl sx={{ m: 1, minWidth: '96%' }} size="small">
                                           <InputLabel id="demo-select-small-label" required>Reason</InputLabel>
                                            <Select
                                                {...field}
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                label="Reason"
                                                error={!!errors.reason}
                                                required
                                            >
                                                <MenuItem value="">
                                                <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'Casual connect'}>Casual connect</MenuItem>
                                                <MenuItem value={'Strategic discussion'}>Strategic discussion</MenuItem>
                                                <MenuItem value={'Specific topic'}>Specific topic</MenuItem>
                                                <MenuItem value={'Report issue'}>Report an issue</MenuItem>
                                                <MenuItem value={'Other'}>Other</MenuItem>
                                            </Select>
                                            {errors?.reason && <FormHelperText className='text-error'>Please select an option to proceed</FormHelperText>}
                                          </FormControl>
                                        </>
                                      }
                                      />
                                      <Controller 
                                        name="message"
                                        control={control}
                                        render={({field}) => 
                                        <TextField
                                        {...field}
                                        id="user-message"
                                        label="Message"
                                        type='textarea'
                                        multiline
                                        rows={5}
                                        />
                                    }/>
                                    </div>
                                    <div className="action-buttons flex justify-end mt-4 mb-8">
                                        <Button type="submit" variant="contained" size="medium" className='m-4 bg-turqDark-500 hover:bg-turqDark-300'>Submit</Button>
                                        <Button variant="contained" size="medium" className='m-4 bg-error hover:bg-pegasus-700' onClick={() => {
                                                reset(formValues => ({
                                                  ...formValues, 
                                                  name: '', 
                                                  email: '',
                                                  reason: '',
                                                  message: ''
                                                }))
                                              }}
                                        >Reset
                                        </Button>
                                    </div>
                            </Box>
                        </div>
                    </div>
                </Paper>
                <div className="col-span-3"></div>
            </section>
            <Stack spacing={2} sx={{ width: '100%' }}>
              <Snackbar open={open} anchorOrigin={{vertical:'top', horizontal:'center'}} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                  {severity && severity === 'success' ? <span>Your message has been sent successfully!</span> : <span>System error occured, please try after sometime!</span>}
                </Alert>
              </Snackbar>
            </Stack>
        </>
    )
}