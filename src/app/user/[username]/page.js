import { cookies } from "next/headers";

import React from "react";

import "@/css/UsersShows.css";
import { Box, Grid } from "@mui/material";
import FriendsContainerUser from "@/components/FriendsContainerUser";
import InformationAndImages from "@/components/InformationAndImages";
import ImagesUsersameCon from "@/components/ImagesUsersameCon";
import { getProfile } from "@/apiconections";
import Post from "@/components/PostContaainer";
import PostContainer from "@/components/PostContaainer";
import SendMessageButton from "@/components/SendMessageButton";
import ReFriends from "@/components/ReFriends";
import ButtonSendFriendRequest from "@/components/ButtonSendFriendRequest";

const getTokenofme = () => {
  const cokiestore = cookies();
  const hasCokokie = cokiestore.has("tokenUser");
  return hasCokokie ? cokiestore.get("tokenUser").value : undefined;
};
const UserProfile = async (para) => {
  const { username } = para.params;
  const getFriends = await getProfile(
    `friends/?page=1&limit=2&usernametwo=${username}`,
    getTokenofme()
  );

  const profileImage = await getProfile(
    `profile/profileimage?type=Profile&username=${username}`,
    getTokenofme()
  );
  const portImage = await getProfile(
    `profile/profileimage?type=Port&username=${username}`,
    getTokenofme()
  );
  const inforMationOfUser = await getProfile(
    `profile/getInformation?username=${username}`,
    getTokenofme()
  );

  const description = await getProfile(
    `profile/profiledescription?username=${username}`,
    getTokenofme()
  );
  const experts = await getProfile(
    `profile/profilegetinteresofexpert/expertofus?expertOr=1&username=${username}`,
    getTokenofme()
  );
  const interesr = await getProfile(
    `profile/profilegetinteresofexpert/expertofus?expertOr=0&username=${username}`,
    getTokenofme()
  );
  const hobbies = await getProfile(
    `profile/hobbie?username=${username}`,
    getTokenofme()
  );
  const socialmedia = await getProfile(
    `profile/socialmedia?username=${username}`,
    getTokenofme()
  );
  const allImages = await getProfile(
    `profile/getimagesprofile?page=1&limit=4&username=${username}`,
    getTokenofme()
  );
  const posts = await getProfile(
    `publications/?type=Publicacion&idcategoria=1&page=1&limit=4&username=${username}`,
    getTokenofme()
  );
  const apuntes = await getProfile(
    `publications/?type=Apunte&idcategoria=2&page=1&limit=4&username=${username}`,
    getTokenofme()
  );
  const getSpecificFriend = await getProfile(
    `friends/specificFriend?idfriend=${inforMationOfUser.iduser}`,
    getTokenofme()
  );
  const getSenderFriend = await getProfile(
    `friends//getSpecificRequest?idfriend=${inforMationOfUser.iduser}`,
    getTokenofme()
  );
  console.log(getSenderFriend);
  console.log(apuntes);
  console.log(posts);
  console.log(experts);
  console.log(description);
  console.log(allImages);
  console.log(inforMationOfUser);
  console.log(portImage);
  console.log(getFriends);
  console.log(profileImage);
  console.log(interesr);
  console.log(hobbies);
  console.log(socialmedia);
  console.log(getSpecificFriend);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        xs={12}
        marginTop={"2rem"}
        gap={2}
      >
        {getFriends.result.length != 0 ? (
          <Grid className="friendContainer" item>
            <FriendsContainerUser
              token={getTokenofme()}
              username={username}
              page={parseInt(getFriends.page)}
              totalPages={parseInt(getFriends.totalpages)}
              freinds={getFriends.result}
            ></FriendsContainerUser>
          </Grid>
        ) : (
          <Grid></Grid>
        )}

        <Grid
          className="informationContainer"
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          item
        >
          <InformationAndImages
            imagenport={portImage.success ? portImage.urlprofile : ""}
            enviarMensaje={getSpecificFriend.result.length != 0 ? true : false}
            idmensaage={getSpecificFriend.idmessage.idmessage}
            imagesSuccespro={portImage.success}
            imagesSucces={profileImage.success}
            imagenprofile={profileImage.urlprofile}
            token={getTokenofme()}
            username={username}
            name={inforMationOfUser.name}
            apellidop={inforMationOfUser.apellidop}
            apellidoM={inforMationOfUser.apellidom}
            description={
              description.description != []
                ? description.description.description
                : null
            }
            namemajor={inforMationOfUser.namemajor}
            numbermajor={inforMationOfUser.numersemster}
            experts={experts.result}
            interests={interesr.result}
            hobbies={hobbies.result}
            socialmedia={socialmedia.result}
          ></InformationAndImages>
        </Grid>
        {allImages.result.length != 0 ? (
          <Grid className="imagesAllContainer" item>
            <ImagesUsersameCon
              username={username}
              token={getTokenofme()}
              images={allImages?.result ? allImages.result : []}
              pages={allImages?.page ? parseInt(allImages.page) : 0}
              totalPages={
                allImages?.totalpages ? parseInt(allImages.totalpages) : 0
              }
            ></ImagesUsersameCon>
          </Grid>
        ) : (
          <Grid></Grid>
        )}
      </Grid>

      {posts.result.length != 0 || apuntes.result.length != 0 ? (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <PostContainer
              username={username}
              token={getTokenofme()}
              allpublication={posts.result}
              allapuntes={apuntes.result}
              totalPagesPubl={posts.totalpages}
              totalPagesApu={apuntes.totalpages}
              pageApu={apuntes.page}
              pagepu={posts.page}
              imagende={profileImage.urlprofile}
            ></PostContainer>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}

      {getSpecificFriend?.result?.length != 0 ? (
        getSpecificFriend.result.length != 0 ? (
          <SendMessageButton
            enviarMensaje={getSpecificFriend.result.length != 0 ? true : false}
            idmensaage={getSpecificFriend.idmessage[0].idmessage}
          ></SendMessageButton>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}

      {getSenderFriend.result.length != 0 ? (
        <ReFriends
          token={getTokenofme()}
          idrecives={getSenderFriend.result[0].idrecives}
        ></ReFriends>
      ) : (
        <></>
      )}

      {getSpecificFriend.result.length == 0 &&
      getSenderFriend.result.length == 0 ? (
        <ButtonSendFriendRequest
          idrecives={inforMationOfUser.iduser}
          token={getTokenofme()}
        ></ButtonSendFriendRequest>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserProfile;
