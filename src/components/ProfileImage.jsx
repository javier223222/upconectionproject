"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import accountcircle from "../assets/acountcircle.svg";
import ModalShowImage from "./ModalShowImage";
import ModalShowAddImage from "./ModalShowAddImage";
import ShowOrUpdateImg from "./ShowOrUpdateImg";
import { getProfileClientSide, postProfile } from "@/helpers/client_side";
import { useRouter } from "next/navigation";
import { Grid, Paper } from "@mui/material";
import accountbox from "../assets/accountbox.svg";
import uploaad from "../assets/upload.svg";

const ProfileImage = (props) => {
  const [image, setimage] = useState(props.profileImage);
  const [edit, setEdit] = useState({
    showoptions: false,
    modalShowImage: false,
    openEditImage: false,
    image: null,
    imageToShow: null,
    token: props.token,
  });

  const headers = {
    Authorization: edit.token,
  };

  const openModalShowImage = () => {
    setEdit((x) => {
      return {
        ...x,
        modalShowImage: !x.modalShowImage,
      };
    });
  };
  const navigation = useRouter();
  const openAndCloseOptions = () => {
    openOptions();
    navigation.push("http://localhost:3000/user/chatt");
  };

  const openOptions = () => {
    setEdit((x) => {
      return {
        ...x,
        showoptions: !x.showoptions,
      };
    });
  };
  const cancel = () => {
    openEditImage();
    setEdit((x) => {
      return {
        ...x,
        image: null,
        imageToShow: null,
      };
    });
  };

  const saveNeImage = async () => {
    setimage(edit.imageToShow);

    const formData = new FormData();
    formData.append("imagenprofile", edit.image);
    cancel();
    formData.append("type", "Profile");

    const addNewImage = await postProfile(
      "profile/profileimage",
      formData,
      headers
    );
    const getImageProfile = await getProfileClientSide(
      "profile/profileimage?type=Profile",
      headers
    );

    setimage(getImageProfile.urlprofile);
  };
  const openEditImage = () => {
    setEdit((x) => {
      return {
        ...x,
        openEditImage: !x.openEditImage,
      };
    });
  };
  const openEditAndclose = () => {
    navigation.push("http://localhost:3000/user/friends");
    openOptions();
  };
  const showProfile = () => {
    openOptions();
    navigation.push("http://localhost:3000/user/profile");
  };
  const onInputChange = (e) => {
    const { name, files } = e.target;
    setEdit((x) => {
      return {
        ...x,
        image: files[0],
        imageToShow: URL.createObjectURL(files[0]),
      };
    });
  };
  const shwoforos = () => {
    openOptions();
    navigation.push("http://localhost:3000/user/forums");
  };
  return (
    <>
      <div className="profileimagecontainer">
        <Image
          onClick={openOptions}
          src={image == null ? accountcircle : image}
          alt="profile image"
          className="profile"
          width={"50"}
          height={"50"}
        ></Image>
        <span>{props.nameofuser}</span>
      </div>
      {edit.showoptions && props.nav ? (
        <ShowOrUpdateImg 
          shwoforos={shwoforos}
          showProfile={showProfile}
          openUpdate={openEditAndclose}
          openShow={openAndCloseOptions}
          type="Perfil"
        ></ShowOrUpdateImg>
      ) : (
        <div></div>
      )}
      {edit.showoptions && props.profile ? (
        <Paper
          sx={{
            p: 2,
            marginLeft: "20rem",
            maxWidth: "30%",
            position: "sticky",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container xs direction={"column"} spacing={2}>
            <Grid item container>
              <Image src={accountbox} onClick={openModalShowImage}></Image>
              <p onClick={openModalShowImage}>Ver foto de portada</p>
            </Grid>
            <Grid item>
              <Image src={uploaad} onClick={openEditImage}></Image>
              <p onClick={openEditImage}>Cambiar foto de portada</p>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <></>
      )}
      <ModalShowImage
        type={0}
        close={openModalShowImage}
        image={image}
        open={edit.modalShowImage}
      ></ModalShowImage>
      <ModalShowAddImage
        type={0}
        onInputChange={onInputChange}
        nameEdit="Foto de perfil"
        imageToShow={edit.imageToShow}
        nameOFEditfEdit={edit.image}
        shwoModal={edit.openEditImage}
        name="image"
        save={saveNeImage}
        cancel={cancel}
      ></ModalShowAddImage>
    </>
  );
};

export default ProfileImage;
