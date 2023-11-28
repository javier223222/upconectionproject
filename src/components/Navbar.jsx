"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import { useRouter } from "next/navigation";
import axios from "axios";
import acountCircle from "@/assets/acountcircle.svg";

const Navbar = (props) => {
  const navigation = useRouter();
  const [search, setSearch] = useState({
    search: "",
    resultSearch: [],
    token: props.token,
  });
  const onInputChanged = async (e) => {
    const { value } = e.target;
    setSearch((x) => {
      return {
        ...x,
        search: value,
      };
    });
    const res = await axios.get(`http://18.116.19.145/people?name=${value}`, {
      headers: {
        Authorization: search.token,
      },
    });

    setSearch((x) => {
      return {
        ...x,
        resultSearch: res.data.result,
      };
    });
  };
  const redirectan = (username) => {
    navigation.push(`http://localhost:3000/user/${username}`);
    setSearch((x) => {
      return {
        ...x,
        resultSearch: [],
      };
    });
  };

  return (
    <div className="fathercontainer">
      <div className="hamburguer">
        <Image
          onClick={() => {
            navigation.push("http://localhost:3000/user");
          }}
          src={props.hamburguer}
          className="imagenav"
          alt="hamburguer menu"
        ></Image>
      </div>

      <div>
        <input onChange={onInputChanged} className="busqueda"></input>
        {search.resultSearch.length == 0 && search == "" ? (
          <div>
            <p>no hay resultados</p>
          </div>
        ) : (
          search.resultSearch.map((x) => {
            return (
              <div key={x.iduser} className="resultSearch">
                <Image className="profile"
                  onClick={() => redirectan(x.username)}
                  src={x.urlfile != null ? x.urlfile : acountCircle}
                  alt="profile image"
                  width={50}
                  height={50}
                ></Image>
                <h1 onClick={() => redirectan(x.username)}>{x.username}</h1>
                <p onClick={() => redirectan(x.username)}>
                  {x.name} {x.apellidop} {x.apellidom}
                </p>
              </div>
            );
          })
        )}
      </div>

      <nav className="">
        <ProfileImage
          nav={true}
          nameofuser={props.nameofuser}
          token={props.token}
          profileImage={props.profileImage != null ? props.profileImage : null}
        ></ProfileImage>
      </nav>
    </div>
  );
};

export default Navbar;
