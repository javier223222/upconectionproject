import { Grid, Paper } from "@mui/material";
import React from "react";
import accountbox from "../assets/accountbox.svg";
import uploaad from "../assets/upload.svg";
import Image from "next/image";

const ShowOrUpdateImg = (props) => {
  return (
    <div className={`boxshowimageOrUPDATE   ${props.class} `}>
      <Paper sx={{ flexGrow: 1 }} container elevation={5}>
        <Grid item xs={6} className="contenedor perfil">
          <Grid container gap={"0.5rem"} justifyContent={"start"}>
            <Image alt="" onClick={props.showProfile} src={accountbox}></Image>
            <p onClick={props.showProfile}>Ver perfil</p>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container gap={"0.5rem"} justifyContent={"start"}>
            <Image alt="" onClick={props.openShow} src={accountbox}></Image>
            <p onClick={props.openShow}>Ver mensajes</p>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container gap={"0.5rem"} justifyContent={"start"}>
            <Image alt="" onClick={props.openUpdate} src={uploaad}></Image>
            <p onClick={props.openUpdate}>Ver amigos</p>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container gap={"0.5rem"} justifyContent={"start"}>
            <Image alt="" onClick={props.shwoforos} src={uploaad}></Image>
            <p onClick={props.shwofors}>Ver foros</p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ShowOrUpdateImg;
