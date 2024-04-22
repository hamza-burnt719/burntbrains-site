import React from "react";
import Textfield from "./textField";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function Form() {
  return (
    <div className="flex flex-col mx-96 gap-5 my-20">
      <h1>CONTACT ME</h1>
      <p className="flex text-4xl">
        Let's build something together...... Get in touch with me.
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
        malesuada adipiscing congue diam. Quis orci amet porttitor
      </p>
      <div className="flex flex-col gap-10 mt-14">
        <Textfield label="Name" value="James Robert" />
        <Textfield label="E-mail" value="Jamesrobert@Finsweet.com" />
        <Textfield label="Subject" value="For web development work Enquire" />
        <TextField
          sx={{
            "& > :not(style)": {
              color: "white",
              opacity:"60%"
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
              opacity:"60%"
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "white",
              opacity:"60%"
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
              opacity:"60%"
            },
          }}
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue="Type your Message"
          variant="standard"
        />        
      </div>
      <div className="flex mt-10">
          <Button sx={{borderRadius:"30px" ,  color:"black", backgroundColor:"#DB672A" , padding:"15px" , paddingX:"30px"}} variant="contained">Submit</Button>  
        </div>
    </div>
  );
}

export default Form;
