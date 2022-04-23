
import React, {useState} from "react";
import {createStyles, makeStyles, Typography,Paper,Button} from "@material-ui/core";

import CustomTextField from "./CustomTextField";
import CustomDropDown from "./CustomDropDown";

const useStyles = makeStyles(() => createStyles({
    form : {
        display : "flex",
        flexDirection : "column",
    },
    container : {
        backgroundColor : "#ffffff",
        position : "absolute",
        top : "50%",
        left : "50%",
        transform : "translate(-50%,-50%)",
        padding : 30,
        textAlign : "center"
    },
    title : {
        margin:"0px 0 20px 0"
    },
    button : {
        margin:"20px 0"
    }
}))

type Values = {
    email : string,
    coldTemperature? : number,
    hotTemperature? : number,
    smog? : number,
    rain : string,
    city : string
}

const rainValues = [
    {value : "true",label :"Yes"},
    {value : "false",label :"No"},
]

const Form = () => {

    const classes = useStyles();
    const [values,setValues] = useState<Values>({
        email : "",
        coldTemperature : undefined,
        hotTemperature : undefined,
        smog : undefined,
        rain : " ",
        city : ""
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values)
    }

    return (
        <Paper className={classes.container}>
            <Typography variant={"h4"} className={classes.title}>Form</Typography>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
                <CustomTextField changeHandler={handleChange} label={"Email"} name={"email"}/>
                <CustomTextField changeHandler={handleChange} label={"ColdTemperature"} name={"coldTemperature"}/>
                <CustomTextField changeHandler={handleChange} label={"HotTemperature"} name={"hotTemperature"}/>
                <CustomTextField changeHandler={handleChange} label={"Smog"} name={"smog"}/>
                <CustomDropDown label={"Rain"} name={"rain"} changeHandler={handleChange} values={rainValues} currentValue={values.rain}/>
                <CustomTextField changeHandler={handleChange} label={"City"} name={"city"}/>
                <Button type={"submit"} variant={"contained"} className={classes.button}>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;