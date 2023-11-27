"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import acountCircle from "@/assets/acountcircle.svg";
import ModalSwoMore from "./ModalSwoMore";
import { getProfileClientSide } from "@/helpers/client_side";

const FriendsContainerUser = (props) => {
  const [friends, setFrieds] = useState({
    allfriend: props.freinds,
    totalPages: props.totalPages,
    page: props.page,
    showMore: false,
    username: props.username,
    showmArray: props.freinds,
    totalPagesSho: props.totalPages,
    pagenuw: props.page,
    token: props.token,
  });
  const navigation = useRouter();
  const redirect = (username) => {
    navigation.push(`${username}`);
  };
  const showmore = () => {
    setFrieds((x) => {
      return {
        ...x,
        showMore: !x.showMore,
      };
    });
  };
  const headers = {
    Authorization: friends.token,
  };
  const shomoreAnpets = async (e) => {
    e.preventDefault();

    const getnewPublication = await getProfileClientSide(
      `friends/?page=${friends.page + 1}&limit=2&usernametwo=${
        friends.username
      }`,
      headers
    );
    setFrieds((x) => {
      return {
        ...x,
        showmArray: [...x.allfriend, ...getnewPublication.result],
        page: parseInt(getnewPublication.page),
      };
    });
    showmore();
  };
  const close = () => {
    showmore();
    setFrieds((x) => {
      return {
        ...x,
        showmArray: x.allfriend,
        page: x.pagenuw,
      };
    });
  };
  const getMore = () => {
    if (friends.page < friends.totalPages) {
      getProfileClientSide(
        `friends/?page=${friends.page + 1}&limit=2&usernametwo=${
          friends.username
        }`,
        headers
      ).then((getnewPublication) => {
        setFrieds((x) => {
          return {
            ...x,
            showmArray: [...x.showmArray, ...getnewPublication.result],
            page: parseInt(getnewPublication.page),
          };
        });
      });
    }
    console.log(friends.showmArray);
  };
  return (
    <Grid
   
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {friends.allfriend.length != 0 ? (
        friends.allfriend.map((x) => {
          return (
            <Grid
            className="amigoscontainer"
              spacing={0.4}
              xl={12}
              lg={12}
              md={8}
              gap={"1rem"}
              container
              direction={"row"}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                className="bordeim"
                onClick={() => redirect(x.username)}
                src={x.urlfile != null ? x.urlfile : acountCircle}
                width={"80"}
                height={"80"}
              ></Image>
              <Grid>
                <h3 onClick={() => redirect(x.username)}>{x.username}</h3>
                <p
                  onClick={() => redirect(x.username)}
                >{`${x.name} ${x.apellidop} ${x.apellidom}`}</p>
              </Grid>
            </Grid>
          );
        })
      ) : (
        <p>No tiene amigos</p>
      )}

      {friends.totalPages > 1 ? (
        <button onClick={shomoreAnpets} className="shwoMore">
          ver mas
        </button>
      ) : (
        <></>
      )}
      <ModalSwoMore
        allImages={friends.showmArray}
        getNew={getMore}
        totalPages={friends.totalPages}
        username={friends.username}
        open={friends.showMore}
        close={close}
      ></ModalSwoMore>
    </Grid>
  );
};

export default FriendsContainerUser;
