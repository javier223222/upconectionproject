'use client'
import React, { useEffect, useState } from 'react'
import FriendsContainer from './FriendsContainer'
import DescriptionProfile from './DescriptionProfile'
import ContainerImages from './ContainerImages'
import { postConection } from '@/apiconections'
import Modal from './Modal'
import ModalContinue from './ModalContinue'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import ModalImage from './ModalImage'
import ModalExpOrInt from './ModalExpOrInt'


const FirstSection = props => {
    const navigation=useRouter()
    const [elemets,setElements]=useState({
        urlImageProfile:[],
        portImage:"",
        description:"",
        expert:[],
        images:[],
        interest:props.interests,
        pages:0,
        uploadImage:null,
        token:'',
        modalUpdataImage:false,
        modalShowImgaes:false,
        modalconfirm:false,
        opciones:false,
        modalUpdataImagetwo:false,
        modalShowImgaestwo:false,
        modaltwoconfirm:false,
        opcionestwo:false,
        major:null,
        semester:null,
        name:null,
        username:null,
        apelldiop:null,
        apellidoM:null,
        editsemester:props.semester,
        updatesemester:false,
        editname:false,
        editapellidoP:false,
        editApellidoM:false,
        nameshowedit:false,
        apellidopshowedit:false,
        apellidomedit:false,
        neName:props.name,
        neApellidoP:props.apelldiop,
        neApellidoM:props.apellidoM,
        editdescription:null,
        editIconDes:false,
        boxEditDescription:false,
        editIconname:false,
        editIconapellidoP:false,
        editIconapellidoM:false,
        editInpuName:false,
        editInputApellidoP:false,
        editInputApellidoM:false,
        editExpertIcons:false,
        nameOfElementEx:null,
        modalExpertAdd:false,
        nameOfInterest:null,
        optionnsOfExpert:[],
        iconEditDeleteEx:false,
        editInterestIcons:false,
        nameOfElementIn:null,
        modalInterestAdd:false,
        nameRealInterest:null,
        iconDeleteInter:false,
        hobbies:[],
        iconAdd:false,
        editAreaOpen:false,
        openDeleteButton:false,
        nameHobbie:null,
    })

   const onInputChange=(e)=>{
    const {name,value}=e.target    
    console.log(value)
    console.log(name)
    setElements(x=>{
        return{
            ...x,
            [name]:value
        }
    })
   }

    const addImage=async()=>{
        const formData = new FormData()
        formData.append('imagenprofile',elemets.uploadImage)
       
        formData.append('type','Profile')
        const res=await bodyaddImage('Profile',formData)
        console.log(res)
        closeAll()
        setElements(x=>{return{...x,uploadImage:null}})
       
       navigation.refresh("/user")
        
        
    }

    const addPortImage=async()=>{
        const formData=new FormData()
        formData.append("imagenprofile",elemets.uploadImage)
        formData.append("type",'Port')
        const res=await bodyaddImage(formData)
        console.log(res)
        closeAllTwo()
        setElements(x=>{return{...x,uploadImage:null}})
        console.log(elemets.token)
        const portProfile=await axios.get(`http://localhost:80/profile/profileimage?type=Port`,{
            headers:{
                "Authorization":elemets.token
            }
        })
        const allimages=await axios.get("http://localhost:80/profile/getimagesprofile?page=1&limit=4",{
            headers:{
                "Authorization":elemets.token
            }
        })
        console.log(portProfile.data)
        setElements(x=>{
            return{
                ...x,
                portImage:portProfile.data?.urlprofile?portProfile.data:'',
                images:allimages.data?.result?allimages.data.result:[]
            }
        })
        
        
    }

    const bodyaddImage=async(data)=>{
     
        
        const res =await axios.post("http://localhost:80/profile/profileimage",data,{
            headers:{
                "Authorization":elemets.token
            }
        })
        return res.data
    }
    
    const showImage=()=>{
        setElements(x=>{return{...x,modalShowImgaes:!x.modalShowImgaes,opciones:false
        }})
    }
    const shownUpdateImage=()=>{
        setElements(x=>{return{...x,modalUpdataImage:!x.modalUpdataImage,opciones:false}})
    }
    const modalConfig=()=>{
        setElements(x=>{return{...x,modalconfirm:!x.modalconfirm}})
    }
    const showOptions=()=>{
        setElements(x=>{return{...x,opciones:!x.opciones}})
    }
    const updateImage=(e)=>{
        
        setElements(x=>{return{...x,uploadImage:e.target.files[0]}})
    }
    const closeAll=()=>{
        setElements(x=>{return{...x,modalUpdataImage:false,modalconfirm:false,uploadImage:null}})
       
    }

    const showImagetwo=()=>{
        setElements(x=>{return{...x,modalShowImgaestwo:!x.modalShowImgaestwo,opcionestwo:false}})
    }
    const shownUpdateImagetwo=()=>{
        setElements(x=>{return{...x,modalUpdataImagetwo:!x.modalUpdataImagetwo,opcionestwo:false}})
    }
    const modalConfigtwo=()=>{
        setElements(x=>{return{...x,modaltwoconfirm:!x.modaltwoconfirm}})
    }
    const showOptionstwo=()=>{
        setElements(x=>{return{...x,opcionestwo:!x.opcionestwo}})
    }
   
    const closeAllTwo=()=>{
        setElements(x=>{return{...x,modalUpdataImagetwo:false,modaltwoconfirm:false,uploadImage:null}})
       
    }
    const addSemester=async()=>{
        console.log(elemets.semester)
        const res=await axios.patch("http://localhost:80/profile/updatesemester",{
            semester:elemets.editsemester
        },{
            headers:{
                "Authorization":elemets.token
            }
        })
        const newData=await axios.get("http://localhost:80/profile/getInformation",{
            headers:{
                "Authorization":elemets.token
            }
        })
        setany("semester",elemets.editsemester)
         
        setElements(x=>{
            return{
                ...x,
                semester:newData.data.numersemster,
                updatesemester:false
            }
        
        })
        
        
    }

    useEffect(()=>{
       
        setElements(x=>{return{...x,urlImageProfile:props.imageProfiles}})
        setElements(x=>{return{...x,portImage:props.portImage}})
        setElements(x=>{return{...x,description:props.description!=[]?props.description:[],editdescription:props.description!=[]?props.description:[]}})
        setElements(x=>{return{...x,expert:props.experts}})
        setElements(x=>{return {...x,images:props.allImage.result}})
        setElements(x=>{return {...x,pages:props.allImage.totalpages}})
        setElements(x=>{return {...x,token:props.token,major:props.major,
            semester:props.semester,username:props.username,name:props.name,
            apelldiop:props.apelldiop,apellidoM:props.apellidoM,
            optionnsOfExpert:props.optionsOfExpeOrIn!=[]?props.optionsOfExpeOrIn:[],nameOfElementEx:props.optionsOfExpeOrIn!=[]?props.optionsOfExpeOrIn[0].idineterestorexpert:null,nameOfElementIn:props.optionsOfExpeOrIn!=[]?props.optionsOfExpeOrIn[0].idineterestorexpert:null}})

            console.log(elemets.optionnsOfExpert)
            console.log(elemets.interest)
        axios.get("http://localhost:80/profile/profilegetinteresofexpert/expertofus?expertOr=0",{
            headers:{
                Authorization:props.token
            }
        }).then(res=>{
            setElements(x=>{
                return{
                    ...x,
                    interest:res.data.result
                }
            })
        })
        
        
        axios.get("http://localhost:80/profile/hobbie",{
            headers:{
                Authorization:props.token
            }
        }).then(res=>{
            setElements(x=>{
                return{
                    ...x,
                    hobbies:res.data.result
                }
            })
        
        })
    },[])
 
    const updatesemester=()=>{
        setElements(x=>{
            return{
                ...x,
                updatesemester:true
            }
        })
    }
    const notShowUpdate=()=>{
         
         closefalst("updatesemester")
         setany("editsemester",elemets.semester)
    }
    const setany=(elemets,value)=>{
        setElements(x=>{
            return{
                ...x,
                [elemets]:value
            }
        })
    }
    const closefalst=(elemets)=>{
        setElements(x=>{
            return{
                ...x,
                [elemets]:false
            }
        })
    }

    const cancelar=(e)=>{
       const {id,className}=e.target
    
       
       
        switch(className){
            case 'neName':
                setElements(x=>{
                    return{
                        ...x,
                        neName:x.name
                    }
                })
                break
            case 'neApellidoP':
                setElements(x=>{
                    return{
                        ...x,
                        neApellidoP:x.apelldiop
                    }
                })
                break  
            default:
                setElements(x=>{
                    return{
                        ...x,
                        neApellidoM:x.apellidoM
                    }
                })
                break      


        }
        setElements(x=>{
            return{
                ...x,
                [id]:false,
                
            }
        })
        
    }
    const putfalse=(e)=>{
        const {id}=e.target
        setElements(x=>{
            return{
                ...x,
                [id]:false,
                
            }
        })
    }
    const showedit=(e)=>{
     const {id}=e.target
     console.log(e.target)
      setElements(x=>{
        return {
            ...x,
            [id]:!x[id]
        }
      })
    }

    const fetNames=async(url,data)=>{
      const res=await axios.patch(`http://localhost:80/profile/${url}`,data,{
            headers:{
                "Authorization":elemets.token
            }
      })
      return res.data
    }
    const addNamesInformation=async (e)=>{
        const {id}=e.target
        
        switch(id){
            case 'name':
                const resone=await fetNames('updateusername',{name:elemets.neName})
                console.log(resone)
                setElements(x=>{
                    return{
                        ...x,
                        editname:false,
                        name:x.neName
                    }
                })
               
                break;
            case 'apelldiop':
                const restwo=await fetNames('updateapellidop',{apeliidop:elemets.neApellidoP})
                console.log(restwo)
                setElements(x=>{
                    return{
                        ...x,
                        editapellidoP:false,
                        apelldiop:x.neApellidoP
                    }
                })
              
                break
              
            default:
                const resthree=await fetNames('updateapellidom',{apeliidom:elemets.neApellidoM})
                console.log(resthree)
                setElements(x=>{
                    return{
                        ...x,
                        editApellidoM:false,
                        apellidoM:x.neApellidoM
                    }
                })
              
                break;

        }
    }
    const showeditwo=()=>{
        setElements(x=>{
            return{
                ...x,
                edit:!x.edit
            }
        })
    }

   const showiconsdescr=()=>{
         changesOfState("editIconDes")

   } 
   const chanOfStaBoxEdit=()=>{
         changesOfState("boxEditDescription")
         
   }

 const changesOfState=(name)=>{
        setElements(x=>{
            return{
                ...x,
                [name]:!x[name]
            }
        })
 }
 const addOrUpdateDescription=async()=>{
    const  headers={
        "Authorization":elemets.token
    }
    console.log(elemets.editdescription)
    chanOfStaBoxEdit()
    if(elemets.description==[]){
        const res=await axios.post("http://localhost:80/profile/profiledescription",{
            description:elemets.editdescription
        },{
           headers
        })
        console.log(res.data)
    }else{
        const res=await fetNames("profiledescription",{description:elemets.editdescription},{
            headers
        })
        console.log(res)
    }

    const getDescription=await axios.get("http://localhost:80/profile/profiledescription",{headers})
    setany("description",elemets.editdescription)
    setany("editIconDes",false)
    setany("description",getDescription.data?.description?getDescription.data.description.description:[])
    
 }
 const abortUpdate=()=>{
    chanOfStaBoxEdit()
    setany("editdescription",elemets.description)
    setany("editIconDes",false)
 }
 const showOfIconEdName=()=>{
    changesOfState("editIconname")
    console.log(elemets.editIconname)
    console.log("hola")
 }
 const showOfIconApeP=()=>{
    changesOfState("editIconapellidoP")
 }
 const showOfIconApeM=()=>{
    changesOfState("editIconapellidoM")
 }

 const showInputName=()=>{
    changesOfState("editInpuName")
    console.log(elemets.editInpuName)
    
 }
 const showInputApelP=()=>{
    changesOfState("editInputApellidoP")
 }
 const showInputApelM=()=>{
    changesOfState("editInputApellidoM")
 }


const cancelUpName=()=>{
    
    setany("editInpuName",false)
    setany("editIconname",false)
    setany("neName",elemets.name)
}
const cancelUpApeP=()=>{
        
        setany("editInputApellidoP",false)
        setany("editIconapellidoP",false)
        setany("neApellidoP",elemets.apelldiop)
}
const cancelUpApeM=()=>{
            
 setany("editInputApellidoM",false)
 setany("editIconapellidoM",false)
 setany("neApellidoM",elemets.apellidoM)
}

const updateName=async()=>{
    const res=await fetNames("updateusername",{name:elemets.neName})
    console.log(res)
    setany("editInpuName",false)
    setany("editIconname",false)
    setany("name",elemets.neName)
    const information=await axios.get("http://localhost:80/profile/getInformation",{
        headers:{
            "Authorization":elemets.token
        }
    
    })
    setany("name",information.data.name)
}

const updateApeP=async()=>{
    const res=await fetNames("updateapellidop",{apeliidop:elemets.neApellidoP})
    console.log(res)
    setany("editInputApellidoP",false)
    setany("editIconapellidoP",false)
    setany("apelldiop",elemets.neApellidoP)
    const information=await axios.get("http://localhost:80/profile/getInformation",{
        headers:{
            "Authorization":elemets.token
        }
    
    })
    setany("apelldiop",information.data.apellidop)
}
 
const updateApeM=async()=>{
    const res=await fetNames("updateapellidom",{apeliidom:elemets.neApellidoM})
    console.log(res)
    setany("editInputApellidoM",false)
    setany("editIconapellidoM",false)
    setany("apellidoM",elemets.neApellidoM)
    const information=await axios.get("http://localhost:80/profile/getInformation",{
        headers:{
            "Authorization":elemets.token
        }
    
    })
    setany("apellidoM",information.data.apellidom)
}
const showIconEExpe=()=>{
    changesOfState("editExpertIcons")

}
const showModalExperAdd=()=>{
    changesOfState("modalExpertAdd")
}

const addExpertContent=async()=>{
   

    const res=await axios.post("http://localhost:80/profile/profilegetinteresofexpert",{
        idinterest:elemets.nameOfElementEx,
        expert:1
    },{headers:{Authorization:elemets.token}})

    console.log(res.data)
    console.log(process.env.GETALLEXPERTS)
    const getNewExpert=await axios.get(`http://localhost:80/profile/profilegetinteresofexpert/expertofus?expertOr=1`,{
        headers:{
            Authorization:elemets.token
        }
    })

    console.log(getNewExpert.data)
    const finsdOptionExper=elemets.optionnsOfExpert.find(x=>x.idineterestorexpert==elemets.nameOfElementEx)
    console.log(elemets.nameOfElementEx)
    setElements(x=>{
        return{
            ...x,
            expert:x.expert.push(finsdOptionExper)
        }
    })

    setElements(x=>{
        return{
            ...x,
            expert:getNewExpert.data?.result?getNewExpert.data.result:x.expert,
            nameOfElementEx:elemets.optionnsOfExpert.length!=0?elemets.optionnsOfExpert[0].idineterestorexpert:null
        }
    })

    showModalExperAdd()
    showIconEExpe()
}


const closeAddExpert=()=>{
 showModalExperAdd()
 showIconEExpe()
 setany("nameOfElementEx",elemets.optionnsOfExpert[0].idineterestorexpert)

}

const deleteExpert=async(e)=>{
     const {name}=e.target
     const res=await axios.delete(`http://localhost:80/profile/profilegetinteresofexpert?idinterest=${name}`,{
        headers:{
            Authorization:elemets.token
        }
     })
     console.log(res.data)
     const getNewExpert=await axios.get(`http://localhost:80/profile/profilegetinteresofexpert/expertofus?expertOr=1`,{
        headers:{
            Authorization:elemets.token
        }
    })

    console.log(getNewExpert.data)
    
    const neFilterAr=elemets.expert.filter(x=>x.idselectexperorinterest!=name)
    console.log(elemets.nameOfElementEx)
    setElements(x=>{
        return{
            ...x,
            expert:neFilterAr
        }
    })

    setElements(x=>{
        return{
            ...x,
            expert:getNewExpert.data?.result?getNewExpert.data.result:x.expert,
            nameOfElementEx:elemets.optionnsOfExpert.length!=0?elemets.optionnsOfExpert[0].idineterestorexpert:null
        }
    })
  
     
}


const showIconEditDeleteEx=()=>{
    changesOfState("iconEditDeleteEx")
}


const addInterestContent=async()=>{
    const res=await axios.post("http://localhost:80/profile/profilegetinteresofexpert",{
        idinterest:elemets.nameOfElementIn,
        expert:0
    },{headers:{Authorization:elemets.token}})

    console.log(res.data)
    console.log(process.env.GETALLEXPERTS)
    const getNewExpert=await axios.get(`http://localhost:80/profile/profilegetinteresofexpert/expertofus?expertOr=0`,{
        headers:{
            Authorization:elemets.token
        }
    })

    console.log(getNewExpert.data)
    const finsdOptionExper=elemets.optionnsOfExpert.find(x=>x.idineterestorexpert==elemets.nameOfElementIn)
    
    setElements(x=>{
        return{
            ...x,
            interest:x.interest.push(finsdOptionExper)
        }
    })

    setElements(x=>{
        return{
            ...x,
            interest:getNewExpert.data?.result?getNewExpert.data.result:x.interest,
            nameOfElementIn:elemets.optionnsOfExpert.length!=0?elemets.optionnsOfExpert[0].idineterestorexpert:null
        }
    })

    showModalInterestAdd()
    showIconEInter()
}

const showModalInterestAdd=()=>{
    changesOfState("modalInterestAdd")
}
const showIconEInter=()=>{
    changesOfState("editInterestIcons")

}
const closeAddInterest=()=>{
     showModalInterestAdd()
     showIconEInter()
     setany("nameOfElementIn",elemets.optionnsOfExpert[0].idineterestorexpert)

}
const deleteElementInterest=async(e)=>{
    const {name}=e.target
     const res=await axios.delete(`http://localhost:80/profile/profilegetinteresofexpert?idinterest=${name}`,{
        headers:{
            Authorization:elemets.token
        }
     })
     console.log(res.data)
     const getNewExpert=await axios.get(`http://localhost:80/profile/profilegetinteresofexpert/expertofus?expertOr=0`,{
        headers:{
            Authorization:elemets.token
        }
    })

    console.log(getNewExpert.data)
    
    const neFilterAr=elemets.interest.filter(x=>x.idselectexperorinterest!=name)
    console.log(elemets.nameOfElementEx)
    setElements(x=>{
        return{
            ...x,
            interest:neFilterAr
        }
    })

    setElements(x=>{
        return{
            ...x,
            interest:getNewExpert.data.result,
            nameOfElementIn:elemets.optionnsOfExpert.length!=0?elemets.optionnsOfExpert[0].idineterestorexpert:null
        }
    })
}
const showIconEditDeleteIn=()=>{
    console.log("Ddd")
    changesOfState("editInterestIcons")
}
const iconDeleteInter=()=>{
    changesOfState("iconDeleteInter")
}
const deleteHobbie=async(e)=>{
    const {name}=e.target
    const res=await axios.delete(`http://localhost:80/profile/hobbie?idhobbiesof=${name}`,{
        headers:{
            Authorization:elemets.token
        }
    
    })
   console.log(res.data
    )
    setany("hobbies",elemets.hobbies.filter(x=>x.idhobbiesof!=name))
    const gethobbies=await axios.get("http://localhost:80/profile/hobbie",{
        headers:{
            Authorization:elemets.token
        }
    
       }
    )
    setany("hobbies",gethobbies.data.result)

}
const changeIconAdd=()=>{
    changesOfState("iconAdd")

}
const abortHobbie=()=>{
    changesOfState("editAreaOpen")
    setany("nameHobbie",null)
}
const addHobbie=async()=>{
    console.log(elemets.nameHobbie)
   const res=await axios.post("http://localhost:80/profile/hobbie",{
    namehobbie:elemets.nameHobbie
   },{
    headers:{
        Authorization:elemets.token
    }
   })
   console.log(elemets.token)
   const gethobbies=await axios.get("http://localhost:80/profile/hobbie",{
    headers:{
        Authorization:elemets.token
    }

   })
    
  

   setElements(x=>{
    return{
        ...x,
        hobbies:gethobbies.data.result
    }
   })
   abortHobbie()
}
const changeButtonDelete=()=>{
 changesOfState("openDeleteButton")
}
const editAres=()=>{
 changesOfState("editAreaOpen")

 console.log("hh")
}

  return (
 
 <div className='profilesection'>
        <FriendsContainer></FriendsContainer>
        <DescriptionProfile
        
        abortHobbie={abortHobbie}
        openDeleteButton={elemets.openDeleteButton}
        changeButtonDelete={changeButtonDelete}
        addHobbie={addHobbie}
        deleteExpert={deleteExpert}
        token={elemets.token}
        hobbies={elemets.hobbies}
        deleteHobbie={deleteHobbie}
        changeIconAdd={changeIconAdd}
        editAres={editAres}
        iconAdd={elemets.iconAdd}
        editAreaOpen={elemets.editAreaOpen}
  
        editIconDeletEx={elemets.iconEditDeleteEx}
         showIconEditDeleteEx={showIconEditDeleteEx}
         showModalExperInterest={showModalInterestAdd}
         showIconEditInterest={showIconEditDeleteIn}
         iconEditInterest={elemets.editInterestIcons}
         showIconEditDeleteAp={iconDeleteInter}
         deleteInte={deleteElementInterest}
         editIconDeletAp={elemets.iconDeleteInter}
        showModalExperAdd={showModalExperAdd}
        iconEditExp={elemets.editExpertIcons}
        showIconEditExp={showIconEExpe}
        updateName={updateName}
        updateApellidoP={updateApeP}
        updateApellidoM={updateApeM}
        cancelarUpNa={cancelUpName}
        canceUpdaApe={cancelUpApeP}
        closeUpdaM={cancelUpApeM}
        editnametwo={elemets.editInpuName}
        editapellidoP={elemets.editInputApellidoP}
        editApellidoM={elemets.editInputApellidoM}
        showIconName={showOfIconEdName}
        showIconApeA={showOfIconApeP}
        showIconApeM={showOfIconApeM}
        apellidopshowedittwo={elemets.editIconapellidoP}
        apellidomeditwo={elemets.editIconapellidoM}
        editApellidoMtwo={elemets.editInputApellidoM}
        editapellidoPtwo={elemets.editInputApellidoP}
        expertorinterestInterest={elemets.interest}
        
        nameshoweditdc={elemets.editIconname}
        showInputNam={showInputName}
        showInputApelliM={showInputApelM}
        showInputApeP={showInputApelP}
        
        abortUpdate={abortUpdate}
        evChangeBox={chanOfStaBoxEdit}
        addOrUpDescription={addOrUpdateDescription}
        showBoxEdit={elemets.boxEditDescription} 
        editdescription={elemets.editdescription==[]?'':elemets.editdescription}
        edit={elemets.edit}
        semesteredit={elemets.editsemester}
        showeditwo={showeditwo}
        openEdit={showiconsdescr}
        editimagede={elemets.editIconDes}
        updateNames={addNamesInformation}
        neapellidoM={elemets.neApellidoM} inputadd={onInputChange}  neapelldiop={elemets.neApellidoP} nename={elemets.neName} cancelar={cancelar} apellidomedit={elemets.apellidomedit} 
        editname={elemets.editname} apellidopshowedit={elemets.apellidopshowedit} nameshowedit={elemets.nameshowedit}
         showedit={showedit} closesemester={notShowUpdate} updateAddSemester={addSemester} 
         showupd={elemets.updatesemester} updatesemester={updatesemester} major={elemets.major} semester={elemets.semester} elemetsretwo={elemets.opcionestwo} urlimagetwo={elemets.portImage!=''?elemets.portImage:null}
         modalshowImagetwo={showImagetwo}  modalshowImage={showImage} showUpdate={shownUpdateImage} elemetsre={elemets.opciones} selectOption={showOptions} username={elemets.username} 
         name={elemets.name} apelldiop={elemets.apelldiop} apellidoM={elemets.apellidoM}
         showUpdatetwo={shownUpdateImagetwo}
         updatePort={showOptionstwo}
         expertorinterest={elemets.expert}
          profileDescription={elemets.description}
           portImage={elemets.portImage?.urlprofile?elemets.portImage.urlprofile:elemets.portImage}  urlimage={elemets.urlImageProfile}   ></DescriptionProfile>
           
        <ContainerImages  allImage={elemets.images}></ContainerImages>
        {
            elemets.modalUpdataImage?<Modal handelSubmit={addImage} closeAnotherModal={modalConfig} close={shownUpdateImage} uploadImage={updateImage} image={elemets.uploadImage}></Modal>:<></>
        }
        {
            elemets.modalconfirm ?<ModalContinue closedd={modalConfig} closeAll={closeAll}></ModalContinue>:<></>
        }
        {
            elemets.modalShowImgaes?<ModalImage closeImage={showImage} img={elemets.urlImageProfile}></ModalImage>:<></>
        }


         {
            elemets.modalUpdataImagetwo?<Modal nameupdate={"Portada"} handelSubmit={addPortImage} closeAnotherModal={modalConfigtwo} close={shownUpdateImagetwo} uploadImage={updateImage} image={elemets.uploadImage}></Modal>:<></>
        }
        {
            elemets.modaltwoconfirm?<ModalContinue closedd={modalConfigtwo} closeAll={closeAllTwo}></ModalContinue>:<></>
        }
        {
            elemets.modalShowImgaestwo?<ModalImage closeImage={showImagetwo} img={elemets.portImage}></ModalImage>:<></>
        }

        {
             elemets.modalExpertAdd?<ModalExpOrInt closeImage={closeAddExpert} NameORexpert={"nameOfElementEx"}  expertOrInter={addExpertContent}  changeSelectexpeOr={onInputChange} elemestSelect={elemets.optionnsOfExpert}
              defaultValue={elemets.optionnsOfExpert.length!=0?elemets.optionnsOfExpert[0].idineterestorexpert:''}></ModalExpOrInt>:<></>
        }
         {
             elemets.modalInterestAdd?<ModalExpOrInt closeImage={closeAddInterest} NameORexpert={"nameOfElementIn"}  expertOrInter={addInterestContent}  changeSelectexpeOr={onInputChange} elemestSelect={elemets.optionnsOfExpert}
              defaultValue={elemets.optionnsOfExpert.length!=0?elemets.optionnsOfExpert[0].idineterestorexpert:''} ></ModalExpOrInt>:<></>
        }
        
 </div>
   
  )
}


export default FirstSection